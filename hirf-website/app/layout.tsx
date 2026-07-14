import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

const SITE_URL = "https://byhirf.com";

export const metadata: Metadata = {
  verification: {
  google: "-xV_oVAuNF5ubKiapZ6HaChbJ3IyC54GySflRwUTOp0",
},
  metadataBase: new URL(SITE_URL),
  title: {
   default: "حِرف — كل صنعة لها حِرفة",
    template: "%s · حِرف",
  },
  description:
    "متاجر إلكترونية • تصميم جرافيكي • حملات إعلانية",
  keywords: [
    "وكالة رقمية",
    "متجر إلكتروني",
    "هوية بصرية",
    "حملات إعلانية",
    "تصميم مواقع",
    "السعودية",
    "حِرف",
  ],
  authors: [{ name: "حِرف" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL,
    siteName: "حِرف",
    title: "حِرف — كل صنعة لها حِرفة",
    description:
      "متاجر إلكترونية • تصميم جرافيكي • حملات إعلانية",
  },
  twitter: {
    card: "summary_large_image",
    title: "حِرف — كل صنعة لها حِرفة",
    description:
  "متاجر إلكترونية • تصميم جرافيكي • حملات إعلانية",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FCF6F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>

      <body>
       <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-D245ZGL9X1"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D245ZGL9X1');
  `}
</Script>
      <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-5 focus:py-2 focus:text-[var(--color-canvas)]"
        >
          تخطَّ إلى المحتوى
        </a>
        {children}
      </body>
    </html>
  );
}
