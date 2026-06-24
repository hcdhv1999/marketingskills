"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import type { Plan } from "@/lib/data";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative flex h-full flex-col rounded-3xl p-7 transition-shadow duration-300 ${
        plan.popular
          ? "bg-teal text-beige shadow-gold-lg ring-2 ring-gold"
          : "glass shadow-soft hover:shadow-gold"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-teal shadow-gold">
          <Crown className="h-4 w-4" />
          الأكثر طلبًا
        </div>
      )}

      <h3
        className={`font-heading text-2xl font-extrabold ${
          plan.popular ? "text-beige" : "text-teal dark:text-beige"
        }`}
      >
        {plan.name}
      </h3>

      <div className="mt-4 flex items-end gap-2">
        <span
          className={`font-heading text-4xl font-black ${
            plan.popular ? "text-gold" : "gradient-text"
          }`}
        >
          {plan.price}
        </span>
        <span className="mb-1 text-sm opacity-75">
          ر.س{plan.unit ? ` / ${plan.unit}` : ""}
        </span>
      </div>

      {plan.note && (
        <p
          className={`mt-2 text-sm font-medium ${
            plan.popular ? "text-gold/90" : "gold-text"
          }`}
        >
          {plan.note}
        </p>
      )}

      <div
        className={`my-6 h-px w-full ${
          plan.popular ? "bg-gold/40" : "bg-gold/25"
        }`}
      />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.popular ? "bg-gold text-teal" : "bg-gold/15 gold-text"
              }`}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className={plan.popular ? "text-beige/90" : "opacity-90"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-7 block rounded-xl px-5 py-3 text-center font-bold transition-all duration-300 ${
          plan.popular
            ? "bg-gold text-teal hover:shadow-gold-lg"
            : "bg-teal text-beige hover:bg-gold hover:text-teal dark:bg-gold dark:text-teal"
        }`}
      >
        اطلب الباقة
      </a>
    </motion.div>
  );
}
