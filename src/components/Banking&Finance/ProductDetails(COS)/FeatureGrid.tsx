import React from 'react';
import { H2, P } from "../../../styles/Typography"; 

interface FeatureItemProps {
  number: string;
  text: string;
}

// Reusable component for the numbered feature items (no changes needed here)
const FeatureItem: React.FC<FeatureItemProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col py-2 sm:py-3 pr-1 sm:pr-2">
      <div className="flex items-start gap-4">
        
        {/* FULL HEIGHT RED LINE */}
        <div className="h-full border-l-4 border-[#00AA72]"></div>

        {/* Number + Text */}
        <div>
          <span className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
            {number}
          </span>

          <P className="mt-8 leading-snug">
            {text}
          </P>
        </div>

      </div>
    </div>
  );
};


export default function FeatureGrid() {
  return (
    // UPDATED: Adjusted min-height for 'sm' screens and reduced vertical padding 'sm:py-6'
    <div className="w-full min-h-[60vh] sm:min-h-[50vh] bg-white py-6 px-3 sm:px-6 md:px-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">

        {/* Column 1: Heading (Left Side) */}
        <div className="lg:col-span-1">
          <H2 className="leading-tight text-center lg:text-left text-[#00AA72] xl:mt-8">
            Why Choose CloudDIET Solutions
          </H2>
        </div>
        
        {/* Column 2: Paragraph and Feature Grid (Right Side) */}
        <div className="lg:col-span-1">
          <P className="mb-6 sm:mb-8 md:mb-14 md:mt-10 ">
            CloudDIET combines deep cloud engineering expertise with AI to deliver guaranteed Azure savings, without accessing your data or impacting performance. 
          </P>

          {/* Feature Items Grid */}
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-8 sm:gap-y-10 md:gap-y-12 max-w-md sm:max-w-lg mx-auto lg:mx-0">
            <FeatureItem number="01" text="Engineering-Led Insights " />
            <FeatureItem number="02" text="Guaranteed Cloud Savings " />
            <FeatureItem number="03" text="Zero Data Access " />
            <FeatureItem number="04" text="Rapid ROI Delivery " />
          </div>
        </div>
      </div>
    </div>
  );
}