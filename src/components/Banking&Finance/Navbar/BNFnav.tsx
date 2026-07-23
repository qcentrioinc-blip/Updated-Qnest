import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import MobileProductsDropdown from "./MobileProductsDropdown";
import MobileResourcesDropdown from "./MobileResourcesDropdown";
import MobileBuiltForDropdown from "./MobileBuiltForDropdown";

import { ContactUs } from "../../../styles/Button";
// import { NavbarDayNightToggle } from "../../Global/DayNightToggle";
// import DayNightToggle from "../../Global/DayNightToggle";

const MegaMenu = lazy(() => import("./MegaMenu"));
const ResourcesMenu = lazy(() => import("./ResourcesMenu"));
const BuiltForMenu = lazy(() => import("./BuiltForMenu"));

const BNFNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setmegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "resources" | "builtfor">(null);
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
      setResourcesMenuOpen(false);
      setmegaMenuBuiltFor(false);
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
    setResourcesMenuOpen(false);
    setmegaMenuBuiltFor(false);
    setLogoDropdownOpen(false);
  };

  const preloadImages = () => {
    const images = [
      "/BNFHOME/P1.png",
      "/BNFHOME/P2.jpg",
      "/BNFHOME/P3.jpg",
      "/BNFHOME/P4.png",
      "/BNFHOME/P5.jpg",
      "/BNFHOME/P6.jpg",
      "/BNFHOME/P7.jpg",
      "/BNFHOME/P8.jpg",
      "/BNFHOME/P9.jpg",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const industry = "banking-and-finance";
  const currentIndustry = "";
  const industries = [
    // {
    //   name: "Banking & Finance",
    //   path: "/industries/banking-and-finance",
    //   img: "/QBnFLogo.svg",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    // },
    {
      name: "EHR and PMS",
      path: "/industries/ehr-and-pms",
      img: "/QEHRLogo2.svg",
      desc: "The unified platform for clinical and administrative excellence."
    },
    {
      name: "Cloud Finops AI",
      path: "/industries/cloud-finops-ai",
      img: "/QCloudLogo2.svg",
      desc: "Leverage intelligent automation to streamline clinical documentation"
    },
  ];

  const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);
  const base = `/industries/${industry}`;

  const navItems = [
    { name: "Products", path: `${base}?scroll=products` },
    { name: "Built for", path: base },
    // { name: "Blogs", path: `${base}/blogs` },
    { name: "Resources", path: base },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [showMainNav, setShowMainNav] = useState(true);
  const [hasHeroNav, setHasHeroNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const isUp = currentY < lastScrollY.current;
      const isProductRoute = window.location.pathname.includes("/industries/banking-and-finance/products/");

      setIsScrolled(currentY > 30);

      const heroBottomNav = document.getElementById("hero-bottom-nav");
      const heroNavExists = !!heroBottomNav;
      if (heroNavExists !== hasHeroNav) setHasHeroNav(heroNavExists);

      if (isProductRoute) {
        // Product routes: only show TopBar & MainNav at the very top
        const atTop = currentY <= 50;
        setShowTopBar(atTop);
        setShowMainNav(atTop);
      } else {
        // Non-product routes: existing behavior
        if (currentY > 50 && !isUp) {
          setShowTopBar(false);
        } else {
          setShowTopBar(true);
        }

        if (heroBottomNav) {
          let docOffset = 0;
          let el: HTMLElement | null = heroBottomNav;
          while (el) {
            docOffset += el.offsetTop;
            el = el.offsetParent as HTMLElement | null;
          }

          const isInStickyZone = currentY + 80 > docOffset;

          if (isInStickyZone) {
            if (isUp) {
              setShowMainNav(true);
            } else {
              setShowMainNav(false);
            }
          } else {
            setShowMainNav(true);
          }
        } else {
          setShowMainNav(true);
        }
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
// const isPagoPage = location.pathname === "/industries/banking-and-finance/products/pago";
  return createPortal(
    <>
    
      {/* TOP TRANSPARENT BAR */}
      <div className={`fixed top-0 z-50 left-0 w-full h-14  bg-white/10 backdrop-blur-lg font-quadran   px-4 sm:px-6 md:px-8 flex items-center justify-between transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/" className="flex items-center cursor-pointer" aria-label="Go to Homepage">
          <div className="px-4 py-1 rounded-lg">
            <span className="text-gray-800 font-quadran   text-sm sm:text-base">
              <img className="h-10 w-full" src="/QnestLogo.svg" alt="Company Logo" />
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
        {/* {isPagoPage && <DayNightToggle />} */}
          {/* <Link to={`${base}/platform`} className={`font-medium transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Platform</Link> */}
          <Link to={`${base}/marketplace`} className={`font-medium transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Marketplace</Link>
        </div>
    <div className="lg:hidden flex items-center gap-2">
  {/* <NavbarDayNightToggle /> */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
         </div>
      </div>  

      {/* MAIN NAV */}
      <nav
        onMouseLeave={handleCloseMenus}
        onMouseEnter={handleKeepOpen}
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[9999] justify-center transition-none pointer-events-none`}
      >
        
        <div
          className={` dark:bg-gray-300 bg-white dark:text-white backdrop-blur-md shadow-lg px-10 py-3 flex items-center justify-between pointer-events-auto
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${!showMainNav || (!showTopBar && isScrolled && hasHeroNav)
              ? 'w-full rounded-none scale-100 -translate-y-full delay-0'
              : isScrolled
                ? `w-full rounded-none scale-100 ${showTopBar ? 'translate-y-14 delay-200' : 'delay-0'}`
                : `w-[90%] max-w-8xl rounded-full scale-[0.98] ${showTopBar ? 'translate-y-15 delay-200' : 'delay-0'}`
            }`}
        >
          <div className="flex items-center gap-10">
            <div
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => {
                handleKeepOpen();
                setLogoDropdownOpen(true);
                setMegaMenuOpen(false);
                setResourcesMenuOpen(false);
                setmegaMenuBuiltFor(false);
              }}
            >
              <Link
                to={base}
                className="flex items-center gap-1"
                onClick={() => {
                  closeAllMenus();
                }}
              >
                <div className=" flex justify-center items-center rounded-full text-[10px] font-semibold transition-all duration-300">
                  <img className="h-full w-full" src="/QBnFLogo.svg" alt="Company Logo" />
                </div>  
                <div className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                  <img src="/down.png" className="w-4 h-4" />
                </div>
              </Link>
              {logoDropdownOpen && (
                <div
                  className="absolute top-14 w-[450px] z-[999] p-3"
                  onMouseEnter={handleKeepOpen}
                  onMouseLeave={handleCloseMenus}
                >
                  <div className="bg-white  dark:bg-gray-800 shadow-xl rounded-md p-3 border border-gray-100/50">
                    {industryOptions.map((ind, index) => (
                      <Link
                        key={index}
                        to={ind.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-2 rounded-md dark:hover:bg-gray-600 hover:bg-gray-100 transition-all"
                      >
                        <img
                          src={ind.img}
                          alt={ind.name}
                          className="w-16 h-14 object-cover rounded-md"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-lg dark:text-white  font-semibold font-quicksand text-gray-900">
                            {ind.name}
                          </h3>
                          <p className="text-gray-600  dark:text-white font-quicksand text-sm">
                            {ind.desc || "Click to explore"}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ul className="hidden lg:flex dark:text-white items-center gap-8 font-bold font-quicksand">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.name === "Products" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (isTouchRef.current) return;
                        handleKeepOpen();
                        setMegaMenuOpen(true);
                        setResourcesMenuOpen(false);
                        setmegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                        preloadImages();
                      }}
                      onClick={() => {
                        handleKeepOpen();
                        setMegaMenuOpen((prev) => !prev);
                        setmegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                        preloadImages();
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Products</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name === "Resources" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        handleKeepOpen();
                        setResourcesMenuOpen(true);
                        setMegaMenuOpen(false);
                        setmegaMenuBuiltFor(false);
                        setLogoDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Resources</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${resourcesMenuOpen ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name === "Built for" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (isTouchRef.current) return;
                        handleKeepOpen();
                        setmegaMenuBuiltFor(true);
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setLogoDropdownOpen(false);
                      }}
                      onClick={() => {
                        handleKeepOpen();
                        setmegaMenuBuiltFor((prev) => !prev);
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

                  {item.name !== "Products" && item.name !== "Resources" && item.name !== "Built for" && (
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
            {/* <Link
              to={`${base}/careers`}
              className="text-gray-800 text-[18px] font-bold font-quicksand cursor-pointer"
            >
              Careers
            </Link> */}

            <ContactUs onClick={(e) => {
              e.preventDefault();
              const hasContactSection = location.pathname.includes("/products/") || location.pathname.includes("/built-for/")|| location.pathname.includes("/industries/banking-and-finance/blogs")||location.pathname.includes("/industries/banking-and-finance/marketplace");
              const target = hasContactSection ? "#contact-us" : `${base}#contact-us`;
              navigate(target);
              setTimeout(() => {
                const el = document.getElementById('contact-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>Contact Us</ContactUs>
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
            preloadImages={preloadImages}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {resourcesMenuOpen && (
          <ResourcesMenu
            isScrolled={isScrolled}
            showTopBar={showTopBar}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
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

      {/* MOBILE MENU */}
      <div ref={menuRef} className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] dark:bg-black bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link to={base} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="flex justify-center items-center rounded-full text-xs font-semibold">
                <img className="h-full w-full" src="/QBnFLogo.svg" alt="Company Logo" />
              </div>
              <span className="text-xl font-semibold text-gray-900">{currentIndustry}</span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4">
          <MobileProductsDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          />

          {navItems.map((item) =>
            item.name !== "Products" && item.name !== "Built for" && item.name !== "Resources" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
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
          <MobileResourcesDropdown
            mobileDropdown={mobileDropdown}
            setMobileDropdown={setMobileDropdown}
            setMenuOpen={setMenuOpen}
          />

          {/* <div className="border-b border-gray-200 pb-3">
            <Link to={`${base}/careers`} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
              Careers
            </Link>
          </div> */}
        </div>
        

        <div className="flex justify-between mt-10 gap-6 pt-4">
          {/* <Link to={`${base}/platform`} onClick={() => setMenuOpen(false)} className="text-purple-600 text-lg font-semibold">Platform</Link> */}
          <Link to={`${base}/marketplace`} onClick={() => setMenuOpen(false)} className="text-blue-600 text-lg font-semibold">Marketplace</Link>
        </div>
 
        <div className="mt-6 flex justify-start items-center gap-4">
          
          <ContactUs onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            const hasContactSection = location.pathname.includes("/products/") || location.pathname.includes("/built-for/");
            const target = hasContactSection ? "#contact-us" : `${base}#contact-us`;
            navigate(target);
            setTimeout(() => {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 400);
          }}>Contact Us</ContactUs>
        </div>
      </div>



    </>,
    document.body
  );
};

export default BNFNav;