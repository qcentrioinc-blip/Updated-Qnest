import { H3, H4, P } from "../../../styles/Typography";

const ImageChange = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-10">
      <div className="max-w-7xl px-6  xl:px-6 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <div>
              <H4 className="text-xl dark:text-[#00AA72] font-semibold mb-3">Complexity</H4>
              <P className="text-[#141414] dark:text-white   ">
                Description: Financial institutions must handle multiple payment methods, including e-cash, e-cheques, ACH, and RTGS across different channels. Each payment type has unique processing requirements, settlement timelines, and compliance rules.  
              </P>

              <P className="text-[#141414] dark:text-white  text-sm mt-4 leading-relaxed">
                Managing these manually leads to errors and delays. PAGO unifies all payment types in a single platform with automated workflows. 
              </P>
            </div>

            <div>
              <H4 className="text-xl font-semibold mb-3 dark:text-[#00AA72]">Security</H4>
              <P className="text-[#141414] dark:text-white  ">
                Payment fraud risks increase with transaction volumes. PAGO provides real-time monitoring, AML screening, and advanced encryption to protect every transaction. 
              </P>
            </div>

            <div>
              <H4 className="text-xl font-semibold mb-3 dark:text-[#00AA72]">Cost</H4>
              <P className="text-[#141414] dark:text-white  ">
                Legacy payment systems have high transaction fees and maintenance costs. PAGO operates with lower fees and reduces manual intervention through automation. 
              </P>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-[600px]  bg-gray-300 rounded-2xl">
              <img src="/Pago/RealPayment.webp" alt="payment" className=" rounded-2xl h-full w-full"/>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <H3 className="text-2xl md:text-3xl dark:text-[#00AA72] font-semibold leading-snug">
              Real Payment Challenges That PAGO Solves for Financial Institutions 
            </H3>

            <P className="text-[#141414] dark:text-white  ">
              Banks and credit unions face increasing pressure to process diverse payment types securely while managing costs and regulatory compliance. Manual processes and fragmented systems create inefficiencies and risks. 
            </P>

            <P className="text-[#141414] dark:text-white  ">
              Traditional payment infrastructures struggle to handle modern transaction volumes across e-cash, e-cheques, and real-time settlements. Disparate systems for different payment methods lead to reconciliation delays and higher operational overhead. 
            </P>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageChange;