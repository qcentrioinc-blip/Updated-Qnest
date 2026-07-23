 
import { useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";

// const NAVBAR_TOGGLE_ROUTES = ["/industries/cloud-finops-ai"];
const ALLOWED_FLOATING_ROUTES = [
  "/industries/banking-and-finance/products/",
  "/industries/banking-and-finance",
  // "/",
  "/contact",
"/marketplaceglobal",
];

// ─── Floating toggle (all pages EXCEPT navbar routes) ────────── ─────────────
const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { pathname } = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // ← ADD THIS

  // ← ADD THIS EFFECT
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldShowFloating = ALLOWED_FLOATING_ROUTES.some((r) =>
    r === "/" ? pathname === "/" : pathname.startsWith(r)
  );

  // Hide everywhere except allowed routes
  if (!shouldShowFloating) return null;

  // ← CHANGE THIS LINE — use reactive state instead of direct window.innerWidth
  if (!isDesktop) return null;


  return (
  <button
    onClick={toggleTheme}
    className=" flex items-center justify-center"
    style={{
      position: "fixed",
      top: "72px",
      right: "28px",
      zIndex: 9999,
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: isDark ? "#0f172a" : "#ffffff",
      border: `1px solid ${isDark ? "#334155" : "#d1d5db"}`,
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    }}
  >
    {isDark ? (
      // 🌙 Moon
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#e2e8f0">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ) : (
      // ☀️ Sun
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    )}
  </button>
);  
};

export default DayNightToggle;

// ─── Navbar-embedded toggle (used inside AINavbar and other industry navbars) ─
export const NavbarDayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className=" flex items-center justify-center"
      style={{
        // ✅ Remove position, top, right, zIndex — let flexbox place it
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: isDark ? "#0f172a" : "#ffffff",
        border: `1px solid ${isDark ? "#334155" : "#d1d5db"}`,
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        flexShrink: 0,
      }}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#e2e8f0">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
};