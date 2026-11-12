import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const schritte = [
  {
    titel: "Klarheit",
    satz: "Anhören, quantifizieren, analysieren. In der Krise zuerst: Sind Ihre Daten verlässlich? Sind wir überhaupt entscheidungsfähig?",
  },
  {
    titel: "Ehrlichkeit",
    satz: "Was läuft schief, und was ist Ihr Anteil daran. Das kläre ich, bevor ich den Auftrag annehme.",
  },
  {
    titel: "Veränderung",
    satz: "Struktur, Kultur, Teamdynamik: Interviews, Workshops, klare Grundprinzipien und Kommunikationsregeln. Und ich bleibe dran.",
  },
];

const fragen = ["Wollen Sie das so?", "Sagen Sie, was Sie erwarten?", "Hat Verhalten Konsequenzen?"];

export default function SoArbeitetEr() {
  return (
    <section id="so-arbeitet-er" className="bg-paper-deep">
      <div className="wrap py-20 md:py-32">
        <SectionHead nr="04" titel="So arbeitet er" />

        <Reveal>
          <p className="mt-10 max-w-2xl text-xl leading-snug md:mt-16 md:text-2xl">
            Jedes Mandat folgt demselben Dreiklang. Die Methode wechselt, die
            Reihenfolge nicht.
          </p>
        </Reveal>

        <ol className="mt-12 grid md:mt-20 md:grid-cols-3">
          {schritte.map((s, n) => (
            <li
              key={s.titel}
              className="border-t-[3px] border-ink py-8 md:border-l md:border-l-rule md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <Reveal i={n}>
                <span className="display block text-7xl text-signal md:text-8xl">{n + 1}</span>
                <h3 className="display mt-4 text-[clamp(2.25rem,4.4vw,3.75rem)]">{s.titel}</h3>
                <p className="mt-4 max-w-sm text-ink-soft">{s.satz}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12 border-t border-rule pt-8 md:mt-16">
          <p className="label text-ink-soft">Drei Fragen an die Geschäftsführung</p>
          <ul className="mt-4 flex flex-col gap-x-10 gap-y-1 font-display text-2xl font-medium italic md:flex-row md:text-3xl">
            {fragen.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
