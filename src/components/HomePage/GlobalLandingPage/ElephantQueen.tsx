'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Navbar from '../../Global/Navbar/Navbar'

gsap.registerPlugin(ScrollTrigger)

// ==========================================
// ElephantQueen — Scroll-Driven Ring Transition
// Sun inside scene → expands into ring → new sun appears inside ring
// Orange sun → orange ring + red sun inside → red ring + yellow sun inside
// ==========================================

const SCENES = [
  {
    id: 1,
    title: 'BANKING AND FINANCE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet,',
    image: '/Bank.png',
    sunColor: '#0d2a73',
    sunGlowColor: '#3b5fbf',
    sunGlowColorLight: '#7b9be0',
    sunGradient:
      'radial-gradient(circle at 45% 45%, #4d6ab3 0%, #2d4a93 20%, #0d2a73 45%, #0a2060 70%, #071849 90%, transparent 100%)',
    waveImage: '/wave1.png',
    waveColor: '#08183c',
    bgColor: '#112d76',
    ringColor: '#112a6d',
  },
  {
    id: 2,
    title: 'EHR & PMS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet,',
    image: '/Health.png',
    sunColor: '#027977',
    sunGlowColor: '#2abfbd',
    sunGlowColorLight: '#6ee0de',
    sunGradient:
      'radial-gradient(circle at 45% 45%, #4ab0ae 0%, #2a9a98 25%, #027977 50%, #025e5c 75%, transparent 100%)',
    waveImage: '/wave2.png',
    waveColor: '#004C4B',
    bgColor: '#399695',
    ringColor: '#00AA72',
  },
  {
    id: 3,
    title: 'Clouddiet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet,',
    image: '/Cloud.png',
    sunColor: '#000b33',
    sunGlowColor: '#2a3f7a',
    sunGlowColorLight: '#6878b0',
    sunGradient:
      'radial-gradient(circle at 45% 45%, #3a4570 0%, #1c2850 25%, #000b33 50%, #000822 75%, transparent 100%)',
    waveImage: '/wave3.png',
    waveColor: '#00041B',
    bgColor: '#061b56',
    ringColor: '#0e183b',
  },
]

// Sun center: positioned in center of viewport, behind the animal image
const SUN_X = 50
const SUN_Y = 90

// ===== COLOR HELPERS =====
function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

// @ts-expect-error – kept for potential future use
function sunGradient(color: string): string {
  const [r, g, b] = hexToRgb(color)
  const lighter = `rgb(${Math.min(255, r + 80)},${Math.min(255, g + 60)},${Math.min(255, b + 30)})`
  const darker = `rgb(${Math.max(0, r - 50)},${Math.max(0, g - 40)},${Math.max(0, b - 30)})`
  return `radial-gradient(circle at 45% 45%, ${lighter} 0%, rgb(${r},${g},${b}) 25%, ${darker} 60%, transparent 100%)`
}

// Auto-transition interval in milliseconds
const AUTO_TRANSITION_DELAY = 5000

