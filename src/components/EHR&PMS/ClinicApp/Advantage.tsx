import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// import GreenCircle from "/ClinicApp/GreenCircle.png";
import { H2,  H4, P } from "../../../styles/Typography";

const Advantage = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ["easeOut"],  
      },
    },
  };

  return (
    <section className="relative w-full overflow-visible bg-white py-10 sm:py-24 lg:py-32">
      <H2 className="font-bold text-[#166D48] mx-4 lg:mx-16 text-start mb-10 sm:mb-20 relative z-10">
        Sed ut perspiciatis Unde Seduo ut perspiciatis
      </H2>

     {/* <img
  src={GreenCircle}
  alt="Green Circle"
  className="absolute -bottom-10 md:-bottom-44 right-0
             w-[130px] sm:w-[200px] lg:w-[300px]
             z-20 pointer-events-none"
/> */}


    {/* DESKTOP VIEW — unchanged */}
<div className="relative bg-[#EDE4CA] rounded-xl max-w-8xl mx-4 lg:mx-16 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 hidden lg:block">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-12 relative z-10">
    {[1, 2].map((col) => (
      <motion.div
        key={col}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-md"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <H4 className="font-bold mb-4">
          Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
        </H4>

        <P className="leading-relaxed mb-14">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </P>

        <ul className="space-y-12">
          {[1, 2, 3].map((num) => (
            <motion.li
              key={num}
              className="flex items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: num * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-12 h-12 flex-shrink-0 bg-[#FFEFDD] rounded-full flex items-center justify-center text-sm font-semibold text-black border-green-950 border-1 shadow-sm mr-4"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#166D48",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {num}
              </motion.div>
              <P>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute 
              </P>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ))}

    
  </div>
 <motion.div 
 className="mt-16 sm:mt-24  text-center  max-w-5xl mx-auto relative z-10"
  variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }} >
     <H4 className=" leading-relaxed"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute Duis aute irure dolor in reprehendehenderit in vo 
      
     </H4>
      </motion.div>
</div>


{/* MOBILE VIEW — NEW SEPARATE CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-4 lg:hidden">
  {[1, 2].map((col) => (
    <motion.div
      key={col}
      className="bg-[#EDE4CA] rounded-xl p-6 shadow-sm"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-md"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      <H4 className="font-bold mb-4">
        Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
      </H4>

      <P className="leading-relaxed mb-10">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </P>

      <ul className="space-y-10">
        {[1, 2, 3].map((num) => (
          <motion.li
            key={num}
            className="flex items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: num * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-10 h-10 flex-shrink-0 bg-[#FFEFDD] rounded-full flex items-center justify-center text-sm font-semibold text-black border-green-950 border-1 shadow-sm mr-3"
              whileHover={{
                scale: 1.15,
                backgroundColor: "#166D48",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {num}
            </motion.div>
            <P>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </P>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  ))}


</div>

<div>
     <motion.div 
 className="mt-4 lg:hidden text-center mx-4 md:mx-0  max-w-4xl relative z-10"
  variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }} >
     <H4 className=" leading-relaxed">
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute Duis aute irure dolor in reprehendehenderit in
      
     </H4>
      </motion.div>
</div>

    </section>
  );
};

export default Advantage;


                                                              
