import { useState, useEffect } from "react";
import { ContactUsAI } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

export const prefetchAboutUsHeroImage = () => {
  const img = new Image();
  img.src = '/AIHero.webp';
};

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    prefetchAboutUsHeroImage();
  }, []);

  return (
    <section className="relative w-full lg:h-[40vh] xl:h-[80vh] overflow-hidden flex items-center">

      {/* BACKGROUND IMAGE */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/CloudDiet/Pricing/Hero.webp')" }}
/>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-[40px] md:px-[60px] xl:px-[160px] text-left text-white flex flex-col items-start mt-20">
        <H1 className="">
          PAY ONLY WHAT YOU SAVE
        </H1>

        <P className="text-white mt-3 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </P>

        <ContactUsAI className="my-4" onClick={() => setModalOpen(true)}>
          Start Saving
        </ContactUsAI>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
