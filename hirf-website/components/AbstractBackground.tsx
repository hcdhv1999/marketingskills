"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A lightweight abstract motion system: a slowly drifting field of
 * geometric "craft" particles drawn on canvas, layered over a mesh
 * gradient. No images, no libraries beyond canvas — fast and premium.
 */
export default function AbstractBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; type: number };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(34, Math.floor((w * h) / 42000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 12 + Math.random() * 60,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        a: Math.random() * Math.PI,
        type: Math.floor(Math.random() * 3),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += 0.0025;
        if (p.x < -80) p.x = w + 80;
        if (p.x > w + 80) p.x = -80;
        if (p.y < -80) p.y = h + 80;
        if (p.y > h + 80) p.y = -80;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.globalAlpha = 0.07;
        ctx.strokeStyle = p.type === 0 ? "#d88935" : "#2e4f4f";
        ctx.lineWidth = 1.4;
        if (p.type === 0) {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.type === 1) {
          ctx.strokeRect(-p.r / 2, -p.r / 2, p.r, p.r);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.r / 2);
          ctx.lineTo(p.r / 2, p.r / 2);
          ctx.lineTo(-p.r / 2, p.r / 2);
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="mesh absolute inset-0 opacity-70" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Two large floating abstract orbs */}
      <motion.div
        aria-hidden
        className="floaty absolute -right-32 top-10 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(216,137,53,0.20), transparent 60%)" }}
      />
      <motion.div
        aria-hidden
        className="floaty absolute -left-40 bottom-0 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(46,79,79,0.18), transparent 60%)", animationDelay: "-6s" }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}
