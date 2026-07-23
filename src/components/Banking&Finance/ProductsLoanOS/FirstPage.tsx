import { Link } from "react-router-dom";
// import { ContactUs } from "../../../styles/Button";
import { H1, H4, P } from "../../../styles/Typography";
 
const bulletItems = [
  {
    text: "Customers apply for loans online through device-agnostic forms with auto-filled SSN details",
    icon: "/LOS/HeroIcon2.svg"
  },
  {
    text: "Back-office users upload pre-approved offers for quick screening and potential auto-approval",
    icon: "/LOS/HeroIcon1.svg"
  }
];
 
const FirstPage = () => {
    return (
        <>
           
 
            <section className="w-full overflow-hidden bg-[#00AA72] dark:bg-black max-w-8xl mx-auto">
 
                {/* ════════════════════════════════════════
                    MOBILE + TABLET + LG iPad Pro Layout
                    Visible: < 1280px  |  Hidden: ≥ 1280px
                ════════════════════════════════════════ */}
                <div className="xl:hidden flex flex-col px-5 py-14 gap-6 sm:px-8 sm:py-16 sm:gap-7 md:px-18 md:py-12 lg:px-14 lg:pt-36 lg:gap-8">
 
                    {/* Row 1 — Heading left, Para right */}
                    <div className="flex flex-col gap-4  justify-between lg:gap-10">
 
                        {/* Heading */}
                        <H1 className="text-white mt-4"
                             
                        >
                         Loan Origination System for  Banks and NBFCs- Reg B, Reg Z, and FCRA Compliant
                        </H1>
 
                        {/* Paragraph */}
                        <P className="text-white"
                         
                        >
                            LOS streamlines the entire loan lifecycle from application to disbursement with fair lending compliance under Regulation B (ECOA), truth in lending disclosures under Regulation Z (TILA), and FCRA-compliant credit reporting. Features include digital application forms, pre-approved offers, e-verification, OCR document scanning, configurable score parameters, and multi-level approval workflows. Features include digital application forms, pre-approved offers, e-verification, OCR document scanning, configurable score parameters, and multi-level approval workflows. 
                        </P>
                    </div>
 
                    {/* Row 2 — Card left, Image right */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-6">
 
                        {/* Card */}
                        <div
                            className="flex flex-col border border-white bg-[#15386C33] rounded-[17px] shrink-0
                                w-full max-w-[374px]
                                p-[14px] gap-[20px]
                                sm:p-[16px] sm:gap-[22px]
                                lg:w-[300px] lg:p-[17px] lg:gap-[20px]"
                        >
                            {/* White Box */}
                            <div className="flex flex-col bg-white dark:bg-black rounded-[7px] p-5 gap-3">
                                <P
                                    className="text-[#00AA72]  leading-none
                                        text-[20px]
                                        sm:text-[22px]
                                        lg:text-[22px]"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 500 }}
                                >
                                   Simplify Applications with Digital Forms and Pre-Approved Offers
                                </P>
                                 <Link
                            to="#contact-us"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                                {/* <ContactUs>Explore LOS</ContactUs> */}
                                </Link>
                            </div>
 
                            {/* Bullets */}
                            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
                               {bulletItems.map((item, i) => (
  <div key={i} className="flex items-center gap-3">
 
    {/* ICON CIRCLE */}
    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[black] shrink-0">
      <img
        src={item.icon}
        alt="icon"
        className="w-10 h-10 object-contain"
      />
    </div>
 
    {/* TEXT */}
    <P className="text-white">
      {item.text}
    </P>
 
  </div>
))}
                            </div>
                        </div>
 
                        {/* Corner Image */}
                        <div className="w-full lg:flex-1 lg:self-end">
                            <img
                                src="/LOS/hero.webp"
                                alt="Team circles"
                                className="w-full object-contain object-bottom
                                    max-h-[240px]
                                    sm:max-h-[300px]
                                    lg:max-h-[340px]"
                            />
                        </div>
                    </div>
                </div>
 
                {/* ════════════════════════════════════════
                    DESKTOP XL Layout  (≥ 1280px)
                    Exact pixel-perfect absolute positions
                    Hidden: < 1280px
                ════════════════════════════════════════ */}
                <div className="hidden max-w-8xl mx-auto  px-22  xl:block relative min-h-screen">
                  <div className="grid grid-cols-[1.5fr_1fr] xl:gap-x-10   mt-44 justify-center items-center">
                    {/* Heading */}
                    <H1
                        className="text-white"
                    > Loan Origination System for  Banks and NBFCs- Reg B, Reg Z, and FCRA Compliant 
                    </H1>
 
                    {/* Paragraph */}
                <P className="text-white"
                    >
                     LOS streamlines the entire loan lifecycle from application to disbursement with fair lending compliance under Regulation B (ECOA), truth in lending disclosures under Regulation Z (TILA), and FCRA-compliant credit reporting. Features include digital application forms, pre-approved offers, e-verification, OCR document scanning, configurable score parameters, and multi-level approval workflows. Features include digital application forms, pre-approved offers, e-verification, OCR document scanning, configurable score parameters, and multi-level approval workflows. 
                    </P>
                    </div>
 
                    {/* Left Card */}
                    <div
                        className="absolute flex flex-col border mt-10 border-white bg-[#15386C33] rounded-2xl px-6 py-6 max-w-sm"
                        // style={{
                        //     top: "250px", left: "95px",
                        //     width: "374.1px", height: "420px",
                        //     padding: "17.04px", gap: "30.68px",
                        //     borderRadius: "17.04px",
                        // }}
                    >
                        {/* White Box */}
                        <div
                            className="flex flex-col bg-white shrink-0 p-4  space-y-6 rounded-md"
                           
                        >
                            <H4
                                className="text-[#00AA72] "
                               
                            >
                            Simplify Applications with Digital Forms and Pre-Approved Offers
                            </H4>
                <Link
                            to="#contact-us"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                                {/* <ContactUs>Explore LOS</ContactUs> */}
                                </Link>
                        </div>
 
                        {/* Bullets */}
                        <div className="flex flex-col pt-6" style={{ gap: "20px" }}>
                           {bulletItems.map((item, i) => (
  <div key={i} className="flex items-start gap-3">
 
    {/* ICON CIRCLE */}
    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[black] shrink-0">
      <img
        src={item.icon}
        alt="icon"
        className="w-8 h-8 object-contain"
      />
    </div>
 
    {/* TEXT */}
    <P className="text-white">
      {item.text}
    </P>
 
  </div>
))}
                        </div>
                    </div>
 
                    {/* Corner Image */}
                    <div
                        className="absolute bottom-0"
                        style={{ right: "-20px", bottom: "40px", width: "900px", height: "400px" }}
                    >
                        <img
                            src="/LOS/hero.webp"    
                            alt="Team circles"
                            className="w-full h-full object-contain object-top"
                        />
                    </div>
                </div>
 
            </section>
        </>
    );
};
 
export default FirstPage;