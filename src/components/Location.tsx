import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { siteConfig, content } from '../data/content';

interface LocationProps {
  currentLanguage: 'hr' | 'en';
}

const Location: React.FC<LocationProps> = ({ currentLanguage }) => {
  const nav = content.navigation[currentLanguage];

  return (
    <section id="location" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {nav.location}
          </h2>
          <p className="text-lg text-gray-600">
            {currentLanguage === 'hr'
              ? 'Smješteni blizu mora, Apartmani Markota pružaju jednostavan pristup lokalnim atrakcijama i prekrasnim plažama.'
              : 'Located near the sea, Apartmani Markota provide easy access to local attractions and beautiful beaches.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                {/* Placeholder for Google Maps - in production, use Google Maps embed */}
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {currentLanguage === 'hr'
                      ? 'Mappa Interattiva'
                      : 'Interactive Map'}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentLanguage === 'hr'
                      ? 'Integrazione Google Maps qui'
                      : 'Google Maps integration here'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin size={24} className="text-blue-600 mr-2" />
                {currentLanguage === 'hr' ? 'Indirizzo' : 'Address'}
              </h3>
              <p className="text-gray-600 mb-4">{siteConfig.contact.address}</p>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Navigation size={16} />
                <span>
                  {currentLanguage === 'hr'
                    ? 'Ottieni indicazioni'
                    : 'Get directions'}
                </span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {currentLanguage === 'hr'
                  ? 'Attrazioni Vicine'
                  : 'Nearby Attractions'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {currentLanguage === 'hr'
                      ? 'Centro di Firenze'
                      : 'Florence Center'}
                  </span>
                  <span className="text-sm text-gray-500">15 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {currentLanguage === 'hr'
                      ? 'Aeroporto di Firenze'
                      : 'Florence Airport'}
                  </span>
                  <span className="text-sm text-gray-500">12 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {currentLanguage === 'hr' ? 'Siena' : 'Siena'}
                  </span>
                  <span className="text-sm text-gray-500">45 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {currentLanguage === 'hr'
                      ? 'San Gimignano'
                      : 'San Gimignano'}
                  </span>
                  <span className="text-sm text-gray-500">35 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {currentLanguage === 'hr' ? 'Pisa' : 'Pisa'}
                  </span>
                  <span className="text-sm text-gray-500">80 km</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {currentLanguage === 'hr' ? 'Come Arrivare' : 'How to Get Here'}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>
                    {currentLanguage === 'hr' ? 'In Auto:' : 'By Car:'}
                  </strong>{' '}
                  {currentLanguage === 'hr'
                    ? 'Uscita A1 Firenze Sud, seguire indicazioni per il centro'
                    : 'A1 Florence South exit, follow signs to city center'}
                </p>
                <p>
                  <strong>
                    {currentLanguage === 'hr' ? 'In Treno:' : 'By Train:'}
                  </strong>{' '}
                  {currentLanguage === 'hr'
                    ? 'Stazione di Firenze SMN + taxi (20 min)'
                    : 'Florence SMN station + taxi (20 min)'}
                </p>
                <p>
                  <strong>
                    {currentLanguage === 'hr' ? 'In Aereo:' : 'By Plane:'}
                  </strong>{' '}
                  {currentLanguage === 'hr'
                    ? 'Aeroporto Amerigo Vespucci (12 km)'
                    : 'Amerigo Vespucci Airport (12 km)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
