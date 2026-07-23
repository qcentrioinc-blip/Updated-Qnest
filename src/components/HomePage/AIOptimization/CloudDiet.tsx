import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { ContactUsAI } from "../../../styles/Button";
import { H2 } from "../../../styles/Typography";

const CloudDiet = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#fafafa]  sm:py-10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-40">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-3 max-w-[650px]">
              {/* Top Text */}
              <p
                className="font-quadran text-base sm:text-lg lg:text-xl"
                style={{
                  lineHeight: "110%",
                  color: "#00AA72",
                }}
              >
                Ready to optimize your Azure spend?
              </p>

              {/* Heading */}
              <H2 className="leading-tight">
                Start saving with CloudDIET today.
              </H2>

              {/* CTA */}
              <div>
                <ContactUsAI
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(true);
                  }}
                  className=""
                >
                  Book Your Demo
                </ContactUsAI>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex items-center justify-center xl:justify-end">
              <div className="relative flex justify-center">
                <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                  <img src= "/CloudDiet/Features/Clouddiet.jpg" alt="CloudDIET Logo" className="h-20 sm:h-24 lg:h-32 w-auto" />

                  {/* <h3 className="font-quadran font-medium text-black  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
                    Cloud<span className="font-medium">DIET</span>
                  </h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default CloudDiet;