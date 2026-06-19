"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { ADS_PLANS } from "@/lib/data";

export default function Ads() {
  return (
    <section id="ads" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="الإعلانات" title="الإعلانات الممولة" />
      <div className="grid gap-8 md:grid-cols-3">
        {ADS_PLANS.map((plan, i) => (
          <Reveal key={plan.name} direction="up" delay={i * 0.1}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
