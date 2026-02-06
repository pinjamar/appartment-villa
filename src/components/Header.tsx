import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

interface HeaderProps {
  currentLanguage: 'hr' | 'en';
  setCurrentLanguage: (lang: 'hr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = content.navigation[currentLanguage];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  const rawBase = import.meta.env.BASE_URL || '/';
  const baseUrl = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const langHref = currentLanguage === 'hr' ? `${baseUrl}en/` : baseUrl;
  const flagSrc =
    currentLanguage === 'hr'
      ? `${baseUrl}flags/hr.svg`
      : `${baseUrl}flags/en.svg`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/appartment-villa/Markota-crop.jpg"
              alt="Markota Logo"
              className="w-10 h-10 object-contain rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-xl font-bold text-gray-900">
              Apartmani Markota
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.about}
            </button>
            <button
              onClick={() => scrollToSection('about-2')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.services}
            </button>
            {/* <button
              onClick={() => scrollToSection('availability')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {nav.availability}
            </button> */}
            <button
              onClick={() => scrollToSection('location')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.location}
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.booking}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <a
                href={langHref}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                aria-label={
                  currentLanguage === 'hr'
                    ? 'Switch to English'
                    : 'Prebaci na hrvatski'
                }
              >
                <img
                  src={flagSrc}
                  alt=""
                  className="w-5 h-3 rounded-sm"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold">
                  {currentLanguage === 'hr' ? 'HR' : 'EN'}
                </span>
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.about}
              </button>
              <button
                onClick={() => scrollToSection('about-2')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.services}
              </button>
              <button
                onClick={() => scrollToSection('availability')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.availability}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.location}
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.booking}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
