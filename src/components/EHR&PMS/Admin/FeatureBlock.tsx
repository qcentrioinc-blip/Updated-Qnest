// "use client";
// import { useState, useEffect } from "react";
// import { H2, H3, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";
// import ContactDrawer from "../Navbar/ContactDrawer";

// /* FEATURE BLOCK */
// type FeatureBlockContent = {
//   heading: string;
//   cta: string;
//   features: {
//     title: string;
//     content: string;
//   }[];
// };

// type FeatureBlockSecProps = {
//   content: FeatureBlockContent;
// };


// const FeatureBlock = ({ title, content }: { title: string; content: string }) => (
//   <div className="flex flex-col items-start w-full">
//     <span className="text-6xl font-bold text-[#F99526] dark:text-white mb-8">+</span>
//     <H3 className="mb-3 dark:text-white">{title}</H3>
//     <P className=" text-base leading-relaxed">{content}</P>
//   </div>
// );

// export default function FeatureBlockSec({ content }: FeatureBlockSecProps) {

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const update = () => setIsDesktop(window.innerWidth >= 1024);
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return (
//     <>
//       <div className="h-auto bg-[#F4F4F4] dark:bg-[#141414]  py-10 ">
//         <div className="px-[40px] md:px-[60px] xl:px-[160px]">

//           {/* MOBILE / TABLET / iPAD PRO */}
//           {!isDesktop && (
//             <div className="flex flex-col gap-10">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// <<<<<<< HEAD
//                 <H2EHR className="text-[#00AA72] dark:text-white">
//                   {content.heading}
//                 </H2EHR>
// =======

//                   className="
//     group
//     px-6 h-12
//     rounded-lg
//     font-quadran   font-bold text-sm tracking-widest
//     bg-[#00AA72] text-white dark:bg-black dark:text-white
//     hover:bg-white hover:text-[#00AA72]
//     border-2 border-[#00AA72]
//     transition-all duration-300 ease-in-out
//     hover:border-b-[4px]
//     hover:-translate-y-[2px]
//     shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
//     cursor-pointer
//   "
//                 >
//                   <span className="flex items-center dark:bg-transparent gap-2">
//                     {content.cta}

//                     <span className="relative flex items-center justify-center w-[20px] h-[20px]">

//                       {/* Default Icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
//                       >
//                         <path d="M7 7h10v10" />
//                         <path d="M7 17L17 7" />
//                       </svg>

//                       {/* Hover Icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//                       >
//                         <path d="M5 12h14" />
//                         <path d="m12 5 7 7-7 7" />
//                       </svg>

//                     </span>
//                   </span>
//                 </button>

//                 {/* <ContactUs
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     setDrawerOpen(true);
//                   }}
//                   className="w-fit transition-transform hover:scale-105 active:scale-95"
//                 >
//                 {content.cta}
//                 </ContactUs> */}
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {content.features.map((item, index) => (
//                   <FeatureBlock
//                     key={index}
//                     title={item.title}
//                     content={item.content}
//                   />
//                 ))}
//               </div>

//             </div>
//           )}

//           {/* DESKTOP — EXACT ORIGINAL */}
//           {isDesktop && (
//             <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">

//               <div className="lg:w-2/5 flex flex-col items-start">
// <<<<<<< HEAD
//                 <H2EHR className="text-[#00AA72]">
//                   {content.heading}
//                 </H2EHR>
// =======
//                 <H2 className="text-[#00AA72]">
//                   {content.heading}
//                 </H2>
// >>>>>>> aravinddev


//                 <ContactUs
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     setDrawerOpen(true);
//                   }}
//                   className="w-fit mt-4 transition-transform hover:scale-105 active:scale-95"
//                 >
//                   {content.cta}
//                 </ContactUs>
//               </div>

//               <div className="lg:w-3/5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 mt-6 lg:mt-0">
//                   {content.features.map((item, index) => (
//                     <FeatureBlock
//                       key={index}
//                       title={item.title}
//                       content={item.content}
//                     />
//                   ))}
//                 </div>

//               </div>

//             </div>
//           )}

//         </div>
//       </div>

//       <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
//     </>
//   );
// }
