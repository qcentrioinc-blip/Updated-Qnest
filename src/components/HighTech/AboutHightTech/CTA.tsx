 
 
import {   ContactUsHigh } from "../../../styles/Button";
import { H2 } from "../../../styles/Typography";
// import redLight from "/AboutUs/UpScale.png"
const CTA = () => {
  return (
    <section className="relative bg-black text-center text-white py-16 m-0">
      {/* Red gradient image at top-left */}
      {/* <img
        src={redLight}
        alt="Red glow"
        className="absolute top-[-200px] left-[-100px] w-[300px] sm:w-[400px] md:w-[300px] rotate-[1deg] opacity-90 pointer-events-none select-none"
      /> */}

      {/* Text Content */}
      <div className="relative   max-w-5xl   mx-auto ">
        <H2 className="  font-extrabold leading-snug">
          Sed ut perspiciatis unde omnis
          <br />
          iste natus error sit{" "}
          <span className="italic  playfair text-[#8338EC]">
            voluptatem accusantium doloremque
          </span>
        </H2>

        {/* Button */}
        <div className="mt-4 items-center flex justify-center">
           <ContactUsHigh>Contact Us</ContactUsHigh>
        </div>
      </div>
    </section>
  );
};

export default CTA;
