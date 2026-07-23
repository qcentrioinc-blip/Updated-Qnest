import { useRef, useState, useEffect } from "react";
// const FloatingLines = lazy(() => import("./AIFooterBackground"));
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { toast } from "react-toastify";
import { H2, H3 } from "../../../styles/Typography";

// Simple inline SVG icons to avoid importing entire lucide-react library
const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17L17 7" />
  </svg>
);

// const TwitterIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//   </svg>
// );

// const LinkedinIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const ENABLED_WAVES: Array<'top' | 'middle' | 'bottom'> = ['middle', 'bottom'];
// const LINE_COUNT = [10, 15, 20];
// const LINE_DISTANCE = [8, 6, 4];

const AIFooter = () => {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [, setIsInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const base = "/industries/cloud-finops-ai";

  // Native IntersectionObserver instead of framer-motion's useInView
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "400px 0px 0px 0px" }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Submitted successfully");
    setEmail("");
  };

  // const socialIcons = [TwitterIcon, InstagramIcon, LinkedinIcon];

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden"
      // CHANGE THE URL BELOW TO YOUR IMAGE PATH
      style={{
        backgroundImage: "url('/AI-CloudFinOps/Features/Footer_img-transformed.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark Overlay: Makes sure text is readable over the image */}
      <div className="absolute inset-0 bg-[#00AA72]/30 z-0 pointer-events-none"></div>

      {/* ========== TOP SECTION ========== */}
      <div className="relative w-full pt-6 sm:pt-10 z-10">
        {/* Pattern Overlay (Optional, adds texture on top of the blue overlay) */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none z-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines-top" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse" patternTransform="rotate(-135)">
                <line x1="0" y1="0" x2="0" y2="35" stroke="rgba(255, 255, 255, 0.2)  " strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines-top)" />
          </svg>
        </div>

        <div className="relative z-20   sm:mx-8 md:mx-10 px-2 sm:px-4 lg:px-4 py-2 md:py-14 text-center">

          <H2 className="text-white">Trust Qnest CloudDiet for guaranteed cloud savings</H2>
          {/* <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[55px] font-bold text-[#F5F5F5] leading-[110%]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Trust Qnest CloudDiet for guaranteed cloud savings
          </h2> */}
        </div>
      </div>

      {/* ========== MAIN SECTION ========== */}
      <div className="relative max-w-7xl mx-auto pb-16 px-4 sm:px-8 lg:px-0 z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20">

          {/* LEFT SECTION */}
          <div
            className="
        grid grid-cols-3
        sm:grid-cols-[1fr_1.2fr_1.4fr_1fr] md:mx-20  xl:mx-10 xl:gap-3
        mt-10 sm:mt-0
        text-center
        xl:place-items-start xl:text-left
      "
          >
            {/* Products */}
            <div className="space-y-4">
              <span className="text-xl font-bold text-white block">Products</span>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li><a href={`${base}`} className="hover:underline">• CloudDIET</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-left">
              <span className="text-xl font-bold text-white block">Quick Links</span>
              <ul className="space-y-2 text-[#F5F5F5] ">
                <li><a href={`${base}/features`} className="hover:underline">• Features</a></li>
                <li><a href={`${base}/pricing`} className="hover:underline">• Pricing</a></li>
                <li><a href={`${base}/resources/whyclouddiet/clouddiet`} className="hover:underline">• Resources</a></li>
                <li><a href="/industries/cloud-finops-ai/privacy-policy" className="hover:underline">• Policy</a></li>
              </ul>
            </div>

            {/* Built For */}
            <div className="space-y-4 text-left">
              <span className="text-xl font-bold text-white block">Built For</span>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li><a href={`${base}/built-for/enterprises`} className="hover:underline">• Enterprises</a></li>
                <li><a href={`${base}/built-for/saas-application-providers`} className="hover:underline">• Digital Natives</a></li>
                <li><a href={`${base}/built-for/regulated-large-enterprise`} className="hover:underline">• Large Firms </a></li>
              </ul>
            </div>

            {/* Social Icons – full row */}
            {/* <div className="flex gap-6 justify-center xl:justify-start mt-8 md:mt-0 pl-52 md:pl-0">
              {socialIcons.map((Icon, i) => (
                <span
                  key={i}
                  className="w-6 h-6 text-white cursor-pointer hover:opacity-70"
                >
                  <Icon />
                </span>
              ))}
            </div> */}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center xl:items-start space-y-6  ">
            {/* <h3
              className="
          text-[26px]
          sm:text-[30px]
          md:text-[34px]
          text-[#F5F5F5]
          font-semibold
          leading-[140%]
          text-center xl:text-left
          max-w-[640px]
        "
              style={{ fontFamily: "'quicksand', sans-serif" }}
            >
              Get Azure optimization tips and savings updates monthly.
            </h3> */}

            <H3 className="text-white text-center"> Get Azure optimization tips and savings updates.</H3>
            <div className="w-full max-w-md flex flex-col xl:pl-20 sm:flex-row items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail"
                className="
            w-full
            px-6 py-4
            rounded-full
            text-white
            bg-white/10 backdrop-blur-md
  border border-white/50
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          "
              />

              <button
                onClick={handleSubmit}
                className="
            inline-flex items-center gap-3
            bg-black text-white
            px-6 py-4
            font-quadran  
            rounded-full
            font-bold
            uppercase
            hover:bg-zinc-700
            transition-all
            whitespace-nowrap
          "
              >
                SUBMIT <ArrowUpRightIcon />
              </button>
            </div>
          </div>

        </div>
      </div>

      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </footer>
  );
};


export default AIFooter;

