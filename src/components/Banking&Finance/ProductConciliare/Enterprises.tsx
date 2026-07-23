// import { motion } from "framer-motion";
// import { H2, H4, P } from "../../../styles/Typography";

// import Image1 from "/Enterprise/Enterprise1.webp";
// import Image2 from "/Enterprise/Enterprise2.webp";
// import Image3 from "/Enterprise/Enterprise3.webp";
// import Image4 from "/Enterprise/Enterprise4.webp";

// const ENTERPRISES_DATA = [
//   {
//     id: 1,
//     title: " Data Acquisition From Multiple Sources",
//     description:
//       "Consolidate data from bank statements, Excel, PDFs, CSV, and proprietary reports into a single repository. ",
//     image: Image1,
//     type: "tall",
//   },
//   {
//     id: 2,
//     title: "Data Enrichment And Rule Configuration",
//     description:
//       "Apply rule-based enrichment to extract attributes and link consolidated transactions for accurate matching. ",
//     image: Image2,
//     type: "normal",
//   },
//   {
//     id: 3,
//     title: "Automated Reconciliation With Matching Rules",
//     description:
//       "Execute configurable matching rules and sequences to automatically identify matched and unmatched items. ",
//     image: Image3,
//     type: "normal",
//   },
//   {
//     id: 4,
//     title: "Case Management And MIS Reporting ",
//     description:
//       "Investigate exceptions, force matches, and generate comprehensive reports with full audit trails. Track investigation status and resolution progress through collaborative workflows.",
//     image: Image4,
//     type: "wide",
//   },
// ];

// const Enterprises = () => {
//   return (
//     <section className="max-w-7xl xl:mx-auto  w-full text-black py-10 px-4 md:px-8 xl:px-6">
//       {/* Heading */}
//       <div className="max-w-4xl mx-4 lg:mx-10 xl:mx-0 text-left mb-16">
//         <H2>
//           How Conciliare Works:
//           <br />
//           <span className="text-[#00AA72]">From Data to Decision</span>

//         </H2>
//       </div>

//       {/* ============================= */}
//       {/* DESKTOP GRID */}
//       {/* ============================= */}
//       <div className="hidden lg:grid grid-cols-3 gap-6 mx-10 xl:mx-0">
//         {ENTERPRISES_DATA.map((card, index) => {
//           // Tall Left Card
//           if (card.type === "tall") {
//             return (
//               <div
//                 key={card.id}
//                 className="bg-white rounded-lg p-6 flex flex-col border border-gray-500 row-span-2"
//               >
//                 <div>
//                   <H4 className="pt-0 text-[#00AA72]">
//                     {card.title}
//                   </H4>
//                   <P className="pt-4">{card.description}</P>
//                 </div>

//                 <motion.img
//                   src={card.image}
//                   alt={card.title}
//                   className="mt-4 rounded-md object-cover w-full lg:h-[520px] xl:h-[650px]"
//                   initial={{ opacity: 0, y: 100 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                 />
//               </div>
//             );
//           }

//           // Wide Bottom Card
//           if (card.type === "wide") {
//             return (
//               <div
//                 key={card.id}
//                 className="bg-white rounded-lg p-6 flex flex-col justify-between border border-gray-500 col-span-2"
//               >
//                 <div>
//                   <H4 className="pt-0 text-[#00AA72]">
//                     {card.title}
//                   </H4>
//                   <P className="pt-4">{card.description}</P>
//                 </div>

//                 <motion.img
//                   src={card.image}
//                   alt={card.title}
//                   className="mt-6 rounded-md object-cover w-full h-40 md:h-64 lg:h-48 xl:h-64"
//                   initial={{ opacity: 0, y: 100 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   viewport={{ once: true }}
//                 />
//               </div>
//             );
//           }

//           // Normal Cards
//           return (
//             <div
//               key={card.id}
//               className="bg-white rounded-lg p-6 flex flex-col justify-between border border-gray-500"
//             >
//               <div>
//                 <H4 className="pt-0 text-[#00AA72]">
//                   {card.title}
//                 </H4>
//                 <P className="pt-4">{card.description}</P>
//               </div>

//               <motion.img
//                 src={card.image}
//                 alt={card.title}
//                 className="mt-4 rounded-md object-cover w-full h-[150px]"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* ============================= */}
//       {/* MOBILE + TABLET SLIDER */}
//       {/* ============================= */}
//       <div className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-4">
//         {ENTERPRISES_DATA.map((card) => (
//           <div
//             key={card.id}
//             className="min-w-[80%] bg-white rounded-lg p-4 snap-center"
//           >
//             <H4 className="pt-0 text-[#00AA72]">
//               {card.title}
//             </H4>
//             <P className="pt-2">{card.description}</P>

//             <img
//               src={card.image}
//               alt={card.title}
//               className="mt-4 rounded-md object-cover w-full h-[350px]"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Enterprises;


