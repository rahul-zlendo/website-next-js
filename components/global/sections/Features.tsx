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
    <section className="py-24 bg-gray-50/50 font-nunito border-y border-black/[0.03]">
      <div className="container-custom px-4 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-[48px] font-black text-zlendo-grey-dark mb-6 leading-tight tracking-tighter">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl text-gray-500 font-bold max-w-2xl mx-auto opacity-70">
            {subtitle}
          </p>
        )}
      </div>

      <div className={`container-custom px-4 grid grid-cols-1 md:grid-cols-2 ${features && features.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-8`}>
        {features?.map((feature, index) => {
          const IconComponent = feature.icon && (LucideIcons as any)[feature.icon] 
            ? (LucideIcons as any)[feature.icon] 
            : LucideIcons.CheckCircle2;

          return (
            <div 
              key={index}
              className="p-8 rounded-[32px] bg-white border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-zlendo-teal/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-zlendo-teal/5">
                <IconComponent className="w-7 h-7 text-zlendo-teal" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-zlendo-grey-dark mb-4 group-hover:text-zlendo-teal transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed opacity-70">
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
