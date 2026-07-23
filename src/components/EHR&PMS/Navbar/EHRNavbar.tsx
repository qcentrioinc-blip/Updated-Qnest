import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import MobileProductsDropdown from "./MobileProductsDropdown";
// import MobileResourcesDropdown from "./MobileResourcesDropdown";
import MobileBuiltForDropdown from "./MobileBuiltForDropdown";

import ContactDrawer from "./ContactDrawer";
// import { NavbarDayNightToggle } from "../../Global/DayNightToggle";
const MegaMenu = lazy(() => import("./MegaMenu"));
// const ResourcesMenu = lazy(() => import("./ResourcesMenu"));
const BuiltForMenu = lazy(() => import("./BuiltForMenu"));

const EHRNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  // const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "resources" | "builtfor">(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);

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
      setMegaMenuOpen(false);
      // setResourcesMenuOpen(false);
      setMegaMenuBuiltFor(false);
      setLogoDropdownOpen(false);
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
    setMegaMenuOpen(false);
    // setResourcesMenuOpen(false);
    setMegaMenuBuiltFor(false);
    setLogoDropdownOpen(false);
  };

  const prefetchPhysicianImages = () => {
    const images = [
      "/EHRIcons/PhysicianHero1.webp",
      "/EHRIcons/PhysicianHero2.webp",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const prefetchAdminImages = () => {
    const images = [
      "/EHRIcons/admin.webp",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const prefetchInsuranceCoordinatorImages = () => {
    const images = [
      "/EHR-PMS/InsuranceCoordinator/Img1.png",
      "/EHR-PMS/InsuranceCoordinator/Img2.png",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const prefetchReceptionistImages = () => {
    const images = [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const prefetchNurseImages = () => {
    const images = [
      "/EHR-PMS/Nurse/img1.webp",
      "/EHR-PMS/Nurse/img2.webp",
      "/EHR-PMS/Nurse/img3.webp",
      "/EHR-PMS/Nurse/img4.webp",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const prefetchLongTermCareImages = () => {
    const img = new Image();
    img.src = "/BuiltFor/LongTermEHR.webp";
  };

  const prefetchHomeHealthcareImages = () => {
    const img = new Image();
    img.src = "/BuiltFor/HomeHealthcareEHR.webp";
  };

  const prefetchClinicsAndHospitalsImages = () => {
    const img = new Image();
    img.src = "/BuiltFor/ClinicsEHR.webp";
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const industry = "ehr-and-pms";
  const currentIndustry = "EHR and PMS";
  const industries = [
    {
      name: "Banking & Finance",
      path: "/industries/banking-and-finance",
      img: "/QBnfLogo2.png",
      desc: "Smart KYC and reconciliation for modern banking."
    },

    // {
    //   name: "EHR and PMS", path:
    //     "/industries/ehr-and-pms",
    //   img: "/BNFHOME/P1.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    // },

    // {
    //   name: "HighTech",
    //   path: "/industries/high-tech",
    //   img: "/BNFHOME/P1.png"
    //   ,
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    // },

    {
      name: "Cloud Finops Ai",
      path: "/industries/cloud-finops-ai",
      img: "/QCloudLogo2.svg",
      desc: "Leverage intelligent automation to streamline clinical documentation"
    },

  ];
  const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);
  const base = `/industries/${industry}`;

  const navItems = [
    { name: "Solutions", path: `${base}` },
    { name: "Pricing", path: `${base}/pricing` },
    { name: "Built for", path: base },
    // { name: "Resources", path: `${base}/resources` },
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
      <div className={`fixed top-0 z-50 left-0 w-full h-14 bg-bg-white/80 bg-white/10 backdrop-blur-lg font-quadran   px-4 sm:px-6 md:px-8 flex items-center justify-between transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/" className="flex items-center cursor-pointer" aria-label="Go to Homepage">
          <div className="   px-4 py-1 rounded-lg">
            <span className="text-gray-800 font-quadran   text-sm sm:text-base">
              <img className="h-10 w-full" src="/QnestEHRLogo.svg" alt="Company Logo" />
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {/* <Link to={`${base}/platform`} className={`font-medium transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Platform</Link> */}
          <Link to={`${base}/marketplace`} className={`font-medium transition-colors ${isScrolled ? 'text-black' : 'text-black'}`}>Marketplace</Link>
        </div>
    
       <div className="lg:hidden flex items-center    gap-2">
  {/* <NavbarDayNightToggle /> */}
  <button
    className="flex flex-col justify-center items-center gap-[6px] w-10 h-10"
    onClick={handleToggleMenu}
    aria-label="Toggle menu"
  >
    <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
    <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
    <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
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
          className={`bg-white dark:bg-gray-300 backdrop-blur-md shadow-lg px-10 py-3 flex items-center justify-between pointer-events-auto
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
                setMegaMenuOpen(false);
                // setResourcesMenuOpen(false);
                setMegaMenuBuiltFor(false);
              }}
            >
              <Link
                to={base}
                className="flex items-center gap-1"
                onClick={() => {
                  closeAllMenus();
                }}
              >
                <div className="text-white flex justify-center items-center rounded-full text-[10px] font-semibold transition-all duration-300">
                  <img className="h-full w-full" src="/QEHRLogo.svg" alt="Company Logo" />
                </div>
                {/* ROTATING X ICON */}
                <div className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                  <img src="/down.png" className="w-4 h-4" />
                </div>
              </Link>
              {logoDropdownOpen && (
                <div
                  className="absolute top-14 w-80 z-[999] p-1"
                  onMouseEnter={handleKeepOpen}
                  onMouseLeave={handleCloseMenus}
                >
                  <div className="bg-white  dark:bg-gray-300 shadow-xl rounded-md p-3 border border-gray-100/50">
                    {industryOptions.map((ind, index) => (
                      <Link
                        key={index}
                        to={ind.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-2 rounded-md dark:hover:bg-[#00AA72]   hover:bg-gray-100 transition-all"
                      >
                        {/* ICON */}
                        <img
                          src={ind.img}
                          alt={ind.name}
                          className="w-16 h-14 object-cover rounded-md"
                        />

                        {/* TEXT */}
                        <div className="flex flex-col">
                          <h3 className="text-lg font-semibold font-quicksand text-gray-900">
                            {ind.name}
                          </h3>
                          <p className="text-gray-600   font-quicksand text-sm">
                            {ind.desc || "Click to explore"}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ul className="hidden lg:flex items-center   gap-8 font-bold font-quicksand">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.name === "Solutions" && (
                    <div
                      className="relative "
                      onMouseEnter={() => {
                        if (isTouchRef.current) return;
                        handleKeepOpen();
                        setMegaMenuOpen(true);
                        // setResourcesMenuOpen(false);
                        setMegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                        prefetchPhysicianImages();
                        prefetchAdminImages();
                        prefetchInsuranceCoordinatorImages();
                        prefetchReceptionistImages();
                        prefetchNurseImages();
                      }}
                      onClick={() => {
                        handleKeepOpen();
                        setMegaMenuOpen((prev) => !prev);
                        setMegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                        prefetchPhysicianImages();
                        prefetchAdminImages();
                        prefetchInsuranceCoordinatorImages();
                        prefetchReceptionistImages();
                        prefetchNurseImages();
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Solutions</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name === "Resources" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        handleKeepOpen();
                        // setResourcesMenuOpen(true);
                        setMegaMenuOpen(false);
                        setMegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Resources</button>
                        {/* <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${resourcesMenuOpen ? "rotate-180" : "rotate-0"}`} /> */}
                      </div>
                    </div>
                  )}

                  {item.name === "Built for" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (isTouchRef.current) return;
                        handleKeepOpen();
                        setMegaMenuBuiltFor(true);
                        setMegaMenuOpen(false);
                        // setResourcesMenuOpen(false);
                        setLogoDropdownOpen(false);
                        prefetchLongTermCareImages();
                        prefetchHomeHealthcareImages();
                        prefetchClinicsAndHospitalsImages();
                      }}
                      onClick={() => {
                        handleKeepOpen();
                        setMegaMenuBuiltFor((prev) => !prev);
                        setMegaMenuOpen(false);
                        setLogoDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Built For</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name !== "Solutions" && item.name !== "Resources" && item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={closeAllMenus}
                      className="text-gray-800 text-[18px]"
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
              onClick={() => setDrawerOpen(true)}
              className="text-gray-800 text-[18px]   font-bold font-quicksand cursor-pointer"
            >
              Support
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                setDrawerOpen(true);
              }}
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
  "
            >
              <span className="flex items-center gap-2">
                Contact Us

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
{/* <NavbarDayNightToggle/> */}
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

      {/* MEGA MENUS */}
      <Suspense fallback={<div>Loading...</div>}>
        {megaMenuOpen && (
          <MegaMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
            prefetchPhysicianImages={prefetchPhysicianImages}
            prefetchAdminImages={prefetchAdminImages}
            prefetchInsuranceCoordinatorImages={prefetchInsuranceCoordinatorImages}
            prefetchReceptionistImages={prefetchReceptionistImages}
            prefetchNurseImages={prefetchNurseImages}
          />
        )}
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>
        {resourcesMenuOpen && (
          <ResourcesMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense> */}

      <Suspense fallback={<div>Loading...</div>}>
        {megaMenuBuiltFor && (
          <BuiltForMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
            prefetchLongTermCareImages={prefetchLongTermCareImages}
            prefetchHomeHealthcareImages={prefetchHomeHealthcareImages}
            prefetchClinicsAndHospitalsImages={prefetchClinicsAndHospitalsImages}
            onLinkClick={closeAllMenus}
          />
        )}
      </Suspense>

      {/* MOBILE MENU */}
      <div ref={menuRef} className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] dark:bg-black bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link to={base} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12  text-white flex justify-center items-center rounded-full text-xs font-semibold">
                <img className="h-10 w-full" src="/QEHRLogo2.svg" alt="Company Logo" />
              </div>
              <span className="text-xl  dark:text-white font-semibold text-gray-900">{currentIndustry}</span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          <MobileProductsDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          />

          {navItems.map((item) =>
            item.name !== "Solutions" && item.name !== "Built for" && item.name !== "Resources" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-white text-lg font-semibold block">
                  {item.name}
                </Link>
              </div>
            ) : null
          )}

          <MobileBuiltForDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          />
          {/* <MobileResourcesDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          /> */}

          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setDrawerOpen(true)} className="text-gray-800 dark:text-white text-lg font-semibold block">
              Support
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          {/* <Link to={`${base}/platform`} onClick={() => setMenuOpen(false)} className="text-purple-600 text-lg font-semibold">Platform</Link> */}
          <Link to={`${base}/marketplace`} onClick={() => setMenuOpen(false)} className="text-black dark:text-[#00AA72]   text-lg font-semibold">Marketplace</Link>
        </div>

        <div className="mt-6 flex justify-start items-center gap-4">
          <button
            onClick={() => { setMenuOpen(false); setDrawerOpen(true); }}
            className="
              group
              flex items-center justify-center gap-2
              h-[48px]
              px-[20px] py-[12px]
              rounded-[8px]
               dark:border-[#00AA72]   dark:bg-[#00AA72]   dark:text-white
              font-quicksand font-bold text-[14px]
              bg-black text-white
              border-2 border-black
              transition-all duration-300
              hover:bg-white hover:text-black
              w-full
            "
          >
            Contact Us
            <span className="relative flex items-center w-[16px] h-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {drawerOpen && <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}

    </>,
    document.body
  );
};

export default EHRNavbar;
