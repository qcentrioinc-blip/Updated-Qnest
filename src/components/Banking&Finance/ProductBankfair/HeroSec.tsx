import { Link } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";

const HeroSec = () => {
  return (
    <section className="w-full  pt-20 xl:pt-40 relative">

      {/* SVG Arrow */}
      {/* <div className="absolute left-0 top-20 xl:top-40 hidden md:block">
        <svg
          width="140"
          height="70"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            d="M5 5 C40 5, 40 50, 90 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 4"
          />
          <path
            d="M85 35 L95 40 L85 45"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">

        <H1 className="text-[#00AA72]">
          Smarter Banking, Simplified
        </H1>

        <P className="max-w-2xl mx-auto mt-4 leading-relaxed mb-6 xl:mb-10">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident.
        </P>

        <Link
            to="/marketplace"
            
          >
            {/* <ContactUs>Explore our Solutions </ContactUs> */}
          </Link>
      </div>

      {/* Image Section */}
      <div className="w-full flex h-[240px] md:h-[260px] lg:h-[350px] overflow-hidden">

  {/* Image 1 */}
  <div
    className="flex-1 h-full overflow-hidden"
    style={{ clipPath: "polygon(0 0, 92% 0, 82% 100%, 0% 100%)" }}
  >
    <img src="/Img1.webp" className="w-full h-full object-cover" />
  </div>

  {/* Image 2 */}
  <div
    className="flex-1 h-full overflow-hidden -ml-[6%]"
    style={{ clipPath: "polygon(10% 0, 92% 0, 82% 100%, 0% 100%)" }}
  >
    <img src="/Img2.webp" className="w-full h-full object-cover" />
  </div>

  {/* Image 3 */}
  <div
    className="flex-1 h-full overflow-hidden -ml-[6%]"
    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
  >
    <img src="/Img3.webp" className="w-full h-full object-cover" />
  </div>

</div>
    </section>
  );
};

export default HeroSec;