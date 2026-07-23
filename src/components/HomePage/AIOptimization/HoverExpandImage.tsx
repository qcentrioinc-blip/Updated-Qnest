import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

const ZOOM_CLOSE_EVENT = "close-zoom-competition"

interface HoverExpandImageProps {
  src: string
  alt?: string
  className?: string
  objectFit?: "contain" | "cover"
  maxWidth?: string
  srcSet?: string
  sizes?: string
  fetchPriority?: "high" | "low" | "auto"
}

export const HoverExpandImage = React.forwardRef<HTMLImageElement, HoverExpandImageProps>(({
  src,
  alt = "",
  className = "",
  objectFit = "contain",
  maxWidth = "85vw",
  srcSet,
  sizes,
  fetchPriority,
}, ref) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandedRef = useRef<HTMLDivElement>(null)

  const handleExpand = () => {
    window.dispatchEvent(new CustomEvent(ZOOM_CLOSE_EVENT))
    setIsExpanded(true)
  }

  const handleClose = () => setIsExpanded(false)

  /* Close when another image opens */
  useEffect(() => {
    const close = () => setIsExpanded(false)
    window.addEventListener(ZOOM_CLOSE_EVENT, close)
    return () => window.removeEventListener(ZOOM_CLOSE_EVENT, close)
  }, [])

  useEffect(() => {
  if (!isExpanded) return

  const preventScroll = (e: TouchEvent) => e.preventDefault()

  document.body.style.overflow = "hidden"
  document.addEventListener("touchmove", preventScroll, { passive: false })

  return () => {
    document.body.style.overflow = ""
    document.removeEventListener("touchmove", preventScroll)
  }
}, [isExpanded])

/* Disable background scroll (robust fix) */
useEffect(() => {
  if (!isExpanded) return

  const scrollY = window.scrollY

  // Lock body
  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = "0"
  document.body.style.right = "0"
  document.body.style.width = "100%"

  return () => {
    // Restore scroll
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.left = ""
    document.body.style.right = ""
    document.body.style.width = ""

    window.scrollTo(0, scrollY)
  }
}, [isExpanded])

  /* Click outside to close */
  useEffect(() => {
    if (!isExpanded) return

    const handleClickOutside = (e: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isExpanded])

  /* ESC key */
  useEffect(() => {
    if (!isExpanded) return
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleClose()
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isExpanded])

  return (
    <div className="relative rounded-xl w-full h-full">
      {!isExpanded && (
        <div onClick={handleExpand} className="w-full rounded-xl h-full cursor-zoom-in">
          <img
            ref={ref}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            fetchPriority={fetchPriority}
            alt={alt}
            className={`w-full h-full rounded-3xl object-${objectFit} ${className}`}
          />
        </div>
      )}

      {isExpanded &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0 z-[9999]
                bg-black/20
                flex items-center justify-center
                p-4
              "
            >
              <motion.div
                ref={expandedRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="relative inline-flex items-center justify-center"
              >
                <img
                  src={src}
                  srcSet={srcSet}
                  sizes={sizes}
                  fetchPriority={fetchPriority}
                  alt={alt}
                  style={{ maxWidth }}
                  className="
                    max-h-[85vh]
                    object-contain
                    rounded-2xl
                    bg-white
                    shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]
                  "
                />

                {/* Close Button */}
                 <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 bg-white text-gray-900 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-indigo-600 hover:text-white transition-colors duration-300 z-[101]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
})
