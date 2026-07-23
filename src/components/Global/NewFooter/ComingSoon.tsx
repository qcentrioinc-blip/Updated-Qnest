import { P } from "../../../styles/Typography";

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F3C] to-[#1E2440] px-6">
      <div className="max-w-8xl text-center text-white">
        
        <h1 className="text-4xl  font-quadran   md:text-7xl font-bold mb-6">
           <span className="text-3xl"> A Smarter Platform Is</span><br className="xl:block hidden"/>  Coming Soon
        </h1>

        <P className="text-lg  max-w-4xl md:text-xl text-gray-200 mb-6">
          We are building an enterprise-gradeplatform designed to support
          complex, data-driven industries.
        </P>

        <P className="text-base max-w-4xl text-gray-300 mb-10">
          Our upcoming platform will help organizations across banking,
          financial services, high-tech, and healthcare transform data into
          actionable insights. From operational intelligence to decision
          support and automation, this solution is built to adapt to diverse
          industry needs while maintaining security, scalability, and trust.
        </P>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/industries/cloud-finops-ai"
            className="px-8 py-3 rounded-lg bg-[#19E3A1] text-black font-semibold hover:opacity-90 transition"
          >
            Explore Cloud Finops AI
          </a>

          <a
            href="/"
            className="px-8 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Back to Home
          </a>
        </div>

        <P className="mt-10 text-sm text-gray-400">
          Launching soon — built for modern enterprises across industries
        </P>
      </div>
    </section>
  );
}
