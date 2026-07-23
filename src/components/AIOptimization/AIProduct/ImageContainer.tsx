import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Partners from "./Partners";
import ContactModal from "../Navbar/ContactModal";
import { P } from "../../../styles/Typography";

const ArrowUpRightIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 7h10v10" /><path d="M7 17L17 7" />
  </svg>
);
const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

interface Panel {
  id: string;
  src: string;
  alt: string;
  gridColumn: string;
  gridRow: string;
}

const PANELS: Panel[] = [
  {
    id: "demo",
    src: "/ClouddietDemo.webp",
    alt: "Dashboard Overview",
    gridColumn: "1 / 4",
    gridRow: "1",
  },
  {
    id: "daily",
    src: "/DailySpend.webp",
    alt: "Daily Spend",
    gridColumn: "1 / 2",
    gridRow: "2",
  },
  {
    id: "resource",
    src: "/ResourceType.webp",
    alt: "Resource Type Spend",
    gridColumn: "2 / 4",
    gridRow: "2",
  },
  {
    id: "discover",
    src: "/Discover.webp",
    alt: "Discover",
    gridColumn: "1 / 2",
    gridRow: "3",
  },
  {
    id: "saving",
    src: "/SavingOpportunities.webp",
    alt: "Saving Opportunities",
    gridColumn: "2 / 3",
    gridRow: "3",
  },
  {
    id: "defender",
    src: "/AzureDefender.webp",
    alt: "Azure Defender",
    gridColumn: "3 / 4",
    gridRow: "3",
  },
];

// ─── Expanded overlay ─────────────────────────────────────────────────────────
// FULLY pointer-events-none — nothing in the overlay can steal mouse events
// from the tile underneath. Close is ESC-only while hovering.

const ExpandedView = ({
  panel,
  onClose,
}: {
  panel: Panel;
  onClose: () => void;
}) => {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return createPortal(
    <motion.div
      key={panel.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Entire overlay is non-interactive — mouse events fall through
        pointerEvents: "none",
      }}
    >
      <motion.img
        key={panel.src}
        src={panel.src}
        alt={panel.alt}
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        style={{
          maxWidth: "82vw",
          maxHeight: "82vh",
          objectFit: "contain",
          borderRadius: 16,
          boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8)",
          pointerEvents: "none",
        }}
      />
    </motion.div>,
    document.body
  );
};

// ─── Panel Tile ───────────────────────────────────────────────────────────────

const PanelTile = ({
  panel,
  isActive,
  onExpand,
  onCollapse,
}: {
  panel: Panel;
  isActive: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) => {
  // Use a ref to track the debounce timer
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expandTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    // Cancel any pending collapse immediately
    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
    // Small delay to avoid accidental triggers on fast mouse sweeps
    expandTimer.current = setTimeout(onExpand, 80);
  };

  const handleLeave = () => {
    if (expandTimer.current) {
      clearTimeout(expandTimer.current);
      expandTimer.current = null;
    }
    // Delay collapse so moving between panels feels seamless
    collapseTimer.current = setTimeout(onCollapse, 60);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (collapseTimer.current) clearTimeout(collapseTimer.current);
      if (expandTimer.current) clearTimeout(expandTimer.current);
    };
  }, []);

  return (
    <div
      style={{
        gridColumn: panel.gridColumn,
        gridRow: panel.gridRow,
        position: "relative",
        overflow: "hidden",
        cursor: "zoom-in",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={panel.src}
        alt={panel.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          userSelect: "none",
          transition: "transform 0.35s cubic-bezier(0.25,1,0.5,1)",
          transform: isActive ? "scale(1.04)" : "scale(1)",
        }}
        draggable={false}
      />
      {/* Subtle active ring — purely visual, no pointer events */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.55)",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

// ─── ImageContainer ────────────────────────────────────────────────────────────

const ImageContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isIntersectingRef = useRef(false);

  const expandedPanel = PANELS.find((p) => p.id === expandedId) ?? null;

  // Scroll parallax
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isIntersectingRef.current = entry.isIntersecting; },
      { rootMargin: "100px" }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (!isIntersectingRef.current || !wrapperRef.current) return;
      const curr = window.scrollY;
      if (curr === lastScrollY) return;
      lastScrollY = curr;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!wrapperRef.current || window.innerWidth < 768) return;
        const maxScroll = window.innerWidth >= 1280 ? 400 : 300;
        const progress = Math.min(window.scrollY / maxScroll, 1);
        wrapperRef.current.style.transform = `translateY(${-progress * 10}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex justify-center items-center py-8 md:py-12 min-h-[250px]">
          <div
            ref={wrapperRef}
            className="relative w-[65%] xl:w-[60%] grid grid-cols-3 rounded-xl overflow-hidden md:will-change-transform transform-gpu shadow-[0_32px_80px_-20px_rgba(0,0,0,0.55)]"
          >
            {PANELS.map((panel) => (
              <PanelTile
                key={panel.id}
                panel={panel}
                isActive={expandedId === panel.id}
                onExpand={() => setExpandedId(panel.id)}
                onCollapse={() => setExpandedId(null)}
              />
            ))}
          </div>
        </div>
      </section>

      <P className="mb-8 px-4 mx-auto md:max-w-3xl text-center text-white/90 relative z-40">
        CloudDIET profiles, analyzes, and optimizes your Azure, AWS, and Google Cloud spend, ensuring faster ROI with guaranteed savings and no data access. Our performance-based pricing means you only pay for the savings we deliver.
      </P>

      <div className="flex flex-row-reverse sm:flex-row items-center gap-4 justify-center relative z-40 pb-12">
        <button
          className="group flex items-center justify-center w-52 h-[48px] px-[24px] py-[12px] rounded-[8px] font-quicksand text-[16px] bg-transparent text-white border-white border-2 shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-black"
          onClick={() => setModalOpen(true)}
        >
          Request A Demo
          <span className="flex items-center gap-4 ml-2">
            <span className="relative flex items-center w-[20px] h-[20px]">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </span>
        </button>
        <a
          href="https://login.clouddiet.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-44 h-[48px] px-[24px] py-[12px] rounded-[8px] font-quicksand font-bold text-[16px] bg-white text-black shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-[#009565]"
        >
          Login
          <span className="flex items-center gap-2 ml-2">
            <span className="relative flex items-center w-[20px] h-[20px]">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </span>
        </a>
      </div>

      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}

      <div className="relative z-40">
        <Partners />
      </div>

      <AnimatePresence>
        {expandedPanel && (
          <ExpandedView
            panel={expandedPanel}
            onClose={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageContainer;
