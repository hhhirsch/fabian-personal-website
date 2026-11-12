import Hero from "@/components/sections/Hero";
import WerIstFabian from "@/components/sections/WerIstFabian";
import Haltung from "@/components/sections/Haltung";
import WannManIhnRuft from "@/components/sections/WannManIhnRuft";
import SoArbeitetEr from "@/components/sections/SoArbeitetEr";
import Belege from "@/components/sections/Belege";
import Kontakt from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <main>
      <Hero />
      <WerIstFabian />
      <Haltung />
      <WannManIhnRuft />
      <SoArbeitetEr />
      <Belege />
      <Kontakt />
    </main>
  );
}
