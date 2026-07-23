import { H2, P } from "../../../styles/Typography";

const ImageShowcaseSection = () => {
  const images = [
    "/EHR-PMS/Nurse/Img11.jpg",
    "/EHR-PMS/Nurse/Img12.jpg",
    "/EHR-PMS/Nurse/Img13.jpg",
    "/EHR-PMS/Nurse/Img14.jpg",
    "/EHR-PMS/Nurse/Img15.webp",
  ];

  // We double the images to create a seamless infinite loop
  const scrollImages = [...images, ...images];

  return (
    <section className="bg-[#00AA72] py-6  dark:bg-[#141414] ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="relative bg-white dark:bg-teal-900 rounded-[32px] py-8 overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 px-6 sm:px-10">
            <H2 className="text-[#00AA72] dark:text-white mb-4">Ready to Transform? </H2>
            <P className="text-[#141414] leading-relaxed mb-40">
              Join the nurses who have streamlined their workflow with Unified Clinicapp. See firsthand how our tools reduce documentation time, improve coordination, and support safer patient care. Schedule your personalized demo today. 
            </P>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative w-full overflow-hidden">
            {/* The "Track" container:
                - flex: layout images side by side
                - animate-marquee: the custom animation defined below
            */}
            <div className="flex w-max animate-marquee  hover:pause-animation transition-all">
              {scrollImages.map((src, index) => (
                <div 
                  key={index} 
                  className="w-64 h-64 sm:w-80 sm:h-80 mx-3 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`Showcase ${index}`}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CSS for Performance & Animation */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              will-change: transform;
            }
            .hover\\:pause-animation:hover {
              animation-play-state: paused;
            }
          `}} />
          
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;