// Enterprises.jsx

/*
Add to your index.html <head>:
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Quicksand:wght@400;500&display=swap" rel="stylesheet" />
*/

// Enterprises.jsx

/*
Add to your index.html <head>:
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=Quicksand:wght@400&display=swap" rel="stylesheet" />
*/

const Enterprises = () => {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-[74px] xl:py-[72px] box-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-6 xl:gap-12">

        {/* ────── LEFT COLUMN ────── */}
        <div className="flex flex-col gap-6 lg:gap-7 xl:gap-8 w-full lg:flex-1 lg:min-w-0">

          {/* Blue Badge */}
          <div className="flex items-center justify-center w-[260px] h-[56px] lg:w-[278px] lg:h-[60px] xl:w-[298px] xl:h-[64px] rounded-[40px] px-[10px] bg-[#00AA72] box-border">
            <span
              className="text-center text-[#FAFAFA] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] leading-none tracking-normal"
              style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 400 }}
            >
              Simple. Automated. Accurate.
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-[#2A2A2A] text-[36px] sm:text-[48px] lg:text-[52px] xl:text-[72px] leading-[105%] xl:leading-none tracking-normal font-bold m-0 w-full xl:w-[672px]"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            How Conciliare Works: From Data to Decision
          </h2>

          {/* Quote Box */}
          <div className="relative lg:top-20 xl:top-25 w-full lg:w-full xl:w-[620px] min-h-[240px] lg:min-h-[300px] xl:h-[391px] rounded-[20px] bg-[#D9D0C9] p-7 sm:p-10 lg:p-10 xl:px-[60px] xl:py-[80px] box-border flex flex-col justify-start gap-4 xl:gap-5">

            {/* Quote Image */}
            <img
              src="/BNFConsilier/quote.svg"
              alt="quote icon"
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[75px] xl:h-[75px] object-contain"
            />

            {/* Quote Paragraph */}
            <p
              className="w-full xl:w-[502px] text-[#141414] text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[150%] xl:leading-[140%] tracking-normal m-0"
              style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 400 }}
            >
              Configure data sources and file formats, define matching rules and execution sequences, then execute automated reconciliation jobs. The system matches transactions, flags exceptions, and provides case management tools for investigation and reporting.
            </p>
          </div>
        </div>

        {/* ────── RIGHT COLUMN ────── */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 flex-shrink-0">

          {/* ── Col 1: Tall Photo + Light Blue Logo Box ── */}
          <div className="flex flex-col gap-3 flex-1 lg:flex-none">

            {/* 1st Tall Image */}
            <div className="w-full sm:w-full lg:w-[250px] xl:w-[307px] h-[260px] sm:h-[360px] lg:h-[450px] xl:h-[578px] rounded-[24px] overflow-hidden flex-shrink-0">
              <img
                src="/BNFConsilier/how1.webp"
                alt="Woman working on laptop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Light Blue Logo Box */}
            <div className="w-full lg:w-[250px] xl:w-[307px] h-[160px] sm:h-[180px] lg:h-[200px] xl:h-[243px] rounded-[20px] bg-[#B3C8FF] flex flex-col items-center justify-center gap-2 box-border px-5 lg:px-[50px] xl:px-[87px] py-6 lg:py-[45px] xl:py-[68px]">
              <img
                src="/BNFConsilier/engineering1.svg"
                alt="engineering icon"
                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
              />
              <span
                className="text-[#152934] text-[18px] lg:text-[22px] xl:text-[30px] font-semibold leading-none tracking-normal text-center block w-full xl:w-[190px]"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Automate
              </span>
            </div>
          </div>

          {/* ── Col 2: Dark Navy Logo Box + Tall Photo ── */}
          <div className="flex flex-col gap-3 flex-1 lg:flex-none">

            {/* Dark Navy Logo Box */}
            <div className="w-full lg:w-[250px] xl:w-[307px] h-[160px] sm:h-[180px] lg:h-[200px] xl:h-[243px] rounded-[20px] bg-[#152934] flex flex-col items-center justify-center gap-2 box-border px-5 lg:px-[50px] xl:px-[87px] py-6 lg:py-[45px] xl:py-[68px]">
              <img
                src="/BNFConsilier/rotate.svg"
                alt="rotate icon"
                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
              />
              <span
                className="text-[#FAFAFA] text-[18px] lg:text-[22px] xl:text-[30px] font-semibold leading-none tracking-normal text-center block w-full xl:w-[190px]"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Streamline
              </span>
            </div>

            {/* 2nd Tall Image */}
            <div className="w-full lg:w-[250px] xl:w-[301px] h-[260px] sm:h-[360px] lg:h-[450px] xl:h-[577px] rounded-[24px] overflow-hidden flex-shrink-0">
              <img
                src="/BNFConsilier/how2.webp"
                alt="Two professionals working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Enterprises;

