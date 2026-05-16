---
name: builder_agent
description: Describe what this custom agent does and when to use it.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---
# VILLA BENITO — ASTRO TEMPLATE IMPLEMENTATION GUIDE

## Project Overview

Transform the current Astro rental template into a tourism-focused landing page for **Hostal Benito**, a countryside villa rental located in **Viñales, Cuba**.

This is NOT a traditional hotel website.

The objective is to create an emotional, experience-oriented landing page focused on:

- Nature
- Mountains
- Mogotes
- Relaxation
- Cuban authenticity
- Local experiences
- Sunset views
- Countryside lifestyle

Target audience:

- European travelers
- Couples
- Nature tourists
- Backpackers
- Digital nomads
- Travelers seeking authentic Cuba experiences

Visual style:

- Tropical
- Rustic elegance
- Warm
- Minimal
- Nature-focused
- Large photography
- Emotional storytelling

---

# GLOBAL BRAND REPLACEMENTS

Replace all existing references:

| Current | Replace With |
|----------|--------------|
| Markota | Villa Benito |
| Apartment Marko | Hostal Benito |
| Apartment Sara | Viñales Activities Guide |
| Services | Services & Amenities |
| Contact | REMOVE |

---

# HEADER / NAVIGATION IMPLEMENTATION

Current navigation:

- Apartment Marko
- Apartment Sara
- Services
- Location
- Book Your Stay
- Contact

Replace with:

- Hostal Benito
- Viñales Activities Guide
- Services & Amenities
- Location
- Book Your Stay

Remove:

- Contact

Logo:

Current:
Markota Logo

Replace with:

Villa Benito

Optional subtitle:

Viñales • Cuba

---

# LANGUAGE SELECTOR IMPLEMENTATION

Remove existing languages:

- HR
- EN
- IT

Implement:

- ES
- EN
- FR
- CZ

Flags:

ES → 🇪🇸
EN → 🇬🇧
FR → 🇫🇷
CZ → 🇨🇿

Recommended implementation:

Create:

src/i18n/

Structure:

src/
    i18n/
        en.json
        es.json
        fr.json
        cz.json

Use Astro i18n routing.

All visible texts must be translatable.

---

# HERO SECTION IMPLEMENTATION

GOAL:

The hero must emotionally sell the experience.

Focus:

- Mountain views
- Mogotes
- Sunsets
- Nature
- Authentic Cuba

Avoid:

- Generic hotel visuals
- Corporate style
- Urban imagery

Hero background recommendations:

- Terrace with valley view
- Sunset over mogotes
- Tobacco fields
- Villa exterior
- Tropical landscapes

Title:

Hostal Benito

Subtitle:

Authentic countryside stay in Viñales, Cuba

Description:

Located only 7 minutes from downtown Viñales, Hostal Benito offers breathtaking mountain views, authentic Cuban hospitality and unforgettable countryside experiences.

Buttons:

Primary CTA:

Book Your Stay

Secondary CTA:

Explore Viñales

Hero behavior:

- Full viewport height
- Overlay gradient
- Large typography
- Mobile optimized
- Smooth scrolling

---

# SECTION A — HOSTAL BENITO

Rename:

Apartment Marko

TO:

Hostal Benito

Layout:

LEFT:

Text content

RIGHT:

Large immersive image

Suggested image:

- Terrace
- Sunset
- Villa exterior
- Mountain view

Section title:

Hostal Benito

Main content:

Ubicada a solo 7 minutos del centro de Viñales, nuestra casa es el lugar ideal para quienes buscan tranquilidad, naturaleza y una auténtica experiencia cubana.

Contamos con tres habitaciones climatizadas, cada una con baño privado e independiente, diseñadas para brindar comodidad y privacidad durante toda la estancia.

Disfrute de nuestra terraza con impresionantes vistas a las montañas y los mogotes, el espacio perfecto para relajarse mientras saborea un puro cubano o contempla uno de los atardeceres más hermosos de la región.

Además, el jardín ofrece un ambiente acogedor para descansar y conectar con la naturaleza.

---

## ADDITIONAL CONTENT BLOCKS

Create cards / sub sections.

### Traditional Food

Ofrecemos deliciosa comida tradicional cubana preparada en casa para que disfrute sabores auténticos durante su estancia.

---

### Excursions

Organizamos excursiones y actividades locales incluyendo visitas a plantaciones de tabaco y café, paseos a caballo y recorridos culturales.

---

### Accommodation

Nuestra casa está ubicada en un entorno privilegiado con vistas panorámicas de los mogotes de Viñales y espectaculares puestas de sol.

---

### Guest Access

Los huéspedes tienen acceso a todas las áreas comunes incluyendo:

- Terraza
- Jardín
- Parqueo
- Cocina
- Restaurante

---

### During Your Stay

Nos encanta compartir con nuestros huéspedes y ayudarles a descubrir lo mejor de Viñales.

Estaremos disponibles para:

- recomendaciones
- excursiones
- actividades
- apoyo durante la estancia

---

### Welcome Experience

A la llegada los huéspedes reciben:

- Cóctel de bienvenida
- Información local
- Recomendaciones
- Guía de excursiones

---

# GALLERY IMPLEMENTATION

Rename:

Marko Apartment Gallery

TO:

Villa Benito Gallery

Description:

Discover our home, the landscapes, sunsets and authentic Cuban experiences waiting for you in Viñales.

Gallery layout recommendation:

Masonry grid

Images:

