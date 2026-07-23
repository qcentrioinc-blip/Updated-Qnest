import React from 'react';
import { H4, H2, P } from '../../../styles/Typography';

// Define the structure for the card content
interface TwoCardItem {
  id: number;
  bgColor: string;
  imagePath: string;
  mainText: string;
  subText: string;
  textColor: string; // ✅ new field for text color
}

const cardData: TwoCardItem[] = [
  {
    id: 1,
    bgColor: 'bg-[#F99526]', // Orange
    imagePath: '/HighTech/Careers/img6.png',
    mainText:
      "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
    subText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    textColor: 'text-black', // ✅ black text for first card
  },
  {
    id: 2,
    bgColor: 'bg-[#8338EC]', // Purple
    imagePath: '/HighTech/Careers/img7.png',
    mainText:
      "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
    subText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    textColor: 'text-white', // ✅ white text for second card
  },
];

const TwoCardBlock: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-6 sm:mx-auto ">
        {/* Headings */}
        <div className="mb-10 lg:mb-16">
          <H2 className="text-gray-900">Sed ut perspiciatis</H2>
          <H2 className="text-[#F99526] italic mt-2 md:mt-3 leading-tight">Unde Seduo ut perspiciatis</H2>
        </div>

        {/* Two-Card Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} w-full lg:w-1/2 rounded-xl shadow-2xl p-4 sm:p-5 lg:p-4 flex flex-col md:flex-row gap-4 transition-transform duration-300 hover:scale-[1.01]`}
              style={{ minHeight: '414px' }}
            >
              {/* Image */}
              <div
                className="
                  w-full md:w-2/5 
                  h-64 md:h-full 
                  flex-shrink-0 
                  overflow-hidden
                  rounded-t-lg 
                  md:rounded-l-lg md:rounded-tr-none md:rounded-bl-lg
                "
              >
                <img
                  src={card.imagePath}
                  alt={`Career opportunity visual ${card.id}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/277x394/${
                      card.id === 1 ? 'E0E0E0' : 'A0A0A0'
                    }/000000?text=Image+Placeholder`;
                  }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 flex flex-col justify-between py-2 pr-2">
                <H4 className={`${card.textColor} mb-4`}>{card.mainText}</H4>
                <P className={`${card.textColor} mt-auto`}>{card.subText}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoCardBlock;
