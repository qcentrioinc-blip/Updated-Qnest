import { H2, H4, P } from "../../../styles/Typography";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: " Commercial Banks Direct Integration – Fedwire and RTGS Ready  ",
      text: "Connect directly to central bank payment gateways for high-value RTGS transactions. ",
      icon:"/Pago/Balance.svg"
    },
    {
      id: 2,
      name: "Complete Credit Unions League Participation ",
      text: "Aggregate transactions through intermediary leagues as single network participants. ",
      icon:"/Pago/Card.svg"
    },
      {
      id: 3,
      name: "All Financial Institution Types Supported ",
      text: "Handle both high-value and low-value payments without intermediaries when needed. ",
      icon: "/Pago/Arrow.svg"
    },
     
  ];

  return (
    <div className="bg-white dark:bg-black py-10">
      <div className="max-w-7xl px-6 xl:px-6 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="font-bold text-gray-900 dark:text-white">
            Designed for Banks and Credit Unions 
          </H2>
        </div>

        {/* Simple 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-[#151515] rounded-lg border border-gray-200 shadow-md md:p-4 p-6 lg:p-5 xl:p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="rounded-full flex items-center justify-center">
                  <img src={testimonial.icon} alt="" className="w-12 h-12 object-contain" />
                </div>
              </div>

              {/* Title — fixed min-height so all titles occupy same space */}
              <H4 className="font-semibold mb-2 min-h-[4rem] md:min-h-[5rem] lg:min-h-[4.5rem]">
                {testimonial.name}
              </H4>

              {/* Paragraph always starts at same vertical position */}
              <P className="text-black dark:text-white leading-relaxed">
                {testimonial.text}
              </P>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}