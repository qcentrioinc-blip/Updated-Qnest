import { motion } from "framer-motion";
import { H2,  H4, P } from "../../../styles/Typography";

const ImageWithCards = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="bg-white  dark:bg-black overflow-hidden">
      <div className="max-w-7xl  px-8 xl:px-6 py-6 xl:py-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="rounded-sm overflow-hidden order-2 lg:order-1"
          >
            <img
              src="/ProductIBS/img1.webp"
              alt="Professional interaction"
              className="w-full h-150 md:h-203 xl:h-190 object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between order-1 lg:order-2">

            {/* TOP TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <H2 className="text-[#00AA72] mb-4 ">
                 Comprehensive Account Services for Customers 
              </H2>

              <P className=" max-w-lg mb-6">
                Customers can manage accounts, view transactions, and access banking services through a unified interface.
              </P>

              <hr className="border-[#010101]" />
            </motion.div>

            {/* CARDS GRID */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >

              {/* Card 1 */}
             <motion.div
  variants={{
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }}
  className="bg-[#F1F1F1] dark:bg-slate-950 rounded-2xl p-6"
>
  {/* Icon */}
  <img
    src="/ProductIBS/icon14.svg"
    alt="Faster Patient Intake"
    loading="lazy"
    className="w-10 h-10 mb-4 object-contain rounded-2xl"
  />

  <H4 className="font-semibold dark:text-white mb-2">Account Summary View</H4>

  <P className="text-sm text-gray-600">
    View account balances, transaction history, and account details across all linked accounts
  </P>
</motion.div>


              {/* Card 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                className="bg-[#F1F1F1] dark:bg-slate-950 rounded-2xl p-6"
              >
                {/* Icon */}
  <img
    src="/ProductIBS/icon15.svg"
    alt="Faster Patient Intake"
    loading="lazy"
    className="w-10 h-10 mb-4 object-contain"
  />
                <H4 className="dark:text-white font-semibold mb-2">Statement Download Options</H4>
                <P className="text-sm text-gray-600">
                  Download account statements in multiple formats for record keeping and analysis
                </P>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                className="bg-[#F1F1F1] dark:bg-slate-950 rounded-2xl p-6"
              >
                {/* Icon */}
  <img
    src="/ProductIBS/icon16.svg"
    alt="Faster Patient Intake"
    loading="lazy"
    className="w-10 h-10 mb-4 object-contain"
  />
                <H4 className="dark:text-white font-semibold mb-2">Cheque Book Requests </H4>
                <P className="">
                  Request new cheque books and track delivery status through the platform
                </P>
              </motion.div>

              {/* Circular Stat Card */}
              <motion.div
  variants={{
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }}
  className="bg-[#F1F1F1] dark:bg-slate-950 rounded-2xl p-6 flex items-center gap-6"
>
  {/* CIRCLE */}
  <div className="relative w-36 h-36 shrink-0">
    {/* Base Ring */}
    <div className="absolute inset-0 rounded-full border-[10px] border-[#81a1d2]" />

    {/* Ring 1 */}
    <div
      className="absolute inset-0 rounded-full border-[10px] border-[#00AA72] border-t-transparent border-r-transparent will-change-transform"
      style={{ transform: "rotate(45deg)" }}
    />

    {/* Ring 2 */}
    <div
      className="absolute inset-0 rounded-full border-[10px] border-[#0F344B] border-t-transparent border-r-transparent will-change-transform"
      style={{ transform: "rotate(290deg)" }}
    />

    {/* Center Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center font-quadran  ">
      <span className="text-3xl dark:text-white font-semibold leading-none">24/7 </span>
      <span className="text-xs dark:text-white text-gray-500">Availability</span>
    </div>
  </div>

  {/* LIST */}
  <ul className="text-sm text-gray-600  dark:text-white space-y-2 font-quadran  ">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#00AA72] shrink-0" /> Balance 
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#00AA72] shrink-0" /> History 
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-slate-700 shrink-0" /> Statements 
    </li>
  </ul>
</motion.div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImageWithCards;
