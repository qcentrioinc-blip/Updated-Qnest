"use client";
 
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
 
const logos = [
  { img: "/ProductsLogo/Almanac.webp", link: "/industries/banking-and-finance/products/almanac", tagline: "Asset Management", newTab: true },
  { img: "/ProductsLogo/Bankfair.webp", link: "/industries/banking-and-finance/products/bankfair", tagline: "Core Banking", newTab: true },
  { img: "/ProductsLogo/CIP2.svg", link: "/industries/banking-and-finance/products/CIP", tagline: "Due Diligent", newTab: true },
  { img: "/ProductsLogo/Clouddiet.webp", link: "/industries/cloud-finops-ai", tagline: "Cloud Optimization AI", newTab: true },
  { img: "/ProductsLogo/Conciliare.webp", link: "/industries/banking-and-finance/products/conciliare", tagline: "AI Reconciliation", newTab: true },
  { img: "/ProductsLogo/ibs.png", link: "/industries/banking-and-finance/products/internet-banking-system", tagline: "Internet and Mobile Banking", newTab: true },
  
  { img: "/ProductsLogo/LOS.webp", link: "/industries/banking-and-finance/products/loan-origination-system", tagline: "Loan Origination", newTab: true },
   { img: "/ProductsLogo/Pago.png", link: "/industries/banking-and-finance/products/pago", tagline: "Payment System", newTab: true },
  { img: "/ProductsLogo/Remitree.webp", link: "/industries/banking-and-finance/products/remitree", tagline: "Cross-Border Remittance", newTab: true },
  { img: "/ProductsLogo/Sams.webp", link: "/industries/banking-and-finance/products/sams", tagline: "NPL Tracking", newTab: true },
  { img: "/ProductsLogo/sherlock.webp", link: "/industries/banking-and-finance/products/sherlock", tagline: "AML", newTab: true },
  { img: "/ProductsLogo/UHN.webp", link: "/industries/ehr-and-pms", tagline: "EHR and PMS", newTab: true },
];
 
const doubled = [...logos, ...logos, ...logos];
 
const PX_PER_FRAME = 2.5;
const DRAG_THRESHOLD = 4;
 
