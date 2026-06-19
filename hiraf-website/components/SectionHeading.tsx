"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <Reveal direction="fade">
          <span className="mb-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-sm font-medium gold-text">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2 className="heading-accent font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
