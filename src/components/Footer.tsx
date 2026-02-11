import React from 'react';
import { Facebook, Instagram, Home, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, content } from '../data/content';

interface FooterProps {
  currentLanguage: 'hr' | 'en' | 'it';
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const footerContent = content.footer[currentLanguage];
  const nav = content.navigation[currentLanguage];
  const businessInfo = siteConfig.businessInfo[currentLanguage];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
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
            <a
              href={siteConfig.social.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-red-500/10 border-2 border-red-500/50 px-4 py-3 text-white hover:bg-red-500/20 hover:border-red-500 transition-all mb-6 shadow-lg shadow-red-500/20"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/30 text-red-200">
                <Home size={16} />
              </span>
              <span className="font-semibold">
                {footerContent.airbnbListing}
              </span>
            </a>
            {/* <div className="space-y-1 text-sm text-gray-400">
              <p className="text-xs">{businessInfo.registration}</p>
            </div> */}
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
                  onClick={() => scrollToSection('location')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {nav.location}
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
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerContent.followUs}
            </h4>
            <div className="space-y-3 mb-6">
              {/* <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-gray-800/70 px-3 py-2 text-gray-200 hover:bg-blue-600/20 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                  <Facebook size={16} />
                </span>
                <span>Facebook</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-gray-800/70 px-3 py-2 text-gray-200 hover:bg-pink-600/20 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600/20 text-pink-300">
                  <Instagram size={16} />
                </span>
                <span>Instagram</span>
              </a> */}
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 rounded-lg bg-gray-800/70 px-3 py-2 text-gray-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                  <Phone size={16} />
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="truncate hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-800/70 px-3 py-2 text-gray-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-300">
                  <MapPin size={16} />
                </span>
                <a
                  href="https://www.google.com/maps/place/Pri%C5%BEba+54,+20271,+Blato/@42.9060756,16.8002064,207m/data=!3m1!1e3!4m6!3m5!1s0x134a6c1368849825:0xfe0fced819adf75d!8m2!3d42.906447!4d16.8009027!16s%2Fg%2F11pzx9jlq6!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.address}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-800/70 px-3 py-2 text-gray-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/20 text-purple-300">
                  <Mail size={16} />
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="truncate hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 rounded-lg p-6 mb-8 border border-gray-700/50">
          <h4 className="text-sm font-semibold text-white mb-3">
            {footerContent.privacy}
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed">
            {(footerContent as any).privacyText}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-4">
          <p className="mb-2 md:mb-0">{footerContent.copyright}</p>
          <p className="text-xs text-gray-500">{footerContent.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
