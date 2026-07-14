import AbstractBackground from "@/components/AbstractBackground";
import Nav from "@/components/Nav";
import Landing from "@/components/Landing";
import About from "@/components/About";
import ShortCTA from "@/components/ShortCTA";
import WhyHirf from "@/components/WhyHirf";
import Trust from "@/components/Trust";
import PackagesShowcase from "@/components/PackagesShowcase";
import Work from "@/components/Work";
import PackageAdvisor from "@/components/PackageAdvisor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ExperienceProvider } from "@/components/ExperienceContext";
import { whatsappLink } from "@/lib/whatsapp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "حِرف",
  alternateName: "Hirf",
  url: "https://byhirf.com",
  description:
    "حِرف وكالة رقمية سعودية متخصصة في تصميم وتأسيس المتاجر الإلكترونية، الهوية البصرية، والحملات الإعلانية.",
  email: "byhirf@gmail.com",
  areaServed: { "@type": "Country", name: "المملكة العربية السعودية" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966506039366",
    contactType: "sales",
    areaServed: "SA",
    availableLanguage: "Arabic",
  },
  knowsAbout: ["تصميم متاجر إلكترونية", "هوية بصرية", "حملات إعلانية"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "تصميم وتأسيس المتاجر الإلكترونية" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "الهوية البصرية والتصميم الجرافيكي" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "الحملات الإعلانية" } },
  ],
  sameAs: [
    "https://instagram.com/hirf_sa",
    "https://www.tiktok.com/@hirf_sa",
    "https://x.com/hirf_sa",
    whatsappLink("استشارة عامة"),
  ],
};

export default function Home() {
  return (
    <ExperienceProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <AbstractBackground />
      <Nav />
      <main id="main" className="relative">
        <Landing />
        <About />
        <ShortCTA />
        <WhyHirf />
        <Trust />
        <PackagesShowcase />
        <Work />
        <PackageAdvisor />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </ExperienceProvider>
  );
}
