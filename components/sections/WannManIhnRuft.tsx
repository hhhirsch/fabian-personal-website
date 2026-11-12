import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const anlaesse = [
  {
    titel: "Rote Zahlen und Verhandlungsdruck",
    lage: "Kein aussagefähiges Controlling. Kosten nicht verursachungsgemäß verteilt. Die Verhandlung mit den Kostenträgern steht an.",
    ansage:
      "„Bevor Sie verhandeln: Sind Ihre Zahlen so aufbereitet, dass Sie entscheidungsfähig sind?“",
    danach: "Belastbare Zahlen und eine Strategie für die Verhandlung.",
    dauer: "Ab vier Wochen. Verhandlungsvorbereitung rund drei Monate.",
  },
  {
    titel: "Führung fehlt",
    lage: "Elternzeit, Kündigung, Geschäftsführung weg. Oder der Laden ist an die Wand gefahren.",
    ansage:
      "„Ich halte den Laden stabil und kläre die unangenehmen Themen. Dann gehe ich wieder.“",
    danach: "Der Laden ist stabil weitergelaufen. Die unangenehmen Themen sind gelöst.",
    dauer: "Bereichsleitung oder Geschäftsführung auf Zeit, bis sechs Monate.",
  },
  {
    titel: "Organisation muss sich bewegen",
    lage: "Alle sind beschäftigt, aber nichts passiert. Leute gehen. Übernahme, Stellenabbau, Wachstum oder KI-Einführung stehen an.",
    ansage:
      "„Erst Klarheit, dann eine ehrliche Rückmeldung, dann Veränderung. Auf allen Ebenen.“",
    danach: "Wenn Leute gehen, gehen die Richtigen. Das Team weiß, wer zu ihm passt.",
    dauer: "Projekt ab vier Wochen.",
  },
];

export default function WannManIhnRuft() {
  return (
    <section id="wann-man-ihn-ruft" className="wrap py-20 md:py-32">
      <SectionHead nr="03" titel="Wann man ihn ruft" />

      <Reveal>
        <p className="display mt-10 max-w-[18ch] text-[clamp(2rem,5.2vw,4.5rem)] md:mt-16">
          Drei Anlässe. Keiner davon ist angenehm.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:mt-20 lg:grid-cols-3">
        {anlaesse.map((a, n) => (
          <Reveal key={a.titel} i={n} className="h-full">
            <article className="flex h-full flex-col border-2 border-ink bg-paper">
              <header className="flex items-start justify-between gap-4 border-b-2 border-ink p-5 md:p-6">
                <h3 className="font-display text-[1.7rem] font-semibold leading-[1.05] tracking-tight md:text-3xl">
                  {a.titel}
                </h3>
                <span className="label pt-1 text-signal">Anlass&nbsp;{n + 1}</span>
              </header>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="label text-ink-soft">Die Lage</p>
                <p className="mt-2">{a.lage}</p>

                <p className="label mt-8 text-ink-soft">Die Ansage</p>
                <p className="mt-2 font-display text-[1.45rem] font-medium italic leading-snug">
                  {a.ansage}
                </p>

                <div className="mt-auto pt-8">
                  <dl className="grid gap-3 border-t border-rule pt-5 text-[0.95rem]">
                    <div>
                      <dt className="label text-ink-soft">Danach</dt>
                      <dd className="mt-1 font-semibold">{a.danach}</dd>
                    </div>
                    <div>
                      <dt className="label text-ink-soft">Dauer</dt>
                      <dd className="mt-1">{a.dauer}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
