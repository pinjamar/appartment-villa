import React from 'react';
import { content, t } from '../data/content';
import { withBaseUrl } from '../utils/assetUrl';

interface AboutProps {
  currentLanguage: 'es' | 'en' | 'fr' | 'cz';
}

const About: React.FC<AboutProps> = ({ currentLanguage }) => {
  const aboutContent = content.about[currentLanguage];

  return (
    <section id="about" className="py-4 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.description}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {aboutContent.features.map((feature, index) => (
                <span key={index} className="px-3 py-1.5 rounded-full bg-white border border-blue-200 text-sm font-medium text-blue-800 shadow-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src={withBaseUrl('marko1.jpg')}
              alt="Villa Benito Interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
