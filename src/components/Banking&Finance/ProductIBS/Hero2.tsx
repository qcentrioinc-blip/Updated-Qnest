import React from 'react';
import { H1 } from '../../../styles/Typography';

const Hero2: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="relative w-full aspect-[16/10] md:aspect-video bg-white overflow-hidden flex flex-col md:flex-row">
        
        {/* 1. Left Sidebar (Blue) */}
        <div className="relative w-full md:w-1/4 bg-[#2563eb] p-6 md:p-10 flex flex-col justify-between z-20">
          {/* Top-left dark notch */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-[#0f172a] rounded-br-[2rem]" />
          
          <div className="mt-16 md:mt-24">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">dolor sit</h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
            <p className="text-blue-50 text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
        </div>

        {/* 2. Center Image Placeholder (Gray) */}
        <div className="relative w-full md:w-1/3 bg-[#e5e7eb] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Office Interior" 
            className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
          />
          {/* Floating blue square overlaying the image edge */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#2563eb] rounded-[1.5rem] hidden md:block z-30" />
        </div>

        {/* 3. Main Content Area (White/Text) */}
        <div className="relative flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
          
          {/* Headline */}
          <H1 className="font-extrabold mb-12">
            Lorem ips olor <br /> 
            onsectetur <br /> 
            adipis nsect
          </H1>

          {/* Overlapping Info Card (Light Blue) */}
          <div className="absolute bottom-36 -left-12 right-8 md:right-24 bg-[#60a5fa] rounded-[2.5rem] p-8 z-40 shadow-xl transform transition-transform hover:scale-[1.02]">
            <div className="flex items-start gap-4">
              {/* <div className="bg-white text-[#2563eb] w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 shadow-sm">
                S
              </div> */}
              <p className="text-[#1e3a8a] text-sm md:text-base font-medium leading-snug">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
            </div>
          </div>

          {/* Bottom Right Black Accent Block */}
          <div className="absolute bottom-0 right-0 w-3/4 h-[22%] bg-[#020617] rounded-tl-[3rem] flex items-center justify-center pl-8">
             <span className="text-white text-5xl md:text-7xl font-bold tracking-tighter opacity-90">
                dolor sit
             </span>
          </div>

          {/* Vertical Blue Accent (Right Edge) */}
          <div className="absolute top-0 right-0 w-14 h-1/2 bg-[#2563eb] rounded-bl-[2rem]" />
        </div>

        {/* Floating Accent (Far Bottom Right) */}
        <div className="absolute bottom-0 right-0 w-20 h-40 bg-[#2563eb] rounded-tl-[2.5rem] z-50 pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero2;