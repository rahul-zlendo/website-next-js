'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface FeatureProps {
  data: {
    title: string;
    subtitle?: string;
    features?: {
      title?: string;
      description?: string;
      icon?: string;
    }[];
  };
}

const Features: React.FC<FeatureProps> = ({ data }) => {
  const { title, subtitle, features } = data;

  return (
    <section className="py-24 bg-white font-nunito">
      <div className="container-custom px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="container-custom px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features?.map((feature, index) => {
          const IconComponent = feature.icon && (LucideIcons as any)[feature.icon] 
            ? (LucideIcons as any)[feature.icon] 
            : null;

          return (
            <div 
              key={index}
              className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-zlendo-teal/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {IconComponent ? (
                  <IconComponent className="w-7 h-7 text-zlendo-teal" />
                ) : (
                  <div className="w-7 h-7 bg-zlendo-teal rounded-lg opacity-20" />
                )}
              </div>
              <h3 className="text-xl font-black text-zlendo-grey-dark mb-4 group-hover:text-zlendo-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
