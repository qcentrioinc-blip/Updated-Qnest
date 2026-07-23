// 'use client';

// import React, { useState } from 'react';
// import { H1, P } from '../../../styles/Typography';
// import ContactDrawer from '../Navbar/ContactDrawer';
 

// const AdminHeroSection: React.FC = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   return (
//     <section className="relative dark:bg-[#141414] bg-white overflow-hidden">
//       {/* Decorative floating elements */}
     
      
//       {/* Main content container */}
//       <div className="px-[40px] md:px-[60px] xl:px-[160px] pt-16 lg:pt-28 ">
//         <div className="grid lg:grid-cols-2 gap-4   items-center ">
          
//           {/* Left content */}
//           <div className="space-y-8 z-10 max-w-3xl">
//             {/* Main heading with blue accent circle */}
//             <div className="relative ">
// <<<<<<< HEAD
// <H1EHR className="text-[#00AA72] mt-8 lg:mt-0   w-full">
// =======
// <H1 className="text-[#00AA72] mt-8 lg:mt-0   w-full">
//             </div>

//             {/* Description text with emoji */}
//             <div className="flex items-start gap-2 max-w-2xl tracking-wide">
//               <P className="font-medium ">
//                Streamline scheduling, billing, and reporting from one powerful dashboard. Simplify daily tasks and boost efficiency.
//               </P>
              
//             </div>

//             {/* CTA Button */}
//             <div>
//   <button
//   className="
//     group
//     flex items-center justify-center
//     w-auto h-[48px]
//     px-[24px] py-[12px]
//     rounded-[10px]
//     font-quicksand font-semibold text-[14px] tracking-wide
//      border-black  text-black
//     border 
//     transition-all duration-300 ease-in-out
    
//     hover:border-[#00AA72]
//     hover:border-b-[5px]
//     hover:-translate-y-[2px]
//     shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
//     cursor-pointer
//   "
// >
//   <span className="flex items-center gap-[8px]">
//     GET STARTED

//     <span className="relative flex items-center justify-center w-[20px] h-[20px]">
      
//       {/* Default Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="18"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
//       >
//         <path d="M7 7h10v10" />
//         <path d="M7 17L17 7" />
//       </svg>

//       {/* Hover Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="18"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//       >
//         <path d="M5 12h14" />
//         <path d="m12 5 7 7-7 7" />
//       </svg>

//     </span>
//   </span>
// </button>

// </div>

//           </div>

//           {/* Right side - Image placeholder */}
//           <div className="relative z-10">
          
//               {/* Image container - leave space for the actual image */}
//               <div className="relative w-[100%]   pt-10   overflow-hidden  flex items-center justify-center">
//                 <img
//                   src="/EHRIcons/Admin.svg"
//                   alt="Admin Hero"
//                   className="w-full h-full object-contain"
//                   loading="eager" 
//                 />
              
                 
//               </div>

//               {/* Decorative elements around image */}
               
            
//           </div>

//         </div>
//       </div>

//       <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
       
//     </section>
//   );
// };

// export default AdminHeroSection;