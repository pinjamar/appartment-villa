import React from 'react';
import { Facebook, Instagram, Home } from 'lucide-react';
import { siteConfig, content } from '../data/content';

interface FooterProps {
  currentLanguage: 'hr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const footerContent = content.footer[currentLanguage];
  const nav = content.navigation[currentLanguage];
  const businessInfo = siteConfig.businessInfo[currentLanguage];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/appartment-villa/Markota-crop.jpg"
                alt="Markota Logo"
                className="w-10 h-10 object-contain rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h3 className="text-xl font-bold">Apartmani Markota</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {footerContent.description}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{businessInfo.companyName}</p>
              <p>{businessInfo.vatNumber}</p>
              <p>{businessInfo.registration}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerContent.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about-2')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.booking}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.contact}
                </button>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerContent.followUs}
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Home size={20} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">{siteConfig.contact.phone}</p>
              <p className="text-gray-300">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h4 className="text-sm font-semibold text-white mb-3">
            {footerContent.privacy}
          </h4>
          <p className="text-xs text-gray-300">
            {(footerContent as any).privacyText}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{footerContent.copyright}</p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              {footerContent.cookies}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
