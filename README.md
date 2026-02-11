<h1 align="center">Markota Apartments</h1>
<h3 align="center">Vacation Rental Website</h3>

<p align="center">
  <em>Modern, responsive website for vacation rental properties</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Multi--Language-EN%2FHR%2FIT-4B8BBE?style=flat-square" alt="English/Croatian/Italian" />
</p>

---

## Overview

A customizable, modern, and responsive website for vacation rental properties. Built with Astro + React + TypeScript + Tailwind CSS. Features integrated booking system with WhatsApp integration, multi-language support (English/Croatian/Italian), and SEO optimization.

## Features

- **Multi-Language Support** - English (EN), Croatian (HR), and Italian (IT) with easy language switching
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

- **Framework**: Astro 5
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React

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

Edit [src/pages/index.astro](src/pages/index.astro):

Set `currentLanguage` to `hr`, `en`, or `it`.

### Update Content

All content is centralized in [src/data/content.ts](src/data/content.ts). Edit the text strings in Croatian (hr), English (en), or Italian (it) sections.

### Pricing Configuration

Modify pricing in [src/components/Booking.tsx](src/components/Booking.tsx):

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
├── data/                # Content and configuration (content.ts)
├── pages/               # Astro pages (index.astro, en/index.astro, it/index.astro)
├── styles.css           # Global styles
└── layouts/             # Astro layouts (if used)
```

## Languages

- **English (EN)**
- **Croatian (HR)**
- **Italian (IT)**
