import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-24">
      <Link href="/" className="text-sm text-[var(--color-accent)] hover:underline">
        ← العودة للرئيسية
      </Link>
      <h1 className="mt-6 font-display text-4xl text-[var(--color-ink)]">سياسة الخصوصية</h1>
      <p className="mt-6 leading-loose text-[var(--color-ink-soft)]">
        هذه صفحة سياسة الخصوصية الخاصة بـ«حِرف». سيتم نشر نص السياسة الكامل هنا.
        لأي استفسار بخصوص بياناتك، يسعدنا تواصلك معنا.
      </p>
    </main>
  );
}
