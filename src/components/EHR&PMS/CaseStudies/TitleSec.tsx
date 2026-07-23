import { H1 } from "../../../styles/Typography";

const TitleSec = () => {
    return (
        <section
            className="relative w-full h-[100vh] overflow-visible flex items-center justify-center"
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)",
            }}
        >
            <H1>Case Studies</H1>
            {/* Decorative Shape - Slightly Above the Section */}
      <img
        src="/EHR-PMS/Blogs/shape1.png"
        alt="decorative shape"
        className="
          absolute
          -bottom-[20%]      
          right-[-20%]      
          opacity-100 
          pointer-events-none
          select-none
          object-contain
          rotate-[-90deg]
          sm:rotate-[-85deg]
          md:rotate-[-88deg]
          lg:rotate-[-90.86deg]
          z-5
          w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[680px] lg:h-[680px]
          max-w-none
        "
        style={{
          transformOrigin: 'center',
          zIndex: 0,
        }}
      />

        </section>
    );
}

export default TitleSec;