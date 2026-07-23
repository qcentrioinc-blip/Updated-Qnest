import { ArrowUpRight, ArrowRight } from "lucide-react";
import { H1,  P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";
 
const SubFooter = () => { 
  const location= useLocation();
  const currentPath= location.pathname;
 let heading = (
  <>
    Duis aute iru
    <span className="hidden sm:inline"><br /></span>  
    <span className="inline sm:hidden"> </span> 
    dolor
  </>
);

let buttonText = "BOOK A FREE DEMO";
if (currentPath === "/industries/high-tech/resources") {
  heading = (
    <>
      Subscribe to our <br /> news letter
    </>
  );
  buttonText = "STAY INFORMED";
}
  
  return (
    <footer 
      className="relative w-full overflow-hidden text-white"
      style={{
        background: 'linear-gradient(to right, #F99526, #8338EC)'
      }}
    >
      <div className=" sm:pb-10 md:pb-0 ">
        <div className="flex flex-col max-8xl  pl-4 md:flex-row items-center md:items-stretch lg:items-start justify-between relative">
          
          {/* Vertical Dashed Separator (visible on large screens only) */}
          <div 
            className="absolute inset-y-0 left-1/2 translate-x-1 border-1 border-solid border-white hidden md:block"  
            style={{ 
              height: '100%',
              borderLeftWidth: '3px',  
              borderImage: 'repeating-linear-gradient(to bottom, #fff, #fff 12px, transparent 10px, transparent 20px) 1',  
              borderImageSlice: 1  
            }}
          ></div>

          {/* Left Part: Text and Button */}
          <div className="w-full lg:w-1/2 z-10 space-y-4 text-center md:text-left py-10 lg:pl-14 lg:pt-24">
            <H1 className="font-bold leading-tight">
              {heading}
            </H1>
            <P className="max-w-md mx-auto md:mx-0 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
            </P>
            <div className="flex justify-center md:justify-start">
              <a
                href="/industries/high-tech/contactform"
                className="
                  group
                  flex items-start justify-center gap-2
                  w-[200px] h-[48px] 
                  px-[10px] py-[12px]
                  rounded-[8px]
                  font-bold
                  text-[16px] 
                  border-2 border-[#141414]
                  bg-black text-white
                  shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                  transition-all duration-300 ease-in-out
                  hover:bg-white hover:text-black
                "
              >
                {buttonText}
                <span className="relative flex items-center h-[15px] w-[15px]">
                  <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                  <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </a>
            </div>
          </div>

          {/* Horizontal Dashed Separator (visible on mobile/tablet only) */}
          <div 
            className="w-full md:hidden border-t-[3px] border-white my-4"  
            style={{ 
              borderImage: 'repeating-linear-gradient(to right, #fff, #fff 12px, transparent 10px, transparent 20px) 1',  
              borderImageSlice: 1  
            }}
          ></div>

          {/* Right Part: Abstract Image */}
          <div className="w-full lg:w-1/2   h-64 md:h-auto lg:h-[500px] flex   md:pt-0 lg:items-center justify-center relative">
            <img 
              src="/AboutUs/ClipHigh.png"
              alt="Abstract flowing lines"
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-right-bottom rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;