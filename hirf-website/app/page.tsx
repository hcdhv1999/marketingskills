import AbstractBackground from "@/components/AbstractBackground";
import Nav from "@/components/Nav";
import Landing from "@/components/Landing";
import About from "@/components/About";
import WhyHirf from "@/components/WhyHirf";
import Gateway from "@/components/Gateway";
import Journey from "@/components/Journey";
import Advisor from "@/components/Advisor";
import Vault from "@/components/Vault";
import CraftSystem from "@/components/CraftSystem";
import Packages from "@/components/Packages";
import ToolsCenter from "@/components/tools/ToolsCenter";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import { ExperienceProvider } from "@/components/ExperienceContext";

export default function Home() {
  return (
    <ExperienceProvider>
      <AbstractBackground />
      <Nav />
      <main id="main" className="relative">
        <Landing />
        <About />
        <WhyHirf />
        <Trust />
        <Gateway />
        <Journey />
        <Advisor />
        <Vault />
        <CraftSystem />
        <Packages />
        <ToolsCenter />
        <FinalCTA />
      </main>
    </ExperienceProvider>
  );
}
