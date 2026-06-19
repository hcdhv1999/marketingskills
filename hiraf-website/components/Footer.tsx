"use client";

import { Instagram, Music2, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/data";

export default function Footer() {
  const socials = [
    {
      icon: MessageCircle,
      label: "واتساب",
      href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    { icon: Instagram, label: "إنستغرام", href: CONTACT_INFO.instagram },
    { icon: Music2, label: "تيك توك", href: CONTACT_INFO.tiktok },
    { icon: Mail, label: "البريد", href: `mailto:${CONTACT_INFO.email}` },
  ];

  return (
    <footer className="bg-teal-deep text-beige">
      <div className="gold-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <span className="font-heading text-3xl font-black gradient-text">
            حِرف
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige/70">
            وكالة رقمية سعودية نصنع الأثر بإتقان الحِرفة — هويات بصرية ومتاجر
            إلكترونية وتجارب رقمية تنمّي مشروعك.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-gold">
            روابط سريعة
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-beige/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-gold">
            تواصل معنا
          </h4>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-sm text-beige/75 transition-colors hover:text-gold"
          >
            {CONTACT_INFO.email}
          </a>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-beige/80 transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-teal"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-beige/10 py-6 text-center text-sm text-beige/60">
        © 2026 وكالة حِرف الرقمية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