- Terrace
- Rooms
- Sunset
- Garden
- Breakfast
- Mountains
- Horse riding
- Tobacco farms
- Guests relaxing

Technical requirements:

- lazy loading
- responsive images
- Astro Image optimization
- rounded corners
- hover animation

Use:

<Image />

Avoid plain img tags.

---

# SECTION B — VIÑALES ACTIVITIES GUIDE

Rename:

Apartment Sara

TO:

Viñales Activities Guide

Implementation recommendation:

Accordion OR cards layout.

Create categories.

---

## CATEGORY 1 — NATURALEZA Y AVENTURA

### Paseo a caballo por el Valle

Recorre senderos naturales entre los mogotes y paisajes rurales del Parque Nacional Viñales.

---

### Senderismo al Valle del Silencio

Caminata guiada con lagunas, cafetales y vistas espectaculares.

---

### Cueva del Indio

Explora una cueva iluminada que termina con paseo en lancha por río subterráneo.

---

### Gran Caverna de Santo Tomás

Sistema de cuevas más grande de Cuba.

Ideal para viajeros aventureros.

---

### Mirador de Los Jazmines

El mirador más famoso de Viñales para contemplar el valle y el atardecer.

---

## CATEGORY 2 — CULTURA Y TRADICIÓN

### Plantaciones de tabaco

Aprenda cómo se produce el auténtico tabaco cubano y conozca las tradiciones locales.

---

### Calle Salvador Cisneros

Recorrido por arquitectura colonial y casas tradicionales.

---

### Plaza Central

Vida nocturna, mojitos y música cubana.

---

### Clases de Salsa

Clases privadas y grupales con instructores locales.

---

### Jardín Botánico de la Caridad

Espacio natural con plantas tropicales y ambiente auténtico.

---

### Mercado Artesanal y Museo

Souvenirs y patrimonio local.

---

## CATEGORY 3 — GASTRONOMÍA Y PLAYA

### Paladares y fincas agroecológicas

Experiencia gastronómica tradicional con vistas al valle.

---

### Cayo Jutías

Excursión de playa:

- arena blanca
- aguas cristalinas
- manglares

---

# SECTION C — SERVICES & AMENITIES

Rename:

Services

TO:

Services & Amenities

Implementation:

Responsive icon grid.

Desktop:

3 columns

Tablet:

2 columns

Mobile:

1 column

Facilities:

- Air Conditioning
- Children Accepted
- Closet / Wardrobe
- Common Laundry
- Dance Lessons
- Electricity 110–220v
- Entrance 24h
- Fan
- Freezer
- Garage
- Hot Water
- Hair Dryer
- Kitchen
- Laundry Service
- Living Room
- Masseuse
- Restaurant
- Taxi
- Terrace

Add icons.

Card style:

rounded
soft shadow
hover effect

---

# LOCATION IMPLEMENTATION

Goal:

Help visitors understand:

- distance to center
- surroundings
- accessibility

Section title:

Find Us in Viñales

Description:

Located only 7 minutes from downtown Viñales in a peaceful natural setting surrounded by mountains and countryside landscapes.

Embed:

Google Maps

Add references:

- Viñales center
- National Park
- Mirador Los Jazmines
- Tobacco farms

---

# BOOKING SECTION

Goal:

Encourage direct booking.

Avoid:

Complex reservation systems.

Preferred:

WhatsApp booking.

Section title:

Book Your Stay in Viñales

Description:

Ready to experience authentic Cuba?

Reserve your stay directly with Hostal Benito.

Buttons:

Primary:

Book via WhatsApp

Secondary:

Send Booking Request

Recommended components:

- WhatsApp CTA
- Contact form
- Sticky CTA on mobile

---

# FOOTER IMPLEMENTATION

Replace existing footer.

New footer:

Villa Benito — Viñales, Cuba

Add:

- WhatsApp
- Email
- Address
- Social icons

Optional:

Quick links:

- Hostal Benito
- Activities
- Services
- Location

---

# VISUAL STYLE GUIDE

Colors:

Primary:

Warm beige

Secondary:

Tropical green

Accent:

Sunset orange

Neutral:

Earth brown

Background:

Off white

Avoid:

Corporate blue
Cold palettes
Neon colors

---

# TYPOGRAPHY

Titles:

Playfair Display

Alternative:

Lora

Body:

Inter

Fallback:

Open Sans

Style:

Elegant titles
Readable body text

---

# UX RULES

Prioritize:

- Large immersive photography
- Emotional storytelling
- Mobile first
- Fast loading
- Minimal navigation
- Clear CTAs

Do NOT create:

Complex booking engines

Overloaded menus

Corporate layouts

---

# PERFORMANCE IMPLEMENTATION

Use Astro image optimization.

Required:

<Image />

Enable:

lazy loading

responsive images

webp compression

Avoid:

plain img tags

---

# SEO IMPLEMENTATION

Keywords:

Viñales Cuba rental

Hostal in Viñales

Casa particular Viñales

Viñales accommodation

Viñales countryside stay

Cuba nature retreat

Meta title:

Hostal Benito | Countryside Stay in Viñales Cuba

Meta description:

Stay at Hostal Benito in Viñales, Cuba. Enjoy mountain views, authentic Cuban hospitality, local excursions and peaceful countryside accommodations.

Open Graph image:

Use terrace sunset image.

---

# FINAL EXPERIENCE GOAL

Visitor emotions:

peace

relaxation

curiosity

authenticity

connection with nature

desire to visit Cuba

confidence booking directly

The final site must feel:

less like a hotel

more like an authentic Cuban countryside experience.