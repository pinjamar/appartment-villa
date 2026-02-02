// Easily modifiable content for customization
export const siteConfig = {
  siteName: {
    hr: "Villa Azzurra",
    en: "Villa Azzurra"
  },
  tagline: {
    hr: "Vaš san o kućici za odmor u Toskani",
    en: "Your dream vacation home in Tuscany"
  },
  contact: {
    phone: "+39 055 123 4567",
    email: "info@villaazzurra.com",
    address: "Via delle Rose 15, 50125 Firenze, Italia",
    coordinates: { lat: 43.7696, lng: 11.2558 } // Florence
  },
  social: {
    facebook: "https://facebook.com/villaazzurra",
    instagram: "https://instagram.com/villaazzurra",
    airbnb: "https://airbnb.com/h/villaazzurra"
  },
  businessInfo: {
    hr: {
      companyName: "Villa Azzurra S.r.l.",
      vatNumber: "PDV: 12345678901",
      registration: "Registacijski kod: 048017-LT-12345"
    },
    en: {
      companyName: "Villa Azzurra S.r.l.",
      vatNumber: "VAT: 12345678901", 
      registration: "Registration code: 048017-LT-12345"
    }
  }
};

export const content = {
  navigation: {
    hr: {
      home: "Početna",
      about: "Vila", 
      gallery: "Galerija",
      services: "Usluge",
      availability: "Dostupnost",
      booking: "Rezerviraj",
      reviews: "Recenzije",
      location: "Lokacija",
      contact: "Kontakt"
    },
    en: {
      home: "Home",
      about: "The Villa",
      gallery: "Gallery", 
      services: "Services",
      availability: "Availability",
      booking: "Book Now",
      reviews: "Reviews",
      location: "Location",
      contact: "Contact"
    }
  },
  hero: {
    hr: {
      title: "Dobrodošli u Villa Azzurru",
      subtitle: "Veličanstvena toskanska vila okružena zelenim površinama, savršena za vašu sanjarsku godinu. Otkrij autentičan šarm Toskane u elegantnome i komfortnom okruženju.",
      cta: "Saznaj Više"
    },
    en: {
      title: "Welcome to Villa Azzurra", 
      subtitle: "A magnificent Tuscan villa surrounded by greenery, perfect for your dream vacation. Discover the authentic charm of Tuscany in an elegant and comfortable environment.",
      cta: "Learn More"
    }
  },
  about: {
    hr: {
      title: "Vila",
      description: "Villa Azzurra je neobjašnjena rezijedencija iz 18. stoljeća potpuno renovirana, kombinirajući toskanski povijesni šarm sa svim modernim udobnostima. Smještena na panoramskoj brežuljini, nudi preljepte poglede na okolnu pejzaž.",
      features: [
        "4 elegantne spavaće sobe",
        "3 moderne kupaone sa tušem",
        "Velika dnevna soba sa kaminima",
        "Potpuno opremljena kuhinja",
        "Privatna panoramska terasa",
        "Mediteranski vrt od 2000 m²",
        "Privatni bazen (12x6m)",
        "Privatno parkiranje za 3 automobila"
      ]
    },
    en: {
      title: "The Villa",
      description: "Villa Azzurra is a splendid 18th-century residence completely renovated, combining Tuscan historical charm with all modern comforts. Located on a panoramic hill, it offers breathtaking views of the surrounding countryside.",
      features: [
        "4 elegant bedrooms",
        "3 modern bathrooms with shower", 
        "Large living room with fireplace",
        "Fully equipped kitchen",
        "Private panoramic terrace",
        "2000 sqm Mediterranean garden",
        "Private swimming pool (12x6m)",
        "Private parking for 3 cars"
      ]
    }
  },
  services: {
    hr: {
      title: "Usluge i Pogodnosti",
      items: [
        { name: "Besplatan Wi-Fi", icon: "Wifi", description: "Brza internetska veza kroz cijelu vilu" },
        { name: "Klima Uređaj", icon: "Snowflake", description: "Klimatizacija u svim sobama" },
        { name: "Privatni Bazen", icon: "Waves", description: "Eksklusivni bazen sa panoramskim pogledom" },
        { name: "Parkiranje", icon: "Car", description: "Privatni i sigurni parking prostori" },
        { name: "Opremljena Kuhinja", icon: "ChefHat", description: "Moderna kuhinja sa svim aparatima" },
        { name: "Vrt", icon: "Trees", description: "Veliki zeleni prostor sa zonom za opuštanje" },
        { name: "Terasa", icon: "Sun", description: "Panoramska terasa za vanjsko blagovanje" },
        { name: "Prilagođeno Životinjama", icon: "Heart", description: "Vaša četveronožna prijatelja su dobrodošla" }
      ]
    },
    en: {
      title: "Services & Amenities",
      items: [
        { name: "Free Wi-Fi", icon: "Wifi", description: "High-speed internet connection throughout the villa" },
        { name: "Air Conditioning", icon: "Snowflake", description: "Climate control in all rooms" },
        { name: "Private Pool", icon: "Waves", description: "Exclusive pool with panoramic view" },
        { name: "Parking", icon: "Car", description: "Private and secure parking spaces" },
        { name: "Equipped Kitchen", icon: "ChefHat", description: "Modern kitchen with all appliances" },
        { name: "Garden", icon: "Trees", description: "Large green space with relaxation area" },
        { name: "Terrace", icon: "Sun", description: "Panoramic terrace for outdoor dining" },
        { name: "Pet Friendly", icon: "Heart", description: "Your four-legged friends are welcome" }
      ]
    }
  },
  calendar: {
    hr: {
      title: "Dostupnost",
      subtitle: "Provjeri dostupne datume i rezerviraj svoj boravak",
      available: "Dostupno",
      booked: "Zauzeto",
      legend: "Legenda"
    },
    en: {
      title: "Availability",
      subtitle: "Check available dates and book your stay",
      available: "Available", 
      booked: "Booked",
      legend: "Legend"
    }
  },
  booking: {
    hr: {
      title: "Rezerviraj Svoj Boravak",
      subtitle: "Ispuni obrazac da bi tražio rezervaciju. Kontaktirat ćemo te u roku od 24 sata.",
      form: {
        checkin: "Datum dolaska",
        checkout: "Datum odlaska",
        guests: "Broj gostiju",
        name: "Puno ime",
        email: "E-mail",
        phone: "Telefon",
        message: "Posebni zahtjevi",
        submit: "Pošalji Zahtjev",
        required: "Obavezno polje"
      },
      success: "Zahtjev je uspješno poslan! Uskoro ćemo te kontaktirati.",
      pricing: {
        title: "Cijene",
        lowSeason: "Niska sezona (Srpanj-Kolovoz): €180/noć",
        highSeason: "Visoka sezona (ostatak godine): €250/noć",
        notes: "Konačno čišćenje: €80 | Turističko pristojba: €2.50/osoba/noć"
      }
    },
    en: {
      title: "Book Your Stay",
      subtitle: "Fill out the form to request a booking. We will contact you within 24 hours.",
      form: {
        checkin: "Check-in date",
        checkout: "Check-out date",
        guests: "Number of guests", 
        name: "Full name",
        email: "Email",
        phone: "Phone",
        message: "Special requests",
        submit: "Send Request",
        required: "Required field"
      },
      success: "Request sent successfully! We will contact you soon.",
      pricing: {
        title: "Rates",
        lowSeason: "Low season (July-August): €180/night",
        highSeason: "High season (rest of year): €250/night",
        notes: "Final cleaning: €80 | Tourist tax: €2.50/person/night"
      }
    }
  },
  reviews: {
    hr: {
      title: "Gostske Recenzije",
      items: [
        {
          name: "Marco & Elena",
          rating: 5,
          text: "Divna vila sa spektakularnim pogledima! Sve savršeno, od čistoće do usluga. Vrlo ljubazni vlasnici. Sigurno ćemo se vratiti!",
          date: "Rujan 2024"
        },
        {
          name: "Familie Schmidt", 
          rating: 5,
          text: "Savršeno za obiteljski odmor. Djeci se sviđao bazen, a nama odraslima se sviđala mir mjesta. Toplom preporučujem!",
          date: "Kolovoz 2024"
        },
        {
          name: "Sarah & James",
          rating: 5,
          text: "Autentično toskanska iskustva! Vila je premašila naša očekivanja. Lijepa lokacija, odličnih pogodnosti i divan domaćin.",
          date: "Srpanj 2024"
        }
      ]
    },
    en: {
      title: "Guest Reviews",
      items: [
        {
          name: "Marco & Elena",
          rating: 5,
          text: "Wonderful villa with spectacular views! Everything perfect, from cleanliness to services. Very helpful owners. We will definitely return!",
          date: "September 2024"
        },
        {
          name: "Familie Schmidt",
          rating: 5, 
          text: "Perfect for a family vacation. The kids loved the pool and we adults enjoyed the tranquility of the place. Highly recommended!",
          date: "August 2024"
        },
        {
          name: "Sarah & James",
          rating: 5,
          text: "An authentic Tuscan experience! The villa exceeded our expectations. Beautiful location, excellent amenities, and wonderful hosts.", 
          date: "July 2024"
        }
      ]
    }
  },
  contact: {
    hr: {
      title: "Kontaktiraj Nas",
      subtitle: "Tu smo da ti pomognemo da planirate savršeni odmor",
      form: {
        name: "Ime",
        email: "E-mail",
        subject: "Naziv",
        message: "Poruka",
        submit: "Pošalji Poruku"
      },
      info: {
        title: "Informacije za Kontakt",
        phone: "Telefon",
        email: "E-mail",
        address: "Adresa",
        responseTimes: "Vremena Odgovora",
        responseTimesText: "Odgovaramo na sve upite u roku od 24 sata. Za hitne slučajeve, molimo vas da nas pozovete izravno."
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to help you plan your perfect vacation",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject", 
        message: "Message",
        submit: "Send Message"
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        address: "Address",
        responseTimes: "Response Times",
        responseTimesText: "We respond to all inquiries within 24 hours. For urgent matters, please call us directly."
      }
    }
  },
  footer: {
    hr: {
      description: "Villa Azzurra nudi autentično iskustvo u lijepo Toskani. Otkrij udobnost i eleganciju u jedinstvenom okruženju.",
      quickLinks: "Brze Veze",
      followUs: "Pratite Nas",
      copyright: "© 2024 Villa Azzurra. Sva prava su zadržana.",
      privacy: "Politika Privatnosti",
      cookies: "Politika Kolačića"
    },
    en: {
      description: "Villa Azzurra offers an authentic experience in beautiful Tuscany. Discover comfort and elegance in a unique environment.",
      quickLinks: "Quick Links", 
      followUs: "Follow Us",
      copyright: "© 2024 Villa Azzurra. All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy"
    }
  },
  cookieBanner: {
    hr: {
      message: "Ova stranica koristi kolačiće da poboljša vašu iskustvo s pregledavanjem i za statističke svrhe.",
      accept: "Prihvati",
      decline: "Odbij",
      moreInfo: "Više informacija"
    },
    en: {
      message: "This site uses cookies to improve your browsing experience and for statistical purposes.",
      accept: "Accept",
      decline: "Decline", 
      moreInfo: "More information"
    }
  }
};