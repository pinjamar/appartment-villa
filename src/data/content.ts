// Easily modifiable content for customization
export const siteConfig = {
  siteName: {
    hr: 'Apartmani Markota',
    en: 'Markota Apartments',
  },
  tagline: {
    hr: 'Vaš san o kućici za odmor na Korčuli',
    en: 'Your dream vacation home on Korčula Island',
  },
  seo: {
    siteUrl: 'https://www.yoursite.com',
    defaultImage: 'https://www.yoursite.com/og-image.jpg',
    twitterHandle: '@yourhandle',
  },
  contact: {
    phone: '+385 20 123 4567',
    email: 'info@apartmankorcula.com',
    address: 'Ul. Obala 42, 20260 Korčula, Hrvatska',
    coordinates: { lat: 42.9639, lng: 17.12 }, // Korčula
  },
  social: {
    facebook: 'https://facebook.com/apartmankorcula',
    instagram: 'https://instagram.com/apartmankorcula',
    airbnb: 'https://airbnb.com/h/apartmankorcula',
  },
  businessInfo: {
    hr: {
      companyName: 'Apartman Korčula d.o.o.',
      vatNumber: 'OIB: 87654321098',
      registration: 'Registacijski kod: 040261-HR-54321',
    },
    en: {
      companyName: 'Korčula Apartment LLC',
      vatNumber: 'VAT: 87654321098',
      registration: 'Registration code: 040261-HR-54321',
    },
  },
};

