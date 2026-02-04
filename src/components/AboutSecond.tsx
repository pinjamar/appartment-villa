import React from 'react';
import { Check } from 'lucide-react';
import { content } from '../data/content';

interface AboutSecondProps {
  currentLanguage: 'hr' | 'en';
}

const AboutSecond: React.FC<AboutSecondProps> = ({ currentLanguage }) => {
  const aboutContent = content.aboutSecond[currentLanguage];

  return (
    <section id="about-2" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutContent.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
