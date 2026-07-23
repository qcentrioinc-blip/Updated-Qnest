import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

// ─── Config ────────────────────────────────────────────────────────────────────
// Adjust these to match how your 4 panels are visually laid out
// Think of the full dashboard as a 2×2 grid (or whatever suits your layout)

interface PanelConfig {
  id: string
  src: string
  alt: string
  /** Tailwind grid placement, e.g. "col-start-1 col-span-1 row-start-1 row-span-1" */
  gridArea: string
  /** Optional aspect ratio override, e.g. "aspect-[16/9]" */
  aspect?: string
}

const PANELS: PanelConfig[] = [
  {
    id: "c1",
    src: "/AIOptimization/c1.webp",
    alt: "Dashboard top metrics & subscriptions",
    gridArea: "col-start-1 col-span-1 row-start-1 row-span-1",
  },
  {
    id: "c2",
    src: "/AIOptimization/c2.webp",
    alt: "Potential savings breakdown",
    gridArea: "col-start-2 col-span-1 row-start-1 row-span-1",
  },
  {
    id: "c3",
    src: "/AIOptimization/c3.webp",
    alt: "Daily spend & resource type spend charts",
    gridArea: "col-start-1 col-span-1 row-start-2 row-span-1",
  },
  {
    id: "c4",
    src: "/AIOptimization/c4.webp",
    alt: "Discovered savings opportunities",
    gridArea: "col-start-2 col-span-1 row-start-2 row-span-1",
  },
]

// ─── Single Panel ──────────────────────────────────────────────────────────────

interface PanelProps {
  panel: PanelConfig
}

const MAGNIFIER_SIZE = 140
const MAGNIFIER_ZOOM = 2.5

const Panel: React.FC<PanelProps> = ({ panel }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showMag, setShowMag] = useState(false)
  const [magPos, setMagPos] = useState({ x: 0, y: 0 })
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 })
  const [bgSize, setBgSize] = useState({ w: 0, h: 0 })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const expandedRef = useRef<HTMLDivElement>(null)

  // Mouse move → update magnifier
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return
    const { left, top, width, height } = wrapperRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    setMagPos({ x, y })
    const bw = width * MAGNIFIER_ZOOM
    const bh = height * MAGNIFIER_ZOOM
    setBgSize({ w: bw, h: bh })
    const half = MAGNIFIER_SIZE / 2
    setBgPos({ x: -(x * MAGNIFIER_ZOOM - half), y: -(y * MAGNIFIER_ZOOM - half) })
  }

  // Click outside expanded view
  useEffect(() => {
    if (!isExpanded) return
    const handler = (e: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [isExpanded])

  // ESC key
  useEffect(() => {
    if (!isExpanded) return
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setIsExpanded(false)
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isExpanded])

  return (
    <>
      {/* ── Thumbnail panel ── */}
      <div
        ref={wrapperRef}
        className={`relative overflow-hidden rounded-xl ${panel.gridArea} group`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowMag(true)}
        onMouseLeave={() => setShowMag(false)}
        style={{ cursor: showMag ? "none" : "default" }}
      >
        {/* Image */}
        <img
          src={panel.src}
          alt={panel.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />

        {/* Click-to-expand hint */}
        <button
          onClick={() => setIsExpanded(true)}
          className="
            absolute bottom-2 right-2
            bg-black/60 hover:bg-black/80
            text-white text-xs font-medium
            px-3 py-1.5 rounded-full
            flex items-center gap-1.5
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            z-10
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          Expand
        </button>

        {/* Magnifier lens */}
        {showMag && (
          <div
            style={{
              position: "absolute",
              pointerEvents: "none",
              width: MAGNIFIER_SIZE,
              height: MAGNIFIER_SIZE,
              borderRadius: "50%",
              border: "2.5px solid rgba(255,255,255,0.9)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(0,0,0,0.1)",
              overflow: "hidden",
              left: magPos.x - MAGNIFIER_SIZE / 2,
              top: magPos.y - MAGNIFIER_SIZE / 2,
              backgroundImage: `url(${panel.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${bgSize.w}px ${bgSize.h}px`,
              backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
              zIndex: 20,
            }}
          >
            {/* Subtle crosshair */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", width: 1, height: "30%", background: "rgba(255,255,255,0.45)" }} />
              <div style={{ position: "absolute", height: 1, width: "30%", background: "rgba(255,255,255,0.45)" }} />
              {/* Centre dot */}
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
            </div>
          </div>
        )}
      </div>

      {/* ── Full-screen lightbox ── */}
      {isExpanded && createPortal(
        <AnimatePresence>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              ref={expandedRef}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="relative"
            >
              <img
                src={panel.src}
                alt={panel.alt}
                className="max-w-[88vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Panel label */}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                {panel.alt}
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-4 -right-4 bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

// ─── Main Grid Component ───────────────────────────────────────────────────────

const DashboardHoverExpand: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="flex justify-center items-center min-h-[250px]">
        <div
          className="
            grid
            w-[80%] xl:w-[80%]
            grid-cols-2 grid-rows-2
            gap-2
            rounded-2xl overflow-hidden
          "
        >
          {PANELS.map((panel) => (
            <Panel key={panel.id} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DashboardHoverExpand