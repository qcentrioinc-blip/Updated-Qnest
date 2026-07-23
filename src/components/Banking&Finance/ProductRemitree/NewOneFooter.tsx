import { H2, H4 } from '../../../styles/Typography';

import { useState } from 'react';
import { createPortal } from 'react-dom';
// Inline SVGs to avoid loading heavy icon libraries
// const FaXTwitter = ({ className = "" }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
// );
// const FaInstagram = ({ className = "" }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
// );
// const FaLinkedinIn = ({ className = "" }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
// );
const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);


const NewOneFooter = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerToast, setFooterToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFooterEmailValid = isValidEmail(footerEmail);

  const handleFooterSubmit = () => {
    if (!isFooterEmailValid) {
      setFooterToast({ message: 'Please enter a valid email address.', type: 'error' });
      setTimeout(() => setFooterToast(null), 3500);
      return;
    }
    setFooterToast({ message: "Successfully submitted! We'll be in touch soon.", type: 'success' });
    setTimeout(() => setFooterToast(null), 3500);
    setFooterEmail('');
  };
  const toastPortal = footerToast ? createPortal(
    <div
      className={`fixed bottom-32 left-0 z-[9999] flex items-center gap-3
      px-5 py-4 rounded-2xl font-quicksand bg-white opacity-100
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      ${footerToast.type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}
      style={{ minWidth: '300px' }}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
      ${footerToast.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
        {footerToast.type === 'success' ? (
          <svg className="w-4 h-4 text-green-600 font-quiksand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <p className={`text-sm font-semibold ${footerToast.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>
          {footerToast.type === 'success' ? 'Success!' : 'Invalid Email'}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{footerToast.message}</p>
      </div>
      <button onClick={() => setFooterToast(null)} className="text-black font-quicksand hover:text-gray-500 ml-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>,
    document.body
  ) : null;
  const products = [
    { label: "Almanac", url: "/industries/banking-and-finance/products/almanac" },
    { label: "Bankfair", url: "/industries/banking-and-finance/products/bankfair" },
    { label: "CIP & CDD", url: "/industries/banking-and-finance/products/CIP" },
    { label: "Conciliare", url: "/industries/banking-and-finance/products/conciliare" },
    { label: "Internet Banking", url: "/industries/banking-and-finance/products/internet-banking-system" },
    
    { label: "Loan Origination", url: "/industries/banking-and-finance/products/loan-origination-system" },
    { label: "Pago", url: "/industries/banking-and-finance/products/pago" },
    { label: "Remitree", url: "/industries/banking-and-finance/products/remitree" },
    { label: "Sams", url: "/industries/banking-and-finance/products/sams" },
    { label: "Sherlock", url: "/industries/banking-and-finance/products/sherlock" },
    // { label: "Customer Onboarding Solution", url: "/industries/banking-and-finance/products/customer-onboarding-solutions" },
    // { label: "Loan Origination System", url: "/industries/banking-and-finance/products/loan-origination-system" },
    // { label: "Sams", url: "/industries/banking-and-finance/products/sams" },
  ];

  const quickLinks = [
    // { label: "AboutUs", url: "/industries/banking-and-finance/aboutus" },
    // { label: "Careers", url: "/industries/banking-and-finance/careers" },

    // { label: "Blogs", url: "/industries/banking-and-finance" },
    // { label: "News Letter", url: "/industries/banking-and-finance/contactform" },
    // { label: "White Papers", url: "/industries/banking-and-finance/contactform" },
    // { label: "Events", url: "/industries/banking-and-finance/contactform" },

    // { label: "Contact", url: "/industries/banking-and-finance/contactform" },
    // { label: "Platform", url: "/platform" },
    { label: "Market Place", url: "/marketplaceglobal" },
      { label: "Blogs", url: "/industries/banking-and-finance/blogs" },
    { label: "Glossary", url: "/industries/banking-and-finance/glossary" },
  ];

  const BuiltFor = [


    { label: "Banks", url: "/industries/banking-and-finance/built-for/banks" },
    { label: "Credit Unions", url: "/industries/banking-and-finance/built-for/credit-union" },
    { label: "Financial Institutions", url: "/industries/banking-and-finance/built-for/financial-unions" },
  ];





  return (
    <div
      className='lg:relative bg-white  dark:bg-black h-full '

    >

      {toastPortal}
      <div className='relative z-50'>
        <footer className="relative w-full lg:pt-0  overflow-hidden" id="financeContainer">
          <div className="max-w-7xl mx-auto px-6 sm:px-10  xl:px-6">
            <div className="grid grid-cols-1 xl:grid-cols-12 lg:gap-8 xl:gap-14 relative">

              {/* Left Section - 40% */}
              <div className="lg:col-span-5 flex flex-col xl:border-r xl:border-black xl:pr-10">

                {/* LOGO */}
                <div className="">
                  <img
                    src="/BNFLogo.svg"
                    alt="logo"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </div>

                {/* Newsletter Heading */}
                <div className="space-y-0 ">
                  <H2 className='text-[#00AA72]'>
                    Subscribe to our newsletter
                  </H2>
                </div>

                {/* Newsletter Form */}
                <div className="space-y-5 mt-2  flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleFooterSubmit()}
                    className={`w-full max-w-[350px] font-quicksand px-7 py-4 rounded-full border 
  focus:outline-none text-[16px] 
  placeholder:text-gray-400 dark:placeholder:text-gray-400
  dark:bg-transparent dark:text-white dark:border-white 
  transition-colors duration-300
  ${isFooterEmailValid
                        ? 'border-[#00AA72] focus:border-[#00AA72]'
                        : 'border-black focus:border-black'
                      }`}
                  />
                  <button
                    onClick={handleFooterSubmit}
                    className={`
      group flex items-end justify-center
      w-auto h-[44px] sm:h-[48px] mt-2 xl:mt-0
      px-[20px] sm:px-[44px] py-[10px]
      rounded-[8px] font-quicksand font-bold text-[14px]
      transition-all duration-300 ease-in-out dark:border-white
      border border-transparent
      ${isFooterEmailValid
                        ? 'bg-[#00AA72] text-white hover:bg-blue-700 shadow-[0_4px_20px_rgba(43,104,195,0.4)]'
                        : 'bg-[#141414] text-white hover:bg-white hover:text-[#141414] hover:border-[#010101] hover:border-b-[4px] hover:-translate-y-[2px]'
                      }
    `}
                  >
                    SUBMIT
                    <span className="flex items-center gap-[8px]">
                      <span className="relative flex items-center justify-center w-[20px] sm:w-[23.5px] h-[20px] sm:h-[23.5px] p-[4px] sm:p-[5px]">
                        <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                        <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Vertical Divider - Moved to border-r on left column */}

              {/* Right Section - 60% */}
              <div className="lg:col-span-7 pl-2 lg:pl-6">

                {/* ================= MOBILE LAYOUT ================= */}
                <div className="grid grid-cols-2 gap-6 lg:hidden">

                  {/* LEFT - PRODUCTS */}
                  <div>
                    <H4>Products</H4>
                    <ul className="space-y-1 mt-2 font-quicksand">
                      {products.map((item) => (
                        <li key={item.label}>
                          <a href={item.url} className="text-black dark:text-white text-[14px]">
                            • {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col gap-6">

                    {/* Quick Links */}
                    <div>
                      <H4>Quick Links</H4>
                      <ul className="space-y-1 mt-2 font-quicksand">
                        {quickLinks.map((item) => (
                          <li key={item.label}>
                            <a href={item.url} className="text-black dark:text-white text-[14px]">
                              • {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Built For */}
                    <div>
                      <H4>Built For</H4>
                      <ul className="space-y-1 mt-2 font-quicksand">
                        {BuiltFor.map((item) => (
                          <li key={item.label}>
                            <a href={item.url} className="text-black dark:text-white text-[14px]">
                              • {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* ✅ MOBILE POLICIES */}
                <div className="lg:hidden flex flex-col gap-2 pt-4 border-t my-6">
                  <a href="/industries/banking-and-finance/terms-and-conditions" className="text-black dark:text-white text-[14px]">
                    Terms and Conditions
                  </a>
                  <a href="/industries/banking-and-finance/cookies-policies" className="text-black dark:text-white text-[14px]">
                    Cookies Policy
                  </a>
                  <a href="/industries/banking-and-finance/policy" className="text-black dark:text-white text-[14px]">
                    Privacy Policy
                  </a>
                </div>

                {/* ================= DESKTOP (UNCHANGED) ================= */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 xl:gap-x-6 gap-y-8 mb-10">

                  {/* PRODUCTS */}
                  <div>
                    <H4>Products</H4>
                    <ul className="space-y-1 mt-2 font-quicksand overflow-visible">
                      {products.map((item) => (
                        <li key={item.label}>
                          <a href={item.url} className="text-black dark:text-white text-[18px]">
                            • {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT SIDE WRAPPER (Quick Links + Built For + Policies) */}
                  <div className="col-span-2 grid grid-cols-2 gap-x-8">

                    {/* Quick Links */}
                    <div>
                      <H4>Quick Links</H4>
                      <ul className="space-y-1 mt-2 font-quicksand">
                        {quickLinks.map((item) => (
                          <li key={item.label}>
                            <a href={item.url} className="text-black dark:text-white text-[18px]">
                              • {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Built For */}
                    <div>
                      <H4>Built For</H4>
                      <ul className="space-y-1 mt-2 font-quicksand">
                        {BuiltFor.map((item) => (
                          <li key={item.label}>
                            <a href={item.url} className="text-black dark:text-white text-[18px]">
                              • {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ✅ POLICIES BELOW BOTH */}
                    <div className="col-span-2 mt-46 flex gap-x-6 flex-wrap">
                      <a href="/industries/banking-and-finance/terms-and-conditions" className="text-black dark:text-white text-[18px]">
                        Terms and Conditions
                      </a>
                      <a href="/industries/banking-and-finance/cookies-policies" className="text-black dark:text-white text-[18px]">
                        Cookies Policy
                      </a>
                      <a href="/industries/banking-and-finance/policy" className="text-black dark:text-white text-[18px]">
                        Privacy Policy
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </div>



          </div>
          {/* Bottom Pattern Image - no extra spacing */}
          {/* <img
            src="/BNFFooter/BottomPattern.png"
            className="w-full h-16  absolute bottom-0 object-cover block"
            alt=""
          /> */}

        </footer>
      </div>


    </div>

  );
};

export default NewOneFooter;