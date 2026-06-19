"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SELECTED_DESIGNS } from "@/lib/data";

export default function SelectedDesigns() {
  return (
    <section id="designs" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="أعمالنا" title="التصاميم المختارة" />

      <div className="grid gap-8 lg:grid-cols-3">
        {SELECTED_DESIGNS.map((group, gi) => (
          <Reveal key={group.title} direction="up" delay={gi * 0.12}>
            <div className="glass h-full rounded-3xl p-7 shadow-soft">
              <h3 className="mb-6 border-b border-gold/25 pb-4 text-center font-heading text-xl font-extrabold gradient-text">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-gold/10"
                  >
                    <span className="text-sm leading-relaxed opacity-90">
                      {item.name}
                    </span>
                    <span className="shrink-0 whitespace-nowrap rounded-lg bg-gold/15 px-3 py-1 text-sm font-bold gold-text">
                      {item.price} ر.س
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
