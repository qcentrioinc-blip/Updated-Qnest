import { useState,useEffect } from "react"
import {  H2, P } from "../../../styles/Typography"
 
const Banner = () => {
  const slides = [
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      image:"/Image1.jpg",
      
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      image:"/Image3.jpg",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      image:"/Image2.jpg",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const[fade,setFade]=useState(false);

  useEffect(()=>{
    const interval= setInterval(()=>{
      handleNext();
    },3000);
    return()=>clearInterval(interval);
  });

  const handleNext=()=>{
    setFade(true);
    setTimeout(()=>{
      setActiveIndex((prev)=>(prev+1)% slides.length);
      setFade(false);
    },400);
  }

  const handleManualChange = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
    }, 500);
  };

  return (
    <div className="bg-[#C1D7F3] w-full text-[#00AA72] p-10 lg:px-20 lg:py-20 flex flex-col items-center overflow-hidden">
      <H2 className="mb-10 text-left w-full mx-10">Sed ut perspiciatis</H2>

       
      <div className="flex flex-col lg:flex-row lg:items-end   items-center w-full">
        {/* IMAGE SECTION */}
        <div className="relative w-full lg:w-3xl flex flex-col  ">
          <img
            src={slides[activeIndex].image}
            alt="Banner"
            className={`rounded-lg w-full lg:w-[650px] h-64 md:h-[400px] object-cover transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Dots under image for mobile/tablet */}
          <div className="flex space-x-3 justify-center mt-4 lg:hidden">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white scale-125" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-lg  mt-6 lg:mt-0 flex flex-col">
          {/* For desktop: paragraph before dots; for mobile: after dots handled above */}
          <P
            className={`text-black mb-6 leading-tight md:px-10 lg:px-0    px-4 text-justify duration-500 lg:text-left "
            }`}
          >
            {slides[activeIndex].text}
          </P>

          {/* Dots for desktop */}
          <div className="hidden lg:flex space-x-3 justify-start md:justify-end">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white scale-125" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;