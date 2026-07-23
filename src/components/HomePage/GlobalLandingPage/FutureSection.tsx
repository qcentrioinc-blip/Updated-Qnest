import { H2, P } from "../../../styles/Typography";
import LazyVideo from "../../Global/LazyVideo";

export default function FutureSection() {
  return (
    <section className="relative w-full bg-white py-0 lg:py-0 lg:pt-14 ">

      {/* TOP-RIGHT SHAPE (SECTION LEVEL) */}
      <img
        src="/LandingPage/shape4.png"
        alt="Abstract Shape"
        className="hidden sm:hidden md:hidden lg:block absolute top-0 right-0 w-[280px] md:w-[340px] lg:w-[450px] z-10"
      />

      <div className="max-w-8xl mx-10 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* HEADING BLOCK */}
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <H2 className="leading-tight">
            Digital Growth for All Sectors
          </H2>
        </div>

        {/* TEXT BLOCK */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col gap-10 lg:mt-80 ">
          {/* Description */}
          <P className="max-w-xl xl:ml-8">
            Qnest Global supports companies across banking, manufacturing, healthcare, retail, and services. Our teams design AI, CRM, HRM, and cloud solutions that match industry needs and meet compliance requirements.
          </P>

          {/* Second Text Block */}
          <P className="max-w-2xl xl:ml-28 lg:pb-10 xl:pb-0">
            From fast‑growing startups to global enterprises, Qnest Global builds stable, scalable systems. We connect data, automate work, and modernize core platforms so each client can operate with better speed, control, and insight.
          </P>
        </div>

        {/* ILLUSTRATION BLOCK */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 xl:-ml-12">
          <LazyVideo
            src="/Video/GlobeVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
}
