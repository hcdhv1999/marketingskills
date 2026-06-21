import AbstractBackground from "@/components/AbstractBackground";
import Nav from "@/components/Nav";
import Landing from "@/components/Landing";
import Gateway from "@/components/Gateway";
import Journey from "@/components/Journey";
import Advisor from "@/components/Advisor";
import Vault from "@/components/Vault";
import CraftSystem from "@/components/CraftSystem";
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
        <Gateway />
        <Journey />
        <Advisor />
        <Vault />
        <CraftSystem />
        <ToolsCenter />
        <Trust />
        <FinalCTA />
      </main>
    </ExperienceProvider>
  );
}
