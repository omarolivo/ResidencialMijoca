# Residencial Mijoca — Website Architecture & Antigravity IDE Implementation Plan (Static HTML / Zero-Build Edition)

## 1. Executive Summary & Project Vision

**Residencial Mijoca** is a brand-new, boutique 2-bedroom, 2-bathroom apartment rental located in the quiet residential neighborhood of **El Dorado II, Santiago de los Caballeros, Dominican Republic** (`Calle 4 #27, Dorado II`). Set inside an exclusive low-density building with only **3 private apartments**, the property combines modern hospitality with enterprise-grade reliability curated by host **Omar** (an IT professional).

Ranked in the **Top 10% of Airbnb homes ("Guest Favorite")** with a **5.0-star rating across 10 reviews** and a **100% 5-star location score** on [Airbnb Listing #1758998339922997720](https://www.airbnb.com/rooms/1758998339922997720), the website must serve two primary goals:

1. **High-Converting Direct & Airbnb Booking Showcase:** Convert prospective business travelers, remote workers, diaspora visitors, and couples/small families by highlighting uninterrupted 24/7 power (5 kW battery backup), blazing-fast Wi-Fi, boutique 3-unit privacy, free gated parking, and verified 5-star guest reviews.
2. **Interactive Digital Guest Guidebook & VIP Concierge:** Provide checked-in guests with instant access to arrival logistics, house rules, Omar's curated local recommendations in Santiago, and exclusive **Host VIP Perks** (such as VIP service with Alfredo at [Lovera Discotec](https://maps.app.goo.gl/EyGRp3denXvACPBV8) and direct local boat rates to [Cayo Arena / Paradise Island](https://maps.app.goo.gl/zZyd4qDQr6HY1ZvB9)).
3. **Zero-Compilation Static Deployment:** Built strictly with **static HTML5, CSS3, and CDN-hosted JavaScript libraries** so the entire folder can be uploaded directly to any standard HTML web server (cPanel, Apache, Nginx, shared hosting, S3, or GitHub Pages) with **zero Node.js, npm, or build/compilation steps required**.

## 2. Target Audience Personas & Value Propositions

| Persona | Primary Needs | Key Website Messaging & Proof Points |
| :--- | :--- | :--- |
| **Remote Workers & Business Travelers** | Zero power/internet drops, quiet environment, fast host response, workspace | Curated by an IT pro; automatic **5 kW battery backup** keeps Wi-Fi, lights, outlets, fridge, and 3 Smart TVs running 24/7; repeat business traveler praise (e.g., Wilson's review). |
| **US/DR Diaspora & Visiting Families** | Safe neighborhood, dedicated parking, modern comforts, proximity to downtown | Dead-end residential street in El Dorado II; reserved **Parking Spot #2 (Middle)**; 6 exterior security cameras; easy access to downtown Santiago (e.g., Luisa E. from Boston & Katherine from NJ). |
| **Culture & Leisure Explorers** | Local dining, nightlife, eco-excursions, authentic Cibao hospitality | Interactive Santiago Local Guide with Google Maps links and exclusive **Residencial Mijoca VIP Perks** (Lovera Discotec VIP server contact and Cayo Arena private boat rate). |

## 3. Design System & Visual Identity for Antigravity IDE

### Aesthetic Direction: "Modern Cibao Boutique Luxury"

A warm, tropical-modern architectural palette that feels upscale, sunlit, trustworthy, and effortless to navigate on both mobile and desktop.

| Token Category | Token Name | Value / Specification | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Color** | `--color-obsidian` | `#111111` (Sleek Obsidian Black) | Primary headers, navbar active state, primary buttons, footer background |
| **Accent / CTA Color** | `--color-terracotta-gold` | `#C87D4B` (Warm Dominican Terracotta / Amber) | "Book Now" CTAs, VIP Perk badges, 5.0-star icons, hover highlights |
| **Primary Background** | `--color-alabaster-sand` | `#FAF7F2` (Warm Alabaster / Sunlit Linen) | Main page background |
| **Surface / Card Fill** | `--color-surface-white` | `#FFFFFF` with `1px solid #E6E0D6` | Feature cards, review cards, local guide cards |
| **Secondary Surface** | `--color-platinum-tint` | `#F4F5F7` (Refined Platinum Tint) | 24/7 Power Backup spotlight section & Host bio banner |
| **Primary Text** | `--color-charcoal` | `#1C1E1D` (Deep Espresso Charcoal) | Body copy and primary headings (WCAG AAA contrast) |
| **Secondary Text** | `--color-slate-muted` | `#5A625E` (Warm Slate) | Captions, metadata, timestamps, secondary labels |
| **Heading Typography** | `--font-display` | `Playfair Display` (600/700 via Google Fonts CDN) | Editorial boutique hospitality feel for H1/H2 titles |
| **Body & UI Typography** | `--font-sans` | `Plus Jakarta Sans` (400/500/600/700 via Google Fonts CDN) | Clean, scannable UI controls, badges, and body text |
| **Language Support** | Client-Side `i18n` Toggle | **English (`EN`)** & **Spanish (`ES`)** | Instant reactive language switcher in top navbar powered by Alpine.js / Vanilla JS state |

## 4. Site Architecture & Section-by-Section Specifications

### Section 1: Sticky Navigation Bar

* **Left:** Brand wordmark **Residencial Mijoca** with subtitle badge `El Dorado II · Santiago, RD`.
* **Center Links:** `The Apartment` · `24/7 Power & Tech` · `Guest Reviews (5.0★)` · `Santiago VIP Guide` · `House Rules & FAQ`.
* **Right Controls:**
  * `EN | ES` Language Toggle (updates all page copy dynamically without reloading).
  * `Guest Check-In Portal` button (opens modal/drawer with Wi-Fi & arrival instructions).
  * Primary CTA Button: **Book Direct / Airbnb** (scrolls to booking widget or opens [Airbnb Listing](https://www.airbnb.com/rooms/1758998339922997720)).

### Section 2: Hero Section & Trust Bar

* **Headline:** *Your Modern, Uninterrupted Boutique Retreat in Santiago de los Caballeros*
* **Subheadline:** *Brand-new 2BR/2BA apartment in a quiet 3-unit building in El Dorado II. Engineered with 24/7 battery backup power, blazing-fast Wi-Fi, private balcony, and reserved gated parking.*
* **Floating Trust Badges (Grounded in Airbnb Data):**
  * **★ 5.0 Rating (10 Verified Reviews)**
  * **Airbnb Guest Favorite** — *Top 10% of Homes*
  * **100% 5-Star Location Rating**
  * **24/7 5 kW Backup Power**
* **Hero CTAs:**
  1. **Check Availability on Airbnb** → Links directly to [`https://www.airbnb.com/rooms/1758998339922997720`](https://www.airbnb.com/rooms/1758998339922997720)
  2. **Inquire via WhatsApp (Direct Rate)** → Links to `https://wa.me/16462090270?text=Hola%20Omar,%20I%20would%20like%20to%20check%20availability%20at%20Residencial%20Mijoca`

### Section 3: The "Uninterrupted Comfort" Spotlight (Core Differentiator)

Travelers to the Dominican Republic care deeply about power reliability, internet speed, and security. Dedicate a visual 4-card bento grid to these specs:

| Bento Card | Title | Exact Copy & Technical Details |
| :--- | :--- | :--- |
| **Card 1 (Large)** | **Automatic 5 kW 24/7 Battery Backup** | If the municipal power grid drops, your apartment switches automatically with **zero interruption**. Keeps **Wi-Fi, lights, 3 Smart TVs, refrigerator, and wall outlets** running continuously. *(Transparent Note: Individual bedroom inverter A/C units operate on the main municipal grid line only).* |
| **Card 2** | **IT-Curated High-Speed Wi-Fi** | Designed by a host with an IT background specifically for remote work, video calls, and 4K streaming across **3 Smart TVs** (living room + both bedrooms). |
| **Card 3** | **Boutique 3-Unit Privacy & 3rd Floor Light** | Located on the 3rd floor of a brand-new building with **only 3 private apartments** on a quiet dead-end street. No elevator—**complimentary luggage carry assistance** is arranged upon request for check-in and check-out. |
| **Card 4** | **Reserved Parking & Smart Security** | Includes **Parking Spot #2 (Middle)** inside the gated property. Protected by **6 exterior security cameras** (front entrance, parking, backyard perimeter—strictly zero indoor cameras) plus **Smart Water Leak Sensors** by the washer and water heater. |

### Section 4: Space Breakdown & Amenities Matrix

* **Quick Specs Bar:** `Up to 4 Guests (Strictly Enforced)` · `2 Bedrooms` · `2 Beds` · `2 Full Bathrooms` · `Private Balcony` · `3rd Floor`
* **Room-by-Room Interactive Tabs:**
  * **Living & Balcony:** Open-concept modern seating, Smart TV, breezy private balcony overlooking a peaceful residential dead-end street.
  * **2 Private Bedrooms:** Two tranquil bedrooms, each equipped with its own **individual inverter A/C unit** and **Smart TV** (3 Smart TVs total in the unit).
  * **2 Full Bathrooms:** Modern fixtures, hot water heater with smart leak monitoring, fresh towels, and essentials.
  * **Full Kitchen & Coffee Bar:** Full-size refrigerator (on backup power circuit), stove/oven, microwave, cookware, and an **at-home coffee station** with a filter coffee maker and complimentary **coffee, tea, and bottled water** (praised in guest reviews).
  * **Laundry:** In-unit washing machine with smart water leak sensor protection.
* **Safety Disclosure Note:** Clearly note exterior security cameras and smart leak sensors, and note that smoke/CO alarms are listed as unavailable on the Airbnb spec sheet for full transparency.

### Section 4.5: 4K Video Walkthrough Tour (`https://youtu.be/8Lw9ZF0jpzo`)

* **Cinematic Video Player:** Full 16:9 embedded player with ambient obsidian glow and zero-lag streaming from YouTube NoCookie (`https://www.youtube-nocookie.com/embed/8Lw9ZF0jpzo`).
* **Trigger Points:** Accessible via desktop navigation (`Video Tour`), mobile drawer, hero CTA buttons (`Watch Video Tour`), and the floating hero mosaic overlay.
* **Feature Highlights:** Highlights living room & 55" TV, private breezy balcony, full kitchen & coffee bar, 24/7 backup power, 2 queen bedrooms, and spot #2 parking.

### Section 5: Verified Guest Reviews & Social Proof ("5.0 ★ Guest Favorite")

Include a category highlight bar (`All Reviews (10)` · `Hospitality` · `Business & Remote Work` · `Location & Diaspora` · `Amenities`) and an interactive filterable grid/carousel displaying all **10 verified Airbnb reviews** from [Airbnb Listing #1758998339922997720](https://www.airbnb.com/rooms/1758998339922997720):

| Guest Name | Origin / Tenure | Traveler Tag | Verbatim Review Quote |
| :--- | :--- | :--- | :--- |
| **Huascar** | 5 years on Airbnb | Overall Experience | *"I had an amazing experience! Everything was great from start to finish. The service was excellent, the staff was friendly and welcoming, and the overall atmosphere was wonderful. You can really tell they care about making their customers happy. I highly recommend this place to anyone looking for a great experience. I'll definitely be coming back!"* |
| **Wilson** | Dominican Republic | Business & Remote Work | *"I had an excellent stay in this beautiful apartment!! The host's service was excellent and immediate. It's a quiet, spacious, modern and comfortable place! I'm waiting for my next business trip to be confirmed so I can stay in this apartment again!"* |
| **Mercedes** | Santo Domingo, DR | Amenities & Hospitality | *"The place is new and incredible, with all the amenities, coffee, tea and water. Both rooms have air conditioning. 3 smart TVs. The host was very friendly and understanding about the mistake I made in booking the wrong day. The best place in Santiago!!"* |
| **Luisa E.** | Boston, Massachusetts | Diaspora / Downtown Access | *"Excellent place to stay in the city of Santiago. It's comfortable and cozy, and the hosts are very helpful people. I loved it and felt like I was at home. I've already found the perfect place to come back to, with easy access to downtown."* |
| **Omaira** | 7 years on Airbnb | Host Responsiveness | *"Excellent accommodation. Everything was very nice and in perfect condition. Our host, Omar, is very helpful and was quick to respond to our concerns."* |
| **Katherine** | West New York, NJ | Communication | *"The apartment is super nice, and the host's communication is excellent."* |
| **Nestor** | Dominican Republic | Quiet Neighborhood | *"A beautiful apartment in a very quiet area. It became one of my favorite places to stay."* |
| **Yenifer** | 2 months on Airbnb | Cleanliness & Location | *"Excellent. We really liked the apartment. It was quiet and clean, and the location was good."* |
| **Frederick** | 10 years on Airbnb | Fast Communication | *"Good stat good communication"* |
| **Carlos** | 2 years on Airbnb | Constructive Feedback | *"Everything was fine. There was an air conditioner that wasn't cooling very well, the one in the main room. Other than that, everything was fine. Thank you very much for everything!!"* |

> **UX & Conversion Tip for Antigravity IDE:** Display the top 6 glowing reviews in the primary featured grid, with a **"View All 10 Verified Airbnb Reviews"** toggle button that reveals the remaining 4 reviews (including Carlos's review paired with a **"Host Maintenance Guarantee"** badge noting that both bedroom inverter A/C units are routinely serviced before every check-in).

### Section 6: Meet Your Host (Omar)

* **Profile Card:**
  * **Host:** Omar (Born in the 80s, IT Professional, fluent in English & Spanish; profile picture: `Images/Omar.jpg`)
  * **Stats:** `5.0 ★ Rating` · `100% Response Rate` · `Responds Within 1 Hour`
  * **Bio Copy:** *"Hi, I'm Omar! I work in tech and take pride in curating clean, modern, and stress-free spaces for travelers. With an IT background, I focus on the essentials that make every visit effortless: blazing-fast Wi-Fi, comfortable workspaces, reliable power, and smooth self-check-in. Whether you are traveling for remote work, a vacation, or an extended stay, you will find a secure, well-appointed home base. I value prompt communication and look forward to welcoming you to a 5-star experience!"*

### Section 7: Interactive Santiago Local Guide & Exclusive VIP Guest Perks

Build a filterable interactive card directory with category pills (`All`, `VIP Perks 👑`, `Groceries`, `Coffee & Breakfast`, `Casual Eats`, `Fine Dining`, `Nightlife`, `Day Trips`) where every card links directly to its verified Google Maps location:

| Category | Venue Name | Description & Insider Tip | VIP Perk / Highlight Badge | Google Maps URL |
| :--- | :--- | :--- | :--- | :--- |
| **Supermarket** | **Supermercados Nacional (El Dorado)** | Santiago's top high-end grocery store for premium imports, gourmet meats, fine wines, imported cheeses, and daily fresh bakery items—right across from Pork & Beer Culture. | `Walking/5-Min Drive` | [Open in Maps](https://maps.app.goo.gl/VXybdS25Wzy4YWSM8) |
| **Coffee & Breakfast** | **Mr. Grilled (Av. 27 de Febrero)** | Hearty morning offerings, warm atmosphere, and full Dominican breakfast platters alongside coffee options. | `Local Breakfast Favorite` | [Open in Maps](https://maps.app.goo.gl/ipUVnSGWDDaMJQJu9) |
| **Coffee & Breakfast** | **El Café de la Abuela** | Stylish, bohemian coffee house tucked behind Clínica Unión Médica serving single-origin Jarabacoa roasts. | `Artisan Single-Origin` | [Open in Maps](https://maps.app.goo.gl/SC4am3xcSWkX7BtEA) |
| **Coffee & Breakfast** | **Starbucks (Ágora Santiago Center)** | First level of Santiago Center mall featuring localized artwork, outdoor seating, and 100% Dominican single-origin coffee. | `Work-Friendly Café` | [Open in Maps](https://maps.app.goo.gl/roXGAM9Q1po3wiobA) |
| **Dining & Casual Eats** | **Pork & Beer Culture** | Famous for slow-baked boneless pork belly (*Filete de Chicharrón Horneado*), custom mofongos, and house craft beer in an open-air setting. | `Craft Beer & Chicharrón` | [Open in Maps](https://maps.app.goo.gl/SWR9N9pBGsPJ5wuX9) |
| **Fine Dining** | **Saga Restaurant & Cigar Club** | Premier fine dining featuring high-end steaks, seafood, and a luxury Dominican cigar lounge. | `Steaks & Cigar Lounge` | [Open in Maps](https://maps.app.goo.gl/wE1ybFcbd4abiF9j8) |
| **Fine Dining** | **Camp David Ranch Restaurant** | Perched high on the mountain with panoramic views of the entire city of Santiago. | `Panoramic Mountain View` | [Open in Maps](https://maps.app.goo.gl/yz44LxYMyWhYUBby8) |
| **Fine Dining** | **Restaurante Campuno** | A staple for traditional Dominican dishes in a warm, welcoming setting. | `Authentic Cibao Cuisine` | [Open in Maps](https://maps.app.goo.gl/9FnyoXeE4Y1deooH6) |
| **Nightlife** | **Lovera Discotec** | Santiago's premier nightlife destination. | `👑 VIP TIP: Ask for Alfredo as your server (recommended by Omar)` | [Open in Maps](https://maps.app.goo.gl/EyGRp3denXvACPBV8) |
| **Nightlife** | **Cielo Rooftop** | High-end rooftop lounge on Calle del Sol offering panoramic downtown views, craft cocktails, upscale bites, and live DJ sets. | `Rooftop Lounge & DJs` | [Open in Maps](https://maps.app.goo.gl/V8mYGPjvtnxJ3NSTA) |
| **Nightlife** | **Casa Bader** | Legendary historic spot on El Culebro / Calle del Sol! World-famous for the coldest beers in Santiago (*cenizas*), *quipes*, *pasteles en hoja*, music, and dancing. | `Historic Local Icon` | [Open in Maps](https://maps.app.goo.gl/Mwhog29dgnDahPZv7) |
| **Day Trips** | **Río Sonador (Yásica, Puerto Plata)** | Crystal-clear river in the lush jungle near Yásica with natural pools, small waterfalls, eco-hiking, and freshwater swims. | `Eco-Tourism & Waterfalls` | [Open in Maps](https://maps.app.goo.gl/u9vkSgrQSNHbiMiV6) |
| **Day Trips** | **Cayo Arena / Paradise Island (Punta Rucia)** | Tiny white sandbank in turquoise waters famous for coral reef snorkeling and tropical fish. | `🚨 VIP PERK: Direct Local Boat Contact at Affordable Rate (Message Omar)` | [Open in Maps](https://maps.app.goo.gl/zZyd4qDQr6HY1ZvB9) |

### Section 8: Digital Guest Guidebook & House Rules Drawer ("Guest Mode")

Provide a dedicated **"Current Guest Check-In Guide"** section/modal so checked-in guests can use the website as their mobile handbook during their stay:

* **Property Address:** `Calle 4 #27, Dorado II, Santiago, Dominican Republic`
* **Check-In / Check-Out:** Check-In at **3:00 PM** · Check-Out at **11:00 AM**
* **Reserved Parking:** **Spot #2 (Middle)** inside the property
* **Wi-Fi Quick-Copy Card:**
  * **Network Name (SSID):** `ResMijocaGuest`
  * **Password:** `ResMijoca!` *(Include a one-click `navigator.clipboard.writeText('ResMijoca!')` button with a "Copied!" toast notification).*
* **Energy & Utility Etiquette:**
  * Turn off bedroom inverter A/C units when leaving the apartment for the day.
  * Place tied trash bags in the main exterior bin near the property front exit.
  * Lock balcony doors and exterior windows securely whenever leaving the unit.
* **4 Core House Rules:**
  1. **Quiet Hours (10:00 PM – 8:00 AM):** Located on a quiet residential dead-end street; please respect neighbors.
  2. **No Smoking:** Strictly prohibited inside the apartment and on the balcony.
  3. **Strict 4-Guest Maximum & No Parties:** Only registered reservation guests are permitted on the property unless pre-approved by the host.
  4. **3rd Floor Walk-Up Concierge:** Building has no elevator; message Omar via WhatsApp in advance for complimentary luggage assistance upon arrival or checkout.

### Section 9: Direct Booking / Inquiry Footer & Contact Hub

* **Dual Booking Path:**
  * **Book Instantly via Airbnb:** Embedded button/card linking to [Airbnb Listing #1758998339922997720](https://www.airbnb.com/rooms/1758998339922997720)
  * **Direct Inquiry / Extended Stay Form:** HTML date inputs (`Check-In`, `Check-Out`), Guest Count selector (`1–4 Guests`), Luggage Assistance Checkbox (`Yes, please arrange help carrying bags to the 3rd floor`), and a **Send via WhatsApp** button that dynamically builds a `https://wa.me/16462090270?text=...` URL and opens WhatsApp directly.

## 5. Zero-Build Static Tech Stack & File Structure for Antigravity IDE

To ensure you can upload the files directly to any standard HTML web server (or open `index.html` directly) with **zero compilation, zero Node.js, and zero build tools**, Antigravity IDE should use a **Static HTML5 + CDN Libraries** architecture:

### CDN Libraries (Loaded Directly in `<head>` of `index.html`)

| Library | CDN URL | Purpose (No Compilation Required) |
| :--- | :--- | :--- |
| **Tailwind CSS (Play CDN)** | `https://cdn.tailwindcss.com` | Full utility CSS styling configured inline via a `<script>tailwind.config = {...}</script>` block. |
| **Alpine.js v3 (CDN)** | `https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js` | Lightweight (`~15kb`) reactive state right in HTML (`x-data`, `x-show`, `x-for`, `@click`) for tabs, review/guide filtering, modals, and `EN/ES` translation toggling without any build step. |
| **Lucide Icons (UMD CDN)** | `https://unpkg.com/lucide@latest` | Crisp vector icons (`<i data-lucide="wifi"></i>`, `<i data-lucide="battery-charging"></i>`, etc.) rendered via `lucide.createIcons()`. |
| **Google Fonts** | `Playfair Display` & `Plus Jakarta Sans` | Loaded via standard `<link rel="stylesheet">` tags. |

### Static Directory Structure (Drop-In Upload Ready)

```text
residencial-mijoca-static/
├── index.html                # Main single-page application & Digital Guest Guidebook
├── css/
│   └── styles.css            # Custom scrollbars, smooth scroll, glassmorphism & print styles
├── js/
│   ├── data.js               # Global JS object containing EN/ES strings, 10 reviews & 13 local spots
│   └── app.js                # Alpine.js component controller, clipboard helper & WhatsApp URL builder
└── images/                   # Folder for property photos (with graceful Unsplash fallbacks until replaced)
    ├── hero-balcony.jpg
    ├── living-room.jpg
    ├── bedroom-1.jpg
    ├── bedroom-2.jpg
    ├── kitchen-coffee.jpg
    ├── bathroom.jpg
    └── parking-spot-2.jpg
```

### Standard `<head>` Boilerplate for `index.html`

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Residencial Mijoca | Boutique 2BR/2BA Apartment in Santiago, DR</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS Play CDN (No Build Step Needed) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cibao: '#111111',
            terracotta: '#C87D4B',
            alabaster: '#FAF7F2',
            sage: '#F4F5F7',
            charcoal: '#1C1E1D',
            slateMuted: '#5A625E'
          },
          fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/styles.css" />

  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- App Data & Controller (Loaded before Alpine) -->
  <script src="js/data.js"></script>
  <script src="js/app.js"></script>

  <!-- Alpine.js CDN -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js"></script>
</head>
```

## 6. Copy-Paste Master Prompt for Antigravity IDE

Copy the prompt block below and give it directly to **Antigravity IDE** along with this plan document to generate the complete static website:

> **Prompt for Antigravity IDE:**
> Build a modern, responsive, bilingual (English/Spanish) boutique rental website and interactive digital guest guidebook for **Residencial Mijoca** (`Calle 4 #27, Dorado II, Santiago de los Caballeros, Dominican Republic`) using **100% static HTML, CSS, and vanilla/CDN JavaScript with ZERO compilation or build step required**.
>
> **Technical Constraints (Strict):**
> - Do **NOT** use Node.js, npm, Vite, Next.js, TypeScript, JSX, or any bundler. The output must be plain static files (`index.html`, `css/styles.css`, `js/data.js`, `js/app.js`) that I can upload directly via FTP to any static HTML server and run immediately.
> - Use **Tailwind CSS via Play CDN** (`https://cdn.tailwindcss.com`) with an inline `tailwind.config` for the custom palette (`#111111` Sleek Obsidian Black, `#C87D4B` Terracotta Gold, `#FAF7F2` Alabaster Sand, `#F4F5F7` Platinum Tint), **Alpine.js v3 via jsDelivr CDN** for reactive UI state (`EN/ES` language toggle, tabs, category filters, and modals), **Lucide Icons via unpkg CDN**, and **Google Fonts** (`Playfair Display` + `Plus Jakarta Sans`).
>
> **Required Content & Features (from the attached Residencial Mijoca Website Plan):**
> 1. **Hero & Social Proof:** Showcase the title *"New Modern 2BR/2BA Apt · Fast Wi-Fi & Balcony"*, the **5.0 ★ rating across 10 reviews**, the **Airbnb Guest Favorite (Top 10% of Homes)** badge, **100% 5-star location rating**, and dual CTAs linking to `https://www.airbnb.com/rooms/1758998339922997720` and WhatsApp `https://wa.me/16462090270`.
> 2. **24/7 Power & Tech Spotlight:** Create a visual 4-card bento grid explaining the **automatic 5 kW battery backup system** (powers Wi-Fi, lights, 3 Smart TVs, refrigerator, and outlets seamlessly during outages, while clearly noting that the bedroom inverter A/C units run on the main grid line).
> 3. **Boutique Privacy & Concierge:** Highlight the brand-new 3-apartment building, 3rd-floor natural light, complimentary luggage assistance (no elevator), **Reserved Parking Spot #2 (Middle)**, smart water leak sensors, and 6 exterior security cameras.
> 4. **Verified Guest Reviews Filterable Grid:** Store all 10 real Airbnb reviews (Huascar, Wilson, Mercedes, Luisa E., Omaira, Katherine, Nestor, Yenifer, Frederick, and Carlos) in `js/data.js` and render them dynamically with traveler filter pills and a "Show All 10 Reviews" toggle.
> 5. **Interactive Santiago Local Guide & VIP Perks:** Store all 13 recommended Santiago venues and their exact Google Maps URLs (`https://maps.app.goo.gl/...`) in `js/data.js`. Build a category-filterable card grid highlighting the exclusive **Residencial Mijoca VIP Perks** (asking for server Alfredo at Lovera Discotec, and direct local boat booking for Cayo Arena / Paradise Island).
> 6. **Guest Check-In Portal Modal & WhatsApp Inquiry Form:** Include a dedicated "Current Guest Mode" modal with one-click clipboard copy for Wi-Fi (`ResMijocaGuest` / `ResMijoca!`), Check-In (3:00 PM) / Check-Out (11:00 AM), Parking Spot #2 instructions, the 4 house rules, and an interactive WhatsApp inquiry form in the footer that pre-fills check-in dates, guest count (max 4), and 3rd-floor luggage assistance requests to `+1 (646) 209-0270`.