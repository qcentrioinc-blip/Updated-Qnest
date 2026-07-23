// import { Link } from "react-router-dom";
// import { ContactUs } from "../../styles/Button";
import { H2, P } from "../../styles/Typography";

const Intro = () => {
  return (
    <section className="w-full     py-6 xl:py-10">
      <div className="  max-w-7xl mx-auto px-4 xl:px-6">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <H2 className="mb-6 leading-tight">
              <span className="text-[#00AA72]">
                Complete banking technology stack{" "}
              </span>
              <span className="text-[#141414]">
                for modern institutions
              </span>
            </H2>

            <P className="text-base md:text-lg text-[#141414] mb-6 leading-relaxed">
              Qnest Banking & Finance is our comprehensive suite of solutions built for financial institutions worldwide. We combine core banking, loan management, payments, compliance, and lending products into one integrated technology ecosystem.
            </P>

            <P className="text-base md:text-lg text-[#141414] mb-8 leading-relaxed">
              We offer specialized products including Bankfair, PAGO, Sherlock, and Remitree. Each solution integrates seamlessly with your infrastructure.
            </P>
            {/* <Link
                            to="/marketplace"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
            <ContactUs className="inline-flex items-center gap-2">
              View All
            </ContactUs>
            </Link> */}

            {/* <Link to="/marketplace">
               <button
          className="
            group
            flex items-center justify-center
            w-auto h-[44px] sm:h-[48px]
            px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[14px] sm:text-[16px]
            bg-[#141414] text-white
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:bg-white hover:text-[#141414]
            hover:border-[#010101]
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
            "
        > 
        View All
          <span className="flex items-center gap-[8px]">
         
            <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
        </button>
        </Link> */}
          </div>


          {/* RIGHT SIDE IMAGE */}
          <div className="flex rounded-lg  ">
            <img
              src="/ImageSection.svg"
              alt="Banking Features"
              className="w-full  lg:max-w-xl h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
