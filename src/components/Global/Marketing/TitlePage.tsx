"use client";
 
import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
import { Search, ArrowRight } from "lucide-react";
 
const products = [
  { name: "Conciliare", path: "/industries/banking-and-finance/products/conciliare" },
  { name: "KYC & CDD", path: "/industries/banking-and-finance/products/kyc" },
  { name: "Bankfair", path: "/industries/banking-and-finance/products/bankfair" },
  { name: "ALManac", path: "/industries/banking-and-finance/products/almanac" },
  { name: "Remitree", path: "/industries/banking-and-finance/products/remitree" },
  { name: "PAGO", path: "/industries/banking-and-finance/products/pago" },
  { name: "Unified EHR", path: "/industries/ehr-and-pms" },
  { name: "CloudDIET", path: "/industries/cloud-finops-ai" },
];
 
export default function MarketplaceHero() {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
 
  const sectionRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
 
  /* ---------------- Intersection Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
 
  /* ---------------- Filter Products ---------------- */
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
 
  /* ---------------- Outside Click ---------------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
        setActiveIndex(null);
      }
    };
 
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  /* ---------------- Keyboard Navigation ---------------- */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredProducts.length) return;
 
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowDropdown(true);
      setActiveIndex((prev) =>
        prev === null || prev === filteredProducts.length - 1
          ? 0
          : prev + 1
      );
    }
 
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev === null || prev === 0
          ? filteredProducts.length - 1
          : prev - 1
      );
    }
 
    if (e.key === "Enter") {
      const selected =
        activeIndex !== null
          ? filteredProducts[activeIndex]
          : filteredProducts[0];
 
      if (selected) {
        navigate(selected.path);
        setShowDropdown(false);
        setSearch("");
        setActiveIndex(null);
      }
    }
 
    if (e.key === "Escape") {
      setShowDropdown(false);
      setActiveIndex(null);
    }
  };
 
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-full xl:h-screen  py-20 flex items-center justify-center overflow-hidden"
    >
      <div>
        <img
          src="/Hero.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover" />
 
        {/* Go Back Button & Logo */}
        <div className="absolute top-20 md:top-20 lg:top-32 xl:to-20  left-6 md:left-12 lg:left-4  xl:left-12 z-20 flex items-center gap-4 md:gap-6">
          <button
            onClick={() => navigate(-1)}
            className="
              group flex items-center justify-center
              w-12 h-12 md:w-14 md:h-14
              bg-white/70 backdrop-blur-md
              border border-white/60
              rounded-full
              text-black
              shadow-md
              cursor-pointer
              hover:bg-white
              transition-all duration-300
            "
          >
            <ArrowRight
              size={24}
              className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1 md:w-8 md:h-8"
            />
          </button>
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <H1
          className="text-white text-4xl mt-20 xl:mt-0 md:text-6xl font-bold mb-6 leading-snug transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          Qnest Suite of Banking Products
        </H1>
 
        <P
          className="text-lg md:text-xl mb-10 max-w-4xl transition-all duration-700 text-[#FAFAFA]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          Access Qnest's complete suite of banking products on a single platform. From core banking and loan management to AML compliance and cross-border remittances. Each solution is built by industry practitioners to address specific operational challenges faced by financial institutions globally.
 
        </P>
 
        {/* ---------------- Premium Search ---------------- */}
        <div ref={dropdownRef} className="relative w-full max-w-2xl text-left">
          {/* Input */}
          <div
            className="
              relative group rounded-2xl
              bg-white/80 backdrop-blur-xl
              border border-white/40
              shadow-[0_15px_50px_rgba(43,104,195,0.15)]
              transition-all duration-300
              focus-within:shadow-[0_20px_60px_rgba(43,104,195,0.25)]
              focus-within:border-blue-400/50
            "
          >
            <Search
              size={20}
              className="
                absolute left-5 top-1/2 -translate-y-1/2
                text-gray-400
                transition-all duration-300
                group-focus-within:text-blue-500
              "
            />
 
            <input
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
                setActiveIndex(null);
              }}
              onFocus={() => setShowDropdown(true)}
              onKeyDown={handleKeyDown}
              className="
                w-full pl-14 pr-6 py-5
                bg-transparent rounded-2xl
                text-base md:text-lg
                placeholder:text-gray-400
                focus:outline-none
              "
            />
          </div>
 
          {/* ---------------- Dropdown ---------------- */}
          {showDropdown && search.trim() !== "" && (
            <div
              className="
                absolute left-0 right-0 mt-3
                bg-white/95 backdrop-blur-xl
                rounded-2xl shadow-2xl
                border border-white/40
                z-50 overflow-hidden
              "
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(product.path);
                      setShowDropdown(false);
                      setSearch("");
                      setActiveIndex(null);
                    }}
                    className={`
                      px-6 py-4 cursor-pointer text-left
                      transition-all duration-200
                      ${activeIndex === index
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "hover:bg-blue-50"
                      }
                    `}
                  >
                    {product.name}
                  </div>
                ))
              ) : (
                <div className="px-6 py-4 text-gray-500 text-sm text-left">
                  No matching products found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
 