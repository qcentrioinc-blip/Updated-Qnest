import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { H3, P } from "../../../styles/Typography";
import { ChevronDown } from "lucide-react";

const HighTechNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setmegaMenuBuiltFor] = useState(false);

  // const [openMenu, setOpenMenu] = useState<"products" | "resources" | "built" | null>(null);

  const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "resources" | "builtfor">(null);
  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setResourcesMenuOpen(false);
    setmegaMenuBuiltFor(false);
    setLogoDropdownOpen(false);
  };


  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);

  const preloadImages = () => {
    megaMenuItems.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  };

  // ---------- FIXED HIGH-TECH ROUTES ----------
  const industry = "high-tech";
  const currentIndustry = "HighTech";
  const base = `/industries/${industry}`;

  const navItems = [
    { name: "Products", path: "/industries/high-tech/product-details" },
    { name: "Built for", path: "/industries/high-tech" },
    { name: "About Us", path: "/industries/high-tech/aboutus" },
    { name: "Resources", path: "/industries/high-tech/resources" },
  ];

  const megaMenuItems = [
    {
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud solutions for modern enterprises.",
      img: "/HighTech/Careers/bg_img2.png",
      path: "/industries/high-tech/product-details",
    },
  ];

  const resourceItems = [
    {
      title: "Technical Docs",
      desc: "API references, SDKs, and integration guides.",
      path: "/industries/high-tech/resources",
    },
    {
      title: "Developer Blog",
      desc: "Technical insights, tutorials, and best practices.",
      path: "/industries/high-tech/resources-detail",
    },
  ];

  const builtForItems = [
    {
      title: "SaaS Companies",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/built-for",
    },
    {
      title: "Enterprises",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/built-for",
    },
    {
      title: "Startups",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/built-for",
    },
  ];

  const industries = [
    {
      name: "Banking & Finance",
      path: "/industries/banking-and-finance",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      name: "EHR and PMS", path:
        "/industries/ehr-and-pms",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },



    {
      name: "Cloud FinOps AI",
      path: "/industries/cloud-finops-ai",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ];
  const industryOptions = industries.filter(
    (ind) => ind.name !== currentIndustry
  );

  // ---------- EFFECTS ----------
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
  return (
    <>
      {/* TOP TRANSPARENT BAR */}
      <div
        className="fixed top-0 z-50 left-0 w-full
        bg-white/10 backdrop-blur-lg font-quadran  
        border-b border-white/20
         px-4 sm:px-6 md:px-8 pt-3 pb-1
        flex justify-between transition-all duration-300"
      >
        <Link to="/" className="flex items-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-lg">
            <span className="text-gray-800 font-quadran   text-sm sm:text-base">
              LOGO
            </span>
          </div>
        </Link>

        {/* DESKTOP RIGHT LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to={`${base}/platform`} className="text-white font-medium">Platform</Link>
          <Link to={`${base}/marketplace`} className="text-white font-medium">Marketplace</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
            `}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
            `}
          ></span>
        </button>
      </div>

      {/* MAIN NAV (DESKTOP ONLY) */}
      <div className="absolute left-0 right-0 top-10 z-[60] hidden lg:block">
        <nav
          onMouseLeave={closeAllMenus}
          className="layout-shell-wide flex items-center justify-between rounded-full bg-white px-6 py-2 shadow-lg backdrop-blur-md transition-all duration-300"
        >
        <div className="flex items-center gap-10">
          {/* LOGO WITH DROPDOWN */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setLogoDropdownOpen(true)}
            onMouseLeave={() => setLogoDropdownOpen(true)}
          >
            <Link
              to={base}
              className="flex items-center gap-1"
              onClick={() => {
                closeAllMenus();
              }}
            >

              <div className="w-10 h-10 bg-black text-white flex justify-center items-center rounded-full text-[10px] font-semibold transition-all duration-300">
                LOGO
              </div>
              {/* ROTATING ICON */}
              <div className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                <img src="/down.png" className="w-4 h-4" />
              </div>
            </Link>
            {/* LOGO DROPDOWN */}
            {logoDropdownOpen && (
              <div className="absolute top-14 w-80 bg-white shadow-xl rounded-md z-[999] p-3">
                {industryOptions.map((ind, index) => (
                  <Link
                    key={index}
                    to={ind.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 transition-all"
                  >
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="w-16 h-14 object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold font-quicksand text-gray-900">
                        {ind.name}
                      </h3>
                      <p className="text-gray-600 font-quicksand text-sm">
                        {ind.desc || "Click to explore"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* NAV ITEMS */}
          <ul className="flex items-center gap-8 font-bold font-quicksand">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* PRODUCTS MEGA MENU */}
                {item.name === "Products" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      preloadImages();
                      setMegaMenuOpen(true);
                      setResourcesMenuOpen(false);
                      setmegaMenuBuiltFor(false);
                    }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Products</button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                        ${megaMenuOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </div>
                  </div>
                )}

                {/* RESOURCES MEGA MENU */}
                {item.name === "Resources" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setResourcesMenuOpen(true);
                      setMegaMenuOpen(false);
                      setmegaMenuBuiltFor(false);
                    }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Resources</button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                        ${resourcesMenuOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </div>
                  </div>
                )}

                {/* BUILT FOR MEGA MENU */}
                {item.name === "Built for" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setmegaMenuBuiltFor(true);
                      setMegaMenuOpen(false);
                      setResourcesMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Built For</button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                        ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`}
                      />
                    </div>
                  </div>
                )}

                {/* NORMAL LINKS */}
                {item.name !== "Products" &&
                  item.name !== "Resources" &&
                  item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setmegaMenuBuiltFor(false);
                      }}
                      className="text-gray-800 text-[18px]"
                    >
                      {item.name}
                    </Link>
                  )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: Careers + Contact Button */}
        <div className="flex items-center gap-8">
          <Link
            to="/industries/high-tech/careers"
            className="text-gray-800 text-[18px] font-bold font-quicksand"
          >
            Careers
          </Link>

          <Link to="/industries/high-tech/contactform">
            <ContactUsDark>Contact Us</ContactUsDark>
          </Link>
        </div>
        </nav>
      </div>

      {/* FULL-WIDTH PRODUCTS MEGA MENU */}
      {megaMenuOpen && (
        <div
          onMouseEnter={() => {
            setMegaMenuOpen(true);
            setmegaMenuBuiltFor(false);
            setResourcesMenuOpen(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="layout-shell-wide absolute left-1/2 top-32 z-[200] -translate-x-1/2 translate-y-1 rounded-lg bg-gray-50 px-10 py-10 shadow-xl xl:px-16"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />

          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {megaMenuItems.map((item, index) =>
              item ? (
                <div key={index} className="flex items-start gap-4">
                  <Link to={item.path} className="flex items-start gap-4">
                    <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover" loading="eager" />
                    <div>
                      <h3 className="text-lg font-quicksand font-semibold text-gray-900">{item.title}</h3>
                      <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                    </div>
                  </Link>
                </div>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      )}

      {/* RESOURCES MEGA MENU */}
      {resourcesMenuOpen && (
        <div
          onMouseEnter={() => {
            setResourcesMenuOpen(true);
            setMegaMenuOpen(false);
            setmegaMenuBuiltFor(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="layout-shell-wide absolute left-1/2 top-32 z-[200] -translate-x-1/2 translate-y-1 rounded-lg bg-gray-50 px-10 py-10 shadow-xl xl:px-16"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Comprehensive tools and insights for success.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />

          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {resourceItems.map((res, index) => (
              <Link key={index} to={res.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{res.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* BUILT FOR MEGA MENU */}
      {megaMenuBuiltFor && (
        <div
          onMouseEnter={() => {
            setmegaMenuBuiltFor(true);
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="layout-shell-wide absolute left-1/2 top-32 z-[200] -translate-x-1/2 translate-y-1 rounded-lg bg-gray-50 px-10 py-10 shadow-xl xl:px-16"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />

          <div className="grid grid-cols-3 gap-y-4 gap-x-1">
            {builtForItems.map((item, index) => (
              <Link key={index} to={item.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link to="/industries/high-tech" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">LOGO</div>
              <span className="text-xl font-semibold text-gray-900">HighTech</span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          {/* PRODUCTS */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Products
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "products" && (
              <div className="mt-3 pl-3 space-y-4">
                {megaMenuItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
                    <img src={item.img} className="w-12 h-12 rounded-lg object-cover" loading="eager" />
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Resources
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "resources" && (
              <div className="mt-3 pl-3 space-y-4">
                {resourceItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* BUILT FOR */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "builtfor" ? null : "builtfor")}
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Built For
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "builtfor" && (
              <div className="mt-3 pl-3 space-y-4">
                {builtForItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other navItems */}
          {navItems.map((item) =>
            item.name !== "Products" && item.name !== "Resources" && item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
                  {item.name}
                </Link>
              </div>
            ) : null
          )}
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link to="/platform" className="text-blue-500 text-lg font-semibold">Platform</Link>
          <Link to="/marketplace" className="text-blue-500 text-lg font-semibold">Marketplace</Link>
        </div>

        <div className="mt-6 flex justify-start items-center">
          <Link to="/industries/high-tech/contactform" onClick={() => setMenuOpen(false)}>
            <ContactUsDark>Contact Us</ContactUsDark>
          </Link>
        </div>
      </div>
    </>

  );
};

export default HighTechNavbar;
