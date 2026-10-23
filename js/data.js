/**
 * Residencial Mijoca - Master Data File
 * Bilingual content (EN/ES), Verified Airbnb Reviews, Santiago VIP Local Guide, and Photo Gallery
 */

const MIJOCA_DATA = {
  // Property Metadata
  property: {
    name: "Residencial Mijoca",
    tagline: "El Dorado II · Santiago de los Caballeros, RD",
    address: "Calle 4 #27, El Dorado II, Santiago, Dominican Republic",
    googleMapsUrl: "https://maps.app.goo.gl/VXybdS25Wzy4YWSM8", // nearby landmark / address
    airbnbUrl: "https://www.airbnb.com/rooms/1758998339922997720",
    airbnbListingId: "1758998339922997720",
    phoneDisplay: "+1 (646) 209-0270",
    phoneRaw: "16462090270",
    hostName: "Omar",
    hostPhoto: "Images/Omar.jpg",
    youtubeUrl: "https://youtu.be/8Lw9ZF0jpzo",
    youtubeEmbedUrl: "https://www.youtube.com/embed/8Lw9ZF0jpzo?autoplay=1&rel=0&modestbranding=1",
    youtubeId: "8Lw9ZF0jpzo",
    checkInTime: "3:00 PM",
    checkOutTime: "11:00 AM",
    parkingSpot: "Spot #2 (Middle)",
    floor: "3rd Floor Walk-Up (Luggage assistance available)",
    specs: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      tvs: 3,
      backupPower: "5 kW Battery Backup (24/7)"
    }
  },

  // Bilingual strings
  i18n: {
    en: {
      nav: {
        apartment: "The Apartment",
        powerTech: "24/7 Power & Tech",
        gallery: "Photo Gallery",
        videoTour: "Video Tour",
        reviews: "Guest Reviews",
        vipGuide: "Santiago VIP Guide",
        rulesFaq: "House Rules & FAQ",
        bookAirbnb: "Book on Airbnb",
        inquireDirect: "Inquire via WhatsApp"
      },
      hero: {
        badgeGuestFavorite: "Airbnb Guest Favorite · Top 10% of Homes",
        badgeRating: "5.0 ★ (10 Verified Reviews)",
        badgeLocation: "100% 5-Star Location",
        badgePower: "24/7 5 kW Battery Backup",
        title: "Your Modern, Uninterrupted Boutique Retreat in Santiago",
        subtitle: "Brand-new 2BR/2BA apartment in an exclusive 3-unit building in El Dorado II. Engineered with continuous 24/7 battery backup, blazing-fast Wi-Fi, private balcony, and reserved gated parking.",
        ctaAirbnb: "Check Availability on Airbnb",
        ctaWhatsApp: "Inquire Direct via WhatsApp",
        viewAllPhotos: "View All Photos (35+)",
        watchVideo: "Watch Video Tour",
        quickSpecs: "4 Guests Max · 2 Bedrooms · 2 Queen Beds · 2 Full Baths · Private Balcony · Spot #2 Gated Parking"
      },
      powerTech: {
        tag: "ENGINEERED FOR WORK & PEACE OF MIND",
        title: "Uninterrupted 24/7 Comfort & Power",
        subtitle: "Power outages are common in the Caribbean—but not at Residencial Mijoca. Curated by an IT professional with commercial-grade backup and high-speed connectivity.",
        card1Title: "Automatic 5 kW 24/7 Battery Backup",
        card1Desc: "When municipal power cuts out, our SunGoldPower inverter and 5.12 kWh ION Lithium Battery system kicks in instantly with zero lag. Wi-Fi, lights, all 3 Smart TVs, full-size refrigerator, and outlets stay running seamlessly.",
        card1Note: "*Transparent notice: Individual bedroom inverter A/C units operate on the main municipal grid line only.",
        card2Title: "IT-Curated Ultra-Fast Wi-Fi",
        card2Desc: "Configured by an IT specialist for seamless Zoom calls, remote work VPNs, and lag-free 4K streaming simultaneously across 3 Smart TVs.",
        card3Title: "Boutique 3-Unit Privacy & 3rd Floor Light",
        card3Desc: "Only 3 private apartments in the entire building on a quiet residential dead-end street. Filled with natural light and cool evening cross-breezes.",
        card3Luggage: "Luggage carry assistance is complimentary upon request for check-in and check-out (no elevator).",
        card4Title: "Reserved Gated Parking & Smart Security",
        card4Desc: "Includes dedicated middle parking spot (Spot #2) inside the gated lot. Protected by 6 exterior perimeter security cameras and smart water leak sensors."
      },
      space: {
        tag: "THOUGHTFULLY DESIGNED",
        title: "Modern Boutique Living Spaces",
        subtitle: "Every room is equipped with brand-new contemporary furniture, quiet inverter A/C units, and premium finishes.",
        tabs: {
          all: "All Spaces",
          living: "Living & Balcony",
          bedroom1: "Master Bedroom",
          bedroom2: "Second Bedroom",
          kitchen: "Kitchen & Coffee Bar",
          bathrooms: "Bathrooms",
          building: "Building & Parking"
        }
      },
      videoTour: {
        tag: "REAL-TIME VIRTUAL TOUR",
        title: "Experience Residencial Mijoca in Motion",
        subtitle: "Take an unedited walkthrough tour of the apartment, private balcony, two bedrooms, and quiet residential surroundings.",
        badge: "Official 4K Walkthrough Video",
        openFullscreen: "Watch Fullscreen",
        watchOnYouTube: "Watch on YouTube",
        livingPoint: "Open-Concept Living & Smart TV",
        balconyPoint: "Private Breezy Balcony",
        kitchenPoint: "Full Kitchen & Coffee Bar",
        powerPoint: "SunGoldPower 24/7 Power",
        bedroomsPoint: "2 Queen Inverter A/C Bedrooms",
        parkingPoint: "Gated Spot #2 Parking"
      },
      reviews: {
        tag: "AUTHENTIC GUEST TESTIMONIALS",
        title: "100% 5-Star Social Proof",
        subtitle: "Residencial Mijoca is recognized in the Top 10% of Airbnb homes globally based on ratings, reviews, and reliability.",
        filterAll: "All Reviews (10)",
        filterBusiness: "Business & Remote Work",
        filterHospitality: "Hospitality & Host",
        filterLocation: "Location & Diaspora",
        filterAmenities: "Comfort & Amenities",
        showMore: "Show All 10 Verified Airbnb Reviews",
        showLess: "Show Featured Reviews",
        verifiedBadge: "Verified Airbnb Stay",
        maintenanceGuarantee: "Host Maintenance Guarantee: Inverter A/C units are tested and serviced routinely prior to guest check-in."
      },
      host: {
        tag: "YOUR LOCAL HOST",
        title: "Meet Omar",
        subtitle: "Dedicated to providing a seamless 5-star experience with fast communication and authentic Cibao warmth.",
        badgeRating: "5.0 ★ Host Rating",
        badgeResponse: "100% Response Rate",
        badgeTime: "Responds in < 1 Hour",
        bio: "Hi, I'm Omar! I work in tech and take pride in curating clean, modern, and stress-free spaces for travelers. With an IT background, I focus on the essentials that make every visit effortless: blazing-fast Wi-Fi, comfortable workspaces, reliable power, and smooth self-check-in. Whether you are traveling for remote work, a family visit, or an extended stay, you will find a secure, well-appointed home base. I look forward to welcoming you to Santiago!",
        messageHost: "Message Omar on WhatsApp"
      },
      guide: {
        tag: "CURATED BY HOST OMAR",
        title: "Santiago Local VIP Guide & Insider Perks",
        subtitle: "Explore Omar's hand-picked favorite spots in Santiago, from the best chicharrón and third-wave coffee to exclusive nightlife VIP perks and day excursions.",
        filterAll: "All Spots (13)",
        filterVip: "👑 VIP Perks & Insider",
        filterGroceries: "Supermarkets",
        filterCoffee: "Coffee & Breakfast",
        filterDining: "Dining & Casual",
        filterFine: "Fine Dining",
        filterNightlife: "Nightlife",
        filterTrips: "Day Trips",
        openMaps: "Open in Google Maps",
        vipNotice: "Mention you are staying at Residencial Mijoca or message Omar for VIP reservations."
      },
      guestPortal: {
        tag: "ESSENTIAL INFORMATION",
        title: "House Rules & Arrival Information",
        subtitle: "Everything you need to know for a smooth and comfortable stay at Residencial Mijoca.",
        addressTitle: "Property Address",
        parkingTitle: "Your Reserved Parking",
        parkingDesc: "Park in middle spot labeled #2 inside the gated area.",
        checkInTitle: "Check-In & Check-Out",
        rulesTitle: "4 Essential House Rules",
        rule1: "Quiet Hours (10:00 PM – 8:00 AM): Quiet residential cul-de-sac. Please respect our neighbors.",
        rule2: "Strictly No Smoking: Inside the apartment or on the balcony.",
        rule3: "Strict 4-Guest Maximum: Only registered reservation guests permitted. No parties or events.",
        rule4: "3rd Floor Concierge: Luggage assistance available on arrival & departure upon request.",
        etiquetteTitle: "Eco & Safety Etiquette",
        etiquette1: "Please turn off bedroom A/C units when heading out to explore Santiago.",
        etiquette2: "Dispose of tied garbage bags in the main exterior bin near the front gate.",
        etiquette3: "Lock the balcony sliding door and front entrance whenever leaving the property.",
        printGuide: "Print / Save PDF Guide"
      },
      booking: {
        tag: "DIRECT BOOKING & INQUIRIES",
        title: "Reserve Your Stay at Residencial Mijoca",
        subtitle: "Book instantly through Airbnb for verified protection, or contact Omar directly on WhatsApp for direct rates and extended stays.",
        checkInLabel: "Check-In Date",
        checkOutLabel: "Check-Out Date",
        guestsLabel: "Number of Guests (Max 4)",
        notesLabel: "Special Requests or Questions (Optional)",
        notesPlaceholder: "e.g., traveling for remote work, arriving late evening...",
        nightsCount: "Nights:",
        sendWhatsApp: "Send Inquiry via WhatsApp",
        orBookAirbnb: "Book Instantly on Airbnb",
        faqTitle: "Frequently Asked Questions",
        faq1Q: "How does the 24/7 backup power work during outages?",
        faq1A: "The property has a 5 kW SunGoldPower inverter paired with a 5.12 kWh ION Lithium battery. If the municipal grid drops, the apartment switches over automatically in milliseconds. Wi-Fi, refrigerator, lights, 3 Smart TVs, and all outlets stay on. Note that bedroom A/C units run on the municipal line only.",
        faq2Q: "Is there dedicated parking?",
        faq2A: "Yes! You have a guaranteed, reserved spot (Spot #2, middle) inside the private gated parking area at no extra charge.",
        faq3Q: "How far is the apartment from Santiago attractions and the airport?",
        faq3A: "Residencial Mijoca is located in El Dorado II, just 5 minutes from Supermercados Nacional, 10–12 minutes from Monumento a los Héroes de la Restauración and downtown Santiago, and approximately 20–25 minutes from Cibao International Airport (STI).",
        faq4Q: "Can you assist with carrying luggage to the 3rd floor?",
        faq4A: "Absolutely! The building has no elevator, but host Omar and our team are delighted to provide complimentary luggage assistance upon arrival and departure. Just send us a message on WhatsApp before arriving."
      },
      footer: {
        rights: "All rights reserved. Residencial Mijoca · El Dorado II, Santiago, Dominican Republic.",
        airbnbDirect: "Official Airbnb Listing #1758998339922997720",
        curatedBy: "Managed with care by Omar"
      }
    },

    es: {
      nav: {
        apartment: "El Apartamento",
        powerTech: "Energía 24/7 y Tech",
        gallery: "Galería de Fotos",
        videoTour: "Video Tour",
        reviews: "Reseñas (5.0★)",
        vipGuide: "Guía VIP Santiago",
        rulesFaq: "Reglas y Preguntas",
        bookAirbnb: "Reservar en Airbnb",
        inquireDirect: "Consultar por WhatsApp"
      },
      hero: {
        badgeGuestFavorite: "Favorito de Huéspedes Airbnb · Top 10% Mundial",
        badgeRating: "5.0 ★ (10 Reseñas Verificadas)",
        badgeLocation: "100% Ubicación 5 Estrellas",
        badgePower: "Inversor y Batería 5 kW 24/7",
        title: "Tu Refugio Moderno e Ininterrumpido en Santiago",
        subtitle: "Apartamento nuevo de 2 hab / 2 baños en un exclusivo edificio de solo 3 unidades en El Dorado II. Equipado con respaldo de energía 24/7, Wi-Fi ultrarrápido, balcón privado y parqueo cerrado reservado.",
        ctaAirbnb: "Ver Disponibilidad en Airbnb",
        ctaWhatsApp: "Consultar Tarifa Directa por WhatsApp",
        viewAllPhotos: "Ver Todas las Fotos (35+)",
        watchVideo: "Ver Video Tour",
        quickSpecs: "Máx 4 Huéspedes · 2 Habitaciones · 2 Camas Queen · 2 Baños Completos · Balcón Privado · Parqueo #2 Techado/Cerrado"
      },
      powerTech: {
        tag: "DISEÑADO PARA TRABAJO Y TRANQUILIDAD",
        title: "Confort y Energía 24/7 Sin Interrupciones",
        subtitle: "Los cortes de luz son comunes en el Caribe, pero no en Residencial Mijoca. Curado por un profesional de TI con respaldo de nivel comercial y conectividad de alta velocidad.",
        card1Title: "Respaldo Automático 5 kW con Batería de Litio",
        card1Desc: "Si la red eléctrica municipal falla, nuestro sistema SunGoldPower y batería ION de Litio de 5.12 kWh entra de inmediato sin interrupción. El Wi-Fi, las luces, los 3 Smart TVs, la nevera y los tomacorrientes siguen funcionando sin parar.",
        card1Note: "*Nota de transparencia: Los aires acondicionados inverter de las habitaciones operan exclusivamente sobre la línea municipal.",
        card2Title: "Wi-Fi de Alta Velocidad Curado por Experto IT",
        card2Desc: "Configurado por un especialista en tecnología para videollamadas fluidas por Zoom, VPNs corporativas y streaming 4K simultáneo en los 3 televisores inteligentes.",
        card3Title: "Privacidad Exclusiva (Solo 3 Apartamentos) y Luz en 3er Piso",
        card3Desc: "Solo 3 apartamentos privados en todo el edificio ubicado en una calle residencial sin salida. Espacio luminoso con brisa fresca del Cibao.",
        card3Luggage: "Asistencia para subir equipaje disponible sin costo a la llegada y salida (edificio sin ascensor).",
        card4Title: "Parqueo Cerrado Reservado y Seguridad Inteligente",
        card4Desc: "Incluye espacio de parqueo central asignado (#2) dentro de la propiedad cerrada con portón. Protegido por 6 cámaras de seguridad perimetrales y sensores inteligentes de fuga de agua."
      },
      space: {
        tag: "CUIDADOSAMENTE EQUIPADO",
        title: "Espacios Modernos de Estilo Boutique",
        subtitle: "Cada ambiente cuenta con mobiliario contemporáneo a estrenar, aires acondicionados inverter silenciosos y acabados de primera calidad.",
        tabs: {
          all: "Todos los Espacios",
          living: "Sala y Balcón",
          bedroom1: "Habitación Principal",
          bedroom2: "Segunda Habitación",
          kitchen: "Cocina y Estación de Café",
          bathrooms: "Baños Completos",
          building: "Edificio y Parqueo"
        }
      },
      videoTour: {
        tag: "RECORRIDO VIRTUAL EN VIVO",
        title: "Conoce Residencial Mijoca en Video",
        subtitle: "Recorre en tiempo real cada ambiente del apartamento: sala luminosa, balcón privado, dos habitaciones y entorno residencial tranquilo.",
        badge: "Video Tour Oficial en 4K",
        openFullscreen: "Ver en Pantalla Completa",
        watchOnYouTube: "Ver en YouTube",
        livingPoint: "Sala Moderna y Smart TV",
        balconyPoint: "Balcón Privado con Brisa",
        kitchenPoint: "Cocina Equipada y Estación de Café",
        powerPoint: "Respaldo Eléctrico 24/7",
        bedroomsPoint: "2 Habitaciones Queen con A/C",
        parkingPoint: "Parqueo Cerrado Asignado #2"
      },
      reviews: {
        tag: "TESTIMONIOS REALES Y VERIFICADOS",
        title: "Prueba Social 100% 5 Estrellas",
        subtitle: "Residencial Mijoca se ubica en el 10% superior de alojamientos en Airbnb a nivel global por sus altas calificaciones y confiabilidad.",
        filterAll: "Todas las Reseñas (10)",
        filterBusiness: "Negocios y Trabajo Remoto",
        filterHospitality: "Hospitalidad y Anfitrión",
        filterLocation: "Ubicación y Diáspora",
        filterAmenities: "Comodidad y Servicios",
        showMore: "Ver las 10 Reseñas Verificadas de Airbnb",
        showLess: "Mostrar Reseñas Principales",
        verifiedBadge: "Estadía Verificada en Airbnb",
        maintenanceGuarantee: "Garantía de Mantenimiento: Ambos aires acondicionados inverter son revisados y puestos a punto de forma rutinaria antes de cada llegada."
      },
      host: {
        tag: "TU ANFITRIÓN LOCAL",
        title: "Conoce a Omar",
        subtitle: "Comprometido en brindarte una estadía 5 estrellas con comunicación ágil y la auténtica calidez del Cibao.",
        badgeRating: "5.0 ★ Calificación",
        badgeResponse: "100% Tasa de Respuesta",
        badgeTime: "Responde en menos de 1 hora",
        bio: "¡Hola, soy Omar! Trabajo en tecnología y me apasiona ofrecer espacios impecables, modernos y libres de estrés para viajeros. Con mi experiencia en TI, me enfoco en los detalles esenciales: Wi-Fi ultra veloz, áreas de trabajo cómodas, energía confiable 24/7 y llegada autónoma fácil. Ya sea que visites Santiago por trabajo remoto, vacaciones o estadías prolongadas, encontrarás un hogar seguro y confortable. ¡Espero darte la bienvenida a Residencial Mijoca!",
        messageHost: "Escribir a Omar por WhatsApp"
      },
      guide: {
        tag: "RECOMENDACIONES DE OMAR",
        title: "Guía Local VIP de Santiago y Beneficios Exclusivos",
        subtitle: "Descubre los lugares favoritos de Omar en Santiago: desde el mejor chicharrón y café de especialidad hasta beneficios VIP en vida nocturna y excursiones ecológicas.",
        filterAll: "Todos (13)",
        filterVip: "👑 Beneficios VIP",
        filterGroceries: "Supermercados",
        filterCoffee: "Café y Desayuno",
        filterDining: "Comida Típica y Casual",
        filterFine: "Cenas Elegantes",
        filterNightlife: "Vida Nocturna",
        filterTrips: "Paseos y Playas",
        openMaps: "Abrir en Google Maps",
        vipNotice: "Menciona que te hospedas en Residencial Mijoca o comunícate con Omar para atenciones especiales."
      },
      guestPortal: {
        tag: "INFORMACIÓN DE LLEGADA",
        title: "Reglas de la Casa e Información de Llegada",
        subtitle: "Todo lo que necesitas saber para una estadía perfecta y tranquila en Residencial Mijoca.",
        addressTitle: "Dirección de la Propiedad",
        parkingTitle: "Tu Parqueo Asignado",
        parkingDesc: "Estaciónate en el espacio central marcado con el #2 dentro del portón.",
        checkInTitle: "Horarios de Entrada y Salida",
        rulesTitle: "4 Reglas Fundamentales",
        rule1: "Horas de Silencio (10:00 PM – 8:00 AM): Es una calle residencial tranquila sin salida. Por favor respeta a los vecinos.",
        rule2: "Estrictamente Prohibido Fumar: Ni dentro del apartamento ni en el balcón.",
        rule3: "Máximo 4 Huéspedes Estricto: Solo huéspedes registrados en la reserva. Cero fiestas o eventos.",
        rule4: "Asistencia de Equipaje: Con gusto te ayudamos con las maletas al llegar y al salir (sin ascensor).",
        etiquetteTitle: "Buenas Prácticas de Energía y Cuidado",
        etiquette1: "Por favor apaga los aires acondicionados al salir a recorrer Santiago.",
        etiquette2: "Deposita la basura en bolsas cerradas en el contenedor principal exterior frente a la entrada.",
        etiquette3: "Asegúrate de cerrar la puerta corrediza del balcón y la puerta principal al salir.",
        printGuide: "Imprimir / Guardar en PDF"
      },
      booking: {
        tag: "RESERVAS E INFORMACIÓN",
        title: "Reserva Tu Estadía en Residencial Mijoca",
        subtitle: "Reserva al instante por Airbnb con protección garantizada, o comunícate directamente con Omar por WhatsApp para tarifas directas y estadías largas.",
        checkInLabel: "Fecha de Llegada",
        checkOutLabel: "Fecha de Salida",
        guestsLabel: "Huéspedes (Máx 4)",
        notesLabel: "Peticiones Especiales o Dudas (Opcional)",
        notesPlaceholder: "Ej: viajo por trabajo remoto, llegaré de noche...",
        nightsCount: "Noches:",
        sendWhatsApp: "Enviar Consulta por WhatsApp",
        orBookAirbnb: "Reservar al Instante en Airbnb",
        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Cómo funciona el respaldo de energía 24/7 si se va la luz?",
        faq1A: "El apartamento cuenta con un inversor SunGoldPower de 5 kW y una batería de Litio ION de 5.12 kWh. Si la red municipal falla, el sistema conmuta automáticamente en milisegundos. El Wi-Fi, la nevera, las luces, los 3 Smart TVs y todos los tomacorrientes permanecen encendidos. Los aires acondicionados operan solo con la red eléctrica municipal.",
        faq2Q: "¿Tienen parqueo privado y seguro?",
        faq2A: "¡Sí! Tienes un espacio garantizado y reservado (Espacio #2, en el centro) dentro del estacionamiento privado con portón cerrado sin costo adicional.",
        faq3Q: "¿A qué distancia está el apartamento de atracciones y del aeropuerto?",
        faq3A: "Residencial Mijoca está en El Dorado II: a 5 minutos del Supermercado Nacional, a 10–12 minutos del Monumento de Santiago y centro histórico, y a 20–25 minutos del Aeropuerto Internacional del Cibao (STI).",
        faq4Q: "¿Pueden ayudarme con las maletas hacia el tercer piso?",
        faq4A: "¡Claro que sí! Aunque el edificio no tiene ascensor, Omar y nuestro equipo te asistirán con gusto para subir y bajar tus maletas. Solo escríbenos por WhatsApp con anticipación."
      },
      footer: {
        rights: "Todos los derechos reservados. Residencial Mijoca · El Dorado II, Santiago, República Dominicana.",
        airbnbDirect: "Alojamiento Oficial en Airbnb #1758998339922997720",
        curatedBy: "Gestionado con dedicación por Omar"
      }
    }
  },

  // 10 Real Verified Airbnb Reviews
  reviews: [
    {
      id: 1,
      guestName: "Huascar",
      tenure: "5 years on Airbnb",
      tenureEs: "5 años en Airbnb",
      rating: 5,
      category: "hospitality",
      featured: true,
      quote: "I had an amazing experience! Everything was great from start to finish. The service was excellent, the staff was friendly and welcoming, and the overall atmosphere was wonderful. You can really tell they care about making their customers happy. I highly recommend this place to anyone looking for a great experience. I'll definitely be coming back!",
      quoteEs: "¡Tuve una experiencia increíble! Todo fue excelente de principio a fin. El servicio fue excelente, el personal amable y acogedor, y el ambiente general fue maravilloso. Realmente se nota que se preocupan por hacer felices a sus huéspedes. Recomiendo encarecidamente este lugar a cualquiera que busque una gran experiencia. ¡Definitivamente volveré!"
    },
    {
      id: 2,
      guestName: "Wilson",
      tenure: "Dominican Republic",
      tenureEs: "República Dominicana",
      rating: 5,
      category: "business",
      featured: true,
      quote: "I had an excellent stay in this beautiful apartment!! The host's service was excellent and immediate. It's a quiet, spacious, modern and comfortable place! I'm waiting for my next business trip to be confirmed so I can stay in this apartment again!",
      quoteEs: "¡¡Tuve una excelente estadía en este hermoso apartamento!! El servicio del anfitrión fue excelente e inmediato. ¡Es un lugar tranquilo, espacioso, moderno y cómodo! ¡Estoy esperando que se confirme mi próximo viaje de negocios para poder quedarme de nuevo en este apartamento!"
    },
    {
      id: 3,
      guestName: "Mercedes",
      tenure: "Santo Domingo, DR",
      tenureEs: "Santo Domingo, RD",
      rating: 5,
      category: "amenities",
      featured: true,
      quote: "The place is new and incredible, with all the amenities, coffee, tea and water. Both rooms have air conditioning. 3 smart TVs. The host was very friendly and understanding about the mistake I made in booking the wrong day. The best place in Santiago!!",
      quoteEs: "El lugar es nuevo e increíble, con todas las atenciones, café, té y agua. Ambas habitaciones con aire acondicionado. 3 televisores inteligentes. El anfitrión fue muy amable y comprensivo con el error que cometí al reservar el día equivocado. ¡¡El mejor lugar de Santiago!!"
    },
    {
      id: 4,
      guestName: "Luisa E.",
      tenure: "Boston, Massachusetts",
      tenureEs: "Boston, Massachusetts",
      rating: 5,
      category: "location",
      featured: true,
      quote: "Excellent place to stay in the city of Santiago. It's comfortable and cozy, and the hosts are very helpful people. I loved it and felt like I was at home. I've already found the perfect place to come back to, with easy access to downtown.",
      quoteEs: "Excelente lugar para hospedarse en la ciudad de Santiago. Es cómodo y acogedor, y los anfitriones son personas muy serviciales. Me encantó y me sentí como en mi casa. Ya encontré el lugar perfecto para regresar, con fácil acceso al centro."
    },
    {
      id: 5,
      guestName: "Omaira",
      tenure: "7 years on Airbnb",
      tenureEs: "7 años en Airbnb",
      rating: 5,
      category: "hospitality",
      featured: true,
      quote: "Excellent accommodation. Everything was very nice and in perfect condition. Our host, Omar, is very helpful and was quick to respond to our concerns.",
      quoteEs: "Excelente alojamiento. Todo muy lindo y en perfectas condiciones. Nuestro anfitrión Omar muy servicial y rápido al responder a nuestras inquietudes."
    },
    {
      id: 6,
      guestName: "Katherine",
      tenure: "West New York, NJ",
      tenureEs: "West New York, NJ",
      rating: 5,
      category: "hospitality",
      featured: true,
      quote: "The apartment is super nice, and the host's communication is excellent.",
      quoteEs: "El apartamento súper lindo, y la comunicación del anfitrión excelente."
    },
    {
      id: 7,
      guestName: "Nestor",
      tenure: "Dominican Republic",
      tenureEs: "República Dominicana",
      rating: 5,
      category: "location",
      featured: false,
      quote: "A beautiful apartment in a very quiet area. It became one of my favorite places to stay.",
      quoteEs: "Hermoso apartamento en un área muy tranquila. Se convirtió en uno de mis lugares favoritos para hospedarme."
    },
    {
      id: 8,
      guestName: "Yenifer",
      tenure: "Dominican Republic",
      tenureEs: "República Dominicana",
      rating: 5,
      category: "location",
      featured: false,
      quote: "Excellent. We really liked the apartment. It was quiet and clean, and the location was good.",
      quoteEs: "Excelente. Nos gustó mucho el apartamento. Estaba tranquilo y limpio, y la ubicación era buena."
    },
    {
      id: 9,
      guestName: "Frederick",
      tenure: "10 years on Airbnb",
      tenureEs: "10 años en Airbnb",
      rating: 5,
      category: "hospitality",
      featured: false,
      quote: "Good stay, good communication with the host.",
      quoteEs: "Buena estadía, buena comunicación con el anfitrión."
    },
    {
      id: 10,
      guestName: "Carlos",
      tenure: "2 years on Airbnb",
      tenureEs: "2 años en Airbnb",
      rating: 5,
      category: "amenities",
      featured: false,
      isCarlosGuarantee: true,
      quote: "Everything was fine. There was an air conditioner that wasn't cooling very well, the one in the main room. Other than that, everything was fine. Thank you very much for everything!!",
      quoteEs: "Todo estuvo bien. Había un aire acondicionado que no enfriaba muy bien, el de la habitación principal. Por lo demás, todo muy bien. ¡¡Muchas gracias por todo!!"
    }
  ],

  // 13 Local Recommendations with Google Maps & VIP Perks
  localGuide: [
    {
      id: 1,
      category: "groceries",
      name: "Supermercados Nacional (El Dorado)",
      distance: "5-Min Drive / Walking",
      descEn: "Santiago's premier high-end grocery store for gourmet imported foods, fine wines, fresh bakery, cheeses, and daily essentials.",
      descEs: "El supermercado de mayor nivel en Santiago: cortes gourmet, vinos finos, panadería fresca del día, quesos importados y artículos esenciales.",
      badgeEn: "5-Min Away · Premium Grocery",
      badgeEs: "A 5 Minutos · Supermercado Gourmet",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/VXybdS25Wzy4YWSM8"
    },
    {
      id: 2,
      category: "dining",
      name: "Pork & Beer Culture",
      distance: "5-Min Drive (Near Nacional)",
      descEn: "Famous for crispy slow-baked boneless pork belly (Filete de Chicharrón Horneado), artisan mofongos, and craft beers in a cool open-air vibe.",
      descEs: "Famoso por su crujiente filete de chicharrón horneado deshuesado, mofongos artesanales y cervezas en un ambiente fresco y moderno.",
      badgeEn: "Famous Roasted Chicharrón",
      badgeEs: "El Mejor Chicharrón Horneado",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/SWR9N9pBGsPJ5wuX9"
    },
    {
      id: 3,
      category: "nightlife",
      name: "Lovera Discotec",
      distance: "10-Min Drive",
      descEn: "Santiago's premier high-energy nightlife venue featuring top Dominican performers, VIP bottle service, and an electric party atmosphere.",
      descEs: "La discoteca emblemática de Santiago con artistas en vivo, servicio de botellas VIP y el ambiente de fiesta más vibrante de la ciudad.",
      badgeEn: "👑 VIP TIP: Ask for Alfredo as your server (recommended by Omar)",
      badgeEs: "👑 TIP VIP: Pide a Alfredo como tu camarero (recomendado por Omar)",
      isVip: true,
      mapsUrl: "https://maps.app.goo.gl/EyGRp3denXvACPBV8"
    },
    {
      id: 4,
      category: "trips",
      name: "Cayo Arena / Paradise Island (Punta Rucia)",
      distance: "Day Trip (~2 Hours)",
      descEn: "A pristine sandbank surrounded by coral reefs and turquoise shallow waters. World-class snorkeling with colorful tropical fish.",
      descEs: "Cayo de arena blanca en medio de aguas turquesas y arrecifes de coral. Snorkel de clase mundial con peces tropicales.",
      badgeEn: "🚨 VIP PERK: Direct Local Boat Contact at Affordable Rate (Message Omar)",
      badgeEs: "🚨 BENEFICIO VIP: Contacto de bote privado directo y económico (Escríbele a Omar)",
      isVip: true,
      mapsUrl: "https://maps.app.goo.gl/zZyd4qDQr6HY1ZvB9"
    },
    {
      id: 5,
      category: "coffee",
      name: "El Café de la Abuela",
      distance: "8-Min Drive",
      descEn: "Charming bohemian artisan coffee shop tucked behind Clínica Unión Médica, serving single-origin roasts from Jarabacoa and fresh pastries.",
      descEs: "Encantadora cafetería bohemia detrás de la Unión Médica con cafés de origen único de Jarabacoa y repostería artesanal.",
      badgeEn: "Artisan Single-Origin Coffee",
      badgeEs: "Café de Especialidad Cibaeño",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/SC4am3xcSWkX7BtEA"
    },
    {
      id: 6,
      category: "coffee",
      name: "Mr. Grilled (Av. 27 de Febrero)",
      distance: "7-Min Drive",
      descEn: "Local favorite for hearty morning platters, mangú con los tres golpes, Dominican breakfast, and rich espresso.",
      descEs: "El punto favorito de los locales para desayunos dominicanos sustanciosos, mangú con los tres golpes y café bien cargado.",
      badgeEn: "Dominican Breakfast Favorite",
      badgeEs: "Desayuno Típico y Mangú",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/ipUVnSGWDDaMJQJu9"
    },
    {
      id: 7,
      category: "coffee",
      name: "Starbucks (Ágora Santiago Center)",
      distance: "10-Min Drive",
      descEn: "First-level outdoor terrace café in the new Santiago Center mall, featuring Dominican single-origin brews, high-speed Wi-Fi, and workspace.",
      descEs: "En el nuevo mall Santiago Center con terraza al aire libre, café dominicano 100% de origen, Wi-Fi rápido y mesas para trabajar.",
      badgeEn: "Work-Friendly Café",
      badgeEs: "Ideal para Trabajo Remoto",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/roXGAM9Q1po3wiobA"
    },
    {
      id: 8,
      category: "fine",
      name: "Saga Restaurant & Cigar Club",
      distance: "12-Min Drive",
      descEn: "Santiago's premier luxury dining venue featuring prime steaks, fresh seafood, extensive wine cellar, and an upscale cigar lounge.",
      descEs: "Restaurante de alta gastronomía en Santiago con cortes de carne importados, mariscos, cava de vinos y prestigioso salón de cigarros.",
      badgeEn: "Prime Steaks & Luxury Cigar Lounge",
      badgeEs: "Cortes Finos y Cigar Lounge",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/wE1ybFcbd4abiF9j8"
    },
    {
      id: 9,
      category: "fine",
      name: "Camp David Ranch Restaurant",
      distance: "18-Min Scenic Drive",
      descEn: "Perched 2,000 feet up the northern cordillera with breathtaking panoramic views over the entire Cibao Valley and Santiago city lights.",
      descEs: "Ubicado a 2,000 pies en la cordillera septentrional con una vista panorámica espectacular de todo el valle y las luces de Santiago.",
      badgeEn: "Panoramic Mountain View",
      badgeEs: "Vista Panorámica de Toda la Ciudad",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/yz44LxYMyWhYUBby8"
    },
    {
      id: 10,
      category: "fine",
      name: "Restaurante Campuno",
      distance: "10-Min Drive",
      descEn: "An institution for traditional Cibao cuisine, chivo liniero (goat stew), guinea, sancocho, and warm Dominican hospitality.",
      descEs: "Institución de la comida criolla tradicional: chivo liniero, guinea, sancocho y la auténtica hospitalidad dominicana.",
      badgeEn: "Authentic Dominican Cibao Cuisine",
      badgeEs: "Auténtica Gastronomía Criolla",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/9FnyoXeE4Y1deooH6"
    },
    {
      id: 11,
      category: "nightlife",
      name: "Cielo Rooftop",
      distance: "12-Min Drive (Calle del Sol)",
      descEn: "Sophisticated downtown rooftop lounge overlooking the city skyline, offering craft cocktails, tapas, and live DJ sets under the stars.",
      descEs: "Sofisticado rooftop en la Calle del Sol con vistas al skyline, coctelería de autor, tapas finas y DJs en vivo.",
      badgeEn: "Downtown Skyline Rooftop",
      badgeEs: "Rooftop Lounge y Vistas",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/V8mYGPjvtnxJ3NSTA"
    },
    {
      id: 12,
      category: "nightlife",
      name: "Casa Bader",
      distance: "12-Min Drive (Historic Downtown)",
      descEn: "Iconic historical bar founded in 1939! Celebrated for the coldest beers in Santiago ('cenizas'), famous homemade quipes, and merengue.",
      descEs: "Lugar legendario desde 1939: las cervezas más frías de Santiago ('cenizas'), sus afamados quipes de receta secreta y música tradicional.",
      badgeEn: "Historic Santiago Icon since 1939",
      badgeEs: "Ícono Histórico y Cervezas Ceniza",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/Mwhog29dgnDahPZv7"
    },
    {
      id: 13,
      category: "trips",
      name: "Río Sonador (Yásica, Puerto Plata)",
      distance: "Day Trip (~1.5 Hours)",
      descEn: "Lush tropical rainforest river with crystal-clear natural swimming pools, cascading waterfalls, and refreshing eco-hikes in nature.",
      descEs: "Río de aguas cristalinas en medio de la vegetación tropical de Yásica con piscinas naturales, cascadas y balnearios refrescantes.",
      badgeEn: "Crystal River Pools & Waterfalls",
      badgeEs: "Pozas Naturales y Ecoturismo",
      isVip: false,
      mapsUrl: "https://maps.app.goo.gl/u9vkSgrQSNHbiMiV6"
    }
  ],

  // Categorized Property Photos
  gallery: [
    {
      src: "Images/Building.png",
      category: "building",
      titleEn: "Residencial Mijoca Boutique Exterior",
      titleEs: "Fachada Boutique de Residencial Mijoca",
      descEn: "Brand-new 3-story private building with gated parking and glass balconies in El Dorado II.",
      descEs: "Edificio nuevo de 3 niveles con portón cerrado, parqueo y balcones en vidrio en El Dorado II."
    },
    {
      src: "Images/7Z6A7584 (Custom).JPG",
      category: "living",
      titleEn: "Open-Concept Living & Dining Area",
      titleEs: "Sala y Comedor de Concepto Abierto",
      descEn: "Bright sunlit living space with contemporary seating, original artwork, and marble flooring.",
      descEs: "Espacio luminoso con cómodos sofás, arte contemporáneo y pisos de porcelanato."
    },
    {
      src: "Images/7Z6A7579 (Custom).JPG",
      category: "living",
      titleEn: "Private 3rd-Floor Balcony",
      titleEs: "Balcón Privado en 3er Nivel",
      descEn: "Relax outdoors under tropical palm trees with glass railing and neighborhood breezes.",
      descEs: "Relájate al aire libre bajo las palmeras con barandas de vidrio y brisa fresca."
    },
    {
      src: "Images/7Z6A7590 (Custom).JPG",
      category: "living",
      titleEn: "Balcony View over El Dorado II",
      titleEs: "Vista desde el Balcón hacia El Dorado II",
      descEn: "Peaceful residential neighborhood street with blue skies and lush green surroundings.",
      descEs: "Zona residencial tranquila en calle sin salida, con cielos azules y entorno verde."
    },
    {
      src: "Images/7Z6A7586 (Custom).JPG",
      category: "living",
      titleEn: "Living Room with Wall-Mounted Smart TV",
      titleEs: "Sala con Smart TV en Pared",
      descEn: "Enjoy 4K streaming powered by backup battery circuit and fast Wi-Fi.",
      descEs: "Disfruta de streaming 4K respaldado por batería ininterrumpida y Wi-Fi veloz."
    },
    {
      src: "Images/7Z6A7588 (Custom).JPG",
      category: "living",
      titleEn: "Dining Table for 4 Guests",
      titleEs: "Comedor para 4 Personas",
      descEn: "Comfortable round dining table perfect for shared meals or a laptop workspace.",
      descEs: "Mesa redonda confortable para compartir comidas o trabajar cómodamente con tu laptop."
    },
    {
      src: "Images/7Z6A7602 (Custom).JPG",
      category: "bedroom1",
      titleEn: "Primary Master Bedroom",
      titleEs: "Habitación Principal",
      descEn: "Queen bed with premium white linens, inverter A/C, Smart TV, and ensuite master bath.",
      descEs: "Cama Queen con lencería blanca de alta calidad, A/C inverter, Smart TV y baño privado."
    },
    {
      src: "Images/7Z6A7604 (Custom).JPG",
      category: "bedroom1",
      titleEn: "Master Suite & Private Bath Access",
      titleEs: "Suite Principal y Acceso a Baño",
      descEn: "Spacious master suite layout with solid wood doors and dual bedside nightstands.",
      descEs: "Diseño espacioso con puertas en madera maciza y mesas de noche a ambos lados."
    },
    {
      src: "Images/7Z6A7607 (Custom).JPG",
      category: "bathrooms",
      titleEn: "Ensuite Master Bathroom",
      titleEs: "Baño en Suite Principal",
      descEn: "Floating wood vanity, backlit LED pill mirror, modern vessel sink, and matte black fixtures.",
      descEs: "Vanity flotante en madera, espejo ovalado con luz LED, lavamanos de sobreponer y grifería negra mate."
    },
    {
      src: "Images/7Z6A7610 (Custom).JPG",
      category: "bathrooms",
      titleEn: "Walk-In Rainfall Shower",
      titleEs: "Ducha Walk-In con Ducha de Lluvia",
      descEn: "Modern rain shower with handheld wand, hotel shampoo dispensers, and linear trench drain.",
      descEs: "Ducha tipo lluvia con teléfono de mano, dispensadores de jabón/champú y desagüe lineal moderno."
    },
    {
      src: "Images/7Z6A7612 (Custom).JPG",
      category: "bedroom1",
      titleEn: "Master Walk-In Closet",
      titleEs: "Walk-In Closet de la Habitación Principal",
      descEn: "Ample built-in shelving, soft-close drawers, hangers, iron, and ironing board.",
      descEs: "Estantería integrada, gavetas con cierre suave, perchas, plancha y tabla de planchar."
    },
    {
      src: "Images/7Z6A7618 (Custom).JPG",
      category: "bedroom2",
      titleEn: "Second Bedroom with Queen Bed",
      titleEs: "Segunda Habitación con Cama Queen",
      descEn: "Quiet second bedroom featuring individual inverter A/C, 3rd Smart TV, and built-in closet.",
      descEs: "Segunda habitación tranquila con A/C inverter individual, 3er Smart TV y closet en madera."
    },
    {
      src: "Images/7Z6A7619 (Custom).JPG",
      category: "bedroom2",
      titleEn: "Second Bedroom Wooden Wardrobe",
      titleEs: "Closet en Madera de la Segunda Habitación",
      descEn: "Crafted solid wood cabinetry with generous storage for extended vacation or business stays.",
      descEs: "Closet en madera sólida con amplio espacio de almacenamiento para estadías largas."
    },
    {
      src: "Images/7Z6A7615 (Custom).JPG",
      category: "bathrooms",
      titleEn: "Second Full Bathroom",
      titleEs: "Segundo Baño Completo",
      descEn: "Full guest bathroom with glass shower partition, rain showerhead, and modern toilet.",
      descEs: "Baño completo de invitados con mampara de cristal templado, ducha de lluvia e inodoro moderno."
    },
    {
      src: "Images/7Z6A7592 (Custom).JPG",
      category: "kitchen",
      titleEn: "Modern Fully-Equipped Kitchen",
      titleEs: "Cocina Moderna Totalmente Equipada",
      descEn: "White shaker cabinets, gas stovetop, built-in oven, Samsung microwave, and quartz counters.",
      descEs: "Gabinetes shaker blancos, estufa de gas, horno empotrado, microondas Samsung y topes en cuarzo."
    },
    {
      src: "Images/7Z6A7593 (Custom).JPG",
      category: "kitchen",
      titleEn: "Kitchen Peninsula & Stainless Refrigerator",
      titleEs: "Península de Cocina y Nevera de Acero",
      descEn: "Full-size stainless steel refrigerator wired to the 24/7 battery backup circuit.",
      descEs: "Refrigerador grande de acero inoxidable conectado al circuito de batería 24/7."
    },
    {
      src: "Images/7Z6A7594 (Custom).JPG",
      category: "kitchen",
      titleEn: "Chef Sink & High-Pressure Glass Rinser",
      titleEs: "Fregadero de Chef y Enjuagador de Vasos",
      descEn: "Deep stainless undermount sink, pull-down gooseneck faucet, and cup rinser.",
      descEs: "Fregadero profundo bajo tope, grifo extensible y lavavasos a presión."
    },
    {
      src: "Images/7Z6A7595 (Custom).JPG",
      category: "kitchen",
      titleEn: "Complimentary Coffee & Tea Station",
      titleEs: "Estación de Café y Té de Cortesía",
      descEn: "Drip coffee maker, authentic Dominican Induban coffee, and assortment of fine herbal teas.",
      descEs: "Cafetera de goteo, café dominicano Induban y selección de tés finos para tus mañanas."
    },
    {
      src: "Images/7Z6A7600 (Custom).JPG",
      category: "kitchen",
      titleEn: "In-Unit Whirlpool Washer & Dryer",
      titleEs: "Lavadora y Secadora Whirlpool en la Unidad",
      descEn: "Stacked laundry center protected by smart floor water leak sensors for safety.",
      descEs: "Torre de lavado Whirlpool protegida por sensores inteligentes de fuga de agua."
    },
    {
      src: "Images/7Z6A7622 (Custom).JPG",
      category: "building",
      titleEn: "SunGoldPower 5 kW Inverter & ION Lithium Battery",
      titleEs: "Inversor SunGoldPower 5 kW y Batería de Litio ION",
      descEn: "Our state-of-the-art 5.12 kWh lithium backup power system keeping your stay uninterrupted.",
      descEs: "Sistema de respaldo de 5.12 kWh con batería de litio que mantiene tu energía ininterrumpida."
    },
    {
      src: "Images/7Z6A7628 (Custom).JPG",
      category: "building",
      titleEn: "Solid Wood Pivot Door & Keyless Entry",
      titleEs: "Puerta Principal Pivotante y Cerradura Digital",
      descEn: "Secure smart digital lock for seamless self check-in anytime after 3:00 PM.",
      descEs: "Cerradura digital inteligente para un check-in autónomo y seguro a cualquier hora tras las 3:00 PM."
    },
    {
      src: "Images/7Z6A7633 (Custom).JPG",
      category: "building",
      titleEn: "Residencial Mijoca Facade & Tropical Palms",
      titleEs: "Fachada de Residencial Mijoca y Palmeras",
      descEn: "Low-density architectural building with only 3 private units in El Dorado II.",
      descEs: "Edificio arquitectónico de baja densidad con solo 3 apartamentos en El Dorado II."
    }
  ]
};
