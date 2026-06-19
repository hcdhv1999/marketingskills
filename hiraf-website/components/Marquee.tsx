"use client";

import { Diamond } from "lucide-react";

// Continuous gold marquee strip. Content is duplicated so the loop is seamless.
export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-gold-teal py-4">
      <div className="marquee-track animate-marquee">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6">
            <span className="whitespace-nowrap text-lg font-bold text-beige">
              {item}
            </span>
            <Diamond className="h-3 w-3 shrink-0 text-beige/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
