import { H1, H4, P } from "../../../styles/Typography";
import { useEffect, useRef } from 'react';

const TitleSec = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    // Add holographic effect on load
    setTimeout(() => {
      image.style.opacity = '1';
      image.style.filter = 'hue-rotate(0deg) brightness(1)';
    }, 100);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden text-white opacity-100 xl:px-8" 
      style={{
        backgroundImage: "url('/HighTech/ProductDetails/bg_img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay for Depth */} 
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* shape */}
      <div>
        <img
        src="/HighTech/Careers/shape1.png"
        alt="Background shape"
        className="absolute inset-0 w-full h-full top-[-450px] object-cover opacity-100 z-10 rotate-[180deg] left-[-50px] "
        style={{ transform: "scaleX(-1.5)" }}
      />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-8xl mt-40 mx-10 px-0 md:px-6 py-20 flex flex-col items-start text-left">
        {/* Small Heading */}
        <P className="text-white mb-2">Duis aute irure dolor in</P>

        {/* Main Heading */}
        <H1 className="mb-4 ">
          Sed ut perspiciatis{" "}
          <span className="text-[#F99526]">unde omnis iste natus</span>
        </H1>

        {/* Description Paragraphs */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-90 mt-8">
          {/* Left Paragraph */}
          <div className="max-w-md">
            <H4 className="text-white ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. occaecat cupidatat non.
            </H4>
          </div>

          {/* Right Paragraph */}
          <div className="max-w-md">
            <P className="text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. occaecat cupidatat non.
            </P>
          </div>
        </div>

        {/* === Decorative orange blur blobs === */}
        <div
            className="
              absolute 
              top-[-200px] sm:top-[-250px] lg:top-[-350px]
              left-[10px] sm:left-[20px] lg:left-[30px]
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]
              h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]
              bg-[#F99526] 
              opacity-50 
              blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]
              rounded-full 
              z-0 
              pointer-events-none
            "
          ></div>

                  {/* Top-right gradient */}
          <div
            className="
              absolute 
              top-[10px] sm:top-[20px] lg:top-[30px]
              right-[-200px] sm:right-[-300px] lg:right-[-400px]
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]
              h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]
              bg-[#F99526]
              opacity-50 sm:opacity-65 lg:opacity-70
              blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]
              rounded-full 
              z-0 
              pointer-events-none
            "
          ></div>

          {/* Bottom-left gradient */}
          <div
            className="
              absolute 
              bottom-[80px] sm:bottom-[100px] lg:bottom-[150px]
              left-[-80px] sm:left-[-100px] lg:left-[-150px]
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]
              h-[250px] sm:h-[200px] md:h-[250px] lg:h-[300px]
              bg-[#F99526]
              opacity-50 sm:opacity-65 lg:opacity-70
              blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]
              rounded-full 
              z-0 
              pointer-events-none
            "
          ></div>


        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center mt-14">
          {/* Right Shape (Behind Image) */}
          <img
            src="/HighTech/ProductDetails/shape1.png"
            alt="Decorative Shape"
            className="absolute right-[-20%] top-[150px] -translate-y-1/2 w-[60%] lg:w-[30%] h-auto object-contain z-0"
          />

          {/* Holographic Main Image */}
          <div className="relative z-10 w-full rounded-lg overflow-hidden">
            <img
              ref={imageRef}
              src="/HighTech/ProductDetails/img1.png"
              alt="Product Demo"
              className="w-full rounded-lg shadow-2xl opacity-0 transition-all duration-2000 ease-out"
              style={{
                filter: 'hue-rotate(90deg) brightness(1.3)',
                boxShadow: `
                  0 0 20px rgba(249, 149, 38, 0.6),
                  0 0 40px rgba(249, 149, 38, 0.4),
                  0 0 60px rgba(249, 149, 38, 0.2),
                  inset 0 0 50px rgba(249, 149, 38, 0.1)
                `,
                animation: 'hologramFloat 4s ease-in-out infinite'
              }}
            />
            {/* Scan lines overlay */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: `repeating-linear-gradient(
                  transparent,
                  transparent 2px,
                  rgba(249, 149, 38, 0.05) 2px,
                  rgba(249, 149, 38, 0.05) 4px
                )`,
                animation: 'scanMove 2s linear infinite'
              }}
            />
          </div>

          {/* Inline styles for animations */}
          <style>{`
            @keyframes hologramFloat {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-10px) scale(1.02); }
            }
            @keyframes scanMove {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TitleSec;