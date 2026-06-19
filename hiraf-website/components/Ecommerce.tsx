"use client";

import { motion } from "framer-motion";
import { Check, Store } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { ECOMMERCE_PLANS, STORE_DEVELOPMENT } from "@/lib/data";

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="المتاجر" title="تأسيس المتاجر الإلكترونية" />

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {ECOMMERCE_PLANS.map((plan, i) => (
          <Reveal key={plan.name} direction="up" delay={(i % 4) * 0.08}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      {/* Store development */}
      <Reveal direction="up" delay={0.1}>
        <div className="mt-14">
          <h3 className="mb-8 text-center font-heading text-2xl font-extrabold">
            {STORE_DEVELOPMENT.title}
          </h3>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl bg-teal p-8 text-beige shadow-gold-lg md:flex-row md:items-center"
          >
            <div className="md:w-1/3">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-teal shadow-gold">
                <Store className="h-7 w-7" />
              </div>
              <h4 className="font-heading text-2xl font-extrabold">
                {STORE_DEVELOPMENT.name}
              </h4>
              <p className="mt-2 font-heading text-3xl font-black text-gold">
                {STORE_DEVELOPMENT.price}
              </p>
            </div>
            <ul className="grid flex-1 gap-3 sm:grid-cols-2">
              {STORE_DEVELOPMENT.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-teal">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-beige/90">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