export const content = {
  navigation: {
    hr: {
      home: 'Početna',
      about: 'Apartman',
      gallery: 'Galerija',
      services: 'Usluge',
      availability: 'Dostupnost',
      booking: 'Rezerviraj boravak',
      reviews: 'Recenzije',
      location: 'Lokacija',
      contact: 'Kontakt',
    },
    en: {
      home: 'Home',
      about: 'The Apartment',
      gallery: 'Gallery',
      services: 'Services',
      availability: 'Availability',
      booking: 'Book Now',
      reviews: 'Reviews',
      location: 'Location',
      contact: 'Contact',
    },
  },
  hero: {
    hr: {
      title: 'Dobrodošli u Apartmane Markota',
      subtitle:
        'Predivan apartman sa oceanskim pogledom na otoku Korčuli, savršen za vašu sanjarsku godinu. Otkrij autentičan šarm Jadrana u modernom i komfortnom okruženju.',
      cta: 'Saznaj Više',
    },
    en: {
      title: 'Welcome to Markota Apartments',
      subtitle:
        'A beautiful apartment with ocean view on Korčula Island, perfect for your dream vacation. Discover the authentic charm of the Adriatic in a modern and comfortable environment.',
      cta: 'Learn More',
    },
  },
  about: {
    hr: {
      title: 'Apartman Marko',
      description:
        'Apartman Korčula je moderan i luksuzno opremljen apartman sa impozantnim pogledom na Jadransko more. Smješten u srcu grada Korčule, idealan je za parove ili male obitelji koje žele uživati u miru i prirodnoj ljepoti ovog jedinstvenog otoka.',
      features: [
        '2 prostrane spavaće sobe',
        '2 moderne kupaone',
        'Dnevni boravak sa gledanjem na more',
        'Potpuno opremljena kuhinja',
        'Balkon sa pogledom na Jadran',
        'Primijenjeno klimatizaciji',
        'Besplatan Wi-Fi internet',
        'Parking na kućnom području',
      ],
    },
    en: {
      title: 'Marko Apartment',
      description:
        "Korčula Apartment is a modern and luxuriously equipped apartment with impressive views of the Adriatic Sea. Located in the heart of Korčula town, it's ideal for couples or small families wanting to enjoy the peace and natural beauty of this unique island.",
      features: [
        '2 spacious bedrooms',
        '2 modern bathrooms',
        'Living room with sea view',
        'Fully equipped kitchen',
        'Balcony overlooking the Adriatic',
        'Air conditioning',
        'Free Wi-Fi internet',
        'Parking on property',
      ],
    },
  },
  aboutSecond: {
    hr: {
      title: 'Apartman Sara',
      description:
        'Drugi apartman nudi udoban boravak s posebnim sadržajima i privatnošću. Idealno za parove ili manje obitelji koje žele miran odmor uz more.',
      features: [
        '1 spavaća soba s bračnim krevetom',
        '1 moderna kupaonica',
        'Dnevni boravak s kaučem na razvlačenje',
        'Kuhinja s blagovaonicom',
        'Terasa s pogledom na more',
        'Klimatizacija u svim prostorijama',
        'Brzi Wi-Fi',
        'Besplatan parking',
      ],
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Apartman 2 Interijer',
    },
    en: {
      title: 'Sara Apartment',
      description:
        'The second apartment offers a comfortable stay with distinct amenities and added privacy. Ideal for couples or small families looking for a peaceful seaside getaway.',
      features: [
        '1 bedroom with a double bed',
        '1 modern bathroom',
        'Living room with a sofa bed',
        'Kitchen with dining area',
        'Terrace with sea view',
        'Air conditioning throughout',
        'Fast Wi-Fi',
        'Free parking',
      ],
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Apartment 2 Interior',
    },
  },
  services: {
    hr: {
      title: 'Usluge i Pogodnosti',
      items: [
        {
          name: 'Besplatan Wi-Fi',
          icon: 'Wifi',
          description: 'Brza internetska veza kroz cijeli apartman',
        },
        {
          name: 'Klima Uređaj',
          icon: 'Snowflake',
          description: 'Klimatizacija u svim sobama',
        },
        {
          name: 'Pogled na More',
          icon: 'Waves',
          description: 'Balkon sa predivnim pogledom na Jadran',
        },
        {
          name: 'Parkiranje',
          icon: 'Car',
          description: 'Privatni i sigurni parking prostori',
        },
        {
          name: 'Opremljena Kuhinja',
          icon: 'ChefHat',
          description: 'Moderna kuhinja sa svim aparatima',
        },
        {
          name: 'Blizu Plaža',
          icon: 'Sun',
          description: 'Blizu najljepših plaža na otoku',
        },
        {
          name: 'TV i Zabava',
          icon: 'Tv2',
          description: 'Satelitska TV i streaming usluge',
        },
        {
          name: 'Prilagođeno Životinjama',
          icon: 'Heart',
          description: 'Vaše kućne ljubimce su dobrodošle',
        },
      ],
    },
    en: {
      title: 'Services & Amenities',
      items: [
        {
          name: 'Free Wi-Fi',
          icon: 'Wifi',
          description: 'High-speed internet throughout the apartment',
        },
        {
          name: 'Air Conditioning',
          icon: 'Snowflake',
          description: 'Climate control in all rooms',
        },
        {
          name: 'Sea View',
          icon: 'Waves',
          description: 'Balcony with stunning Adriatic views',
        },
        {
          name: 'Parking',
          icon: 'Car',
          description: 'Private and secure parking spaces',
        },
        {
          name: 'Equipped Kitchen',
          icon: 'ChefHat',
          description: 'Modern kitchen with all appliances',
        },
        {
          name: 'Beach Access',
          icon: 'Sun',
          description: "Close to the island's most beautiful beaches",
        },
        {
          name: 'TV & Entertainment',
          icon: 'Tv2',
          description: 'Satellite TV and streaming services',
        },
        {
          name: 'Pet Friendly',
          icon: 'Heart',
          description: 'Your pets are welcome',
        },
      ],
    },
  },
  calendar: {
    hr: {
      title: 'Dostupnost',
      subtitle: 'Provjeri dostupne datume i rezerviraj svoj boravak',
      available: 'Dostupno',
      booked: 'Zauzeto',
      legend: 'Legenda',
    },
    en: {
      title: 'Availability',
      subtitle: 'Check available dates and book your stay',
      available: 'Available',
      booked: 'Booked',
      legend: 'Legend',
    },
  },
  booking: {
    hr: {
      title: 'Rezerviraj Svoj Boravak',
      subtitle:
        'Ispuni obrazac da bi tražio rezervaciju. Kontaktirat ćemo te u roku od 24 sata.',
      form: {
        checkin: 'Datum dolaska',
        checkout: 'Datum odlaska',
        guests: 'Broj gostiju',
        name: 'Puno ime',
        email: 'E-mail',
        phone: 'Telefon',
        message: 'Posebni zahtjevi',
        submit: 'Pošalji Zahtjev',
        required: 'Obavezno polje',
      },
      success: 'Zahtjev je uspješno poslan! Uskoro ćemo te kontaktirati.',
      pricing: {
        title: 'Cijene',
        lowSeason: 'Niska sezona',
        highSeason: 'Visoka sezona',
        finalCleaning: 'Puliža finale',
        touristTax: 'Turističko pristojba',
        pricePerNight: '/noć',
        priceCalculation: 'Izračun Cijene',
        total: 'Ukupno',
        message: 'Zahtjev za Rezervaciju',
      },
    },
    en: {
      title: 'Book Your Stay',
      subtitle:
        'Fill out the form to request a booking. We will contact you within 24 hours.',
      form: {
        checkin: 'Check-in date',
        checkout: 'Check-out date',
        guests: 'Number of guests',
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        message: 'Special requests',
        submit: 'Send Request',
        required: 'Required field',
      },
      success: 'Request sent successfully! We will contact you soon.',
      pricing: {
        title: 'Rates',
        lowSeason: 'Low season',
        highSeason: 'High season',
        finalCleaning: 'Final cleaning',
        touristTax: 'Tourist tax',
        pricePerNight: '/night',
        priceCalculation: 'Price Calculation',
        total: 'Total',
        message: 'Booking Request',
      },
    },
  },
  reviews: {
    hr: {
      title: 'Gostske Recenzije',
      items: [
        {
          name: 'Marco & Elena',
          rating: 5,
          text: 'Divnog apartmana sa spektakularnim pogledima na more! Sve savršeno, od čistoće do usluga. Vrlo ljubazni vlasnici. Sigurno ćemo se vratiti!',
          date: 'Rujan 2024',
        },
        {
          name: 'Familie Schmidt',
          rating: 5,
          text: 'Savršeno za obiteljski odmor. Djeci se sviđala plaža blizu, a nama odraslima se sviđala mir i prirodna ljepota otoka. Toplom preporučujem!',
          date: 'Kolovoz 2024',
        },
        {
          name: 'Sarah & James',
          rating: 5,
          text: 'Autentično jadransko iskustva! Apartman je premašio naša očekivanja. Lijepa lokacija, odličnih pogodnosti i divan domaćin.',
          date: 'Srpanj 2024',
        },
      ],
    },
    en: {
      title: 'Guest Reviews',
      items: [
        {
          name: 'Marco & Elena',
          rating: 5,
          text: 'Wonderful apartment with spectacular sea views! Everything perfect, from cleanliness to services. Very helpful owners. We will definitely return!',
          date: 'September 2024',
        },
        {
          name: 'Familie Schmidt',
          rating: 5,
          text: 'Perfect for a family vacation. The kids loved the nearby beach and we adults enjoyed the tranquility and natural beauty of the island. Highly recommended!',
          date: 'August 2024',
        },
        {
          name: 'Sarah & James',
          rating: 5,
          text: 'An authentic Adriatic experience! The apartment exceeded our expectations. Beautiful location, excellent amenities, and wonderful hosts.',
          date: 'July 2024',
        },
      ],
    },
  },
  contact: {
    hr: {
      title: 'Kontaktiraj Nas',
      subtitle: 'Tu smo da ti pomognemo da planirate savršeni odmor',
      form: {
        name: 'Ime',
        email: 'E-mail',
        subject: 'Naziv',
        message: 'Poruka',
        submit: 'Pošalji Poruku',
      },
      info: {
        title: 'Informacije za Kontakt',
        phone: 'Telefon',
        email: 'E-mail',
        address: 'Adresa',
        responseTimes: 'Vremena Odgovora',
        responseTimesText:
          'Odgovaramo na sve upite u roku od 24 sata. Za hitne slučajeve, molimo vas da nas pozovete izravno.',
      },
    },
    en: {
      title: 'Contact Us',
      subtitle: "We're here to help you plan your perfect vacation",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        responseTimes: 'Response Times',
        responseTimesText:
          'We respond to all inquiries within 24 hours. For urgent matters, please call us directly.',
      },
    },
  },
  footer: {
    hr: {
      description:
        'Apartmani Markota nude autentično iskustvo na lijepo Korčuli. Otkrij udobnost i eleganciju u jedinstvenom obalnom okruženju.',
      quickLinks: 'Brze Veze',
      followUs: 'Pratite Nas',
      copyright: '© 2026 Apartmani Markota. Sva prava su zadržana.',
      privacy: 'Politika Privatnosti',
      cookies: 'Politika Kolačića',
      privacyText:
        'Apartmani Markota poštuju vašu privatnost. Ne prikupljamo, ne pohranjujemo niti obrađujemo nikakve osobne podatke na ovoj web stranici. Sve informacije koje unesete u obrazac za rezervaciju šaljete izravno putem WhatsAppa. Mi ne pohranjujemo niti pristupamo tim informacijama na našim serverima. Ne koristimo kolačiće, analitiku niti bilo kakve tehnologije praćenja. Ako imate pitanja o privatnosti, kontaktirajte nas na info@apartmanimarkota.com.',
    },
    en: {
      description:
        'Apartments Markota offer an authentic experience on beautiful Korčula Island. Discover comfort and elegance in a unique coastal environment.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      copyright: '© 2026 Markota Apartments. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      privacyText:
        'Your personal data is protected and used solely for processing reservations and communication. We do not share data with third parties without your consent.',
    },
  },
  cookieBanner: {
    hr: {
      message:
        'Ova stranica koristi kolačiće da poboljša vašu iskustvo s pregledavanjem i za statističke svrhe.',
      accept: 'Prihvati',
      decline: 'Odbij',
      moreInfo: 'Više informacija',
    },
    en: {
      message:
        'This site uses cookies to improve your browsing experience and for statistical purposes.',
      accept: 'Accept',
      decline: 'Decline',
      moreInfo: 'More Information',
    },
  },
};

