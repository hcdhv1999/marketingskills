"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { SOCIAL_PLANS } from "@/lib/data";

export default function Social() {
  return (
    <section id="social" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="المحتوى" title="إدارة وسائل التواصل" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SOCIAL_PLANS.map((plan, i) => (
          <Reveal key={plan.name} direction="up" delay={(i % 3) * 0.1}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
