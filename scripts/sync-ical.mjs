/**
 * Airbnb iCal (.ics) to Sanitized JSON Availability Converter
 * Strips all guest PII (reservation codes, phone digits, secret tokens)
 * and outputs only { start, end } booked night ranges to js/availability.json.
 */

import fs from 'node:fs';
import path from 'node:path';

const icalUrl = process.env.AIRBNB_ICAL_URL;
if (!icalUrl) {
  console.error('Error: AIRBNB_ICAL_URL environment variable is required.');
  process.exit(1);
}

function formatIsoDate(raw) {
  const clean = raw.trim();
  if (!/^\d{8}$/.test(clean)) return null;
  return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`;
}

function parseIcalBookedRanges(icsText) {
  const events = icsText.split('BEGIN:VEVENT').slice(1);
  const ranges = [];

  for (const rawEvent of events) {
    const endIdx = rawEvent.indexOf('END:VEVENT');
    const block = endIdx !== -1 ? rawEvent.slice(0, endIdx) : rawEvent;

    const startMatch = block.match(/DTSTART(?:;[^:]*)?:(\d{8})/);
    const endMatch = block.match(/DTEND(?:;[^:]*)?:(\d{8})/);

    if (startMatch && endMatch) {
      const start = formatIsoDate(startMatch[1]);
      const end = formatIsoDate(endMatch[1]);
      if (start && end && end > start) {
        ranges.push({ start, end });
      }
    }
  }

  // Sort chronologically and deduplicate
  ranges.sort((a, b) => a.start.localeCompare(b.start) || a.end.localeCompare(b.end));
  const deduped = [];
  for (const r of ranges) {
    const prev = deduped[deduped.length - 1];
    if (prev && prev.start === r.start && prev.end === r.end) continue;
    deduped.push(r);
  }
  return deduped;
}

async function main() {
  const res = await fetch(icalUrl, {
    headers: { 'User-Agent': 'ResidencialMijoca-CalendarSync/1.0' }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch iCal feed: HTTP ${res.status}`);
  }

  const icsText = await res.text();
  if (!icsText.includes('BEGIN:VCALENDAR')) {
    throw new Error('Invalid iCal response: missing BEGIN:VCALENDAR');
  }

  const bookedRanges = parseIcalBookedRanges(icsText);
  const outPath = path.resolve('js/availability.json');

  let existingRangesJson = '';
  if (fs.existsSync(outPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      existingRangesJson = JSON.stringify(existing.bookedRanges || []);
    } catch {
      existingRangesJson = '';
    }
  }

  const newRangesJson = JSON.stringify(bookedRanges);
  if (existingRangesJson === newRangesJson) {
    console.log('No changes in booked date ranges. Skipping write.');
    return;
  }

  const payload = {
    updatedAt: new Date().toISOString(),
    bookedRanges
  };

  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`Updated js/availability.json with ${bookedRanges.length} booked ranges.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
