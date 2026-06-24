"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  gold: boolean;
};

// Light, slow-floating particles using only the brand palette (gold + teal).
export default function Particles({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const next: Particle[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 7,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 6,
      gold: Math.random() > 0.45,
    }));
    setParticles(next);
  }, [count]);

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.gold ? "#D88935" : "#2E4F4F",
            opacity: 0.35,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, 14, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
