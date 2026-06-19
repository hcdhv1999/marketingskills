"use client";

import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { IDENTITY_PLANS, IDENTITY_GUARANTEE } from "@/lib/data";

export default function IdentityPricing() {
  return (
    <section id="identity-pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="الباقات" title="باقات الهوية البصرية" />

      <div className="grid gap-8 md:grid-cols-3">
        {IDENTITY_PLANS.map((plan, i) => (
          <Reveal key={plan.name} direction="up" delay={i * 0.1}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={0.1}>
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-teal shadow-gold">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <p className="text-base font-medium leading-relaxed">
            {IDENTITY_GUARANTEE}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
