import {   H3, P } from "../../../styles/Typography";

const Feature = () => {
  const features = [
    {
      number: "01",
      title: "Duis aute iru dolor",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
    },
    {
      number: "02",
      title: "Duis aute iru dolor",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
    },
    {
      number: "03",
      title: "Duis aute iru dolor",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
    }
  ];

  return (
    <div className="bg-black h-auto py-20   px-6  ">
      <div className="max-w-8xl  lg:mx-10">
        <div className="grid grid-cols-1 xs:grid-cols-1 justify-between md:grid-cols-3 gap-8 xl:gap-60">
          {features.map((feature) => (
            <div key={feature.number} className="flex flex-col ">
              <div className="mb-4  ">
                <h2 className="  border-b border-[#FBFBFB]  font-bold text-[120px]  text-[#666666] mb-4">
                  {feature.number}
                </h2>
                {/* <div className="w- h-px bg-[#666666]"></div> */}
              </div>
              
              <H3 className="text-[#F99526]  font-semibold my-4">
                {feature.title}
              </H3>
              
              <P className="text-[#CCCCCC]     leading-tight">
                {feature.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;