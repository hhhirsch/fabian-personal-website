import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const stationen = [
  {
    rolle: "Einsatzleiter im Rettungsdienst",
    satz: "Ich kenne Lagen, in denen schnell entschieden werden muss.",
  },
  {
    rolle: "Geschäftsführer beim Deutschen Roten Kreuz",
    satz: "Fast 20 Jahre Sozialwirtschaft, die Leiter hoch bis ganz nach oben.",
  },
  {
    rolle: "Heute selbstständig",
    satz: "Unter der Marke IHR – Institut für Human Resources. Meine Seite sind die harten Themen.",
  },
];

export default function WerIstFabian() {
  return (
    <section id="wer-ist-fabian" className="wrap py-20 md:py-32">
      <SectionHead nr="01" titel="Wer ist Fabian" />

      <div className="mt-10 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <p className="display text-[clamp(2rem,5.2vw,4.5rem)]">
            Ich war selbst in der Verantwortung, die Sie heute tragen.
          </p>

          <ol className="mt-12 border-t border-rule">
            {stationen.map((s, n) => (
              <li key={s.rolle} className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-rule py-5">
                <span className="label pt-1.5 text-signal">{n + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug md:text-xl">{s.rolle}</h3>
                  <p className="mt-1 text-ink-soft">{s.satz}</p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="mt-10 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
            „Ich weiß, wovon ich rede, weil ich es selbst durchgemacht habe. Ich
            komme nicht mit reiner betriebswirtschaftlicher Lehre um die Ecke.“
          </blockquote>

          <p className="label mt-10 leading-relaxed text-ink-soft">
            Systemischer Coach · Zertifizierter INQA-Coach · Vorstand im Netzwerk PSNV
          </p>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9" i={2}>
          {/* PLATZHALTER: echtes, analoges Foto. Kein Stockfoto. Datei nach /public legen und hier einsetzen. */}
          <figure className="md:rotate-[1.2deg]">
            <div className="flex aspect-[4/5] items-end bg-paper-deep p-5 shadow-[0_1px_0_0_var(--color-rule),0_24px_48px_-24px_#15140f55] ring-1 ring-rule">
              <span className="label text-ink-soft">
                Foto folgt.
                <br />
                Analog. Kein Stockfoto.
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-ink-soft">Fabian Delugas</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
