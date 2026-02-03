import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SEO from './components/SEO';
import { content } from './data/content';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'hr' | 'en'>('hr');

  // pageSeo can be overridden by sections (Gallery, Booking). Default to home.
  const [pageSeo, setPageSeo] = useState(
    () =>
      // prefer top-level seoPages if present, else undefined
      (content as any).seoPages?.home?.[currentLanguage],
  );

  // Reset pageSeo to default home when language changes
  useEffect(() => {
    const defaultSeo = (content as any).seoPages?.home?.[currentLanguage];
    setPageSeo(defaultSeo);
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-white">
      <SEO currentLanguage={currentLanguage} pageSeo={pageSeo} />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <main>
        <Hero currentLanguage={currentLanguage} />
        <About currentLanguage={currentLanguage} />
        <Gallery currentLanguage={currentLanguage} setPageSeo={setPageSeo} />
        <Services currentLanguage={currentLanguage} />
        <Booking currentLanguage={currentLanguage} setPageSeo={setPageSeo} />
        <Reviews currentLanguage={currentLanguage} />
        <Location currentLanguage={currentLanguage} />
        <Contact currentLanguage={currentLanguage} />
      </main>
      <Footer currentLanguage={currentLanguage} />
      <CookieBanner currentLanguage={currentLanguage} />
    </div>
  );
}

export default App;
