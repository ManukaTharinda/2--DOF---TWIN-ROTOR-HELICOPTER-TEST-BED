import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Subsystems } from "@/components/subsystems";
import { Specs } from "@/components/specs";
import { Media } from "@/components/media";
import { Documentation } from "@/components/documentation";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Subsystems />
        <Specs />
        <Media />
        <Documentation />
        <Team />
      </main>
      <Footer />
    </>
  );
}
