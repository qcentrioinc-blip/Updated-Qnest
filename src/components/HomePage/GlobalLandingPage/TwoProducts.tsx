import { ArrowRight } from "lucide-react";

import { H2, H3, P } from "../../../styles/Typography";
 

const products = [
  {
    id: 1,
    title: "CIP and CDD",
    link: "/industries/banking-and-finance/products/CIP",
    description:
      "Digitizes and standardizes customer onboarding with automated risk assessment and screening.",
    image: "/ProductKYC.webp",
    imageAlt: "Woman with laptop and credit card",

    // Hard-coded layout control
    imageWidth: "w-[46%]",
    imageHeight: "h-auto",
    imagePosition: "right-[-16px] bottom-[0px]",
  },
  {
    id: 2,
    title: "Conciliare",
    description:
      "Automates complex financial reconciliation with high matching rates and straight-through processing.",
    image: "/Conciliare.webp",
    imageAlt: "Man using mobile phone for payments",
    link: "/industries/banking-and-finance/products/conciliare",
    imageWidth: "w-[60%]",
    imageHeight: "h-auto",
    imagePosition: "right-[-18px] bottom-[0px]",
  },
];

export default function TwoProducts() {
  return (
    <section className="dark:bg-black">
    <section
    id="two-products"
    className="max-w-7xl  mx-auto     py-4 xl:py-12 px-6   xl:px-6">
      
      <div className="flex items-start justify-between flex-wrap gap-4">

  {/* LEFT SIDE (HEADINGS) */}
  <span>
    <H2 className="text-[#00AA72] leading-tight">
      Banking and finance Products
   
   <br className="   md:block hidden"/> <span className="text-[#141414] dark:text-white leading-tight">
      Built For Scale
      </span>
    </H2>
  </span>

  {/* RIGHT SIDE (VIEW ALL BUTTON) */}
  <a href="/industries/banking-and-finance/all-products#two-products">
    <button
      className="
        group dark:border-white
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </span>
    </button>
  </a>

</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 py-8 xl:mt-10 overflow-visible">
        {products.map((product) => (
  <a
    key={product.id}
    href={product.link}
    className="relative rounded-xl dark:bg-slate-900 bg-white overflow-visible
      shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_10px_rgba(0,0,0,0.20)]
      flex items-center
      transition-all duration-300
     hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
      group
    "
  >
            {/* TEXT */}
          <div className="relative z-20 p-10 w-full xl:w-[60%]">

  <div className="relative mb-4">
    <H3 className="text-2xl  dark:text-white font-semibold">
      {product.title}
    </H3>

    {/* Arrow */}
    <a
  href={product.link}
  className="
    absolute 
    top-1/2 
    -translate-y-1/2
    xl:right-[-50px] 
    lg:right-[85px]
    right-[0px]   
    w-12 h-12
    flex items-center justify-center
    rounded-full bg-white
    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:scale-110
  "
>
  <ArrowRight className="w-6 h-6 text-[#00AA72]" />
</a>
  </div>

  <P className="leading-relaxed">
    {product.description}
  </P>

</div>

            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.imageAlt}
              className={`
                absolute hidden xl:block
                pointer-events-none select-none
                object-contain
                ${product.imageWidth}
                ${product.imageHeight}
                ${product.imagePosition}
              `}
            />
          </a>
        ))}
      </div>
    </section>
    </section>
  );
}