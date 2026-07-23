"use client";

/**
 * IndustryBg.tsx
 * ─────────────────────────────────────────────────────────────────
 * Drop-in animated canvas background that reacts to the active industry.
 * 
 * USAGE inside CircularCards.tsx:
 *   1. Import:  import IndustryBg from "./IndustryBg";
 *   2. Place before your outer wrapper:
 *        <IndustryBg activeIndex={activeIndustry} />
 *   The component is position:fixed and sits behind everything (z-index:1).
 *
 * Each industry has its own particle system + color palette that
 * cross-fades smoothly (opacity transition) when the center card changes.
 * ─────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from "react";

// ── Per-industry config ───────────────────────────────────────────
interface IndustryTheme {
  /** CSS gradient for the radial bloom behind the center card */
  bloom: string;
  /** Particle color (rgba string) */
  particleColor: string;
  /** Secondary particle color for dual-tone effects */
  particleColor2: string;
  /** Canvas draw function — receives ctx + state ref */
  draw: (ctx: CanvasRenderingContext2D, state: ParticleState, t: number) => void;
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  angle: number; speed: number;
  extra?: number; // industry-specific payload
}

interface ParticleState {
  particles: Particle[];
  w: number; h: number;
  theme: IndustryTheme;
  frame: number;
}

// ── Helpers ───────────────────────────────────────────────────────
const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randInt = (min: number, max: number) => Math.floor(rand(min, max));

function spawnParticle(w: number, h: number): Particle {
  return {
    x: rand(0, w), y: rand(0, h),
    vx: rand(-0.4, 0.4), vy: rand(-0.6, -0.1),
    life: 0, maxLife: rand(120, 280),
    size: rand(2, 5),
    angle: rand(0, Math.PI * 2),
    speed: rand(0.3, 1.2),
  };
}

// ── Draw helpers per industry ─────────────────────────────────────

// 0 · Banking & Finance — golden $ rain + flowing graph lines
function drawBanking(ctx: CanvasRenderingContext2D, s: ParticleState, t: number) {
  const { w, h, particles } = s;

  // Soft radial bloom at center
  const bloom = ctx.createRadialGradient(w / 2, h * 0.55, 0, w / 2, h * 0.55, w * 0.55);
  bloom.addColorStop(0, "rgba(212,175,55,0.08)");
  bloom.addColorStop(1, "rgba(212,175,55,0)");
  ctx.fillStyle = bloom;
  ctx.fillRect(0, 0, w, h);

  // Animated stock chart lines
  ctx.save();
  ctx.strokeStyle = "rgba(212,175,55,0.12)";
  ctx.lineWidth = 1.5;
  for (let ln = 0; ln < 3; ln++) {
    ctx.beginPath();
    const yBase = h * (0.35 + ln * 0.12);
    for (let xi = 0; xi <= w; xi += 6) {
      const y = yBase + Math.sin((xi / w) * Math.PI * 4 + t * 0.012 + ln) * 18
                      + Math.sin((xi / w) * Math.PI * 9 + t * 0.02 + ln * 2) * 7;
      xi === 0 ? ctx.moveTo(xi, y) : ctx.lineTo(xi, y);
    }
    ctx.stroke();
  }
  ctx.restore();

  // $ symbol particles falling + fading
  particles.forEach(p => {
    const progress = p.life / p.maxLife;
    const alpha = Math.sin(progress * Math.PI) * 0.55;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#d4af37";
    ctx.font = `bold ${p.size * 4}px serif`;
    ctx.textAlign = "center";
    ctx.fillText("$", p.x, p.y);
    ctx.restore();
    p.y -= p.speed * 0.6;
    p.x += Math.sin(p.life * 0.05) * 0.3;
    p.life++;
    if (p.life >= p.maxLife) {
      Object.assign(p, spawnParticle(w, h), { y: h + 20, size: rand(2, 5) });
    }
  });
}

