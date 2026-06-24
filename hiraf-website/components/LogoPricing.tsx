"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { LOGO_PLANS } from "@/lib/data";

export default function LogoPricing() {
  return (
    <section id="logo-pricing" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="الباقات" title="باقات الشعارات" />
      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
        {LOGO_PLANS.map((plan, i) => (
          <Reveal key={plan.name} direction="up" delay={i * 0.12}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
