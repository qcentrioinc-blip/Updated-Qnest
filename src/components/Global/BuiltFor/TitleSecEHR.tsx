import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { H1 } from "../../../styles/Typography";

const CONTENT_MAP: Record<string, { heading: ReactNode; image: string; altText: string }> = {
  "long-term-care": {
    heading: (
      <>
        Unified Care for <br /> Resident Wellbeing
      </>
    ),
    image: "/BuiltFor/LongTermEHR.webp",
    altText: "Unified Care for Resident Wellbeing",
  },
  "home-healthcare": {
    heading: (
      <>
        Care That Follows <br /> Patients Home
      </>
    ),
    image: "/BuiltFor/HomeHealthcareEHR.webp",
    altText: "Care That Follows Patients Home",
  },
  "clinics-and-hospitals": {
    heading: "Unified Care for Complex Health Systems",
    image: "/BuiltFor/ClinicsEHR.webp",
    altText: "Unified Care for Complex Health Systems",
  },
};

export default function TitleSecEHR() {
  const { builtForType } = useParams<{ builtForType: string }>();
  const content = CONTENT_MAP[builtForType ?? "long-term-care"] || CONTENT_MAP["long-term-care"];

  return (
    <section className="w-full  dark:bg-[#141414]  flex items-center justify-center py-6 md:py-8 lg:py-12 px-4 md:px-6 relative overflow-hidden">

      {/* Main Content Container - Based on design specs */}
      <div className="relative max-w-[1540px] w-full mx-auto flex flex-col items-center gap-6 md:gap-10 lg:gap-[58px] pt-24 md:pt-28 lg:pt-[200px]">

        {/* Title Section */}
        <div className="text-center max-w-5xl w-full">
          <H1 className="text-[36px] md:text-[52px] lg:text-[72px] leading-[110%] lg:leading-[100%] font-normal  text-[#00AA72]" style={{ fontFamily: "Bricolage Grotesque" }}>
            {content.heading}
          </H1>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-7xl">
          <img
            src={content.image}
            alt={content.altText}
            className="w-full h-auto max-h-[486px] object-cover rounded-[20px]"
            width="1012"
            height="486"
          />
        </div>

      </div>

    </section>
  );
}
