import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

// OFFEN: Freigabe und Anonymisierung der Belege mit Fabian klären.
const szenen = [
  {
    ort: "Ausgründung einer Tochter-GmbH",
    szene: "Ich habe die Notartermine vorbereitet.",
    text: "Und mit den Anwälten die Gesellschaftsverträge abgestimmt. Die nächsten Schritte nur aufzuschreiben, hätte niemandem geholfen.",
  },
  {
    ort: "KI-Einführung",
    szene: "Ich habe die Betriebsvereinbarung mit dem Betriebsrat verhandelt.",
    text: "Danach war ich tageweise bei den Mitarbeitenden, um zu prüfen, ob die neue Arbeitsweise gelebt wird.",
  },
  {
    ort: "Interim",
    szene: "„Kannst du ab morgen drei Tage die Woche?“",
    text: "Konnte ich. Daraus wurde ein Mandat über sechs Monate.",
  },
  {
    ort: "Rettungsdienst, Kostenverhandlung",
    szene: "Drei Monate bis zu Zahlen, die halten.",
    text: "Dazu eine Strategie für die Verhandlung und dafür, wie das Ergebnis danach eingehalten wird.",
  },
];

export default function Belege() {
  return (
    <section id="belege" className="wrap py-20 md:py-32">
      <SectionHead nr="05" titel="Belege" />

      <Reveal>
        <p className="display mt-10 text-[clamp(2rem,5.2vw,4.5rem)] md:mt-16">
          Szenen statt Referenzlogos.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-10 border-t border-ink md:mt-20 md:grid-cols-2">
        {szenen.map((s, n) => (
          <Reveal key={s.ort} i={n % 2} className="border-b border-rule py-8 md:py-10">
            <p className="label text-ink-soft">{s.ort}</p>
            <p className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.1] tracking-tight md:text-4xl">
              {s.szene}
            </p>
            <p className="mt-4 max-w-md text-ink-soft">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
