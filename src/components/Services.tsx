import React from 'react';
import * as Lucide from 'lucide-react';
import { content } from '../data/content';

interface ServicesProps {
  currentLanguage: 'es' | 'en' | 'fr' | 'cz';
}

// dynamic lookup will be used at render time; keep fallback if icon not found

const SolarPanelIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 2h2" />
    <path d="m14.28 14-4.56 8" />
    <path d="m21 22-1.558-4H4.558" />
    <path d="M3 10v2" />
    <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" />
    <path d="M7 2a4 4 0 0 1-4 4" />
    <path d="m8.66 7.66 1.41 1.41" />
  </svg>
);

const Services: React.FC<ServicesProps> = ({ currentLanguage }) => {
  const servicesContent = content.services[currentLanguage];
  const iconMap = Lucide as unknown as Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  >;

  return (
    <section id="services" className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {servicesContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {servicesContent.items.map((service, index) => {
            const isSolarPanel = service.icon === 'SolarPanel';
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={index}
                className={`relative rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  isSolarPanel
                    ? 'bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-300 shadow-md hover:shadow-lg'
                    : 'bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                {isSolarPanel && (
                  <span className="absolute top-3 right-3 text-xs font-semibold tracking-wide text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">
                    Plus
                  </span>
                )}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isSolarPanel
                      ? 'bg-gradient-to-br from-emerald-500 to-lime-500'
                      : 'bg-gradient-to-br from-blue-500 to-teal-600'
                  }`}
                >
                  {isSolarPanel ? (
                    <SolarPanelIcon size={28} className="text-white" />
                  ) : IconComponent ? (
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
