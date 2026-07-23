"use client";
import { H1, P } from "../../../styles/Typography";
import { ArrowUpRight, ArrowRight } from "lucide-react"; 
import React, { useRef, useEffect, useCallback, useMemo, useState } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(InertiaPlugin);
}




/* -------------------------------------- */
/* UTILS
/* -------------------------------------- */
const throttle = <T extends (event: any) => void>(func: T, limit: number) => {
  let lastCall = 0;
  return (event: any) => {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(event);
    }
  };
};


 
interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}
function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}
const Contact: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });
  
 
  
  /* DOT SETTINGS */
  const dotSize = 5;
  const gap = 15;
  const baseColor = "#2b2b2b";
  const activeColor = "#5227FF";
  const proximity = 120;
  const speedTrigger = 100;
  const maxSpeed = 4000;
  const resistance = 750;
  const returnDuration = 1.5;

  const baseRgb = useMemo(() => hexToRgb(baseColor), []);
  const activeRgb = useMemo(() => hexToRgb(activeColor), []);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;
    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, []);
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cell = dotSize + gap;
    const cols = Math.ceil(width / cell) + 1;
    const rows = Math.ceil(height / cell) + 1;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: x * cell,
          cy: y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
    dotsRef.current = dots;
  }, []);
 

  useEffect(() => {
    if (!circlePath) return;
    let rafId: number;
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;
      for (const dot of dotsRef.current) {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;
        let style = baseColor;
        if (dsq <= proximity * proximity) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }
        ctx.save();
        ctx.translate(dot.cx + dot.xOffset, dot.cy + dot.yOffset);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [circlePath, baseRgb, activeRgb]);
 

  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);
 

  useEffect(() => {
    const onMove = (clientX: number, clientY: number) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = clientX - pr.lastX;
      const dy = clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const s = maxSpeed / speed;
        vx *= s;
        vy *= s;
      }
      pr.lastTime = now; pr.lastX = clientX; pr.lastY = clientY;
      pr.vx = vx; pr.vy = vy; pr.speed = speed; pr.x = currentX; pr.y = currentY;
 

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          const pushX = dot.cx - pr.x + vx * 0.004;
          const pushY = dot.cy - pr.y + vy * 0.004;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0, yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };
    const throttledMouse = throttle((e: MouseEvent) => onMove(e.clientX, e.clientY), 20);
    window.addEventListener("mousemove", throttledMouse, { passive: true });
    return () => window.removeEventListener("mousemove", throttledMouse);
}, []);


const [errors, setErrors] = useState<Record<string, string>>({});

const [isSubmitted, setIsSubmitted] = useState(false);

const validateForm = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const newErrors: Record<string, string> = {};

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const interest = formData.get("interest")?.toString();
  const message = formData.get("message")?.toString().trim();

  if (!name || name.length < 2) {
    newErrors.name = "Please enter your full name.";
  }

  if (!email) {
    newErrors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!interest) {
    newErrors.interest = "Please select an interest.";
  }

  // MESSAGE OPTIONAL
if (message && message.length > 0 && message.length < 3) {
  newErrors.message = "If provided, message must be at least 3 characters.";
}

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};




