"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { H3, H4 } from "../../styles/Typography";
import { useEffect, useState } from "react";

export default function FooterHT() {
  const [dots, setDots] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random floating dots
    const generateDots = () => {
      const newDots = Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 3,
        delay: Math.random() * 5,
      }));
      setDots(newDots);
    };
    
    generateDots();
    
    // Regenerate dots every 30 seconds for variety
    const interval = setInterval(generateDots, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full text-white overflow-hidden isolate">
      {/* 🌈 ANIMATED BACKGROUND WITH FLOATING DOTS */}
      <div className="absolute inset-0 bg-black -z-10">
        {/* Floating Dots Container */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                animation: `float 15s ease-in-out infinite`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Background */}
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)]
            aspect-[1155/678] w-[36.125rem]
            -translate-x-1/2 rotate-[30deg]
            bg-gradient-to-tr from-[#8338EC] to-[#F99526]
            opacity-30 sm:left-[calc(80%-30rem)]
            sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="py-16 px-6 md:px-16 relative z-10">
        {/* TOP SECTION */}
        <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <H3 className="leading-relaxed">
              Powering progress with unstoppable <br />
              intelligent technology. Where innovation <br />
              leads, others only follow.
            </H3>
          </div>

          <div className="flex flex-row justify-center md:gap-20 gap-10">
            <div>
              <H4 className="mb-3">Products</H4>
              <ul className="space-y-2 text-sm font-quadran  ">
                <li>• HRMS</li>
                <li>• DBMS</li>
              </ul>
            </div>

            <div>
              <H4 className="mb-3">Quick Links</H4>
              <ul className="space-y-2 text-sm font-quadran  ">
                <a href="/industries/high-tech/aboutus">
                <li>• About Us</li>
                </a>
                <a href="/industries/high-tech/careers">
                <li>• Careers</li>
                </a>
                <a href="/industries/high-tech/resources">
                <li>• Resources</li>
                </a>
                <a href="/industries/high-tech/contactform">
                <li>• Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="w-full max-w-8xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* LEFT BOX */}
          <div className="w-[220px] h-[80px] bg-[#D9D9D9] mb-10 md:mb-0" />

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-end gap-6">
            {/* SOCIAL ICONS */}
            <div className="flex gap-6">
              <Facebook className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity" />
              <Instagram className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity" />
              <Linkedin className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>

            {/* POLICY LINKS */}
            
            <div className="flex flex-wrap justify-end gap-8 text-sm text-gray-300">
  <a href="/industries/high-tech/policy?section=terms" className="hover:text-white transition">
    • Terms and Conditions
  </a>

  <a href="/industries/high-tech/policy?section=privacy" className="hover:text-white transition">
    • Privacy Policy
  </a>

  <a href="/industries/high-tech/policy?section=cookies" className="hover:text-white transition">
    • Cookies Policy
  </a>
</div>
          </div>
        </div>
      </div>

      {/* Inline CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -25px) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(-15px, 15px) rotate(180deg);
            opacity: 0.2;
          }
          75% {
            transform: translate(-25px, -15px) rotate(270deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </footer>
  );
}