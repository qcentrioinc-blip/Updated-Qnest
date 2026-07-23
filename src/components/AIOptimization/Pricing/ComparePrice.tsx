import { useState } from "react";
import { H2, H3, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

// Use this version instead of the one with w-full
export const ContactUsAI = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <div className="relative inline-block w-fit" onClick={handleClick}>
      <button
        className={`
          group
          flex items-center justify-center
          w-auto h-[36px] px-[80px]
          xl:px-[140px] py-[4px]
          rounded-[8px]
          font-quadran font-light text-[16px]
          bg-[#009565] text-white
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]
          ${className}
        `}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </button>
    </div>
  );
};


const ComparePrice = () => {
  const features = [
    { name: "Number of Users", includedStarter: true, includedEnterprise: true },
    { name: "Users Per Page", includedStarter: true, includedEnterprise: true },
    { name: "Includes essential features", includedStarter: true, includedEnterprise: true },
    { name: "More advanced features ", includedStarter: true, includedEnterprise: true },
    { name: "Designing & Development", includedStarter: false, includedEnterprise: true },
    { name: "Customizable options", includedStarter: false, includedEnterprise: true },
    { name: "Secure data storage", includedStarter: false, includedEnterprise: true },
    { name: "Email Support", includedStarter: false, includedEnterprise: true },
    { name: "24/7 customer support", includedStarter: false, includedEnterprise: true },
  ];
  
  const [modalOpen, setModalOpen] = useState(false);

  const renderCheckIcon = () => (
    <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full text-emerald-700"
        fill="currentColor"
      >
        <path d="M12 2l2.3 1.4 2.7-.3 1.4 2.3 2.3 1.4-.3 2.7L22 12l-1.4 2.3.3 2.7-2.3 1.4-1.4 2.3-2.7-.3L12 22l-2.3-1.4-2.7.3-1.4-2.3-2.3-1.4.3-2.7L2 12l1.4-2.3-.3-2.7 2.3-1.4 1.4-2.3 2.7.3L12 2z" />
        <path
          d="M7 12.5l3 3 7-7"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const renderCrossIcon = () => (
    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#A8102D] rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );

  return (
    <section className="">
      <div className="min-h-screen px-[40px] md:px-[60px] xl:px-[160px] flex flex-col pt-6">
        {/* Header Section */}
        <div className="w-full flex flex-col gap-4">
          <div className="text-center">
            <H2 className="text-[#141414]  mb-3 md:mb-4">
              Find Your Perfect Plan
            </H2>
            <P className="text-[#141414] text-center max-w-full md:max-w-[500px] mx-auto px-2">
              Discover the ideal CloudDIET plan to optimize your Azure environment. Our pricing is performance-based, meaning you only pay when we deliver savings.
            </P>
          </div>

          {/* Pricing Table */}
          <div className="w-full  rounded-3xl md:rounded-[64px] border-2 border-[#E7EBFF] overflow-hidden relative">

            {/* Desktop View - Grid Layout */}
            <div className="hidden lg:grid grid-cols-[280px_1fr_1fr] xl:grid-cols-[300px_1fr_1fr] 2xl:grid-cols-[320px_1fr_1fr]">
              
              {/* Left Column - Compare Plans */}
              <div className="border-r border-[#E6E9F5] p-6 xl:p-8 flex flex-col">
                <div className="pb-4 border-b border-gray-200">
                  <H3 className="text-[#009565]  leading-tight mb-3">
                    Compare plans
                  </H3>
                  <P className="text-[#141414] leading-relaxed">
                    Choose your plan according to your organizational scale.
                  </P>
                </div>

                <div className="flex-1 flex flex-col">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center min-h-[48px] py-2 border-b border-gray-100"
                    >
                      <span className="font-quadran font-normal text-sm md:text-base  text-[#141414] leading-tight">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column - Starter */}
              <div className="p-6 xl:p-8 bg-white  shadow-[0px_26px_40px_0px_#BCCAFF21] flex flex-col relative z-10">
                <div className="pb-4 border-b border-gray-200">
                  <H3 className="text-[#009565]  leading-tight mb-3">Starter</H3>
                  <P className="text-[#141414]  leading-relaxed">
                    Ideal for small to mid-sized teams beginning their Azure cost optimization journey.
                  </P>
                </div>

                <div className="flex-1 flex flex-col">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-center min-h-[48px] py-2 border-b border-gray-100"
                    >
                      {feature.includedStarter ? renderCheckIcon() : renderCrossIcon()}
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <ContactUsAI onClick={() => setModalOpen(true)}>
                    Get Started
                  </ContactUsAI>
                </div>
              </div>

              {/* Right Column - Enterprise */}
              <div className="p-6 xl:p-8 rounded-[46px] rounded-br-[52px] flex flex-col relative overflow-hidden bg-[#0095655E] ">
                {/* Decorative elements */}
                <div
                  className="absolute pointer-events-none z-0"
                  style={{
                    width: '968.66px',
                    height: '1122.36px',
                    top: '-59.36px',
                    left: '-132.17px',
                    background: 'linear-gradient(180deg, rgba(0,170,114,.35) 0%, rgba(0,170,114,.08) 100%)',
                    borderRadius: '50%',
                    border: '1px solid transparent',
                    backgroundClip: 'padding-box',
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute pointer-events-none z-0"
                  style={{
                    width: '968.66px',
                    height: '1122.36px',
                    top: '-59.36px',
                    left: '-132.17px',
                    borderRadius: '50%',
                    background: 'radial-gradient(103.58% 103.58% at 50% 50%, rgba(181, 194, 251, 0) 4.69%, #0095655E 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute pointer-events-none z-0"
                  style={{
                    width: '968.66px',
                    height: '1100px',
                    top: '-250px',
                    right: '10px',
                    background: 'linear-gradient(180deg, rgba(0,170,114,.30) 0%, rgba(255,255,255,.08) 100%)',
                    borderRadius: '50%',
                    border: '1px solid transparent',
                    backgroundClip: 'padding-box',
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute pointer-events-none z-0"
                  style={{
                    width: '968.66px',
                    height: '1100px',
                    top: '-250px',
                    right: '10px',
                    borderRadius: '50%',
                    background: 'linear-gradient(257.51deg, rgba(0,170,114,.55) 12.23%, rgba(0,170,114,0) 105.71%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                    opacity: 0.3,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-4 border-b border-[#E7EBFF]/60">
                    <H3 className="text-black mb-3">Enterprise</H3>
                    <P className="text-[#141414]">
                      Best for enterprises requiring advanced insights, unlimited subscriptions, and support.
                    </P>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-center min-h-[48px] py-2 border-b border-[#E7EBFF]/60"
                      >
                        {feature.includedEnterprise ? renderCheckIcon() : renderCrossIcon()}
                      </div>
                    ))}
                  </div>

                  <div className="mt-3">
                    <ContactUsAI onClick={() => setModalOpen(true)}>
                      Get Started
                    </ContactUsAI>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet View - Stacked Layout */}
            <div className="lg:hidden flex flex-col">
              {/* Compare Plans Header for Mobile */}
              <div className="p-6 md:p-10 border-b border-gray-200">
                <H3 className="text-[#009565] leading-tight mb-3">
                  Compare plans
                </H3>
                <P className="font-quadran font-normal text-sm md:text-base text-[#141414] leading-relaxed">
                  Choose your plan according to your organisational plan
                </P>
              </div>

              {/* Starter Plan Card - Mobile */}
              <div className="p-6 md:p-10 border-b border-[#E6E9F5]">
                <div className="mb-6">
                  <H3 className="text-[#009565]  leading-tight mb-3">Starter</H3>
                  <P className="text-[#141414] leading-relaxed">
                    Ideal for small to mid-sized teams beginning their Azure cost optimization journey.
                  </P>
                </div>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 py-2">
                      <div className="flex-shrink-0">
                        {feature.includedStarter ? renderCheckIcon() : renderCrossIcon()}
                      </div>
                      <span className="text-[#141414] leading-relaxed">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <ContactUsAI onClick={() => setModalOpen(true)}>
                    Get Started
                  </ContactUsAI>
                </div>
              </div>

              {/* Enterprise Plan Card - Mobile */}
              <div 
                className="p-6 md:p-10 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,170,114,.35) 0%, rgba(0,170,114,.08) 100%)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderImageSource: 'radial-gradient(103.58% 103.58% at 50% 50%, rgba(181, 194, 251, 0) 4.69%, #0095655E 100%)',
                  borderImageSlice: 1
                }}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <H3 className="text-black leading-tight mb-3">Enterprise</H3>
                    <P className="text-[#141414] leading-relaxed">
                      Best for enterprises requiring advanced insights, unlimited subscriptions, and support.
                    </P>
                  </div>

                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 py-2">
                        <div className="flex-shrink-0">
                          {feature.includedEnterprise ? renderCheckIcon() : renderCrossIcon()}
                        </div>
                        <span className="font-quadran font-normal text-sm md:text-base text-[#141414] leading-relaxed">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <ContactUsAI onClick={() => setModalOpen(true)}>
                      Get Started
                    </ContactUsAI>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default ComparePrice;