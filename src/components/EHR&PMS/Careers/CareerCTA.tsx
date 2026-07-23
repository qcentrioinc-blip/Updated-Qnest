import React from 'react';
import { H2, P } from '../../../styles/Typography';

const CareerCallToAction: React.FC = () => {
  const shapeImagePath = "/EHR-PMS/Careers/shape2.png";
  const GRADIENT_CLASSES =
    "bg-gradient-to-r from-white via-yellow-400 to-orange-500 text-transparent bg-clip-text";

  return (
    <div className="relative bg-[#34604C] py-12 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 overflow-visible">

      {/* Responsive absolute shape image */}
      <img
        src={shapeImagePath}
        alt="Decorative background shape"
        className={`
          absolute z-20 pointer-events-none select-none
          w-[150px] h-[150px] top-[-10px] right-[10px]  // xs
          sm:w-[200px] sm:h-[160px] sm:top-[-10px] sm:right-[20px]
          md:w-[250px] md:h-[200px] md:top-[-10px] md:right-[30px]
          lg:w-[300px] lg:h-[250px] lg:top-[-40px] lg:right-[50px]
        `}
        style={{
          transform: 'rotate(10deg)',
          opacity: 1,
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/200x150/4CAF50/FFFFFF?text=Shape";
        }}
      />

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto relative z-30 flex flex-col items-start">
        <H2 className={`mb-4 ${GRADIENT_CLASSES}`}>
          Didn't find what you are looking for?
        </H2>
        <P className="text-gray-200">
          Mail us your resume at{" "}
          <a
            href="mailto:abc@careers.com"
            className="text-orange-300 hover:underline"
          >
            abc@careers.com
          </a>
        </P>
      </div>
    </div>
  );
};

export default CareerCallToAction;
