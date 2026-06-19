import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وكالة حِرف الرقمية | نبني حضورك الرقمي",
  description:
    "وكالة حِرف الرقمية — كل صنعة لها حِرفة. نحوّل الأفكار إلى هويات بصرية ومتاجر إلكترونية وتجارب رقمية تساعد مشروعك على النمو وبناء حضور قوي في السوق السعودي.",
  keywords: [
    "وكالة تسويق رقمي",
    "حِرف",
    "تصميم شعارات",
    "هوية بصرية",
    "متاجر إلكترونية",
    "إدارة وسائل التواصل",
    "إعلانات ممولة",
    "السعودية",
  ],
  authors: [{ name: "وكالة حِرف الرقمية" }],
  openGraph: {
    title: "وكالة حِرف الرقمية | نبني حضورك الرقمي",
    description:
      "كل صنعة لها حِرفة. نحوّل الأفكار إلى هويات بصرية ومتاجر إلكترونية وتجارب رقمية.",
    type: "website",
    locale: "ar_SA",
  },
};

export const viewport: Viewport = {
  themeColor: "#2E4F4F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Tajawal:wght@400;500;700;800;900&family=Cairo:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Prevent dark-mode flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hiraf-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
