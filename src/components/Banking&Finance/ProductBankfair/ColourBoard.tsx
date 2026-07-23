

const ColourBoard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden w-full h-auto md:h-[420px] lg:h-[480px] xl:h-[539px]">

      {/* ─── LEFT SECTION ─── */}
      <div className="
        relative bg-[#3B3BF9] overflow-hidden shrink-0
        w-full h-[280px]
        md:w-[45%] md:h-full
        lg:w-[48%] lg:h-full
        xl:w-[720px] xl:h-full
      ">

        {/* Diagonal decorative lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="55%" y1="0"    x2="-5%"  y2="100%" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="75%" y1="0"    x2="15%"  y2="100%" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="100%" y1="10%" x2="50%"  y2="100%" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
        </svg>

        {/* Heading */}
        <h1 className="
          absolute z-10 text-[#FAFAFA]
          [font-family:'Bricolage_Grotesque',sans-serif] font-bold leading-none tracking-normal
          top-[24px] left-[20px] right-[20px] text-[36px]
          md:top-[36px] md:left-[28px] md:right-[16px] md:text-[46px]
          lg:top-[48px] lg:left-[32px] lg:right-[20px] lg:text-[58px]
          xl:top-[59px] xl:left-[36px] xl:right-auto xl:w-[603px] xl:text-[72px]
        ">
          Transform Your 
          <br />
          Bank with Bankfair
        </h1>

        {/* Bottom paragraph */}
        <p className="
          absolute z-10 text-[#F5F5F5]
          [font-family:'Quicksand',sans-serif] font-normal leading-snug tracking-normal
          bottom-[16px] left-[20px] right-[20px] text-[12px]
          md:bottom-[24px] md:left-[28px] md:right-[16px] md:text-[13px]
          lg:bottom-[32px] lg:left-[32px] lg:right-[20px] lg:text-[14px]
          xl:top-[467px] xl:bottom-auto xl:left-[39px] xl:right-auto xl:w-[459px] xl:h-[40px] xl:text-[16px] xl:leading-none
        ">
          See firsthand how parameterization eliminates manual work and accelerates product launches for your institution. 
        </p>
      </div>

      {/* ─── IMAGE + RIGHT WRAPPER ─── */}
      <div className="flex flex-row md:contents h-[260px] md:h-auto">

        {/* CENTER IMAGE */}
        <div className="
          shrink-0
          w-1/2 h-full
          md:w-[28%] md:h-full
          lg:w-[26%] lg:h-full
          xl:w-[364px] xl:h-full
        ">
          <img
            src="/BNFConsilier/Girl.webp"
            alt="Professional woman"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ─── RIGHT SECTION ─── */}
        <div className="relative flex-1 h-full min-w-0">

          {/* Top – Blue with circle */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#3B3BF9]">
            <div className="
              absolute bg-white rounded-full
              top-[10px] right-[10px] w-[40px] h-[40px]
              md:top-[18px] md:right-[16px] md:w-[60px] md:h-[60px]
              lg:top-[22px] lg:right-[20px] lg:w-[78px] lg:h-[78px]
              xl:top-[25px] xl:right-[16px] xl:w-[94px] xl:h-[94px]
            " />
          </div>

          {/* Bottom – Warm gray with text */}
          <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-[#E5E0D8]">
            <p className="
              absolute text-[#141414]
              [font-family:'Quicksand',sans-serif] font-normal leading-snug tracking-normal
              top-[10px] left-[10px] right-[8px] text-[11px]
              md:top-[14px] md:left-[16px] md:right-[12px] md:text-[13px]
              lg:top-[16px] lg:left-[20px] lg:right-[14px] lg:text-[15px]
              xl:top-[18px] xl:left-[22px] xl:right-auto xl:w-[380px] xl:text-[18px] xl:leading-none
            ">
              Book a personalized demo to explore automation, compliance features, and multi-branch scalability. 
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ColourBoard;
