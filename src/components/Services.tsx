import React from 'react';
import * as Lucide from 'lucide-react';
import { content } from '../data/content';

interface ServicesProps {
  currentLanguage: 'hr' | 'en' | 'it';
}

// dynamic lookup will be used at render time; keep fallback if icon not found

const Services: React.FC<ServicesProps> = ({ currentLanguage }) => {
  const servicesContent = content.services[currentLanguage];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {servicesContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesContent.items.map((service, index) => {
            const IconComponent = (Lucide as any)[service.icon] as
              | React.ComponentType<any>
              | undefined;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {IconComponent ? (
                    <IconComponent size={28} className="text-white" />
                  ) : (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="rgba(255,255,255,0.9)"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
