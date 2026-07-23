"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "../Navbar/Navbar";

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

  /* Intersection */
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

  /* Filter */
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  /* Outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Keyboard */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredProducts.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowDropdown(true);
      setActiveIndex((prev) =>
        prev === null || prev === filteredProducts.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev === null || prev === 0 ? filteredProducts.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter") {
      const selected =
        activeIndex !== null ? filteredProducts[activeIndex] : filteredProducts[0];

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
    <div className="relative overflow-hidden">

      {/* ✅ SAME NAVBAR BEHAVIOR AS CIRCULAR CARDS */}
      <div className="absolute top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>

      {/* ✅ FIXED SECTION */}
      <section
        ref={sectionRef}
        className="relative w-full py-24 min-h-screen flex items-center justify-center"
      >

        {/* Background */}
        <img
          src="/Hero.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Back Button */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <button
            onClick={() => navigate(-1)}
            className="group w-12 h-12 md:w-14 md:h-14 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition"
          >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center">

          <H1
            className="text-white text-4xl mt-20 md:text-6xl font-bold mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            Qnest Suite of Banking Products
          </H1>

          <P className="text-lg md:text-xl mb-10 max-w-4xl text-white">
            Access Qnest's complete suite of banking products on a single platform. From core banking and loan management to AML compliance and cross-border remittances. Each solution is built by industry practitioners to address specific operational challenges faced by financial institutions globally.
          </P>

          {/* Search */}
          <div ref={dropdownRef} className="relative w-full max-w-2xl text-left">

            <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border shadow-lg">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={handleKeyDown}
                className="w-full pl-14 pr-6 py-5 bg-transparent rounded-2xl focus:outline-none"
              />
            </div>

            {/* Dropdown */}
            {showDropdown && search.trim() !== "" && (
              <div className="absolute left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl z-[100] max-h-72 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(product.path);
                        setShowDropdown(false);
                        setSearch("");
                      }}
                      className={`px-6 py-4 cursor-pointer ${
                        activeIndex === index
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-blue-50"
                      }`}
                    >
                      {product.name}
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-4 text-gray-500">
                    No matching products found
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}