// Top-level SEO pages for use by the runtime SEO component and by sections
export const seoPages = {
  home: {
    hr: {
      title: `${siteConfig.siteName.hr} - Prižba, Korčula`,
      description:
        'Apartmani Markota: moderno opremljeni apartmani, prvi red do mora u Prižbi. Rezervirajte direktno za najbolje cijene.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/hr/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: siteConfig.siteName.hr,
        description:
          'Apartmani Markota — moderno opremljen apartman sa pogledom na more. Idealno za parove i obitelji.',
        image: [siteConfig.seo.defaultImage],
        url: `${siteConfig.seo.siteUrl}/hr/`,
        telephone: siteConfig.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressCountry: 'HR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.contact.coordinates.lat,
          longitude: siteConfig.contact.coordinates.lng,
        },
      },
    },
    en: {
      title: `${siteConfig.siteName.en} — Seafront apartment, Korčula`,
      description:
        'Apartments Markota: modern seafront apartment in Korčula town. Book direct for best rates.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: siteConfig.siteName.en,
        description:
          'apartments Markota — modern seafront apartment with sea views. Perfect for couples and families.',
        image: [siteConfig.seo.defaultImage],
        url: `${siteConfig.seo.siteUrl}/`,
        telephone: siteConfig.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressCountry: 'HR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.contact.coordinates.lat,
          longitude: siteConfig.contact.coordinates.lng,
        },
      },
    },
  },

  gallery: {
    hr: {
      title: `${siteConfig.siteName.hr} — Galerija fotografija`,
      description:
        'Pogledajte fotogaleriju Apartmana Korčula i doživite ambijent prije dolaska.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/hr/gallery/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: `${siteConfig.siteName.hr} — Galerija`,
        description: 'Fotografije apartmana i okoline.',
      },
    },
    en: {
      title: `${siteConfig.siteName.en} — Photo Gallery`,
      description:
        'Browse the photo gallery of Korčula Apartment to preview the space.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/gallery/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: `${siteConfig.siteName.en} — Gallery`,
        description: 'Photos of the apartment and surroundings.',
      },
    },
  },

  gallery2: {
    hr: {
      title: `${siteConfig.siteName.hr} — Apartman 2 Galerija`,
      description: 'Pogledajte fotogaleriju Apartmana 2 i doživite ambijent.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/hr/gallery2/`,
    },
    en: {
      title: `${siteConfig.siteName.en} — Apartment 2 Gallery`,
      description: 'Browse the gallery of Apartment 2 to preview the space.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/gallery2/`,
    },
  },

  galleryImages: {
    1: [
      {
        src: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Apartmani Markota Exterior',
      },
      {
        src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Living Room',
      },
      {
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Bedroom',
      },
      {
        src: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Kitchen',
      },
      {
        src: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Swimming Pool',
      },
      {
        src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Garden View',
      },
      {
        src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Terrace',
      },
      {
        src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Bathroom',
      },
    ],
    2: [
      {
        src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Apartment 2 Living Area',
      },
      {
        src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cozy Bedroom',
      },
      {
        src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Terrace',
      },
      {
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Modern Bedroom',
      },
      {
        src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Garden Area',
      },
      {
        src: 'https://images.pexels.com/photos/1398857/pexels-photo-1398857.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Kitchen Area',
      },
    ],
  },

  booking: {
    hr: {
      title: `${siteConfig.siteName.hr} — Rezervacije`,
      description:
        'Rezervirajte svoj boravak u Apartmanu Korčula direktno putem WhatsApp-a.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/hr/booking/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${siteConfig.siteName.hr} — Rezervacije`,
        description: 'Stranica za rezervacije i kontakt putem WhatsApp-a.',
      },
    },
    en: {
      title: `${siteConfig.siteName.en} — Bookings`,
      description: 'Request your stay at Korčula Apartment via WhatsApp.',
      image: siteConfig.seo.defaultImage,
      canonical: `${siteConfig.seo.siteUrl}/booking/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${siteConfig.siteName.en} — Bookings`,
        description: 'Booking request page to contact via WhatsApp.',
      },
    },
  },
};

// Backwards-compatibility: attach seoPages to the main `content` object
(content as any).seoPages = seoPages;
