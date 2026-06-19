"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { PHILOSOPHY_CARDS } from "@/lib/data";

export default function Philosophy() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="فلسفتنا"
        title="نصنع الأثر بإتقان الحِرفة"
        subtitle="نؤمن أن العمل الرقمي حِرفة لها أصول، لذلك نبدأ كل مشروع بفهم واضح لهدفك وجمهورك، ثم نمزج التفكير الاستراتيجي بالإبداع والتنفيذ المتقن لنصنع لك أثرًا يبقى، لا مجرد تصميم عابر."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {PHILOSOPHY_CARDS.map((card, i) => (
          <Reveal key={card.title} direction="up" delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass group h-full rounded-3xl p-8 shadow-soft transition-shadow duration-300 hover:shadow-gold"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-teal text-beige shadow-gold transition-transform duration-300 group-hover:scale-110">
                <Icon name={card.icon} className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-2xl font-extrabold">
                {card.title}
              </h3>
              <p className="leading-relaxed opacity-80">{card.text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
