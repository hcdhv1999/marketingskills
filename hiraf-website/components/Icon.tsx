"use client";

import {
  Target,
  Sparkles,
  Cpu,
  PenTool,
  Palette,
  LayoutGrid,
  ShoppingCart,
  Share2,
  Megaphone,
  MapPin,
  Handshake,
  Layers,
  BadgeDollarSign,
  Headset,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Target,
  Sparkles,
  Cpu,
  PenTool,
  Palette,
  LayoutGrid,
  ShoppingCart,
  Share2,
  Megaphone,
  MapPin,
  Handshake,
  Layers,
  BadgeDollarSign,
  Headset,
  Gauge,
};

export default function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} />;
}
