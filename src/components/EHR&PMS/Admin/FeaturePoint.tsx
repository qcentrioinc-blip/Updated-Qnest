import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';
import {
  FEATURE_POINT_CONTENT,
  type FeatureItem,
  type UserRole,
} from './FeaturePointContent';

interface FeaturePointProps {
  role: UserRole; // admin | insuranceCoordinator
}

// --- Feature Item Component ---
const FeatureItemCard: React.FC<FeatureItem> = ({ title, description, image }) => (
  <div className="flex flex-col py-4 last:border-b-0">
    <div className="flex flex-col">
      <div className="flex flex-col items-start gap-3 mb-2">
        <img
          src={image}
          alt={title}
          className="w-8 h-8 object-contain"
        />
        <H3 className="text-[#00AA72] leading-tight">
          {title}
        </H3>
      
      <P className="leading-snug mt-1 lg:max-w-xl">
        {description}
      </P>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const FeaturePoint: React.FC<FeaturePointProps> = ({ role }) => {
  const content = FEATURE_POINT_CONTENT[role];

  return (
    <div className="h-auto bg-[#F9F9F9] dark:bg-[#141414] py-10">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        
        {/* Title */}
        <div className="mb-10 lg:mb-16">
          <H2 className="text-[#00AA72] dark:text-white leading-snug">
            {content.pageTitle}
          </H2>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16 lg:items-stretch items-start">
          
          {/* Image */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <img
              src={content.heroImage}
              alt="Feature visual"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>

          {/* Feature List */}
          <div className="lg:w-1/2 w-full flex flex-col justify-between">
            {content.features.map(item => (
              <FeatureItemCard key={item.id} {...item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturePoint;