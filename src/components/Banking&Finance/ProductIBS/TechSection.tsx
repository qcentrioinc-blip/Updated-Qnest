"use client";

import { useEffect, useRef } from "react";
import { H2, P } from "../../../styles/Typography";

export default function TechSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const mobileInnerRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef(0);
  const mobileOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isMobileDraggingRef = useRef(false);
  const isMobileHoveringRef = useRef(false);
  const lastYRef = useRef(0);
  const lastXRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const mobileAnimFrameRef = useRef<number>(0);

  const SPEED = 1.4;

  const logos = [
    { src: "/ProductIBS/Tech1.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech2.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech3.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech5.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech4.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech1.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech2.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech3.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech5.svg", heightClass: "h-32" },
    { src: "/ProductIBS/Tech4.svg", heightClass: "h-32" },
  ];

  // ── DESKTOP vertical scroll ──────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    // Wait one frame so the DOM has painted and scrollHeight is correct
    let rafId: number;
    const start = () => {
      const getSetH = () => inner.scrollHeight / 2;

      const tick = () => {
        if (!isDraggingRef.current && !isHoveringRef.current) {
          offsetRef.current += SPEED;
        }
        const sh = getSetH();
        // Wrap using remainder — zero dead-zone jumps
        offsetRef.current = ((offsetRef.current % sh) + sh) % sh;
        inner.style.transform = `translateY(-${offsetRef.current}px)`;
        animFrameRef.current = requestAnimationFrame(tick);
      };
      animFrameRef.current = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(start);

    const onEnter  = () => { isHoveringRef.current = true; };
    const onLeave  = () => { isHoveringRef.current = false; isDraggingRef.current = false; };
    const onDown   = (e: MouseEvent) => {
      isDraggingRef.current = true;
      isHoveringRef.current = true;
      lastYRef.current = e.pageY;
      el.style.cursor = "grabbing";
    };
    const onUp     = () => {
      isDraggingRef.current = false;
      isHoveringRef.current = false;
      el.style.cursor = "grab";
    };
    const onMove   = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const delta = lastYRef.current - e.pageY;
      lastYRef.current = e.pageY;
      const sh = inner.scrollHeight / 2;
      offsetRef.current = ((offsetRef.current + delta * 1.5) % sh + sh) % sh;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown",  onDown);
    el.addEventListener("mouseup",    onUp);
    el.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(animFrameRef.current);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown",  onDown);
      el.removeEventListener("mouseup",    onUp);
      el.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  // ── MOBILE horizontal scroll ─────────────────────────────────────────
  useEffect(() => {
    const el = mobileScrollRef.current;
    const inner = mobileInnerRef.current;
    if (!el || !inner) return;

    let rafId: number;
    const start = () => {
      const getSetW = () => inner.scrollWidth / 2;

      const tick = () => {
        if (!isMobileDraggingRef.current && !isMobileHoveringRef.current) {
          mobileOffsetRef.current += SPEED;
        }
        const sw = getSetW();
        mobileOffsetRef.current = ((mobileOffsetRef.current % sw) + sw) % sw;
        inner.style.transform = `translateX(-${mobileOffsetRef.current}px)`;
        mobileAnimFrameRef.current = requestAnimationFrame(tick);
      };
      mobileAnimFrameRef.current = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(start);

    const onEnter  = () => { isMobileHoveringRef.current = true; };
    const onLeave  = () => { isMobileHoveringRef.current = false; isMobileDraggingRef.current = false; };
    const onDown   = (e: MouseEvent) => {
      isMobileDraggingRef.current = true;
      isMobileHoveringRef.current = true;
      lastXRef.current = e.pageX;
      el.style.cursor = "grabbing";
    };
    const onUp     = () => {
      isMobileDraggingRef.current = false;
      isMobileHoveringRef.current = false;
      el.style.cursor = "grab";
    };
    const onMove   = (e: MouseEvent) => {
      if (!isMobileDraggingRef.current) return;
      e.preventDefault();
      const delta = lastXRef.current - e.pageX;
      lastXRef.current = e.pageX;
      const sw = inner.scrollWidth / 2;
      mobileOffsetRef.current = ((mobileOffsetRef.current + delta * 1.5) % sw + sw) % sw;
    };
    // Touch
    const onTouchStart = (e: TouchEvent) => {
      isMobileDraggingRef.current = true;
      lastXRef.current = e.touches[0].pageX;
    };
    const onTouchEnd   = () => { isMobileDraggingRef.current = false; };
    const onTouchMove  = (e: TouchEvent) => {
      if (!isMobileDraggingRef.current) return;
      const delta = lastXRef.current - e.touches[0].pageX;
      lastXRef.current = e.touches[0].pageX;
      const sw = inner.scrollWidth / 2;
      mobileOffsetRef.current = ((mobileOffsetRef.current + delta * 1.5) % sw + sw) % sw;
    };

    el.addEventListener("mouseenter",  onEnter);
    el.addEventListener("mouseleave",  onLeave);
    el.addEventListener("mousedown",   onDown);
    el.addEventListener("mouseup",     onUp);
    el.addEventListener("mousemove",   onMove);
    el.addEventListener("touchstart",  onTouchStart);
    el.addEventListener("touchend",    onTouchEnd);
    el.addEventListener("touchmove",   onTouchMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(mobileAnimFrameRef.current);
      el.removeEventListener("mouseenter",  onEnter);
      el.removeEventListener("mouseleave",  onLeave);
      el.removeEventListener("mousedown",   onDown);
      el.removeEventListener("mouseup",     onUp);
      el.removeEventListener("mousemove",   onMove);
      el.removeEventListener("touchstart",  onTouchStart);
      el.removeEventListener("touchend",    onTouchEnd);
      el.removeEventListener("touchmove",   onTouchMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <section className="w-full dark:bg-black bg-[#EFEFEF] ">
      <div className="max-w-7xl mx-auto px-8 xl:px-6 py-6 md:py-0 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <div className="max-w-2xl">
          <H2 className=" text-black dark:text-white leading-tight mb-6">
            Three-Tier Architecture for
            Scalable Banking Operations
          </H2>
          <P className="">
            The platform follows a three-tier architecture separating presentation, middleware, and backend layers. Presentation layer handles web and mobile interfaces. The middleware layer manages business logic and API integrations. The backend layer connects to core banking system, e-wallet, and utility bill payment services. 
          </P>
        </div>

        {/* ── DESKTOP: vertical scroll (hidden on mobile) ── */}
        <div className="relative hidden lg:block w-full lg:w-[320px] xl:w-[360px] shrink-0">
          <div className="absolute left-0 top-0 w-[10px] h-full bg-[#00AA72]" />
          <div className="absolute right-0 top-0 w-[10px] h-full bg-[#00AA72]" />
          <div className="bg-white dark:bg-slate-950 mx-[10px]">
            <div
              ref={scrollRef}
              className="h-[400px] overflow-hidden cursor-grab select-none px-6"
            >
              {/* ✅ Fixed uniform gap — no gap-12, use py on each logo wrapper */}
              <div
                ref={innerRef}
                className="flex flex-col will-change-transform"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col">
                    {logos.map((logo, j) => (
                      <div key={j} className="py-5 flex items-center justify-center">
                        <img
                          src={logo.src}
                          className={`w-full object-contain ${logo.heightClass}`}
                          draggable={false}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: same container, horizontal scroll ── */}
        <div className="relative w-full lg:hidden shrink-0">
          <div className="absolute left-0 top-0 w-[6px] h-full bg-[#00AA72]" />
          <div className="absolute right-0 top-0 w-[6px] h-full bg-[#00AA72]" />
          <div className="bg-white mx-[6px] py-6">
            <div
              ref={mobileScrollRef}
              className="overflow-hidden cursor-grab select-none px-6"
            >
              <div
                ref={mobileInnerRef}
                className="flex flex-row will-change-transform"
                style={{ width: "max-content" }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-row">
                    {logos.map((logo, j) => (
                      <div key={j} className="px-5 flex items-center justify-center">
                        <img
                          src={logo.src}
                          className={`h-12 w-auto object-contain`}
                          draggable={false}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}