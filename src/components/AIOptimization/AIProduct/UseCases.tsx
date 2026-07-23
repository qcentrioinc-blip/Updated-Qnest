'use client';

import { useState } from 'react';
import { H3 } from '../../../styles/Typography';

type Tab = {
  id: number;
  shortLabel: string;
  fullLabel: string;
  image: string;
  alt: string;
};

const TABS: Tab[] = [
  {
    id: 1,
    shortLabel: 'Customer Example 1',
    fullLabel: 'Customer Example 1 - GLOBAL REAL ESTATE FIRM',
    image: '/RealEstate-transformed.webp',
    alt: 'Global Real Estate Firm cost optimization visualization',
  },
  {
    id: 2,
    shortLabel: 'Customer Example 2',
    fullLabel: 'Customer Example 2 - AUSTRALIAN MINING COMPANY',
    image: '/Mining-transformed.webp',
    alt: 'Australian Mining Company optimization metrics',
  },
  {
    id: 3,
    shortLabel: 'Customer Example 3',
    fullLabel: 'Customer Example 3 - DIGITAL MARKETING FIRM',
    image: '/DigitalMarketing-transformed.webp',
    alt: 'Digital Marketing Firm cloud spend analysis',
  },
];

const ACTIVE_WIDTH = 700;
const INACTIVE_WIDTH = 300;

const UseCases = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  // ALWAYS safe (never undefined)


  return (
    <section className="w-full dark:bg-black py-10 px-[40px] md:px-[60px] xl:px-[160px]">
      <div className=" " style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>

        {/* SECTION HEADING */}
        <H3 className="text-[#009565] mb-10">
          Unoptimized to Optimized Cloud Spend
        </H3>

        {/* TABS */}
        <div className=" hidden lg:block sticky top-16 z-30  py-4">
          <div className="flex justify-center gap-4">
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-label={`View ${tab.fullLabel}`}
                  className={`
                    relative h-14 rounded-xl border font-quicksand text-sm sm:text-base
                    transition-[width,background-color] duration-500 ease-in-out
                    flex items-center overflow-hidden
                    ${isActive
                      ? 'bg-[#009565] text-white border-[#009565] shadow-lg'
                      : 'bg-white text-[#009565] border-[#009565] hover:shadow-md'
                    }
                  `}
                  style={{ width: isActive ? ACTIVE_WIDTH : INACTIVE_WIDTH }}
                >
                  {!isActive && (
                    <span className="absolute left-6 whitespace-nowrap">
                      {tab.shortLabel}
                    </span>
                  )}

                  {isActive && (
                    <span className="absolute left-6 whitespace-nowrap">
                      {tab.fullLabel}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="  rounded-xl  hidden lg:block overflow-hidden  ">
          <div className="relative w-full h-[800px]  overflow-hidden">

            {/* Cross-fade images (no white flash) */}
            {TABS.map((tab, index) => (
              <img
                key={tab.id}
                src={tab.image}
                alt={tab.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                // @ts-ignore
                fetchPriority={index === 0 ? "high" : "low"}
                className={`
                  absolute inset-0 w-full h-full object-contain
                  transition-opacity duration-500 ease-in-out will-change-[opacity]
                  ${tab.id === activeTab ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              />
            ))}
          </div>
        </div>
      </div>



      <div className="flex lg:hidden space-y-10 flex-col" style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}>

        {TABS.map(tab => (
          <div key={tab.id} className="flex flex-col">

            {/* TAB */}
            <div
              className="
                  h-14 flex items-center px-6
                  bg-[#009565] text-white
                  border border-[#009565]
                  font-quicksand text-sm
                "
            >
              {tab.fullLabel}
            </div>

            {/* IMAGE */}
            <div className="w-full mt-10 h-[300px] overflow-hidden">
              <img
                src={tab.image}
                alt={tab.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