const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validateForm(e.currentTarget)) return;

  const form = e.currentTarget;

  const formData = new FormData(form);

  const templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    interest: formData.get("interest"),
    message: formData.get("message") || "No message provided",
  };

  // ✅ 1. Instantly show success (green button)
  setIsSubmitted(true);
  setErrors({});

  // ✅ 2. Send emails in background (no await)
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  // ✅ 3. After 3 seconds → reset everything
  setTimeout(() => {
    form.reset();          // clear inputs
    setIsSubmitted(false); // button back to black
  }, 3000);
};
return (
  <>
    <div className="relative overflow-hidden">

      {/* ✅ NAVBAR (same as CircularCards) */}
      <div className="absolute top-0 left-0 right-0 z-50 w-full bg-gray-800 backdrop-blur-md ">
  <Navbar />
</div>

      <section className="w-full min-h-[900px] flex relative bg-[#FAFAFA] dark-bg-black  overflow-hidden font-quicksand justify-center xl:justify-end px-6 lg:px-24">
        {/* Go Back Button */}
<div className="absolute top-26 left-8 z-20">
  <button
    onClick={() => window.history.back()}
    disabled={isSubmitted}
    className="
      group flex items-center gap-2
      p-3
      bg-white/70 backdrop-blur-md
      border border-white/60
      rounded-full
      text-md font-bold font-quadran   text-black
      shadow-md
      cursor-pointer
      hover:bg-white
      transition-all duration-300
    "
  >
    <ArrowRight
      size={30}
      className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
    />
    
  </button>
</div>
      
      {/* BACKGROUND DOTS */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:pointer-events-auto">
        <div ref={wrapperRef} className="w-full h-full opacity-60 lg:opacity-80">
          <canvas ref={canvasRef} className="block" />
        </div>
      </div>

      {/* FORM: Width 20%, Height 700px */}
      <div className="relative z-10 top-10 w-full md:w-[70%] lg:w-[60%] xl:w-[45%] min-w-[340px] h-[700px] self-center flex flex-col bg-white/80 dark-bg-slate-800 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl border border-black/50">
        <div className="mb-5">
          <H1 className="text-black font-bold mb-2 text-4xl tracking-tight leading-tight">Let's talk</H1>
          <P className="">Fill out the form and we'll be in touch shortly.</P>
        </div>

        <form className="flex flex-col flex-grow gap-6 mt-6" onSubmit={handleSubmit}>
  <div className="flex flex-col gap-5">

    {/* Name */}
    <div>
      <input
        name="name"
        className="w-full px-6 py-4 bg-white    border border-gray-200 rounded-2xl 
        focus:border-black focus:ring-4 focus:ring-black/5 
        outline-none transition-all duration-300 text-sm shadow-sm"
        placeholder="Full Name *"
      />
      {errors.name && (
        <p className="text-red-600 text-sm mt-2">{errors.name}</p>
      )}
    </div>

    {/* Email */}
    <div>
      <input
        name="email"
        type="email"
        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl 
        focus:border-black focus:ring-4 focus:ring-black/5 
        outline-none transition-all duration-300 text-sm shadow-sm"
        placeholder="Email Address *"
      />
      {errors.email && (
        <p className="text-red-600 text-sm mt-2">{errors.email}</p>
      )}
    </div>

    {/* Interest */}
    <div className="relative">
      <select
        name="interest"
        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl 
        focus:border-black focus:ring-4 focus:ring-black/5 
        outline-none appearance-none cursor-pointer text-sm shadow-sm"
      >
        <option value="">Interested in... *</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
      </select>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-black">
        <ArrowRight size={16} className="rotate-90" />
      </div>

      {errors.interest && (
        <p className="text-red-600 text-sm mt-2">{errors.interest}</p>
      )}
    </div>

    {/* Message (Optional) */}
    <div>
      <textarea
        name="message"
        rows={4}
        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl 
        resize-none focus:border-black focus:ring-4 focus:ring-black/5 
        outline-none transition-all duration-300 text-sm shadow-sm"
        placeholder="Message (Optional)"
      />
      {errors.message && (
        <p className="text-red-600 text-sm mt-2">{errors.message}</p>
      )}
    </div>
  </div>

  {/* Submit Button */}
  <div className="pt-4">
    <button
      type="submit"
      disabled={isSubmitted}
      className={`
        group flex items-center justify-center w-full h-[64px]
        rounded-2xl font-semibold text-base text-white 
        transition-all duration-300 cursor-pointer
        ${
          isSubmitted
            ? "bg-green-600 cursor-default"
            : "bg-black hover:bg-gray-900 hover:shadow-xl"
        }
        active:scale-[0.98]
      `}
    >
      {isSubmitted ? (
        <span>Submitted Successfully</span>
      ) : (
        <>
          <span className="mr-2">Send Message</span>
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  </div>
</form>
      </div>
      
      
    </section>
    </div>
    </>
  );
};
export default Contact;