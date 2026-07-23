import { useEffect, useState, useMemo, useRef } from "react";

type NavItem = {
  label: string;
  id: string;
};

export default function HeroBottomNavbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [showGlobalNav, setShowGlobalNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const isUp = currentY < lastScrollY.current;

      const isProductRoute = window.location.pathname.includes("/industries/banking-and-finance/products/");
      if (isProductRoute) {
        setShowGlobalNav(currentY <= 50);
      } else {
        setShowGlobalNav(currentY <= 50 || isUp);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const navbar = document.getElementById("hero-bottom-nav");
    const globalNavHeight = showGlobalNav ? 124 : 0;
    const heroNavHeight = navbar ? navbar.offsetHeight : 0;
    const totalOffset = globalNavHeight + heroNavHeight + 16; // extra 16px breathing room

    const top = section.getBoundingClientRect().top + window.scrollY - totalOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };
  const navItems: NavItem[] = useMemo(
    () => {
      // const isBankfair = currentPath.includes("/industries/banking-and-finance/products/bankfair");

      return [
        { label: "Overview", id: "overview" },
        { label: "Features", id: "benefits" },
        { label: "Our Process", id: "process" },
        { label: "Use Cases", id: "usecases" },
        { label: "FAQs", id: "faq" },
        // { label: "Blogs", id: "blogs" },
      ];
    },
    [currentPath]
  );

  const [activeSection, setActiveSection] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0
      }

    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // Auto-scroll the nav container horizontally to keep active item visible
  useEffect(() => {
    if (!activeSection) return;
    const container = scrollContainerRef.current;
    const activeEl = navItemRefs.current[activeSection];
    if (!container || !activeEl) return;

    // Use getBoundingClientRect for reliable position calculation
    const containerLeft = container.getBoundingClientRect().left;
    const containerWidth = container.getBoundingClientRect().width;
    const activeLeft = activeEl.getBoundingClientRect().left;
    const activeWidth = activeEl.getBoundingClientRect().width;

    // How far the active element's center is from the container's center
    const activeCenterRelative = activeLeft - containerLeft + activeWidth / 2;
    const containerCenter = containerWidth / 2;
    const scrollAdjustment = activeCenterRelative - containerCenter;

    container.scrollBy({ left: scrollAdjustment, behavior: "smooth" });
  }, [activeSection]);
  return (
    <nav
      id="hero-bottom-nav"
      className={`bg-white shadow-md w-full sticky z-[100] border-b border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showGlobalNav ? "top-[124px] delay-300" : "top-[-1px] delay-500"
        }`}
    >
      <div ref={scrollContainerRef} className="max-w-8xl lg:mx-10 px-4 lg:px-12 scrollbar-hide::-webkit-scrollbar scrollbar-hide font-quadran   py-4 flex gap-10 overflow-x-auto scroll-smooth">
        {navItems.map((item) => (
          <a
            key={item.id}
            ref={(el) => { navItemRefs.current[item.id] = el; }}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`
              text-xs lg:text-lg whitespace-nowrap  
              ${activeSection === item.id
                ? "border-b-4 border-blue-400 font-semibold text-black"
                : "text-gray-700"
              }
            `}
          >
            {item.label}
          </a>
        ))}
        {/* Spacer to allow last item to be scrolled/centered on mobile */}
        <div className="min-w-[40vw] lg:hidden shrink-0" aria-hidden="true" />
      </div>
    </nav>
  );
}