// 1 · Billing & Utility — electric arc particles + circuit traces
function drawBilling(ctx: CanvasRenderingContext2D, s: ParticleState, t: number) {
  const { w, h, particles } = s;

  // Neon cyan bloom
  const bloom = ctx.createRadialGradient(w / 2, h * 0.5, 0, w / 2, h * 0.5, w * 0.5);
  bloom.addColorStop(0, "rgba(0,220,255,0.07)");
  bloom.addColorStop(1, "rgba(0,220,255,0)");
  ctx.fillStyle = bloom;
  ctx.fillRect(0, 0, w, h);

  // Circuit board horizontal traces
  ctx.save();
  for (let tr = 0; tr < 6; tr++) {
    const y = h * (0.15 + tr * 0.13);
    const pulse = (Math.sin(t * 0.03 + tr * 1.2) + 1) / 2;
    ctx.strokeStyle = `rgba(0,220,255,${0.04 + pulse * 0.09})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([8, 14]);
    ctx.lineDashOffset = -t * 0.8;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  ctx.restore();

  // Spark/energy particles
  particles.forEach(p => {
    const progress = p.life / p.maxLife;
    const alpha = Math.sin(progress * Math.PI) * 0.7;
    const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
    grd.addColorStop(0, `rgba(0,220,255,${alpha})`);
    grd.addColorStop(1, "rgba(0,220,255,0)");
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
    p.x += Math.sin(p.angle) * p.speed;
    p.y += Math.cos(p.angle) * p.speed * 0.6;
    p.angle += 0.04;
    p.life++;
    if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > w + 10) {
      Object.assign(p, spawnParticle(w, h));
    }
  });
}

// 2 · Cloud FinOps AI — drifting node constellation + aurora waves
function drawCloud(ctx: CanvasRenderingContext2D, s: ParticleState, t: number) {
  const { w, h, particles } = s;

  // Aurora horizontal waves
  for (let aw = 0; aw < 3; aw++) {
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, "rgba(99,179,237,0)");
    grad.addColorStop(0.3 + aw * 0.15, `rgba(99,179,237,${0.05 + aw * 0.02})`);
    grad.addColorStop(0.7 - aw * 0.1, `rgba(147,197,253,${0.04 + aw * 0.02})`);
    grad.addColorStop(1, "rgba(99,179,237,0)");
    ctx.save();
    ctx.globalAlpha = 0.6;
    const yPos = h * (0.3 + aw * 0.18) + Math.sin(t * 0.008 + aw * 2) * 22;
    ctx.beginPath();
    for (let xi = 0; xi <= w; xi += 4) {
      const yy = yPos + Math.sin((xi / w) * Math.PI * 5 + t * 0.01 + aw) * 14;
      xi === 0 ? ctx.moveTo(xi, yy) : ctx.lineTo(xi, yy);
    }
    ctx.lineTo(w, h); ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  // Node dots + connecting lines
  const visibleNodes = particles.slice(0, 18);
  ctx.save();
  visibleNodes.forEach((p, i) => {
    visibleNodes.forEach((q, j) => {
      if (j <= i) return;
      const dx = p.x - q.x; const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        ctx.strokeStyle = `rgba(99,179,237,${(1 - dist / 130) * 0.18})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    });
    const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.6;
    ctx.fillStyle = `rgba(147,197,253,${alpha})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2); ctx.fill();
    p.x += p.vx * 0.4; p.y += p.vy * 0.3; p.life++;
    if (p.life >= p.maxLife) Object.assign(p, spawnParticle(w, h));
  });
  ctx.restore();
}

// 3 · High Tech — binary rain columns (Matrix-style, subtle)
function drawHighTech(ctx: CanvasRenderingContext2D, s: ParticleState, t: number) {
  const { w, h, particles } = s;

  // Column binary rain — use particles as column trackers
  const cols = Math.floor(w / 24);
  // We repurpose particles array as column y-positions
  while (s.particles.length < cols) {
    s.particles.push({ ...spawnParticle(w, h), y: rand(-h, 0), x: 0, extra: 0 });
  }

  ctx.save();
  ctx.font = "bold 11px monospace";
  ctx.textAlign = "center";
  particles.slice(0, cols).forEach((p, i) => {
    p.x = i * 24 + 12;
    const alpha = 0.18 + Math.sin(t * 0.015 + i) * 0.06;
    ctx.fillStyle = `rgba(0,255,120,${alpha})`;
    // Draw a few chars in the column
    for (let row = 0; row < 4; row++) {
      const rowAlpha = (1 - row / 4) * alpha;
      ctx.globalAlpha = rowAlpha;
      const char = Math.random() > 0.97
        ? String.fromCharCode(randInt(48, 90))
        : (p.extra ? String.fromCharCode(p.extra as number) : "1");
      ctx.fillText(char, p.x, p.y - row * 16);
    }
    ctx.globalAlpha = 1;
    p.y += 1.4;
    if (p.y > h + 60) { p.y = rand(-80, -20); p.extra = randInt(48, 90); }
  });
  ctx.restore();

  // Scanline overlay
  ctx.save();
  for (let sl = 0; sl < h; sl += 3) {
    ctx.fillStyle = "rgba(0,0,0,0.025)";
    ctx.fillRect(0, sl, w, 1);
  }
  ctx.restore();

  // Green bloom
  const bloom = ctx.createRadialGradient(w / 2, h * 0.5, 0, w / 2, h * 0.5, w * 0.45);
  bloom.addColorStop(0, "rgba(0,255,100,0.05)");
  bloom.addColorStop(1, "rgba(0,255,100,0)");
  ctx.fillStyle = bloom; ctx.fillRect(0, 0, w, h);
}

// 4 · Unified Healthcare — EKG heartbeat line + floating cross symbols + DNA
function drawHealthcare(ctx: CanvasRenderingContext2D, s: ParticleState, t: number) {
  const { w, h, particles } = s;

  // Soft teal bloom
  const bloom = ctx.createRadialGradient(w / 2, h * 0.5, 0, w / 2, h * 0.5, w * 0.5);
  bloom.addColorStop(0, "rgba(56,189,188,0.08)");
  bloom.addColorStop(1, "rgba(56,189,188,0)");
  ctx.fillStyle = bloom; ctx.fillRect(0, 0, w, h);

  // EKG / heartbeat line
  ctx.save();
  ctx.strokeStyle = "rgba(56,189,188,0.3)";
  ctx.lineWidth = 1.8;
  ctx.shadowColor = "rgba(56,189,188,0.5)";
  ctx.shadowBlur = 6;
  ctx.beginPath();
  const ekgY = h * 0.52;
  const speed = t * 1.8;
  for (let xi = 0; xi <= w; xi += 2) {
    const pos = ((xi - speed % w) + w) % w;
    let y = ekgY;
    // Heartbeat spike pattern repeating every 120px
    const cycle = pos % 120;
    if (cycle < 5) y = ekgY;
    else if (cycle < 10) y = ekgY - 8;
    else if (cycle < 13) y = ekgY + 4;
    else if (cycle < 16) y = ekgY - 38;
    else if (cycle < 20) y = ekgY + 14;
    else if (cycle < 24) y = ekgY - 10;
    else if (cycle < 28) y = ekgY;
    xi === 0 ? ctx.moveTo(xi, y) : ctx.lineTo(xi, y);
  }
  ctx.stroke();
  ctx.restore();

  // Floating + cross symbols
  particles.forEach(p => {
    const progress = p.life / p.maxLife;
    const alpha = Math.sin(progress * Math.PI) * 0.35;
    const sz = p.size * 2.5;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "#38bdbc";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(p.x - sz, p.y); ctx.lineTo(p.x + sz, p.y);
    ctx.moveTo(p.x, p.y - sz); ctx.lineTo(p.x, p.y + sz);
    ctx.stroke();
    ctx.restore();
    p.y -= p.speed * 0.35;
    p.x += Math.sin(p.life * 0.04) * 0.2;
    p.life++;
    if (p.life >= p.maxLife) Object.assign(p, spawnParticle(w, h), { y: h + 20 });
  });

  // DNA helix strands (two sine waves with connecting rungs)
  ctx.save();
  const helixX = w * 0.5;
  const amplitude = 26;
  const freq = 0.045;
  for (let yi = 80; yi < h - 60; yi += 2) {
    const phase = t * 0.018;
    const x1 = helixX + Math.cos(yi * freq + phase) * amplitude;
    const x2 = helixX + Math.cos(yi * freq + phase + Math.PI) * amplitude;
    const alpha = 0.06 + Math.abs(Math.cos(yi * freq + phase)) * 0.06;
    ctx.fillStyle = `rgba(56,189,188,${alpha})`;
    ctx.beginPath(); ctx.arc(x1, yi, 1.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x2, yi, 1.5, 0, Math.PI * 2); ctx.fill();
    // Rungs every 18px
    if (yi % 18 === 0) {
      ctx.strokeStyle = `rgba(56,189,188,${alpha * 0.7})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(x1, yi); ctx.lineTo(x2, yi); ctx.stroke();
    }
  }
  ctx.restore();
}

