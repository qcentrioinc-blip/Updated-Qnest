import { useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";
 
const cards = [
  {
    title: "Automate Patient Engagement Workflows",
    description:
      "Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
    image: "/EHR-PMS/Receptionist/img3.webp",
  },
  {
    title: "Automate Patient Engagement Workflows",
    description:
      "Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
    image: "/EHR-PMS/Receptionist/img4.webp",
  },
  {
    title: "Automate Patient Engagement Workflows",
    description:
      "Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
    image: "/EHR-PMS/Receptionist/img5.webp",
  },
];

const FeatureCards = () => {
     const [drawerOpen, setDrawerOpen] = useState(false);
   
  return (
    <section className="bg-white  dark:bg-[#141414] py-6">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
       
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <H2 className="text-[#00AA72]     mb-4">Your Command Center</H2>
          <P className="text-gray-600 text-sm">
            One unified dashboard gives you full control over patient scheduling, communication, and daily clinic operations. 
          </P>
        </div>
 
        {/* Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
  {cards.map((card, index) => (
    <div key={index} className="group">
      {/* Image */}
      <div className="overflow-hidden rounded-tl-[6rem]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="bg-white pt-5">
        <H4 className="text-[#2B2B2B] text-[28px] font-semibold leading-tight mb-3">
          {card.title}
        </H4>

        <P className="text-[#666666] text-base leading-7">
          {card.description}
        </P>
      </div>
    </div>
  ))}
</div>
      </div>
              <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};
 
export default FeatureCards;