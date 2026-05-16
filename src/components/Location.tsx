import React from 'react';
import { MapPin, Navigation, Car, Bus, Phone } from 'lucide-react';
import { siteConfig, content, t } from '../data/content';

interface LocationProps {
  currentLanguage: 'es' | 'en' | 'fr' | 'cz';
}

const Location: React.FC<LocationProps> = ({ currentLanguage }) => {
  const nav = t(content.navigation, currentLanguage);
  const loc = t(content.location, currentLanguage);

  return (
    <section id="location" className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {nav.location}
          </h2>
          <p className="text-lg text-gray-600">
            {loc.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Map and Address */}
          <div className="space-y-4 md:space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="md:h-[520px]"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2s!4v1644507200000`}
              />
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin size={24} className="text-blue-600 mr-2" />
                {loc.addressLabel}
              </h3>
              <p className="text-gray-600 mb-4">{siteConfig.contact.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Navigation size={16} />
                <span>{loc.openInMaps}</span>
              </a>
            </div>
          </div>

          {/* Right Column: How to Get Here */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {loc.howToGetHere}
              </h3>
              <div className="space-y-2 md:space-y-3 text-gray-600">
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-green-100 rounded-lg p-1 md:p-2">
                      <Car size={16} className="md:w-5 md:h-5 text-green-600" />
                    </div>
                    {loc.byCar.label}
                  </strong>{' '}
                  <span>{loc.byCar.text}</span>
                </p>
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-purple-100 rounded-lg p-1 md:p-2">
                      <Bus size={16} className="md:w-5 md:h-5 text-purple-600" />
                    </div>
                    {loc.byBus.label}
                  </strong>{' '}
                  <span>{loc.byBus.text}</span>
                </p>
                <p>
                  <strong className="flex items-center gap-1 md:gap-2">
                    <div className="bg-cyan-100 rounded-lg p-1 md:p-2">
                      <Phone size={16} className="md:w-5 md:h-5 text-cyan-600" />
                    </div>
                    {loc.byTransfer.label}
                  </strong>{' '}
                  <span>{loc.byTransfer.text}</span>
                </p>

                <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg p-3 md:p-4">
                  <p className="text-amber-900 text-xs md:text-sm">
                    <strong>📌 {loc.tip}</strong>
                  </p>
                  <p className="text-amber-900 text-xs md:text-sm mt-2">
                    {loc.tipText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
