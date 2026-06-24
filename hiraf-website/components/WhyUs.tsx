"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { WHY_US } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="لماذا نحن" title="لماذا حِرف؟" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((point, i) => (
          <Reveal key={point.text} direction="up" delay={(i % 3) * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group flex h-full items-center gap-4 rounded-2xl border border-gold/15 bg-beige p-6 shadow-soft transition-all duration-300 hover:border-gold/40 hover:shadow-gold dark:bg-teal-dark"
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-teal">
                <Icon name={point.icon} className="h-7 w-7" />
                <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-beige shadow-soft dark:bg-gold dark:text-teal">
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="font-heading text-lg font-bold leading-snug">
                {point.text}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
