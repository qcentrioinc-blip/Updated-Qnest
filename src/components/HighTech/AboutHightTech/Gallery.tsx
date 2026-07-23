import { H2, P } from "../../../styles/Typography";

const Gallery = () => {
  return (
    <section className="w-full bg-white text-black py-16 md:py-20">
      <div className="max-w-8xl lg:mx-10 grid grid-cols-1 xl:grid-cols-[1.9fr_1.2fr] gap-12 px-6 md:px-6 items-start">
        
        {/* === Left Column: Text Content === */}
        <div className="flex flex-col md:justify-between h-full   min-h-fit xl:min-h-[600px]">
          {/* Top Text Block */}
         <div className="space-y-4  ">

            <H2 className="font-semibold leading-tight">
              Sed ut perspiciatis Sed ut <br className="hidden sm:inline" /> 
              <span className="text-[#F99526] font-semibold playfair italic">
                Unde Sed  ut perspiciatis
              </span>
            </H2>
            <P className="pt-6  lg:pr-20  leading-snug">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
            </P>
      

          
            <P className=" py-10 xl:pt-20 xl:pr-20 leading-snug">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
            </P>
                </div>
          
        </div>

        {/* === Right Column: Image Gallery === */}
        <div className="flex flex-col space-y-6 relative">
          
          {/* Top Image */}
          <div className="-mt-8">
            <img 
              src="/Gallery/Gallery3.png"  
              alt="Group of three people smiling"
              className="w-full h-[350px] rounded-lg object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Bottom Grid Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/Gallery/Gallery2.png"  
              alt="Event setup"
              className="w-full h-[280px] object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src="/Gallery/Gallery1.png"  
              alt="Trophy display"
              className="w-full h-[280px] object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
