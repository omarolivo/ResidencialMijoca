/**
 * Residencial Mijoca - Alpine.js Controller & Interactive Logic
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('mijocaApp', () => ({
    // Reactive State
    lang: localStorage.getItem('mijoca_lang') || 'en',
    data: MIJOCA_DATA,
    activeRoomTab: 'all',
    reviewFilter: 'all',
    showAllReviews: false,
    guideFilter: 'all',
    isLightboxOpen: false,
    activeLightboxIndex: 0,
    isVideoModalOpen: false,
    mobileMenuOpen: false,
    isShareModalOpen: false,
    isPwaModalOpen: false,
    deferredPrompt: null,
    isAppInstalled: false,
    isIos: false,
    
    // Toast Notification
    toast: {
      show: false,
      message: ''
    },

    // Booking Inquiry Form State
    bookingForm: {
      checkIn: '',
      checkOut: '',
      guests: 2,
      notes: ''
    },

    // Live Airbnb Availability Calendar State
    calYear: new Date().getFullYear(),
    calMonth: new Date().getMonth(),
    selectingCheckOut: false,
    bookedRanges: [
      { start: '2026-11-14', end: '2026-11-16' },
      { start: '2026-11-27', end: '2026-11-29' },
      { start: '2026-12-01', end: '2026-12-03' },
      { start: '2026-12-04', end: '2026-12-06' },
      { start: '2027-01-10', end: '2027-01-12' },
      { start: '2027-01-30', end: '2027-02-06' },
      { start: '2027-08-13', end: '2027-11-17' }
    ],

    init() {
      // Detect iOS device
      this.isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

      // Check if running as installed standalone PWA
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        this.isAppInstalled = true;
      }

      // Register PWA Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js').then((reg) => {
            console.log('Mijoca Service Worker registered:', reg.scope);
          }).catch((err) => {
            console.log('Service Worker registration note:', err);
          });
        });
      }

      // Capture Android / Chromium PWA install prompt
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
      });

      window.addEventListener('appinstalled', () => {
        this.isAppInstalled = true;
        this.deferredPrompt = null;
        this.triggerToast(this.lang === 'es' ? '¡Guía guardada en tu pantalla de inicio!' : 'Guide saved to your home screen!');
      });

      // Set default available 3-night window and fetch live availability JSON
      this.setNextAvailableWindow();
      this.loadAvailability();

      // Listen for Escape key to close modals
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.isLightboxOpen = false;
          this.isVideoModalOpen = false;
          this.mobileMenuOpen = false;
          this.isShareModalOpen = false;
          this.isPwaModalOpen = false;
        } else if (this.isLightboxOpen) {
          if (e.key === 'ArrowRight') this.nextPhoto();
          if (e.key === 'ArrowLeft') this.prevPhoto();
        }
      });

      // Render Lucide icons after DOM update
      this.$nextTick(() => {
        this.renderIcons();
      });
    },

    renderIcons() {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    },

    // Language switcher
    setLanguage(newLang) {
      this.lang = newLang;
      localStorage.setItem('mijoca_lang', newLang);
      document.documentElement.lang = newLang;
      this.$nextTick(() => {
        this.renderIcons();
      });
    },

    // Helper for active i18n dictionary
    t(keyPath) {
      const keys = keyPath.split('.');
      let current = this.data.i18n[this.lang];
      for (const key of keys) {
        if (!current || current[key] === undefined) return keyPath;
        current = current[key];
      }
      return current;
    },

    // Date formatting helper
    formatDateForInput(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    },

    // Load sanitized Airbnb availability JSON
    async loadAvailability() {
      try {
        const res = await fetch(`./js/availability.json?t=${Date.now()}`);
        if (res.ok) {
          const payload = await res.json();
          if (Array.isArray(payload.bookedRanges)) {
            this.bookedRanges = payload.bookedRanges;
            if (this.hasDateConflict) {
              this.setNextAvailableWindow();
            }
          }
        }
      } catch (err) {
        console.log('Using fallback availability ranges:', err);
      }
    },

    // Check if a specific night (YYYY-MM-DD) is booked on Airbnb
    isNightBooked(dateStr) {
      return this.bookedRanges.some(r => dateStr >= r.start && dateStr < r.end);
    },

    // Check if any night in [startStr, endStr) is booked
    isRangeBooked(startStr, endStr) {
      if (!startStr || !endStr || endStr <= startStr) return false;
      return this.bookedRanges.some(r => startStr < r.end && endStr > r.start);
    },

    get hasDateConflict() {
      if (!this.bookingForm.checkIn || !this.bookingForm.checkOut) return false;
      if (this.bookingForm.checkOut <= this.bookingForm.checkIn) return true;
      return this.isRangeBooked(this.bookingForm.checkIn, this.bookingForm.checkOut);
    },

    // Find next open 3-night window starting tomorrow
    setNextAvailableWindow() {
      const base = new Date();
      base.setHours(12, 0, 0, 0);
      for (let offset = 1; offset <= 120; offset++) {
        const dIn = new Date(base);
        dIn.setDate(base.getDate() + offset);
        const dOut = new Date(dIn);
        dOut.setDate(dIn.getDate() + 3);
        const inStr = this.formatDateForInput(dIn);
        const outStr = this.formatDateForInput(dOut);
        if (!this.isRangeBooked(inStr, outStr)) {
          this.bookingForm.checkIn = inStr;
          this.bookingForm.checkOut = outStr;
          this.calYear = dIn.getFullYear();
          this.calMonth = dIn.getMonth();
          return;
        }
      }
    },

    // Calendar navigation & rendering helpers
    get calendarMonthLabel() {
      const d = new Date(this.calYear, this.calMonth, 1);
      const locale = this.lang === 'es' ? 'es-DO' : 'en-US';
      const label = d.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
      return label.charAt(0).toUpperCase() + label.slice(1);
    },

    get calendarWeekdays() {
      return this.lang === 'es'
        ? ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']
        : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    },

    get calendarDays() {
      const firstDayOfWeek = new Date(this.calYear, this.calMonth, 1).getDay();
      const daysInMonth = new Date(this.calYear, this.calMonth + 1, 0).getDate();
      const todayStr = this.formatDateForInput(new Date());
      const cells = [];

      // Leading empty slots
      for (let i = 0; i < firstDayOfWeek; i++) {
        cells.push({ empty: true, key: `empty-${i}` });
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const d = new Date(this.calYear, this.calMonth, day);
        const dateStr = this.formatDateForInput(d);
        const isPast = dateStr < todayStr;
        const isBooked = this.isNightBooked(dateStr);
        const isCheckIn = this.bookingForm.checkIn === dateStr;
        const isCheckOut = this.bookingForm.checkOut === dateStr;
        const isInRange =
          this.bookingForm.checkIn &&
          this.bookingForm.checkOut &&
          dateStr > this.bookingForm.checkIn &&
          dateStr < this.bookingForm.checkOut;

        cells.push({
          empty: false,
          key: dateStr,
          day,
          dateStr,
          isPast,
          isBooked,
          isCheckIn,
          isCheckOut,
          isInRange
        });
      }

      return cells;
    },

    prevMonth() {
      if (this.calMonth === 0) {
        this.calMonth = 11;
        this.calYear--;
      } else {
        this.calMonth--;
      }
    },

    nextMonth() {
      if (this.calMonth === 11) {
        this.calMonth = 0;
        this.calYear++;
      } else {
        this.calMonth++;
      }
    },

    selectCalendarDate(cell) {
      if (cell.empty || cell.isPast) return;

      // If starting a new selection or clicked date is on/before current check-in
      if (!this.selectingCheckOut || !this.bookingForm.checkIn || cell.dateStr <= this.bookingForm.checkIn) {
        if (cell.isBooked) return; // Can't check in on a booked night
        this.bookingForm.checkIn = cell.dateStr;
        // Default tentative check-out to 1 night later if open, or clear checkOut until second click
        const nextDay = new Date(cell.dateStr + 'T12:00:00');
        nextDay.setDate(nextDay.getDate() + 2);
        const tentativeOut = this.formatDateForInput(nextDay);
        if (!this.isRangeBooked(cell.dateStr, tentativeOut)) {
          this.bookingForm.checkOut = tentativeOut;
        } else {
          const oneNight = new Date(cell.dateStr + 'T12:00:00');
          oneNight.setDate(oneNight.getDate() + 1);
          this.bookingForm.checkOut = this.formatDateForInput(oneNight);
        }
        this.selectingCheckOut = true;
      } else {
        // Picking check-out date: check if range crosses any booked night
        if (this.isRangeBooked(this.bookingForm.checkIn, cell.dateStr)) {
          // If the clicked date itself is available as a new check-in, start over from there
          if (!cell.isBooked) {
            this.bookingForm.checkIn = cell.dateStr;
            const oneNight = new Date(cell.dateStr + 'T12:00:00');
            oneNight.setDate(oneNight.getDate() + 1);
            this.bookingForm.checkOut = this.formatDateForInput(oneNight);
            this.selectingCheckOut = true;
          }
          return;
        }
        this.bookingForm.checkOut = cell.dateStr;
        this.selectingCheckOut = false;
      }
    },

    // Filtered gallery items
    get filteredGallery() {
      if (this.activeRoomTab === 'all') {
        return this.data.gallery;
      }
      return this.data.gallery.filter(item => item.category === this.activeRoomTab);
    },

    // Filtered reviews
    get filteredReviews() {
      let list = this.data.reviews;
      if (this.reviewFilter !== 'all') {
        list = list.filter(r => r.category === this.reviewFilter);
      }
      if (!this.showAllReviews && this.reviewFilter === 'all') {
        return list.slice(0, 6);
      }
      return list;
    },

    // Filtered local guide
    get filteredGuide() {
      if (this.guideFilter === 'all') {
        return this.data.localGuide;
      }
      if (this.guideFilter === 'vip') {
        return this.data.localGuide.filter(g => g.isVip);
      }
      return this.data.localGuide.filter(g => g.category === this.guideFilter);
    },

    // Nights calculation
    get calculatedNights() {
      if (!this.bookingForm.checkIn || !this.bookingForm.checkOut) return 0;
      const d1 = new Date(this.bookingForm.checkIn);
      const d2 = new Date(this.bookingForm.checkOut);
      const diffTime = d2 - d1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    },

    // Dynamic WhatsApp URL builder
    get whatsAppInquiryUrl() {
      const phone = this.data.property.phoneRaw;
      const isEs = this.lang === 'es';
      const nights = this.calculatedNights;
      
      let message = "";
      if (isEs) {
        message = `¡Hola Omar! Me gustaría consultar disponibilidad para Residencial Mijoca en Santiago:
• Fechas: ${this.bookingForm.checkIn || 'Por definir'} al ${this.bookingForm.checkOut || 'Por definir'} (${nights} noche${nights === 1 ? '' : 's'})
• Huéspedes: ${this.bookingForm.guests}`;
        if (this.bookingForm.notes.trim()) {
          message += `\n• Nota adicional: ${this.bookingForm.notes.trim()}`;
        }
      } else {
        message = `Hi Omar! I would like to check availability at Residencial Mijoca in Santiago:
• Dates: ${this.bookingForm.checkIn || 'TBD'} to ${this.bookingForm.checkOut || 'TBD'} (${nights} night${nights === 1 ? '' : 's'})
• Guests: ${this.bookingForm.guests}`;
        if (this.bookingForm.notes.trim()) {
          message += `\n• Note: ${this.bookingForm.notes.trim()}`;
        }
      }

      return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    },

    // Dynamic Airbnb Checkout URL with pre-filled dates and guests
    get airbnbBookingUrl() {
      const baseUrl = this.data.property.airbnbUrl;
      const params = new URLSearchParams();
      
      if (this.bookingForm.checkIn) {
        params.append('check_in', this.bookingForm.checkIn);
      }
      if (this.bookingForm.checkOut) {
        params.append('check_out', this.bookingForm.checkOut);
      }
      if (this.bookingForm.guests) {
        params.append('adults', this.bookingForm.guests);
      }

      const qs = params.toString();
      return qs ? `${baseUrl}?${qs}` : baseUrl;
    },

    // Clipboard Copy Helper with Toast
    copyToClipboard(text, customMessage) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          this.triggerToast(customMessage || (this.lang === 'es' ? '¡Copiado al portapapeles!' : 'Copied to clipboard!'));
        }).catch(() => {
          this.fallbackCopy(text, customMessage);
        });
      } else {
        this.fallbackCopy(text, customMessage);
      }
    },

    fallbackCopy(text, customMessage) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        this.triggerToast(customMessage || (this.lang === 'es' ? '¡Copiado al portapapeles!' : 'Copied to clipboard!'));
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    },

    triggerToast(message) {
      this.toast.message = message;
      this.toast.show = true;
      setTimeout(() => {
        this.toast.show = false;
      }, 3200);
    },

    // Lightbox Controls
    openLightbox(index) {
      this.activeLightboxIndex = index;
      this.isLightboxOpen = true;
      document.body.style.overflow = 'hidden';
      this.$nextTick(() => this.renderIcons());
    },

    closeLightbox() {
      this.isLightboxOpen = false;
      document.body.style.overflow = '';
    },

    nextPhoto() {
      const items = this.filteredGallery;
      if (items.length === 0) return;
      this.activeLightboxIndex = (this.activeLightboxIndex + 1) % items.length;
    },

    prevPhoto() {
      const items = this.filteredGallery;
      if (items.length === 0) return;
      this.activeLightboxIndex = (this.activeLightboxIndex - 1 + items.length) % items.length;
    },

    // Video Tour Modal Controls
    openVideoModal() {
      this.isVideoModalOpen = true;
      document.body.style.overflow = 'hidden';
      this.$nextTick(() => this.renderIcons());
    },

    closeVideoModal() {
      this.isVideoModalOpen = false;
      document.body.style.overflow = '';
      const iframe = document.getElementById('modal-youtube-iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = src; // Resets / stops audio playback
      }
    },

    // Share with Travel Crew helpers
    getShareText() {
      const url = window.location.origin + window.location.pathname;
      const gmaps = this.data.property.googleMapsUrl;
      if (this.lang === 'es') {
        return `🌴 Residencial Mijoca · Apartamento Boutique en Santiago, RD\n⭐ Favorito de Huéspedes Airbnb (5.0 ★ · Top 5% Mundial)\n⚡ Energía 24/7 (Inversor y batería 5 kW - sin cortes)\n🚗 Parqueo Privado Asignado #1 y Balcón Privado\n📍 Google Maps (El Dorado II): ${gmaps}\n🌐 Web y Guía VIP: ${url}`;
      }
      return `🌴 Residencial Mijoca · Boutique 2BR/2BA Stay in Santiago, DR\n⭐ Airbnb Guest Favorite (5.0 ★ · Top 5% of Homes)\n⚡ 24/7 Power (5 kW battery backup - zero outages)\n🚗 Free Reserved Parking Spot #1 & Private Balcony\n📍 Google Maps (El Dorado II): ${gmaps}\n🌐 Website & VIP Guide: ${url}`;
    },

    get whatsAppShareUrl() {
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.getShareText())}`;
    },

    shareWithCrew() {
      const url = window.location.origin + window.location.pathname;
      if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
        navigator.share({
          title: 'Residencial Mijoca · Santiago, DR',
          text: this.getShareText(),
          url: url
        }).catch((err) => {
          if (err.name !== 'AbortError') {
            this.isShareModalOpen = true;
          }
        });
      } else {
        this.isShareModalOpen = true;
      }
      this.$nextTick(() => this.renderIcons());
    },

    closeShareModal() {
      this.isShareModalOpen = false;
    },

    copyShareInvite() {
      this.copyToClipboard(this.getShareText(), this.t('share.copiedToast'));
      this.isShareModalOpen = false;
    },

    copyShareLink() {
      const url = window.location.origin + window.location.pathname;
      this.copyToClipboard(url, this.t('share.linkCopiedToast'));
      this.isShareModalOpen = false;
    },

    // PWA Installation helpers
    installPwa() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            this.isAppInstalled = true;
          }
          this.deferredPrompt = null;
        });
      } else {
        this.isPwaModalOpen = true;
        this.$nextTick(() => this.renderIcons());
      }
    },

    closePwaModal() {
      this.isPwaModalOpen = false;
    }
  }));
});
