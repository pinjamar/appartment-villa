<h1 align="center">Markota Apartments</h1>
<h3 align="center">Vacation Rental Website Template</h3>

<p align="center">
  <em>Modern, responsive template for vacation property websites</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Multi--Language-EN%2FHR-4B8BBE?style=flat-square" alt="English/Croatian" />
</p>

---

## Overview

A customizable, modern, and responsive website template for vacation rental properties. Built with React + TypeScript + Vite + Tailwind CSS. Features integrated booking system with WhatsApp integration, multi-language support (English/Croatian), and SEO optimization.

## Features

- **Multi-Language Support** - English (EN) and Croatian (HR) with easy language switching
- **Booking System** - Interactive booking form with WhatsApp integration and real-time price calculation
- **Dynamic Pricing** - Seasonal rates with automatic calculation based on stay dates
- **Photo Gallery** - Interactive lightbox gallery with smooth navigation
- **Responsive Design** - Mobile-first approach, works on all devices
- **SEO Optimized** - Meta tags, structured data (Schema.org), Open Graph support
- **Calendar View** - Visual availability calendar with season indicators
- **Guest Reviews** - Rating system and testimonials display
- **Contact Forms** - Direct email integration via mailto
- **Cookie Consent** - GDPR-compliant cookie banner
- **Performance Optimized** - Built with Vite for fast build times and hot module replacement

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Date Utilities**: date-fns
- **Code Quality**: ESLint + TypeScript ESLint

## Quick Start

```bash
git clone https://github.com/pinjamar/appartment-villa
cd appartment-villa
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Customization

### Change Language Default

Edit [src/App.tsx](src/App.tsx):

```tsx
const [currentLanguage, setCurrentLanguage] = useState<'hr' | 'en'>('hr'); // Change 'hr' to 'en'
```

### Update Content

All content is centralized in [src/data/content.ts](src/data/content.ts). Simply edit the text strings in Croatian (hr) or English (en) sections.

### Pricing Configuration

Modify pricing in [src/utils/pricingUtils.ts](src/utils/pricingUtils.ts):

- Low season: €180/night (July-August)
- High season: €250/night (rest of year)
- Cleaning fee: €80
- Tourist tax: €2.50/person/night

### Contact Information

Update site details in [src/data/content.ts](src/data/content.ts) under `siteConfig.contact`

## Project Structure

```
src/
├── components/          # React components (Header, Hero, Gallery, etc.)
├── data/               # Content and configuration (content.ts)
├── utils/              # Utility functions (pricing calculations)
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Languages

- **English (EN)** - Default secondary language
- **Croatian (HR)** - Primary language with toggle in header
