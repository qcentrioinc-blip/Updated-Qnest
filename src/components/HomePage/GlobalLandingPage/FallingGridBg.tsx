"use client";

// ── Drop this component anywhere and wrap your page content with it ──
// Your existing content goes INSIDE as {children}, the grid stays behind.

export default function FallingGridBg({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative  h-full    " style={{ background: "#141414" }}>

      {/* ── Waterfall grid layer ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
           
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200%",          // start above viewport so fall is seamless
            left: 0,
            right: 0,
            height: "400%",        // 4× viewport height → seamless loop

            backgroundImage: `
         linear-gradient(to right,  rgba(255,255,255,0.08) 2px, transparent 2px),
  linear-gradient(to bottom, rgba(255,255,255,0.08) 2px, transparent 2px)
            `,
            backgroundSize: "40px 40px",   /* ← square size — tweak here */

            animation: "gridFall 7s linear infinite",
          }}
        />

       
         
      </div>

      {/* Keyframes injected inline (no extra CSS file needed) */}
      <style>{`
        @keyframes gridFall {
          0%   { transform: translateY(0); }
          100% { transform: translateY(25%); }
        }
      `}</style>

      {/* ── Your page content sits above the grid ── */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}