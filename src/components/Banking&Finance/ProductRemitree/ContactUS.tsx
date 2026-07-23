import { useState, useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser";

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { H2 } from '../../../styles/Typography';

const OPTIONS = ['Product Enquiry', 'Partnerships', 'General Support'];



const ContactUS = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: [] as string[],
    message: '',
    industry: 'Banking and Finance',
  });
  const isEmailValid = isValidEmail(formData.email);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
 
const [showDropdownMobile, setShowDropdownMobile] = useState(false);
 
const dropdownRefMobile = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
    }
    if (dropdownRefMobile.current && !dropdownRefMobile.current.contains(e.target as Node)) {
      setShowDropdownMobile(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.02]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
  ]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothBorderRadius = useSpring(borderRadius, { stiffness: 100, damping: 30 });
  const smoothClip = useSpring(clipPath, { stiffness: 100, damping: 25 });

  const handleSubmit = async () => {
  if (!isEmailValid) {
    setToast({ message: 'Please enter a valid email address.', type: 'error' });
    setTimeout(() => setToast(null), 3500);
    return;
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    interest: formData.interest.join(", "),
    message: formData.message || "No message provided",
    industry: "Banking and Finance", // ✅ default industry
  };

  try {
    await Promise.all([
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
    ]);

    setToast({
      message: "Successfully submitted! We'll be in touch soon.",
      type: "success",
    });

    setFormData({
      name: "",
      email: "",
      interest: [],
      message: "",
      industry: "Banking and Finance",
    });

    setTimeout(() => setToast(null), 3500);

  } catch (error) {
    console.error("Email sending failed:", error);
    setToast({
      message: "Something went wrong. Please try again.",
      type: "error",
    });
    setTimeout(() => setToast(null), 3500);
  }
};

  return (
    /*
      FIX 1: position-relative + z-50 ensures this section always stacks ABOVE
      the Process section's sticky container (which has no explicit z-index,
      defaulting to z-auto / stacking context order).
      
      FIX 2: overflow-visible on the root div so the form card can escape
      its parent bounds on desktop (the card uses negative margin to overlap
      the blue header, which requires overflow to be visible).
    */
    <div
      ref={targetRef}
      className="relative z-50 pb-10 xl:pt-16 overflow-hidden pointer-events-auto dark:bg-black bg-white"
      id='ContactUs'
    >
      {/* TOAST */}
      {toast && (
        <div
          className={`fixed bottom-20 right-6 z-[9999] bg-white flex items-center gap-3
            px-5 py-4 opacity-100 rounded-2xl font-quicksand text-black shadow-[0_8px_32px_rgba(0,0,0,0.18)]
            transition-all duration-500 ease-out
            ${toast.type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}
          style={{ minWidth: '300px' }}
        >
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            ${toast.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
            {toast.type === 'success' ? (
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-semibold font-quicksand ${toast.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>
              {toast.type === 'success' ? 'Success!' : 'Invalid Email'}
            </p>
            <p className="text-md text-black font-quicksand mt-0.5">{toast.message}</p>
          </div>
          <button onClick={() => setToast(null)} className="text-gray-300 hover:text-gray-500 ml-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ── DESKTOP LAYOUT ── */}
      <motion.div
        style={{ scale: smoothScale, borderRadius: smoothBorderRadius }}
        /*
          FIX 3: overflow-visible here so the form card's negative-margin
          overlap with the blue header section actually shows outside the
          motion div's bounds. overflow-hidden was clipping it.
        */
        className="hidden xl:block overflow-visible bg-white dark:bg-black"
      >
        <div className="relative w-full overflow-visible">

          {/* Blue background band */}
          <div className="absolute left-0 top-0 h-[560px] w-full bg-[#00AA72] pt-10">
            {/* <img
              src="/FormLineWHite.png"
              alt="curve"
              className="pointer-events-none absolute left-4 top-10 h-[520px] w-[calc(100%-2.5rem)] max-w-[1400px] object-fit"
            /> */}
            <div className="layout-shell-wide flex h-full items-center px-8 xl:px-16">
              <H2 className="text-white text-5xl font-bold leading-tight max-w-2xl">
                Ready to discuss  your SOC 
                 
             compliance and security requirements 
              </H2>
            </div>
          </div>

          {/* Form — overflows above and below the blue band */}
          <div className="layout-shell-wide relative z-20 overflow-visible px-8 pt-[100px] xl:px-16">
            <div className="flex justify-end overflow-visible">
              <div className="w-full max-w-[480px] overflow-visible xl:-mt-[145px]">
                <div className="h-[650px] rounded-[20px] bg-white px-12 py-20 shadow-[0_10px_30px_rgba(0,0,0,0.06),0_5px_10px_rgba(0,0,0,0.20)]">
                  <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();    
    handleSubmit();
  }}
>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-full font-quicksand placeholder-black border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Enter your mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                      className={`w-full px-5 py-3.5 rounded-full font-quicksand placeholder-black border-2 
                        focus:outline-none transition-colors duration-300
                        ${isEmailValid ? 'border-[#00AA72] focus:border-[#00AA72]' : 'border-gray-200 focus:border-blue-500'}`}
                    />

                    <div ref={dropdownRef} className="relative">
                      <div
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="w-full px-5 py-3.5 rounded-full border-2 font-quicksand border-gray-200 cursor-pointer flex items-center justify-between"
                      >
                        <span className="text-md  font-quicksand truncate">
                          {formData.interest.length > 0 ? formData.interest.join(', ') : 'What are you looking for?'}
                        </span>
                        <svg className={`w-4 h-4 transition-transform flex-shrink-0 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {showDropdown && (
                        <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                          {OPTIONS.map((option) => {
                            const checked = formData.interest.includes(option);
                            return (
                              <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      interest: checked ? prev.interest.filter((o) => o !== option) : [...prev.interest, option],
                                    }))
                                  }
                                  className="accent-black w-4 h-4"
                                />
                                <span className="text-sm text-gray-800">{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <textarea
                      placeholder="Message (Optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-5 py-3.5 placeholder-black font-quicksand rounded-[24px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                    />

                    <button
                      onClick={handleSubmit}
                      disabled={!isEmailValid && formData.email.length > 0}
                      className={`px-8 py-3.5 rounded-full font-semibold font-quicksand flex items-center gap-2 group
                        transition-all duration-300 ease-in-out cursor-pointer
                        ${isEmailValid
                          ? 'bg-[#00AA72] text-white shadow-[0_4px_20px_rgba(43,104,195,0.4)]'
                          : 'bg-black text-white'}`}
                    >
                      SUBMIT
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ── MOBILE LAYOUT ── */}
      <motion.div
        style={{ scale: smoothScale, borderRadius: smoothBorderRadius, clipPath: smoothClip }}
        className="xl:hidden relative w-full max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col min-h-full relative">
          <div className="relative bg-[#00AA72] h-[52vh] pt-12 px-6 overflow-hidden">
            {/* <img
              src="/FormLineWHite.png"
              alt="Background curve graphic"
              className="absolute top-10 left-0  md:-top-4 lg:top-20 w-[100%] h-[200px] md:h-[380px] lg:h-[380px] -rotate-20  md:-rotate-11 lg:-rotate-10 object-fit pointer-events-none"
            /> */}
            <div className="relative -mt-8 ml-4  xs:ml-6 md:mt-32 md:ml-20 lg:mt-52 lg:ml-24 z-10 pt-4 md:pt-8">
              <H2 className="text-white text-3xl font-bold leading-tight">
                Ready to discuss
               
               your SOC compliance and security requirements
              </H2>
            </div>
          </div>

          <div className="relative  -mt-44 xs:-mt-68  sm:-mt-72 md:-mt-48 pr-6 pl-8 pb-10 z-40">
            <div className="bg-white rounded-[28px] md:rounded-[20px] p-6 md:p-14 lg:p-16 shadow-[0px_20px_60px_rgba(0,0,0,0.12),_-20px_0px_40px_rgba(0,0,0,0.06),_20px_0px_40px_rgba(0,0,0,0.06)]  relative z-50">
              <div className="space-y-5 pt-16">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-full border-2 font-quicksand placeholder-black border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Enter your mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className={`w-full px-5 py-3.5 rounded-lg font-quicksand placeholder-black border-2 
                    focus:outline-none transition-colors duration-300
                    ${isEmailValid ? 'border-[#00AA72] focus:border-[#00AA72]' : 'border-gray-200 focus:border-blue-500'}`}
                />
               <div ref={dropdownRefMobile} className="relative">
  <div
    onClick={() => setShowDropdownMobile((prev) => !prev)}
    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 cursor-pointer flex items-center justify-between"
  >
                    <span className="text-sm truncate">
                      {formData.interest.length > 0 ? formData.interest.join(', ') : 'What are you looking for?'}
                    </span>
                    <svg className={`w-4 h-4 transition-transform flex-shrink-0 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {showDropdownMobile && (
                    <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                      {OPTIONS.map((option) => {
                        const checked = formData.interest.includes(option);
                        return (
                          <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  interest: checked ? prev.interest.filter((o) => o !== option) : [...prev.interest, option],
                                }))
                              }
                              className="accent-black w-4 h-4"
                            />
                            <span className="text-sm text-gray-800">{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
                <textarea
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full font-quicksand placeholder-black px-5 py-3.5 rounded-3xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none text-sm"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!isEmailValid && formData.email.length > 0}
                  className={`px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 group
                    transition-all duration-300 ease-in-out
                    ${isEmailValid
                      ? 'bg-[#00AA72] text-white hover:bg-blue-700 shadow-[0_4px_20px_rgba(43,104,195,0.4)]'
                      : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  SUBMIT
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUS;
