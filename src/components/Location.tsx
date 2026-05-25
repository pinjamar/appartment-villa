import React from 'react';
import { MapPin, Navigation, Car, Bus, Phone } from 'lucide-react';
import { siteConfig, content, t } from '../data/content';
import { withBaseUrl } from '../utils/assetUrl';

interface LocationProps {
  currentLanguage: 'es' | 'en' | 'fr' | 'cz';
}

const Location: React.FC<LocationProps> = ({ currentLanguage }) => {
  const nav = t(content.navigation, currentLanguage);
  const loc = t(content.location, currentLanguage);
  const mapPoint = `${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}`;

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
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
                <div className="relative flex flex-col items-center">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/95 border-2 border-blue-500 shadow-lg p-1.5">
                    <img
                      src={withBaseUrl('benito_logo.jpg')}
                      alt="Benito logo"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="-mt-1 h-3 w-3 rotate-45 bg-blue-500" />
                </div>
              </div>
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="md:h-[520px]"
                src={`https://www.google.com/maps?q=${mapPoint}&output=embed`}
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
                href={siteConfig.contact.mapUrl}
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
