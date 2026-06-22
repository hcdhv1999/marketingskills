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

export default function Home() {
  return (
    <ExperienceProvider>
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