export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posX = useRef(0);
  const halfW = useRef(0);
  const rafId = useRef(0);
 
  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const isPaused = useRef(false);
 
  const downX = useRef(0);
  const downY = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);
  const lastDragX = useRef(0);
  const dragVel = useRef(0);
  const momentum = useRef(0);
 
  useEffect(() => {
    const track     = trackRef.current;
    const container = track?.parentElement;
    if (!track || !container) return;
 
    const initRaf = requestAnimationFrame(() => {
      halfW.current = track.scrollWidth / 3;
 
      function step() {
        if (!trackRef.current) return;
 
        if (isDragging.current || isPaused.current) {
          // pause
        } else if (Math.abs(momentum.current) > 0.5) {
          posX.current += momentum.current;
          momentum.current *= 0.92;
          if (Math.abs(momentum.current) < 0.1) momentum.current = 0;
        } else {
          posX.current -= PX_PER_FRAME;
        }
       if (halfW.current > 0) {
  if (posX.current <= -halfW.current) posX.current += halfW.current;
  if (posX.current >= 0) posX.current -= halfW.current;
}
        trackRef.current.style.transform = `translate3d(${posX.current}px,0,0)`;
        rafId.current = requestAnimationFrame(step);
      }
 
      rafId.current = requestAnimationFrame(step);
    });
 
    // const container = trackRef.current?.parentElement;
 
    // 🖱 Mouse
    function onMouseDown(e: MouseEvent) {
      if (!container?.contains(e.target as Node)) return;
      isDragging.current = true;
      isPaused.current = true;
      wasDragged.current = false;
      momentum.current = 0;
      downX.current = e.clientX;
      lastDragX.current = e.clientX;
    }
 
    function onMouseMove(e: MouseEvent) {
      if (!isDragging.current) return;
      const dx = e.clientX - lastDragX.current;
      dragVel.current = dragVel.current * 0.6 + dx * 0.4;
      lastDragX.current = e.clientX;
 
      if (!wasDragged.current && Math.abs(e.clientX - downX.current) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }
 
      posX.current += dx;
 
      if (halfW.current > 0) {
  if (posX.current <= -halfW.current) posX.current += halfW.current;
  if (posX.current >= 0) posX.current -= halfW.current;
}
    }
 
    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      isPaused.current = false;
      momentum.current = dragVel.current * 0.8;
      setTimeout(() => (wasDragged.current = false), 50);
    }
 
    function onMouseEnter() {
      isPaused.current = true;
    }
 
    function onMouseLeave() {
      isPaused.current = false;
    }
 
    // 📱 Touch
    function onTouchStart(e: TouchEvent) {
      isPaused.current = true;
      isDragging.current = false;
      isHorizontal.current = null;
      wasDragged.current = false;
      momentum.current = 0;
 
      downX.current = e.touches[0].clientX;
      downY.current = e.touches[0].clientY;
      lastDragX.current = e.touches[0].clientX;
    }
 
    function onTouchMove(e: TouchEvent) {
      if (!container?.contains(e.target as Node)) return;
 
      const tx = e.touches[0].clientX;
      const ty = e.touches[0].clientY;
      const dx = tx - lastDragX.current;
 
      const totalDX = Math.abs(tx - downX.current);
      const totalDY = Math.abs(ty - downY.current);
 
      if (isHorizontal.current === null && (totalDX > DRAG_THRESHOLD || totalDY > DRAG_THRESHOLD)) {
        isHorizontal.current = totalDX >= totalDY;
      }
 
      if (isHorizontal.current === false) return;
 
      if (isHorizontal.current === true) {
        e.preventDefault();
        isDragging.current = true;
        wasDragged.current = true;
 
        dragVel.current = dragVel.current * 0.6 + dx * 0.4;
        lastDragX.current = tx;
        posX.current += dx;
      if (halfW.current > 0) {
  if (posX.current <= -halfW.current) posX.current += halfW.current;
  if (posX.current >= 0) posX.current -= halfW.current;
}
      }
    }
 
    function onTouchEnd() {
      isPaused.current = false;
 
      if (!isDragging.current) {
        isHorizontal.current = null;
        return;
      }
 
      isDragging.current = false;
      isHorizontal.current = null;
      momentum.current = dragVel.current * 0.8;
 
      setTimeout(() => (wasDragged.current = false), 50);
    }
 
    // Attach
    if (container) {
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
      container.addEventListener("touchstart", onTouchStart, { passive: true });
      container.addEventListener("touchmove", onTouchMove, { passive: false });
      container.addEventListener("touchend", onTouchEnd);
    }
 
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
 
    return () => {
      cancelAnimationFrame(initRaf);
      cancelAnimationFrame(rafId.current);
 
      if (container) {
        container.removeEventListener("mousedown", onMouseDown);
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);
      }
 
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
 
  const onLinkClick = (e: React.MouseEvent) => {
    if (wasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
 
  return (
    <div
      className="w-full bg-white   mt-1 dark:mt-0 overflow-hidden relative"
      style={{
        borderTop: "2px solid #a9a9a9",
        borderBottom: "2px solid #a9a9a9",
        userSelect: "none",
        cursor: "grab",
        touchAction: "pan-y",
      }}
    >
      <div ref={trackRef} className="flex items-center" style={{ willChange: "transform" }}>
        {doubled.map((logo, i) => (
          <Link
            key={i}
            to={logo.link}
            target={logo.newTab ? "_blank" : "_self"}
            rel={logo.newTab ? "noopener noreferrer" : undefined}
            onClick={onLinkClick}
            draggable={false}
            className="flex flex-col relative items-center justify-center flex-shrink-0 text-center
              w-[200px] h-[120px]
              sm:w-[200px] sm:h-[100px]
              md:w-[240px] md:h-[150px]
              lg:w-[290px] lg:h-[180px]
              xl:w-[350px] xl:h-[160px]"
            style={{
              borderRight: "2px solid #a9a9a9",
              padding: "0 clamp(16px,2vw,40px)",
            }}
          >
            <img
              src={logo.img}
              alt="product"
              draggable={false}
              className="object-cover w-full h-auto"
            />
            <span className="absolute bottom-4 font-quadran   text-[14px] md:text-[16px] lg:text-[20px] font-extrabold text-blue-800 leading-tight">
              {logo.tagline}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
 