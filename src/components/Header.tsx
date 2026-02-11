import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

interface HeaderProps {
  currentLanguage: 'hr' | 'en' | 'it';
  setCurrentLanguage: (lang: 'hr' | 'en' | 'it') => void;
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
  const languageLinks = [
    {
      code: 'hr',
      label: 'HR',
      href: baseUrl,
      flag: `${baseUrl}flags/hr.svg`,
      ariaLabel: 'Prebaci na hrvatski',
    },
    {
      code: 'en',
      label: 'EN',
      href: `${baseUrl}en/`,
      flag: `${baseUrl}flags/en.svg`,
      ariaLabel: 'Switch to English',
    },
    {
      code: 'it',
      label: 'IT',
      href: `${baseUrl}it/`,
      flag: `${baseUrl}flags/it.svg`,
      ariaLabel: "Passa all'italiano",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
            aria-label="Go to top"
          >
            <img
              src="/appartment-villa/Markota-crop.jpg"
              alt="Markota Logo"
              className="w-10 h-10 object-contain rounded-md hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold text-gray-900">
              Apartmani Markota
            </h1>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-700 font-semibold hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.contact}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="flex items-center space-x-2">
                {languageLinks.map((lang) => (
                  <a
                    key={lang.code}
                    href={lang.href}
                    aria-label={lang.ariaLabel}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-sm font-semibold transition-colors ${
                      currentLanguage === lang.code
                        ? 'border-blue-300 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt=""
                      className="w-5 h-3 rounded-sm"
                      aria-hidden="true"
                    />
                    <span>{lang.label}</span>
                  </a>
                ))}
              </div>
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
              <button
                onClick={() => scrollToSection('contact')}
                className="relative text-left text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
