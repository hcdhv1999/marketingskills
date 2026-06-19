import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import LogoPricing from "@/components/LogoPricing";
import IdentityPricing from "@/components/IdentityPricing";
import SelectedDesigns from "@/components/SelectedDesigns";
import Ecommerce from "@/components/Ecommerce";
import Social from "@/components/Social";
import Ads from "@/components/Ads";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Divider from "@/components/Divider";
import { MARQUEE_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />

      <Marquee items={MARQUEE_ITEMS} />

      <Philosophy />
      <Divider />
      <Services />

      <Marquee items={MARQUEE_ITEMS} />

      <LogoPricing />
      <Divider />
      <IdentityPricing />
      <Divider />
      <SelectedDesigns />

      <Stats />

      <Ecommerce />
      <Divider />
      <Social />
      <Divider />
      <Ads />

      <Testimonials />
      <Divider />
      <WhyUs />

      <Contact />
      <Footer />
    </main>
  );
}
