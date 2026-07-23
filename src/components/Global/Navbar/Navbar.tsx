import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const MenuIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLightNavbar = location.pathname.startsWith('/platform') || location.pathname.startsWith('/marketplaceglobal') || location.pathname.startsWith('/contact');

  return (
    <header className="top-0  left-0 right-0 z-50">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}

        <Link to="/">
          <div className="text-[#010101] font-quadran   font-light text-xl  px-2   rounded">

            <img className="h-15 w-full" src="/QnestLogo.svg" />
          </div>
        </Link>

        {/* Desktop nav (unchanged) */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {/* <Link
            to="/"
            className={`transition font-quadran   font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-black hover:text-black/80"
              }`}
          >
            Home
          </Link> */}
          {/* <Link
            to="/platform"
            className={`transition font-quadran   font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-black hover:text-black/80"
              }`}
          >
            Platform
          </Link> */}

          <Link
            to="/marketplaceglobal"
            className={`transition font-quadran   font-[20px] ${isLightNavbar ? "text-white hover:text-black/80" : "text-white hover:text-black/80"
              }`}
          >
            <button
  className={`
    relative px-5 py-2.5 rounded-full font-quadran   text-[16px]
    backdrop-blur-md border transition-all duration-300
    overflow-hidden group cursor-pointer

    ${
      isLightNavbar
        ? "bg-white/20 border-white/30 text-white"
        : "bg-white/10 border-white/20 text-white"
    }

    hover:scale-105 active:scale-95
    shadow-[0_4px_20px_rgba(0,0,0,0.2)]
  `}
>
  {/* ✨ Gloss layer */}
  <span
    className="
      absolute inset-0 rounded-full
      bg-gradient-to-b from-white/40 via-white/10 to-transparent
      opacity-70
      pointer-events-none
    "
  />

  {/* 💎 Inner shine */}
  <span
    className="
      absolute inset-0 rounded-full
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
      pointer-events-none
    "
  />

  {/* 🌊 Moving light sweep */}
  {/* <span
    className="
      absolute top-0 left-[-100%] h-full w-full
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      skew-x-[-20deg]
      group-hover:left-[120%]
      transition-all duration-700 ease-in-out
    "
  /> */}

  {/* 🔤 TEXT */}
  <span className="relative z-10">Marketplace</span>
</button>
          </Link>

          <Link to="/contact">
            <button
  className={`
    relative px-5 py-2.5 rounded-full font-quadran   text-[16px]
    backdrop-blur-md border transition-all duration-300
    overflow-hidden group cursor-pointer

    ${
      isLightNavbar
        ? "bg-white/20 border-white/30 text-white"
        : "bg-white/10 border-white/20 text-white"
    }

    hover:scale-105 active:scale-95
    shadow-[0_4px_20px_rgba(0,0,0,0.2)]
  `}
>
  {/* ✨ Gloss layer */}
  <span
    className="
      absolute inset-0 rounded-full
      bg-gradient-to-b from-white/40 via-white/10 to-transparent
      opacity-70
      pointer-events-none
    "
  />

  {/* 💎 Inner shine */}
  <span
    className="
      absolute inset-0 rounded-full
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
      pointer-events-none
    "
  />

  {/* 🌊 Moving light sweep */}
  {/* <span
    className="
      absolute top-0 left-[-100%] h-full w-full
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      skew-x-[-20deg]
      group-hover:left-[120%]
      transition-all duration-700 ease-in-out
    "
  /> */}
            
              <span className="flex items-center gap-[8px]">
                CONTACT US
                <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile / Tablet menu */}
      {open && (
        <div className="md:hidden bg-[#efefef] border-t border-white/10 px-6 py-6 space-y-4">
          {/* <Link
            to="/platform"
            className="block text-black  font-quicksand font-bold text-lg"
            onClick={() => setOpen(false)}
          >
            Platform
          </Link> */}
          <Link
            to="/marketplaceglobal"
            className="block text-black  font-quicksand font-bold text-lg"
            onClick={() => setOpen(false)}
          >
            Marketplace
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="max-w-5xl bg-white text-black px-2 py-1 rounded-md font-medium flex items-center justify-start gap-2">
              CONTACT US <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
