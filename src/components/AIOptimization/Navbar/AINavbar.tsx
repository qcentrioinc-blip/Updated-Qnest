import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import MobileFeaturesDropdown from "./MobileFeaturesDropdown";
import MobileResourcesDropdown from "./MobileResourcesDropdown";
import MobileBuiltForDropdown from "./MobileBuiltForDropdown";
import { createPortal } from "react-dom";
import { prefetchLandingPageAIImages } from "../../HomePage/AIOptimization/LandingPageAI";
import ContactModal from "./ContactModal";
// import { NavbarDayNightToggle } from "../../Global/DayNightToggle";
 
const MegaMenu = lazy(() => import("./MegaMenu"));
const ResourcesMenu = lazy(() => import("./ResourcesMenu"));
const BuiltForMenu = lazy(() => import("./BuiltForMenu"));

// const preloadAssets = () => {
//   const dashImg = new Image();
//   dashImg.src = '/AIOptimization/dashboardfinal.webp';
// };

const AINavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "features" | "resources" | "builtfor">(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);


  // const hasPreloaded = useRef(false);

  // const handlePreload = () => {
  //   if (!hasPreloaded.current) {
  //     hasPreloaded.current = true;
  //     preloadAssets();
  //     // Prefetch FloatingLines component (animation background)
  //     import("../../HomePage/AIOptimization/AIFooterBackground");
  //   }
  // };

  // ---------- PREFETCH LOGIC ----------
  const prefetched = useRef<Set<string>>(new Set());
  const handlePrefetch = (key: string, fn: () => void) => {
    if (!prefetched.current.has(key)) {
      fn();
      prefetched.current.add(key);
    }
  };



  const prefetch = {
    features: () => {
      import("../../HomePage/AIOptimization/HeroAIOptimization");
      import("./MegaMenu");
      import("../../HomePage/AIOptimization/Statistics");
      import("../../HomePage/AIOptimization/CloudDiet");
      import("../../HomePage/AIOptimization/AIBlogs");
      // AIFooter is statically imported in many files, no need to prefetch
      prefetchLandingPageAIImages();
      const img = new Image();
      img.src = "/AIOptimization/LandingBackground.png";
    },
    builtfor: () => {
      import("../../Global/BuiltFor/BuiltFor");
      import("./BuiltForMenu");
    },
    pricing: () => import("../Pricing/Pricing"),
    resources: () => {
      // import("../Resources/Resource");
      import("../ResourceDoc/ResourceDoc");
      import("./ResourcesMenu");
    },
    support: () => { /* ContactModal is now statically imported */ },
  };

  // ---------- HOVER TIMEOUT LOGIC ----------
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTouchRef = useRef(false);

  // Detect touch vs mouse input
  useEffect(() => {
    const onTouch = () => { isTouchRef.current = true; };
    const onMouse = () => { isTouchRef.current = false; };
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => {
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const handleCloseMenus = () => {
    timeoutRef.current = setTimeout(() => {
      // setMegaMenuOpen(false);
      // setResourcesMenuOpen(false);
      setLogoDropdownOpen(false);
      setMegaMenuBuiltFor(false);
    }, 200);
  };

  const handleKeepOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const closeAllMenus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // setMegaMenuOpen(false);
    // setResourcesMenuOpen(false);
    setLogoDropdownOpen(false);
    setMegaMenuBuiltFor(false);
  };

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  // ---------- AI-SPECIFIC DATA ----------

  const industry = "cloud-finops-ai";
  const currentIndustry = "Cloud FinOps AI";
  const base = `/industries/${industry}`;

  const navItems = [
    { name: "Features", path: `${base}/features`, scroll: false },
    { name: "Built for", path: base },
    { name: "Pricing", path: `${base}/pricing` },
    { name: "Resources", path: `${base}/resources` },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const isUp = currentY < lastScrollY.current;

      setIsScrolled(currentY > 30);

      // Hide when scrolling down (> 50px), Show when scrolling up
      if (currentY > 50 && !isUp) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile sidebar is open
  const scrollYRef = useRef(0);
  useEffect(() => {
    if (menuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);



  // ---------- RENDER ----------

  return createPortal(
    <>
      {/* TOP TRANSPARENT BAR - Scrolls away */}
      <div className={`fixed top-0 z-50 left-0 font-quadran font-light w-full h-14 bg-bg-white/80 bg-white/10 backdrop-blur-lg font-quadran   px-4 sm:px-6 md:px-8 flex items-center justify-between transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/" className="flex items-center cursor-pointer" aria-label="Go to Homepage">
          <img className="h-10 w-full" src="/WhiteQnestLogo.webp" alt="Company Logo" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {/* <Link to={`${base}/platform`} className={`font-medium transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Platform</Link> */}
          <Link to={`${base}/marketplace`} className={`font-medium transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>Marketplace</Link>
        </div>
 <div className="lg:hidden flex items-center    gap-2">
 {/* <NavbarDayNightToggle/> */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
        </div>
      </div>

      {/* MAIN NAV (ALL SCREENS - PERMANENTLY FIXED) */}
      <nav
        onMouseLeave={handleCloseMenus}
        onMouseEnter={handleKeepOpen}
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[9999] justify-center transition-none pointer-events-none`}
      >
        <div
          className={`bg-white backdrop-blur-md shadow-lg px-10 py-2 flex items-center justify-between pointer-events-auto
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${isScrolled
              ? `w-full rounded-none scale-100 ${showTopBar ? 'translate-y-14' : ''}`
              : "w-[90%] max-w-8xl rounded-full scale-[0.98] translate-y-15"
            }`}
        >


          <div className="flex items-center gap-10">
            <div
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => {
                handleKeepOpen();
                setLogoDropdownOpen(true);
                setMegaMenuBuiltFor(false);
              }}
            >
              <Link
                to="/industries/cloud-finops-ai"
                onClick={closeAllMenus}
                className="flex items-center gap-1"
              >
                <div className="w-full h-12 flex justify-center items-center">
                  <img src="/QCloudLogo.svg" className="w-auto h-10" alt="Cloud FinOps AI" />
                </div>

                {/* Chevron */}
                <img
                  src="/down.png"
                  className={`w-4 h-4 transition-transform duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </Link>

              {/* 🔽 LOGO DROPDOWN */}
              {logoDropdownOpen && (
                <div
                  className="absolute top-16 w-80 bg-white  shadow-xl rounded-md z-[999] p-3"
                  onMouseEnter={handleKeepOpen}
                  onMouseLeave={handleCloseMenus}
                >
                  <Link
                    to="/industries/ehr-and-pms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-2 rounded-md  hover:bg-gray-100 transition-all"
                  >
                    <img
                      src="/QEHRLogo2.svg"
                      alt="EHR and PMS"
                      className="w-14 h-14 object-contain"
                    />

                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-900">
                        EHR & PMS
                      </h4>
                      <p className="text-gray-600 font-quicksand ">
                        The unified platform for clinical and administrative excellence.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/industries/banking-and-finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-10 transition-all"
                  >
                    <img
                      src="/QBnfLogo2.png"
                      alt="EHR and PMS"
                      className="w-14 h-14 object-contain"
                    />

                    <div className="flex flex-col">
                      <h4 className="text-lg  font-semibold text-gray-900">
                        Banking-and-Finance
                      </h4>
                      <p className="text-gray-600 font-quicksand text-xs">
                        Smart KYC and reconciliation for modern banking.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>


            <ul className="hidden lg:flex items-center gap-8 font-light font-quadran">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.name === "Features" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        closeAllMenus();
                        handlePrefetch("features", prefetch.features);
                      }}
                      className="   font-regular font-quadran cursor-pointer"
                    >
                      Features
                    </Link>
                  )}

                  {item.name === "Resources" && (
                    <Link
                      target="_blank"
                      to="/industries/cloud-finops-ai/resources/whyclouddiet/clouddiet"
                      onMouseEnter={() => handlePrefetch("resources", prefetch.resources)}
                      className="   font-regular font-quadran cursor-pointer"
                      onClick={closeAllMenus}
                    >
                      Resources
                    </Link>
                  )}

                  {item.name === "Built for" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (isTouchRef.current) return;
                        handleKeepOpen();
                        setMegaMenuBuiltFor(true);
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        handlePrefetch("builtfor", prefetch.builtfor);
                      }}
                      onClick={() => {
                        handleKeepOpen();
                        setMegaMenuBuiltFor((prev) => !prev);
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setLogoDropdownOpen(false);
                        handlePrefetch("builtfor", prefetch.builtfor);
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className=" font-regular font-quadran  cursor-pointer">Built For</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setMegaMenuBuiltFor(false);
                        if (item.name === "Pricing") handlePrefetch("pricing", prefetch.pricing);
                      }}
                      className="font-regular font-quadran cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button
              className="  font-regular font-quadran cursor-pointer"
              onClick={() => setModalOpen(true)}
              onMouseEnter={() => handlePrefetch("support", prefetch.support)}
            >
              Support
            </button>
            <button
              onClick={() => window.open("https://clouddiet.ai/signup", "_blank")}
              onMouseEnter={() => handlePrefetch("support", prefetch.support)}
              className="
           group
          flex items-center justify-center
          w-auto h-[36px]
          px-[16px] py-[4px]
          rounded-[8px]
          font-quadran font-light text-sm
          bg-[#009565] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]
         
        "
            > SIGN UP
              {/* <span className="relative flex items-center justify-center w-[20px] h-[20px]"> */}

                {/* Default Icon */}
                {/* <svg
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
                </svg> */}

                {/* Hover Icon */}
                {/* <svg
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
                </svg> */}

              {/* </span> */}
            </button>

             {/* <NavbarDayNightToggle /> */}
          </div>
          

          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* MEGA MENUS - keeping your existing code */}
      <Suspense fallback={<div>Loading Mega Menu...</div>}>
        {megaMenuOpen && (
          <MegaMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading Resources Menu...</div>}>
        {resourcesMenuOpen && (
          <ResourcesMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading Built For Menu...</div>}>
        {megaMenuBuiltFor && (
          <BuiltForMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
            onLinkClick={closeAllMenus}
          />
        )}
      </Suspense>
      {/* MOBILE MENU - keeping your existing mobile menu code */}
      <div ref={menuRef} className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link to={base} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-white text-white flex justify-center items-center rounded-full text-xs font-semibold">
                <img src="/AIProduct/QNEST.webp" className="w-auto h-10" alt="" />
              </div>
              <span className="text-xl font-semibold text-gray-900">{currentIndustry}</span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          <MobileFeaturesDropdown setMenuOpen={setMenuOpen} />
          <MobileBuiltForDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          />


          {navItems.map((item) =>
            item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className=" font-quadran font-regular block">
                  {item.name}
                </Link>
              </div>
            ) : null
          )}


          <MobileResourcesDropdown setMenuOpen={setMenuOpen} />

          <div className="border-b border-gray-200 pb-3">
            <Link to={`${base}/careers`} onClick={() => setMenuOpen(false)} className=" font-quadran font-regular block">
              Careers
            </Link>
          </div>
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          {/* <Link to={`${base}/platform`} onClick={() => setMenuOpen(false)} className="text-purple-600 font-quadran font-regular">Platform</Link> */}
          <Link to={`${base}/marketplace`} onClick={() => setMenuOpen(false)} className="text-purple-600 font-quadran font-regular">Marketplace</Link>
        </div>

        <div className="mt-6 flex justify-start items-center gap-4">
          {/* Support Button */}
          <button
            onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            className="
              group
          flex items-center justify-center
          w-auto h-[36px]
          px-[16px] py-[4px]
          rounded-[8px]
          font-quadran font-regular text-xs
          bg-[#009565] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]
         
            "
          >
            Support
            {/* <span className="relative flex items-center w-[16px] h-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
            </span> */}
          </button>

          {/* Sign Up Button */}
          <a
            href="https://clouddiet.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
          flex items-center justify-center
          w-auto h-[36px]
          px-[16px] py-[4px]
          rounded-[8px]
          font-quadran font-regular text-xs
          bg-[#009565] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]
         
            "
          >
            SIGN UP
            {/* <span className="relative flex items-center w-[16px] h-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
            </span> */}
          </a>
        </div>
      </div>

      {/* CONTACT MODAL - SLIDES FROM TOP */}
      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}

    </>,
    document.body
  );
};

export default AINavbar;