// ── Theme map ─────────────────────────────────────────────────────
const themes: IndustryTheme[] = [
  { bloom: "", particleColor: "rgba(212,175,55,0.6)", particleColor2: "rgba(180,140,30,0.4)", draw: drawBanking },
  { bloom: "", particleColor: "rgba(0,220,255,0.6)",  particleColor2: "rgba(0,160,200,0.4)", draw: drawBilling },
  { bloom: "", particleColor: "rgba(99,179,237,0.6)", particleColor2: "rgba(147,197,253,0.4)", draw: drawCloud },
  { bloom: "", particleColor: "rgba(0,255,120,0.6)",  particleColor2: "rgba(0,180,80,0.4)",  draw: drawHighTech },
  { bloom: "", particleColor: "rgba(56,189,188,0.6)", particleColor2: "rgba(20,150,150,0.4)", draw: drawHealthcare },
];

// ── Component ─────────────────────────────────────────────────────
interface Props {
  /** The `activeIndustry` value from CircularCards (0-4) */
  activeIndex: number;
}

export default function IndustryBg({ activeIndex }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<ParticleState | null>(null);
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  // Crossfade when activeIndex changes
  useEffect(() => {
    setVisible(false);
    const t1 = setTimeout(() => {
      setCurrentIndex(activeIndex);
      setVisible(true);
    }, 200); // brief fade-out then swap
    return () => clearTimeout(t1);
  }, [activeIndex]);

  // Canvas setup + animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (stateRef.current) {
        stateRef.current.w = canvas.width;
        stateRef.current.h = canvas.height;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particle state
    const PARTICLE_COUNT = 40;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      spawnParticle(canvas.width, canvas.height)
    );
    stateRef.current = {
      particles,
      w: canvas.width,
      h: canvas.height,
      theme: themes[currentIndex],
      frame: 0,
    };

    let frame = 0;
    const loop = () => {
      const s = stateRef.current!;
      s.theme = themes[currentIndex];
      const { w, h } = s;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Draw this industry's effect
      s.theme.draw(ctx, s, frame);

      frame++;
      s.frame = frame;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  // Re-run only on mount; theme swap happens via stateRef
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update theme in stateRef when index changes (no remount needed)
  useEffect(() => {
    if (stateRef.current) {
      stateRef.current.theme = themes[currentIndex];
      // Reset particles so new theme starts fresh
      stateRef.current.particles = Array.from({ length: 40 }, () =>
        spawnParticle(stateRef.current!.w, stateRef.current!.h)
      );
    }
  }, [currentIndex]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    />
  );
}