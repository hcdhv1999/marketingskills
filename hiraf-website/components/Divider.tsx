"use client";

import { Diamond } from "lucide-react";

// Thin gold divider with a small centered diamond accent.
export default function Divider() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-2">
      <div className="gold-divider" />
      <Diamond className="h-3 w-3 shrink-0 text-gold" />
      <div className="gold-divider" />
    </div>
  );
}
