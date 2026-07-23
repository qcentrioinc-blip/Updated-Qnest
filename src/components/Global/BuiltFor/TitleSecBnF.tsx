import { useParams } from "react-router-dom";
 
const CONTENT: Record<string, { title: string; buttonLabel: string; bgImage?: string }> = {
  banks: {
    title: "Banking solutions built for modern institutions.",
    buttonLabel: "EXPLORE PRODUCTS",
    bgImage: "/BuiltForBnf/bnklanding.webp"
  },
  "credit-union": {
    title: "Banking solutions built for credit unions",
    buttonLabel: "EXPLORE PRODUCTS",
    bgImage: "/BuiltForBnf/credit-union.webp"
  },
  "financial-unions": {
    title: "Enterprise banking solutions for financial institutions",
    buttonLabel: "DISCOVER PLATFORM",
    bgImage: "/BuiltForBnf/financial-union.webp"
  }
};
 
export default function TitleSecBnF() {
  const { builtForType } = useParams<{ builtForType: string }>();

  // Default to banks if type not found
  const content = CONTENT[builtForType || "banks"] || CONTENT["banks"];
 
  return (
    <section className="w-full bg-white relative overflow-hidden flex flex-col lg:block min-h-[650px] lg:min-h-[830px]">
      
      {/* LEFT CONTENT */}
      <div
        className="flex flex-col z-10 px-6 pt-20 lg:p-0 lg:absolute"
        style={{
          gap: "24px",
        }}
      >
        {/* Desktop Wrapper helps match the Figma constraints while mobile stays fluid */}
        <div className="lg:absolute lg:top-[309.5px] lg:left-[40px] xl:left-[80px] lg:w-[500px] xl:w-[600px] flex flex-col gap-[24px]">
          <h1
            className="text-[#00AA72] m-0 p-0 font-quadran  "
            style={{
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "100%",
            }}
          >
            {content.title}
          </h1>
 
          <a href="/marketplace">
          <button
            onClick={() => {
              const el = document.getElementById("contact-us");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center mb-4  justify-center font-bold text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
            style={{
              width: "240px",
              height: "48px",
              gap: "8px",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontFamily: "'quicksand', sans-serif"
            }}
          >
            <span className="uppercase whitespace-nowrap">
              {content.buttonLabel}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
          </a>
        </div>
      </div>
 
      {/* RIGHT IMAGE */}
      <div
        className="w-full lg:w-full lg:absolute z-0 lg:right-0"
        style={{ top: "clamp(0px, 141.5px, 120px)" }}
      >
        <div className="w-full h-full lg:absolute lg:right-0 lg:w-full lg:max-w-2xl xl:max-w-3xl lg:h-[600px] xl:h-[700px]">
          <img
            src={content.bgImage}
            alt={content.title}
            className="w-full h-full object-cover rounded-t-3xl lg:rounded-none object-center"
          />
        </div>
      </div>

    </section>
  );
}