import React from "react";
import { H4, P } from "../../../styles/Typography";

type OverviewItem = {
  title: string;
  description: string;
  image:string;
};

const items: OverviewItem[] = [
  {
    title: "Truly Unified",
    description:
      "Our platform integrates clinical, administrative, and financial workflows into one seamless platform.   ",
  image:"/EHRIcons/HandsTogether.svg",
},
  {
    title: "Exceptional Support",
    description:
      "We provide 24/7/365 support with rapid response and zero server downtime for your practice.   ",
   image:"/EHRIcons/UserHeadset.svg",
},
  {
    title: "Proven Efficiency",
    description:
      "Unified Clinicapp streamlines documentation and billing for faster workflows and revenue. ",
   image:"/EHRIcons/Tachometer.svg",
},
];

const Overview: React.FC = () => {
  return (
   <section className="w-full bg-[#089768] py-16  ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px] ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((item, index) => (
           <div
  key={index}
  className="relative bg-white  rounded-none overflow-hidden rounded-bl-[5rem] shadow-sm px-8 py-8 min-h-[280px]"
>
  {/* Bottom Left Curved Cut */}
  

  <div className="flex flex-col gap-5">
    <img
      src={item.image}
      alt={item.title}
      className="w-12 h-12 object-contain"
    />

    <H4 className="text-[#0F9D7A] ">
      {item.title}
    </H4>

    <P className="text-[#5F6368] leading-7">
      {item.description}
    </P>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