export default function ElephantQueen() {
  const [activeScene, setActiveScene] = useState(0)
  const [isMenuOpen] = useState(false)
  const [isPanelPinned, setIsPanelPinned] = useState(true)
  // const [isMuted, setIsMuted] = useState(false)

  // ===== RESPONSIVE: track window width =====
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  // Ref
  const scrollSpacerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  // Auto-transition refs
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const userScrollingRef = useRef(false)
  const userScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const activeSceneRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const isAutoScrollingRef = useRef(false)
  const isPanelVisibleRef = useRef(true)

  // Scene layer refs — each scene is a full-screen layer
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([])
  // Sun element refs — one sun per scene (inside each scene layer)
  const sunRefs = useRef<(HTMLDivElement | null)[]>([])
  // Sun glow refs — the soft atmosphere behind the sun
  const sunGlowRefs = useRef<(HTMLDivElement | null)[]>([])
  // Ring border refs — the donut ring
  const ringRefs = useRef<(HTMLDivElement | null)[]>([])
  // Ring glow refs — soft glow around the ring
  const ringGlowRefs = useRef<(HTMLDivElement | null)[]>([])

  // Mouse parallax with spring physics (reduced on mobile)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = isMobile ? 5 : isTablet ? 12 : 18
  const parallaxY = isMobile ? 3 : isTablet ? 6 : 10
  const imgPX = useSpring(useTransform(mouseX, [-0.5, 0.5], [parallaxX, -parallaxX]), { stiffness: 40, damping: 18 })
  const imgPY = useSpring(useTransform(mouseY, [-0.5, 0.5], [parallaxY, -parallaxY]), { stiffness: 40, damping: 18 })

  const scene = SCENES[activeScene]

  // Max radius from sun center to farthest viewport corner
  const getMaxRadius = useCallback(() => {
    if (typeof window === 'undefined') return 2000
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cx = (vw * SUN_X) / 100
    const cy = (vh * SUN_Y) / 100
    return Math.sqrt(Math.max(cx, vw - cx) ** 2 + Math.max(cy, vh - cy) ** 2) + 150
  }, [])

  // ===== SCROLL-DRIVEN RING TRANSITION =====
  useEffect(() => {
    const maxRadius = getMaxRadius()
    const vh = window.innerHeight
    const numTransitions = SCENES.length - 1

    // Initialize: hide all scenes except first, hide all rings
    for (let i = 1; i < SCENES.length; i++) {
      if (sceneRefs.current[i]) {
        gsap.set(sceneRefs.current[i], {
          clipPath: `circle(0px at ${SUN_X}% ${SUN_Y}%)`,
          scale: 1,
          opacity: 1,
        })
      }
      if (sunGlowRefs.current[i]) {
        sunGlowRefs.current[i]!.style.opacity = '0'
      }
    }
    // First scene: reset
    if (sceneRefs.current[0]) {
      gsap.set(sceneRefs.current[0], {
        scale: 1,
        opacity: 1,
      })
    }
    if (sunGlowRefs.current[0]) {
      sunGlowRefs.current[0]!.style.opacity = '1'
    }
    // Ring layers: hidden initially
    for (let i = 0; i < numTransitions; i++) {
      if (ringRefs.current[i]) {
        ringRefs.current[i]!.style.opacity = '0'
        ringRefs.current[i]!.style.background = 'transparent'
      }
      if (ringGlowRefs.current[i]) {
        ringGlowRefs.current[i]!.style.opacity = '0'
        ringGlowRefs.current[i]!.style.background = 'transparent'
      }
    }

    const ctx = gsap.context(() => {
      for (let i = 0; i < numTransitions; i++) {
        const currentSceneEl = sceneRefs.current[i]
        const nextSceneEl = sceneRefs.current[i + 1]
        const nextSunEl = sunRefs.current[i + 1]
        const ringEl = ringRefs.current[i]
        const ringGlowEl = ringGlowRefs.current[i]

        if (!nextSceneEl) continue

        // Ring color = current scene's ring color
        const [rr, rg, rb] = hexToRgb(SCENES[i].ringColor)

        ScrollTrigger.create({
          trigger: scrollSpacerRef.current,
          start: () => `top+=${i * vh} top`,
          end: () => `top+=${(i + 1) * vh} top`,
          scrub: 0.4,
          onUpdate: (self) => {
            const p = self.progress // 0 → 1

            // ---- RING DIMENSIONS ----
            const outerR = p * maxRadius
            // Ring thickness: increased for a more dramatic effect during transition
            const ringThickness = Math.max(80, Math.min(outerR * 0.22, 500))
            // Inner radius: the hollow center
            const innerR = Math.max(0, outerR - ringThickness)

            // ---- RING OPACITY ----
            let ringOpacity = 0
            if (p < 0.01) {
              ringOpacity = 0
            } else if (p < 0.05) {
              ringOpacity = (p - 0.01) / 0.04
            } else if (p > 0.88) {
              ringOpacity = Math.max(0, (1 - p) / 0.12)
            } else {
              ringOpacity = 1
            }

            // ---- UPDATE OLD SCENE: COMPLETELY VANISH ----
            // Previous scene (image + text) must fully disappear
            // Use aggressive fade so nothing remains visible
            const zoomP = Math.pow(p, 0.6)
            const currentSceneScale = 1 + zoomP * 0.8
            if (currentSceneEl) {
              gsap.set(currentSceneEl, {
                scale: currentSceneScale,
                opacity: Math.max(0, 1 - p * 3.0), // completely gone by p=0.33
              })
            }

            // ---- COUNTER-SCALE CURRENT SUN: keep it constant small ----
            // The scene scales up, so the sun inside also scales.
            // Apply inverse scale + preserve translate(-50%, -50%) for centering
            const currentSunEl = sunRefs.current[i]
            if (currentSunEl) {
              const currentCompensate = currentSceneScale > 0.01 ? 1 / currentSceneScale : 1
              currentSunEl.style.transform = `translate(-50%, -50%) scale(${currentCompensate})`
              // Also fade out the current sun as the scene fades
              const currentOpacity = String(Math.max(0, 1 - p * 3.0))
              currentSunEl.style.opacity = currentOpacity

              // Fade out the current glow
              const currentGlowEl = sunGlowRefs.current[i]
              if (currentGlowEl) {
                currentGlowEl.style.opacity = currentOpacity
                currentGlowEl.style.transform = `translate(-50%, -50%) scale(${currentCompensate})`
              }
            }

            // ---- UPDATE RING: expanding donut border ----
            if (ringEl) {
              if (outerR > 3 && p > 0.005) {
                const softEdge = Math.min(8, ringThickness * 0.15)

                ringEl.style.background = `radial-gradient(circle at ${SUN_X}% ${SUN_Y}%, `
                  + `transparent 0%, `
                  + `transparent ${innerR}px, `
                  + `rgba(${rr},${rg},${rb},0.3) ${innerR}px, `
                  + `rgba(${rr},${rg},${rb},0.7) ${innerR + softEdge}px, `
                  + `rgb(${rr},${rg},${rb}) ${innerR + softEdge + 2}px, `
                  + `rgb(${rr},${rg},${rb}) ${outerR - softEdge - 2}px, `
                  + `rgba(${rr},${rg},${rb},0.7) ${outerR - softEdge}px, `
                  + `rgba(${rr},${rg},${rb},0.3) ${outerR}px, `
                  + `transparent ${outerR}px, `
                  + `transparent 100%)`
                ringEl.style.opacity = String(ringOpacity)
              } else {
                // Fully reset ring when scrolled back to start
                ringEl.style.opacity = '0'
                ringEl.style.background = 'transparent'
              }
            }

            // ---- UPDATE RING GLOW ----
            if (ringGlowEl) {
              if (outerR > 3 && p > 0.005) {
                const glowInner = Math.max(0, innerR - 30)
                const glowOuter = outerR + ringThickness * 0.8

                ringGlowEl.style.background = `radial-gradient(circle at ${SUN_X}% ${SUN_Y}%, `
                  + `transparent 0%, `
                  + `transparent ${glowInner}px, `
                  + `rgba(${rr},${rg},${rb},0.06) ${innerR - 10}px, `
                  + `rgba(${rr},${rg},${rb},0.15) ${innerR}px, `
                  + `rgba(${rr},${rg},${rb},0.25) ${innerR + ringThickness * 0.3}px, `
                  + `rgba(${rr},${rg},${rb},0.35) ${innerR + ringThickness * 0.5}px, `
                  + `rgba(${rr},${rg},${rb},0.25) ${outerR - ringThickness * 0.3}px, `
                  + `rgba(${rr},${rg},${rb},0.15) ${outerR}px, `
                  + `rgba(${rr},${rg},${rb},0.08) ${outerR + ringThickness * 0.3}px, `
                  + `rgba(${rr},${rg},${rb},0.03) ${glowOuter * 0.8}px, `
                  + `transparent ${glowOuter}px)`
                ringGlowEl.style.opacity = String(ringOpacity * 0.9)
              } else {
                // Fully reset glow when scrolled back to start
                ringGlowEl.style.opacity = '0'
                ringGlowEl.style.background = 'transparent'
              }
            }

            // ---- UPDATE NEW SCENE: appears inside ring, then fills screen ----
            // New scene revealed inside the ring's hollow center
            // Subtle scale from 60% to 100%
            const sceneScale = 0.6 + p * 0.4
            // Always use clip-path circle — avoids flash when reversing past p=0.75
            const clipRadius = p > 0.98 ? maxRadius * 2 : innerR
            gsap.set(nextSceneEl, {
              clipPath: `circle(${clipRadius}px at ${SUN_X}% ${SUN_Y}%)`,
              scale: sceneScale,
              opacity: p < 0.01 ? 0 : 1, // hide next scene completely when fully scrolled back
            })

            // ---- UPDATE NEW SUN: fades in, stays CONSTANT small size ----
            if (nextSunEl) {
              const sunOpacity = p < 0.06 ? 0 : Math.min(1, (p - 0.06) / 0.12)
              nextSunEl.style.opacity = String(sunOpacity)

              // Update next glow opacity
              const nextGlowEl = sunGlowRefs.current[i + 1]
              if (nextGlowEl) {
                nextGlowEl.style.opacity = String(sunOpacity)
              }

              // Compensate: if scene is at scale 0.8, sun needs scale 1/0.8 = 1.25
              const compensateScale = sceneScale > 0.01 ? 1 / sceneScale : 1
              nextSunEl.style.transform = `translate(-50%, -50%) scale(${compensateScale})`

              // Compensate glow scale as well
              if (nextGlowEl) {
                nextGlowEl.style.transform = `translate(-50%, -50%) scale(${compensateScale})`
              }
            }

            // ---- UPDATE ACTIVE SCENE STATE ----
            if (p > 0.5) {
              setActiveScene(i + 1)
            } else {
              setActiveScene(i)
            }
          },
        })
      }
    }, scrollSpacerRef)

    // ---- PANEL VISIBILITY: track when spacer is in view (for auto-transition) ----
    // Also controls whether the panel is fixed or absolute
    ScrollTrigger.create({
      trigger: scrollSpacerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => { isPanelVisibleRef.current = true; setIsPanelPinned(true) },
      onLeave: () => { isPanelVisibleRef.current = false; setIsPanelPinned(false) },
      onEnterBack: () => { isPanelVisibleRef.current = true; setIsPanelPinned(true) },
      onLeaveBack: () => { isPanelVisibleRef.current = false; setIsPanelPinned(false) },
    })

    return () => ctx.revert()
  }, [getMaxRadius])

  // ===== KEEP activeSceneRef in sync =====
  useEffect(() => {
    activeSceneRef.current = activeScene
  }, [activeScene])


  // ===== AUTO-TRANSITION: scroll to next scene automatically =====
  useEffect(() => {
    // Custom smooth scroll with easing for slow, cinematic transitions
    const SCROLL_DURATION = 2500 // ms — duration of each auto-scroll animation

    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const smoothScrollTo = (targetY: number, onComplete?: () => void) => {
      // Cancel any in-progress animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      const startY = window.scrollY
      const distance = targetY - startY
      const startTime = performance.now()
      isAutoScrollingRef.current = true

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / SCROLL_DURATION, 1)
        const easedProgress = easeInOutCubic(progress)

        window.scrollTo(0, startY + distance * easedProgress)

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step)
        } else {
          animationFrameRef.current = null
          isAutoScrollingRef.current = false
          onComplete?.()
        }
      }

      animationFrameRef.current = requestAnimationFrame(step)
    }

    // Reset all scenes to initial state (used when looping back from last to first)
    const resetAllScenes = () => {
      const numTransitions = SCENES.length - 1

      // Reset all scenes except first: hide with clip-path
      for (let i = 1; i < SCENES.length; i++) {
        if (sceneRefs.current[i]) {
          gsap.set(sceneRefs.current[i], {
            clipPath: `circle(0px at ${SUN_X}% ${SUN_Y}%)`,
            scale: 1,
            opacity: 1,
          })
        }
        // Reset next suns and glows to hidden
        if (sunRefs.current[i]) {
          sunRefs.current[i]!.style.opacity = '0'
          sunRefs.current[i]!.style.transform = 'translate(-50%, -50%) scale(1)'
        }
        if (sunGlowRefs.current[i]) {
          sunGlowRefs.current[i]!.style.opacity = '0'
          sunGlowRefs.current[i]!.style.transform = 'translate(-50%, -50%) scale(1)'
        }
      }

      // Reset first scene to fully visible
      if (sceneRefs.current[0]) {
        gsap.set(sceneRefs.current[0], {
          scale: 1,
          opacity: 1,
          clipPath: 'none',
        })
      }
      // Reset first sun and glow to visible
      if (sunRefs.current[0]) {
        sunRefs.current[0]!.style.opacity = '1'
        sunRefs.current[0]!.style.transform = 'translate(-50%, -50%) scale(1)'
      }
      if (sunGlowRefs.current[0]) {
        sunGlowRefs.current[0]!.style.opacity = '1'
        sunGlowRefs.current[0]!.style.transform = 'translate(-50%, -50%) scale(1)'
      }

      // Reset all rings and glows
      for (let i = 0; i < numTransitions; i++) {
        if (ringRefs.current[i]) {
          ringRefs.current[i]!.style.opacity = '0'
          ringRefs.current[i]!.style.background = 'transparent'
        }
        if (ringGlowRefs.current[i]) {
          ringGlowRefs.current[i]!.style.opacity = '0'
          ringGlowRefs.current[i]!.style.background = 'transparent'
        }
      }

      setActiveScene(0)
    }

    const startAutoTimer = () => {
      // Clear any existing timer
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current)
      }
      autoTimerRef.current = setTimeout(() => {
        // Don't auto-scroll if user is currently scrolling or panel is not visible
        if (userScrollingRef.current) return
        if (!isPanelVisibleRef.current) return
        if (!scrollSpacerRef.current) return

        const vh = window.innerHeight
        const currentScene = activeSceneRef.current
        const nextScene = currentScene + 1

        const spacerTop = scrollSpacerRef.current.getBoundingClientRect().top + window.scrollY

        if (nextScene < SCENES.length) {
          // Scroll to the next scene position
          const targetScroll = spacerTop + nextScene * vh
          smoothScrollTo(targetScroll, () => {
            // Restart timer after animation completes
            startAutoTimer()
          })
        } else {
          // Loop back to the first scene — fade out, reset, jump, fade in
          const panel = panelRef.current
          if (panel) {
            // Fade out the panel briefly
            panel.style.transition = 'opacity 0.4s ease-out'
            panel.style.opacity = '0'

            setTimeout(() => {
              // Flag to prevent scroll handler from interfering
              isAutoScrollingRef.current = true

              // Reset all scene elements to initial state
              resetAllScenes()

              // Jump scroll to the start instantly
              window.scrollTo(0, spacerTop)

              // Refresh all ScrollTriggers to recalculate
              ScrollTrigger.refresh()

              // Small delay to let the DOM settle, then fade back in
              requestAnimationFrame(() => {
                panel.style.transition = 'opacity 0.5s ease-in'
                panel.style.opacity = '1'

                isAutoScrollingRef.current = false

                // Clean up inline transition after it completes
                setTimeout(() => {
                  panel.style.transition = ''
                  // Restart auto-transition timer
                  startAutoTimer()
                }, 550)
              })
            }, 420) // Wait for fade-out to complete
          }
        }
      }, AUTO_TRANSITION_DELAY)
    }

    // Detect user scroll to pause auto-transition temporarily
    const handleUserScroll = () => {
      // Ignore scroll events caused by our own auto-scroll animation
      if (isAutoScrollingRef.current) return

      userScrollingRef.current = true

      // Cancel any in-progress auto-scroll animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
        isAutoScrollingRef.current = false
      }

      // Clear the auto timer while user is scrolling
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current)
      }

      // Reset the user-scrolling flag after scroll inactivity
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current)
      }
      userScrollTimeoutRef.current = setTimeout(() => {
        userScrollingRef.current = false
        // Restart auto-transition after user stops scrolling
        startAutoTimer()
      }, 2000) // Wait 2s after last scroll event
    }

    window.addEventListener('scroll', handleUserScroll, { passive: true })

    // Start the first auto-transition timer
    startAutoTimer()

    return () => {
      window.removeEventListener('scroll', handleUserScroll)
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current)
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const navbarWrap = panelRef.current?.querySelector('.navbar-wrap')
    if (navbarWrap) tl.fromTo(navbarWrap, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    const firstSun = sunRefs.current[0]
    const firstGlow = sunGlowRefs.current[0]
    if (firstSun) tl.fromTo(firstSun, { scale: 0, opacity: 0, xPercent: -50, yPercent: -50 }, { scale: 1, opacity: 1, xPercent: -50, yPercent: -50, duration: 1.4, ease: 'elastic.out(1, 0.6)' }, 0.4)
    if (firstGlow) tl.fromTo(firstGlow, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8 }, 0.3)
    const firstImg = sceneRefs.current[0]?.querySelector('.animal-img-wrap')
    if (firstImg) tl.fromTo(firstImg, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 1.2 }, 0.6)
    const firstTitle = sceneRefs.current[0]?.querySelector('.scene-title')
    const firstDesc = sceneRefs.current[0]?.querySelector('.scene-desc')
    const firstCaption = sceneRefs.current[0]?.querySelector('.scene-caption')
    if (firstTitle) tl.fromTo(firstTitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, 0.8)
    if (firstDesc) tl.fromTo(firstDesc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
    if (firstCaption) tl.fromTo(firstCaption, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.7 }, 1.2)
    tl.fromTo(footerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.3)
    tl.fromTo(dotsRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.6 }, 1.4)
  }, [])

  // ===== MOUSE HANDLERS =====
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = panelRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    [mouseX, mouseY]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <div style={{ position: 'relative' }}>
      {/* Scroll spacer — the panel lives inside so it can go absolute when unpinned */}
      <div
        ref={scrollSpacerRef}
        style={{
          height: `${SCENES.length * 100}vh`,
          position: 'relative',
          zIndex: 2,
          background: '#0d0d0d',
        }}
      >

        {/* Visual panel — fixed while spacer is in view, absolute at bottom when scrolled past */}
        <div
          ref={panelRef}
          className="w-full h-screen overflow-hidden select-none"
          style={{
            position: isPanelPinned ? 'fixed' : 'absolute',
            top: isPanelPinned ? 0 : undefined,
            bottom: isPanelPinned ? undefined : 0,
            left: 0,
            right: 0,
            background: SCENES[0].bgColor,
            zIndex: 1,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="navbar-wrap absolute top-0 left-0 right-0 z-[200]">
            <Navbar />
          </div>
          {/* Atmospheric overlays */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '35%', background: 'radial-gradient(ellipse 80% 50% at 60% 100%, rgba(255,107,0,0.04) 0%, transparent 70%)' }} />

          {/* ===== SCENE LAYERS ===== */}
          {SCENES.map((s, i) => (
            <div
              key={`scene-${s.id}`}
              ref={(el) => { sceneRefs.current[i] = el }}
              data-scene={i}
              className="absolute inset-0"
              style={{
                zIndex: 10 + i,
                clipPath: i === 0 ? 'none' : `circle(0px at ${SUN_X}% ${SUN_Y}%)`,
                willChange: 'clip-path, transform, opacity',
                transformOrigin: `${SUN_X}% ${SUN_Y}%`,
                background: s.bgColor,
              }}
            >
              {/* Sun Glow — soft diffused atmosphere matching reference */}
              <div
                ref={(el) => { sunGlowRefs.current[i] = el }}
                className="absolute pointer-events-none"
                style={{
                  left: `${SUN_X}%`,
                  top: `${SUN_Y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: isMobile ? 'clamp(250px, 85vw, 450px)' : isTablet ? 'clamp(350px, 75vw, 750px)' : 'clamp(500px, 80vw, 1400px)',
                  height: isMobile ? 'clamp(250px, 85vw, 450px)' : isTablet ? 'clamp(350px, 75vw, 750px)' : 'clamp(500px, 80vw, 1400px)',
                  zIndex: 0,
                  opacity: i === 0 ? 1 : 0,
                }}
              >
                {/* Outer Atmosphere — large diffused glow */}
                <div className="absolute" style={{
                  top: '5%', left: '5%', right: '5%', bottom: '5%',
                  background: `radial-gradient(circle, ${s.sunGlowColorLight}88 0%, ${s.sunGlowColorLight}44 50%, transparent 75%)`,
                  borderRadius: '50%',
                  mixBlendMode: 'lighten',
                }} />
                {/* Mid Glow */}
                <div className="absolute" style={{
                  top: '15%', left: '15%', right: '15%', bottom: '15%',
                  background: `radial-gradient(circle, ${s.sunGlowColor}CC 0%, ${s.sunGlowColor}66 50%, transparent 85%)`,
                  borderRadius: '50%',
                  mixBlendMode: 'lighten',
                }} />
                {/* Inner Focus — core light */}
                <div className="absolute" style={{
                  top: '25%', left: '25%', right: '25%', bottom: '25%',
                  background: `radial-gradient(circle, ${s.sunGlowColor} 0%, ${s.sunGlowColor}99 55%, transparent 100%)`,
                  borderRadius: '50%',
                  mixBlendMode: 'lighten',
                }} />
              </div>


              {/* Sun — inside the scene layer, behind the animal (half sun - top half only) */}
              <div
                ref={(el) => { sunRefs.current[i] = el }}
                className="absolute sun-element"
                style={{
                  left: `${SUN_X}%`,
                  top: `${SUN_Y}%`,
                  transform: 'translate(-50%, -50%) scale(1)',
                  width: isMobile ? 'clamp(160px, 55vw, 280px)' : isTablet ? 'clamp(220px, 40vw, 400px)' : 'clamp(300px, 45vw, 650px)',
                  height: isMobile ? 'clamp(160px, 55vw, 280px)' : isTablet ? 'clamp(220px, 40vw, 400px)' : 'clamp(300px, 45vw, 650px)',
                  background: s.sunGradient,
                  boxShadow: `inset 0 0 ${isMobile ? '30px' : '60px'} rgba(255,255,255,0.15)`,
                  opacity: i === 0 ? 1 : 0, // only first sun visible initially
                  zIndex: 1,
                  clipPath: 'inset(-500px -500px 50% -500px)',
                  borderRadius: '50%',
                }}
              />

              {/* Wave Image — covering full width and bottom starting from SUN_Y */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: `${SUN_Y - 0}%`, // Slight overlap to ensure no gap
                  zIndex: 2,
                  backgroundColor: s.waveColor,
                }}
              >
                <img
                  src={s.waveImage}
                  alt="wave"
                  className="w-full h-full object-cover object-top"
                  style={{
                    display: 'block',
                    mixBlendMode: 'screen',
                    opacity: 1, // Keep full opacity for the wave image over the color
                  }}
                />
              </div>

              {/* Play Button — on top of sun */}
              <div
                className="absolute"
                style={{
                  left: `${SUN_X}%`,
                  top: `${SUN_Y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              >
                {/* <div className="relative">
                <div
                  className="rounded-full border-2 border-white/70 flex items-center justify-center"
                  style={{
                    width: 'clamp(45px, 5.5vw, 75px)',
                    height: 'clamp(45px, 5.5vw, 75px)',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="white" className="ml-1">
                    <polygon points="0,0 20,12 0,24" />
                  </svg>
                </div>
                <motion.div className="absolute inset-0 rounded-full border border-white/25" animate={{ scale: [1, 1.6], opacity: [0.5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }} />
                <motion.div className="absolute inset-0 rounded-full border border-white/15" animate={{ scale: [1, 2], opacity: [0.3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.8 }} />
              </div> */}
              </div>

              {/* Character Image — sits on the horizontal line */}
              <motion.div
                className="absolute animal-img-wrap"
                style={{
                  left: isMobile ? '35%' : isTablet ? '40%' : '40%',
                  top: (isMobile || isTablet) ? '35%' : '25%',
                  transform: 'translate(-50%, -50%)',
                  x: imgPX,
                  y: imgPY,
                  zIndex: 4,
                }}
              >
                <div style={{
                  width: isMobile ? 'clamp(280px, 85vw, 450px)' : isTablet ? 'clamp(380px, 60vw, 650px)' : 'clamp(350px, 50vw, 750px)',
                  height: isMobile ? 'clamp(320px, 65vh, 600px)' : isTablet ? 'clamp(400px, 70vh, 850px)' : 'clamp(450px, 75vh, 1000px)',
                }}>
                  <img
                    src={s.image} alt={s.title} className="w-full h-full object-contain object-bottom"
                    style={{ maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)' }}
                  />
                </div>
              </motion.div>

              {/* Content Container (Title & Desc) */}
              <div
                className={(isMobile || isTablet)
                  ? 'absolute z-10 w-full'
                  : 'absolute left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-10 max-w-md'
                }
                style={(isMobile || isTablet) ? {
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: isMobile ? '12%' : '15%',
                  bottom: 'auto',
                  maxWidth: isMobile ? '92vw' : '82vw',
                  textAlign: 'center' as const,
                  padding: isMobile ? '16px' : '24px',
                  borderRadius: '16px',
                  background: 'rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                } : {
                  maxWidth: '420px',
                }}
              >
                <h1 className="scene-title text-white leading-[1.1] tracking-tight uppercase"
                  style={{
                    fontSize: isMobile ? 'clamp(18px, 6vw, 26px)' : isTablet ? 'clamp(24px, 4.5vw, 36px)' : 'clamp(32px, 5vw, 64px)',
                    fontWeight: 700,
                    textShadow: (isMobile || isTablet) ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
                  }}
                >
                  {s.title}
                </h1>
                <p className="scene-desc text-white/70 mt-2 md:mt-4 leading-relaxed mx-auto"
                  style={{
                    fontSize: isMobile ? 'clamp(10px, 3vw, 13px)' : isTablet ? '14px' : 'clamp(13px, 1.1vw, 16px)',
                    lineHeight: (isMobile || isTablet) ? 1.5 : 1.7,
                    maxWidth: (isMobile || isTablet) ? '450px' : '380px'
                  }}
                >
                  {s.description}
                </p>
              </div>

              {/* Right Caption */}
              <div
                className={isMobile
                  ? 'scene-caption absolute z-10 text-right'
                  : 'scene-caption absolute right-8 lg:right-16 xl:right-24 bottom-32 z-10 text-right'
                }
                style={isMobile ? {
                  right: '16px',
                  bottom: '1%',
                } : isTablet ? {
                  right: '24px',
                  bottom: '3%',
                } : undefined}
              >
                <div className="flex items-center justify-end gap-3">
                  <span className="text-white font-semibold" style={{ fontSize: isMobile ? '14px' : 'clamp(16px, 1.2vw, 20px)' }}>{i + 1}</span>
                  <div className="w-10 h-[1px] bg-white/20" />
                  <span className="text-white/30 font-semibold" style={{ fontSize: isMobile ? '14px' : 'clamp(16px, 1.2vw, 20px)' }}>{SCENES.length}</span>
                </div>
              </div>
            </div>
          ))}

          {/* ===== RING LAYERS ===== */}
          {SCENES.slice(0, -1).map((_, i) => (
            <React.Fragment key={`ring-group-${i}`}>
              {/* Outer glow */}
              <div
                ref={(el) => { ringGlowRefs.current[i] = el }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 25 + i * 2,
                  opacity: 0,
                  willChange: 'background, opacity',
                }}
              />
              {/* Main ring border */}
              <div
                ref={(el) => { ringRefs.current[i] = el }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 26 + i * 2,
                  opacity: 0,
                  willChange: 'background, opacity',
                }}
              />
            </React.Fragment>
          ))}


          {/* Side Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute top-0 left-0 bottom-0 w-72 bg-[#0d0d0d]/95 backdrop-blur-xl z-[190] flex flex-col pt-24 px-8 gap-1">
                {['Home', 'Documentaries', 'About', 'Contact'].map((item, mi) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + mi * 0.08, duration: 0.5 }}>
                    <motion.span className="block py-3 text-white text-lg font-light tracking-wide cursor-pointer border-b border-white/10" whileHover={{ x: 10, color: '#FFCC00' }} transition={{ duration: 0.25 }}>{item}</motion.span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Episode Dots */}
          <div ref={dotsRef} className="absolute z-[180] flex opacity-0"
            style={{
              ...(isMobile
                ? { bottom: '16px', left: '50%', transform: 'translateX(-50%)', flexDirection: 'row' as const, gap: '8px' }
                : { right: windowWidth < 1024 ? '24px' : '40px', top: '50%', transform: 'translateY(-50%)', flexDirection: 'column' as const, gap: '12px' }
              ),
            }}
          >
            {SCENES.map((_, i) => (
              <motion.button key={i} className="cursor-pointer group relative flex items-center justify-end" whileHover={{ scale: 1.2 }} aria-label={`Go to episode ${i + 1}`}>
                {!isMobile && (
                  <span className="text-white/0 group-hover:text-white/50 text-[10px] mr-3 font-medium tracking-wider transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                )}
                <div className="rounded-full transition-all duration-500" style={{
                  width: i === activeScene ? (isMobile ? '20px' : '28px') : (isMobile ? '6px' : '8px'),
                  height: isMobile ? '6px' : '8px',
                  backgroundColor: i === activeScene ? scene.sunColor : 'rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  boxShadow: i === activeScene ? `0 0 10px ${scene.sunColor}66` : 'none',
                }} />
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-[180]">
            <div className="w-full h-[2px] bg-white/5">
              <motion.div className="h-full" style={{
                background: `linear-gradient(to right, ${scene.sunColor}, ${scene.sunColor}cc)`,
                boxShadow: `0 0 8px ${scene.sunColor}80`,
              }} animate={{ width: `${((activeScene + 1) / SCENES.length) * 100}%` }} transition={{ duration: 0.8 }} />
            </div>
          </div>

          {/* Footer */}
          {/* <footer ref={footerRef} className="absolute bottom-0 left-0 right-0 z-[180] flex items-center justify-between px-8 lg:px-12 py-4 opacity-0">
          <div className="flex items-center gap-5">
            {[
              { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { name: 'Instagram', path: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
              { name: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
            ].map((s) => (
              <motion.a key={s.name} href="#" className="text-white/30 hover:text-white transition-colors" whileHover={{ y: -3, scale: 1.15 }} whileTap={{ scale: 0.9 }} aria-label={s.name}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
              </motion.a>
            ))}
          </div>
          <motion.div className="flex flex-col items-center gap-1" animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <span className="text-white/20 text-[10px] tracking-[2px] uppercase">Scroll</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-white/20"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </motion.div>
          <div className="flex items-center gap-4 text-white/20 text-[11px] tracking-[0.5px]">
            <span className="cursor-pointer hover:text-white/40 transition-colors">Terms & Conditions</span>
            <span className="text-white/8">|</span>
            <span className="cursor-pointer hover:text-white/40 transition-colors">Privacy</span>
            <span className="text-white/8">|</span>
            <span className="cursor-pointer hover:text-white/40 transition-colors">Cookies</span>
          </div>
        </footer> */}
        </div>
      </div>
    </div>
  )
}
