"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import Particles from "./Particles";
import { CONTACT_INFO } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend: hand the message off to email via mailto and show success.
    const subject = encodeURIComponent(`مشروع جديد من ${form.name || "زائر"}`);
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالبريد: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-teal py-24 text-beige"
    >
      <Particles count={20} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(216,137,53,0.4), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <h2 className="font-heading text-3xl font-black sm:text-5xl">
            جاهز <span className="text-gold">تبدأ مشروعك؟</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-beige/85 sm:text-lg">
            سواء كنت تبدأ من الصفر أو تطور مشروعًا قائمًا، فريق حِرف جاهز
            لمساعدتك في بناء حضور رقمي احترافي يحقق أهدافك.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.18}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-3xl bg-beige/10 p-10 backdrop-blur"
            >
              <CheckCircle2 className="h-14 w-14 text-gold" />
              <p className="font-heading text-xl font-bold">
                شكرًا لتواصلك معنا!
              </p>
              <p className="text-sm text-beige/80">
                سيصلك فريق حِرف في أقرب وقت ممكن.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 grid max-w-xl gap-4 text-right"
            >
              <input
                required
                type="text"
                placeholder="الاسم"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-gold/30 bg-beige/10 px-5 py-4 text-beige placeholder:text-beige/50 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
              />
              <input
                required
                type="email"
                placeholder="البريد الإلكتروني"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-gold/30 bg-beige/10 px-5 py-4 text-beige placeholder:text-beige/50 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
              />
              <textarea
                required
                rows={4}
                placeholder="أخبرنا عن مشروعك"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-gold/30 bg-beige/10 px-5 py-4 text-beige placeholder:text-beige/50 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-teal shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-gold-lg"
              >
                ابدأ مشروعك الآن
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal direction="fade" delay={0.25}>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-beige/80 transition-colors hover:text-gold"
          >
            أو تواصل معنا مباشرة عبر واتساب
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
