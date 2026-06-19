"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="خدماتنا" title="حلول متكاملة لنمو مشروعك" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} direction="up" delay={(i % 3) * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group flex h-full flex-col rounded-3xl border border-gold/15 bg-beige p-8 shadow-soft transition-all duration-300 hover:border-gold/40 hover:shadow-gold dark:bg-teal-dark"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-teal">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-extrabold">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 leading-relaxed opacity-80">
                {service.text}
              </p>
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-2 text-sm font-bold gold-text"
              >
                اطلب الخدمة
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
