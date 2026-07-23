import { H2, H4, P } from "../../../styles/Typography";

export default function Cards() {
  const cards = [
    {
      title: "Faster Loan Processing and Approvals",
      content:
        "Digital applications and automated workflows reduce loan processing time from days to hours, improving customer experience and operational efficiency.",
      icons: "/LOS/Approved.svg",
       
    },
    {
      title: "Reduced Manual Data Entry Errors",
      content:
        "OCR technology auto-fills customer details from SSN and government IDs, minimizing manual entry mistakes and ensuring accurate data capture.",
      icons: "/LOS/Benefit1.svg",
       
    },
     {
      title: "Consistent Credit Decision Making",
      content:
        " Configurable score parameters ensure uniform loan approval decisions based on predefined criteria for individual and corporate customers.",
       icons: "/LOS/Benefit2.svg",
      
    },
    {
      title: "Enhanced Customer Retention Rates",
      content:
        "Pre-approved offers and quick turnaround times improve customer loyalty and increase repeat business through positive lending experiences",
      icons: "/LOS/Target.svg",
 
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-10 md:py-16 xl:pt-10 xl:pb-0" >
      <div className="max-w-8xl  xl:mx-10 px-4  sm:px-8 lg:px-16">
        <H2 className="pb-6 dark:text-[#00AA72]">Key Benefits of Loan Origination System </H2>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10  xl:py-10 xl:gap-14">
      
          {cards.map((card, i) => (
           <div
  key={i}
  className="bg-[#F3F3F3]  dark:bg-gray-800 rounded-xl border-2 border-[#666666] shadow-md
             flex flex-col md:flex-col md:items-center  xl:flex-row
             p-6 sm:p-8   md:py-8 py-10 xl:py-14 gap-6 " 
>


              {/* LEFT IMAGE */}
              <div className="relative w-full sm:w-1/3 py-10 flex justify-center items-center">
                <img
                  src={card.icons}
                  alt=""
                  className="absolute w-20 h-20 sm:w-36 sm:h-36 lg:w-32 lg:h-32 object-contain "
                />

                
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-2/3">
                <H4 className="text-[#00AA72]">{card.title}</H4>
                <P className="text-sm sm:text-base  dark:text-white leading-relaxed">
                  {card.content}
                </P>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
