import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2 } from '../../../styles/Typography';
// SMOOTH WAVE BREATHING EFFECT - Reduced heights + Smooth scroll
const GradientLayers = () => {
  const containerRef = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
 
  const GRADIENT = 'linear-gradient(90deg, #0E5756 0%, #116D6B 25%, #218281 50%, #41A09E 75%, #51B4B3 100%)';
 
  const layers = [
    { opacity: 0.9, minHeight: 10, maxHeight: 28 },
    { opacity: 0.8, minHeight: 12, maxHeight: 30 },
    { opacity: 0.6, minHeight: 8, maxHeight: 25 },
    { opacity: 0.4, minHeight: 12, maxHeight: 32 },
    { opacity: 0.2, minHeight: 6, maxHeight: 22 },
    { opacity: 0.05, minHeight: 5, maxHeight: 20 }
  ];
 
  return (
    <div ref={containerRef} className="w-full">
      {layers.map((layer, index) => {
        const scrollRange = [
          0.0 + (index * 0.03),
          0.5,
          1.0 - (index * 0.03)
        ];
 
        const height = useTransform(
          scrollYProgress,
          scrollRange,
          [layer.minHeight, layer.maxHeight, layer.minHeight]
        );
 
        return (
          <motion.div
            key={index}
            className="relative w-full"
            style={{
              background: GRADIENT,
              height
            }}
          >
            <span
              className="absolute inset-0 block"
              style={{ background: `rgba(1, 29, 33, ${1 - layer.opacity})` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
 
const EHRFooter = () => {
  const base = '/industries/ehr-and-pms';
 
  // Email validation state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
 
  const validateEmail = (value: string): string => {
    if (!value.trim()) {
      return 'Email address is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };
 
  const handleSubmit = () => {
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      setSubmitted(false);
      return;
    }
    setEmailError('');
    setSubmitted(true);
    // TODO: handle actual submission logic here
  };
 
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(validateEmail(e.target.value));
    }
    if (submitted) setSubmitted(false);
  };
 
  const quickLinks = [
    { name: 'Physician', path: `${base}/physician` },
    { name: 'Admin', path: `${base}/admin` },
    { name: 'Nurse', path: `${base}/nurse` },
    { name: 'Receptionist', path: `${base}/receptionist` },
    { name: 'Insurance Coordinator', path: `${base}/insurance-coordinator` },
    { name: 'Pricing', path: `${base}/pricing` },
  ];
 
  const builtfor = [
    { name: 'Long Term Care', path: `${base}/built-for/long-term-care` },
    { name: 'Home Healthcare', path: `${base}/built-for/home-healthcare` },
    { name: 'Clinics & Hospitals', path: `${base}/built-for/clinics-and-hospitals` },
  ];
 
  return (
    <footer className="bg-[#00AA72] dark:bg-[#141414]">
      {/* Green Gradient Layers */}
      <GradientLayers />
 
      {/* Main Container */}
      <div className="bg-[#00AA72] dark:bg-[#141414] flex flex-col pt-16 items-left max-w-8xl px-4 sm:px-6 md:px-8 lg:px-16">
 
        {/* TOP CARD - Newsletter */}
        <div
          className="bg-white dark:bg-[#141414] shadow-xl w-full"
          style={{
            borderRadius: '10px',
            marginBottom: '11px',
            opacity: 1
          }}
        >
          <div className=" md:px-16 lg:px-20 py-12 md:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
 
              <div className="flex-shrink-0">
                <img src="/QnestEHRLogo.svg" alt="QNEST Logo" className="w-50 lg:w-68 h-auto" />
              </div>
 
              <div className="w-full max-w-2xl flex flex-col items-start lg:items-end">
                <H2
                  className="mb-8 text-left lg:text-center"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(28px, 5vw, 40px)',
                    lineHeight: '120%',
                    color: '#00AA72'
                  }}
                >
                  Subscribe to our newsletter
                </H2>
                <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full justify-start xl:justify-center items-stretch">
                  <div className="flex flex-col xl:w-[50%] xl:ml-48">
                    <input
                      type="email"
                      placeholder="Enter your mail"
                      value={email}
                      onChange={handleEmailChange}
                      className={`px-6 rounded-full font-quadran   border-2 bg-white outline-none text-gray-800 placeholder:text-gray-500 transition-colors ${
                        emailError
                          ? 'border-red-700 focus:border-red-700'
                          : submitted
                          ? 'border-[#00AA72] focus:border-[#00AA72]'
                          : 'border-gray-300 focus:border-[#00AA72]'
                      }`}
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: '16px',
                        height: '56px'
                      }}
                    />
                    {/* Error message */}
                    {emailError && (
                      <p
                        className="mt-2 text-red-700 text-sm pl-4"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {emailError}
                      </p>
                    )}
                    {/* Success message */}
                    {submitted && !emailError && (
                      <p
                        className="mt-2 text-[#00AA72] font-quadran   text-sm pl-4"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        ✓ You've successfully subscribed!
                      </p>
                    )}
                  </div>
 
                  <button
                    onClick={handleSubmit}
                    className="
                      group
                      inline-flex items-center justify-center
                      px-6 h-12
                      rounded-lg
                      font-quadran   font-bold text-sm tracking-widest
                      bg-[#00AA72] text-white 
                      hover:bg-white hover:text-[#00AA72]
                      border-2 border-[#00AA72]
                      transition-all duration-300 ease-in-out
                      hover:border-b-[4px]
                      hover:-translate-y-[2px]
                      shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                      cursor-pointer
                      self-start
                    "
                  >
                    <span className="flex items-center font-quadran   gap-2">
                      Submit
 
                      <span className="relative flex items-center justify-center w-[20px] h-[20px]">
                        {/* Default Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17L17 7" />
                        </svg>
 
                        {/* Hover Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* BOTTOM CARD - Links */}
        <div
          className="bg-white dark:bg-[#141414] shadow-xl w-full relative"
          style={{
            borderRadius: '8px',
            opacity: 1
          }}
        >
          <div className=" md:px-16 lg:px-20 py-12 md:py-14">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_0.6fr_1.2fr] gap-x-16 lg:gap-x-20 gap-y-10 pb-16 lg:pb-0 items-stretch">

              {/* QUICK LINKS */}
              <div>
                <h3
                  className="mb-6 text-[#2a2a2a] dark:text-white"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    
                  }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="hover:opacity-80 font-quicksand dark:text-white font-bold text-lg text-[#00AA72] transition-opacity inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
 
              {/* BUILT FOR */}
              <div>
                <h3
                  className="mb-6 text-[#2a2a2a] dark:text-white"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                 
                  }}
                >
                  Built For
                </h3>
                <ul className="space-y-5 ">
                  {builtfor.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="hover:opacity-80 font-quicksand font-bold  dark:text-white text-lg text-[#00AA72] transition-opacity inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
 
              {/* RESOURCES */}
              {/* <div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#2A2A2A'
                  }}
                >
                  Resources
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`${base}/blogs`}
                      className="hover:opacity-80 font-quicksand font-bold text-lg text-[#00AA72] transition-opacity inline-block"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div> */}
 
              {/* FOOTER VIDEO */}
              <div className="flex h-full">
                <div className="w-full h-full    overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full   object-cover"
                  >
                    <source src="/footer_video.mp4"   type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <div className="px-4 sm:px-6 md:px-12 pb-8 pt-10">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white">
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              © 2025 Qnest. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
              <a
                href={`${base}/privacy-policy`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Privacy Policy
              </a>
              <a
                href={`${base}/cookie-policy`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Cookie Policy
              </a>
              <a
                href={`${base}/terms-and-conditions`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default EHRFooter;
 