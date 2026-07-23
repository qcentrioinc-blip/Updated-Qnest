import { H1 } from "../../../styles/Typography";

const TitleSec = () => {
  return (
    <section className="relative w-full  h-[71vh] md:h-[51vh] xl:h-screen">
      {/* Background image with dark overlay */}
      <img
        src="/WhitePapers/bg_img.png"
        alt="Section Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> 

      {/* Text content */}
      <div className="relative z-10 flex items-center h-full px-8 sm:px-16 md:px-24">
        <H1 className="text-white max-w-3xl">
          Sed ut perspiciatis <br/>unde omnis iste natus
        </H1>
      </div>
    </section>
  );
};

export default TitleSec;