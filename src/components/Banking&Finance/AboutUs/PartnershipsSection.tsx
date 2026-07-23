import { H2, P } from "../../../styles/Typography";

export default function PartnershipsSection() {
  const partnerLogos = [
    { name: "Microsoft", src: "/partners/microsoft.png" },
    { name: "Google Cloud", src: "/partners/google.png" },
    { name: "Oracle", src: "/partners/oracle.png" },
    { name: "Dell", src: "/partners/dell.png" },
    { name: "Infosys", src: "/partners/infosys.png" },
    { name: "AWS", src: "/partners/aws.png" },
    { name: "Deloitte", src: "/partners/deloitte.png" },
  ];

  return (
    <section
      className="w-full xl:h-screen bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: `url("/AboutUs/Partnershipbg.png")`,
      }}
    >
      {/* WHITE CARD */}
      
      <div className="max-w-7xl mx-auto bg-white lg:mt-20 rounded-md shadow-2xl p-6 md:p-12">

        {/* TITLE */}
        <H2 className="text-[#00AA72] mb-10">Ecosystem of partnerships</H2>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-8 mb-10">
          {partnerLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-8 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* TEXT CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 leading-relaxed">

          {/* LEFT SIDE WITH BLACK LINE */}
          <div>
            <div className="w-full h-[1px] bg-black opacity-50 mb-6"></div>

            <P className="mb-2">
              Every collaboration is a partnership. We listen, adapt, and provide
              solutions that scale with your goals because your success is our
              success. Technology may evolve, but the relationships.
            </P>

            <P>
              Every collaboration is a partnership. We listen, adapt, and provide
              solutions that scale with your goals because your success is our
              success.
            </P>
          </div>

          {/* RIGHT PARAGRAPH */}
          <div>
            <div className="w-full h-[1px] bg-black opacity-50 mb-6"></div>
            <P>
              Born in India, built for the world we carry the spirit of innovation,
              resilience, and precision into everything we do. While our roots keep
              us grounded, our global standards ensure that every solution we
              deliver can compete and win on the world stage.
            </P>
          </div>

        </div>
      </div>
    </section>
  );
}
