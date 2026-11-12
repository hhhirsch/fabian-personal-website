import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const prinzipien = [
  {
    titel: "Kein Nice-to-have.",
    satz: "Ich komme, wenn ich gebraucht werde. Gerade dann, wenn das Geld knapp ist.",
  },
  {
    titel: "Ehrlich bis zum letzten Schritt.",
    satz: "Auch Ihr Anteil am Problem kommt auf den Tisch. Das sage ich Ihnen, bevor ich den Auftrag annehme.",
  },
  {
    titel: "Wer Veränderung will, verändert sich selbst.",
    satz: "Das gilt für alle Ebenen. Für die Geschäftsführung zuerst.",
  },
  {
    titel: "Handeln hat Konsequenzen.",
    satz: "Wer ein Verhalten nicht will, muss es ansprechen und Veränderung einfordern. Sonst funktioniert nichts.",
  },
  {
    titel: "Anpacken statt Folien.",
    satz: "Ich bleibe bis über die Ziellinie: Notartermin, Betriebsvereinbarung, Nachsteuern vor Ort.",
  },
  {
    titel: "Haltung vor Technik.",
    satz: "Erst das gemeinsame Ziel, dann die Methode. Ich verkaufe kein Tool und kein Modell.",
  },
];

const absagen = [
  {
    was: "Fünf schöne Folien, dann gehen",
    antwort:
      "„Mich ärgert, wenn jemand sagt: der Nächste, der wieder nur kommt und mir die Welt erklärt.“",
  },
  {
    was: "ROI-Rechnungen und Garantien",
    antwort: "„Ein Versprechen, das ich nicht halten kann und nicht will.“",
  },
  {
    was: "Großer Apparat",
    antwort:
      "„Ich muss nicht noch fünf Berater und drei Leute im Backoffice finanzieren, sondern erst mal nur mich.“",
  },
  {
    was: "KI-Hype",
    antwort:
      "Ich bin kein KI-Experte und will keiner sein. Ich fange verkorkste Einführungen auf und rolle sie geordnet aus.",
  },
];

export default function Haltung() {
  return (
    <>
      <section id="haltung" className="wrap py-20 md:py-32">
        <SectionHead nr="02" titel="Wofür er steht" />

        <ol className="mt-6 md:mt-10">
          {prinzipien.map((p, n) => (
            <li key={p.titel} className="border-b border-rule">
              <Reveal className="group grid gap-x-10 gap-y-3 py-8 md:grid-cols-12 md:items-baseline md:py-11">
                <h3 className="display text-[clamp(1.9rem,5.6vw,5rem)] transition-colors duration-300 group-hover:text-signal md:col-span-8">
                  <span className="label mr-3 align-[0.9em] text-signal md:mr-5">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  {p.titel}
                </h3>
                <p className="max-w-md text-ink-soft md:col-span-4">{p.satz}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section id="wogegen" className="bg-ink text-paper">
        <div className="wrap py-20 md:py-32">
          <SectionHead nr="—" titel="Wogegen er steht" dark />

          <Reveal>
            <p className="display mt-10 max-w-[16ch] text-[clamp(2.5rem,9vw,8.5rem)] md:mt-16">
              „Ich komme nicht, um <span className="italic text-signal">Tee</span> zu
              trinken.“
            </p>
            <p className="mt-8 max-w-xl text-lg text-paper/70">
              Gibt Kollegen, die das so machen. Kann ich verstehen. Ich komme
              nicht, um „Wir haben uns alle lieb“ zu klatschen.
            </p>
          </Reveal>

          <dl className="mt-16 grid gap-x-10 border-t border-paper/25 md:mt-24 md:grid-cols-2">
            {absagen.map((a, n) => (
              <Reveal key={a.was} i={n % 2} className="border-b border-paper/25 py-7">
                <dt className="label text-paper/55">
                  <span className="mr-2 text-signal" aria-hidden>
                    ✕
                  </span>
                  {a.was}
                </dt>
                <dd className="mt-3 font-display text-xl leading-snug md:text-2xl">{a.antwort}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
