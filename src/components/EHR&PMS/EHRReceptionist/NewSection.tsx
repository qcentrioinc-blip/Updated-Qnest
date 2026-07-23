import { H2, P } from "../../../styles/Typography";

const NewSection = () => {
  return (
    <section className="bg-white py-6 ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        {/* Top Border */}
        <div className="  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div>
              <H2 className=" font-bold leading-tight text-[#111827] mb-6">
                Navigating Digital Excellence with AI, Cloud Solutions, and
                Strategic Innovation
              </H2>

              <div className="space-y-5 text-gray-600 text-base leading-8">
                <P>
                  Qcentrio is one of the leaders in developing new technologies
                  in the IT industry—artificial intelligence and machine
                  learning, advanced cloud solutions, and strategic advisory
                  services. Our collective objective toward unending innovation
                  propels our mission to convey avant-garde, pragmatic solutions
                  that do more than satisfy and often exceed our clients'
                  needs.
                </P>

             
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              <p className="text-gray-700 text-base leading-8 mb-4">
                In a changing world with the initiatives of digitization,
                Qcentrio is your partner on the way to the{" "}
                <span className="text-[#00AA72] font-semibold">
                  digital zenith through AI, cloud technologies, and inventive
                  solutions strategically.
                </span>
              </p>

              {/* Highlight Box */}
              <div className="bg-[#DDF6EE] rounded-md px-6 py-7 mb-4">
                <h3 className="text-[#00AA72] text-xl font-semibold">
                  Recognized as a leader in the global marketplace
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-8 mb-8">
                Qcentrio doesn't just respond to the digital era; we actively
                shape it, ensuring that our partners are market participants and
                leaders.
              </p>

              <div>
                <button className="bg-[#00AA72] hover:bg-[#009765] transition-colors duration-300 text-white font-medium px-8 py-3 rounded-md">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;