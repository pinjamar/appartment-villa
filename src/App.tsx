import React, { useState } from 'react';
import Header from './components/Header';
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

  return (
    <div className="min-h-screen bg-white">
      <Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <main>
        <Hero currentLanguage={currentLanguage} />
        <About currentLanguage={currentLanguage} />
        <Gallery currentLanguage={currentLanguage} />
        <Services currentLanguage={currentLanguage} />
        <Booking currentLanguage={currentLanguage} />
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