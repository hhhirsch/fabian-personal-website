import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { newsletterLink, site } from "@/lib/site";

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-ink text-paper">
      <div className="wrap py-20 md:py-32">
        <SectionHead nr="06" titel="Kontakt" dark />

        <Reveal>
          <p className="display mt-10 text-[clamp(2.75rem,10vw,9rem)] md:mt-16">
            Rufen Sie an<span className="text-signal">.</span>
          </p>
          <a
            href={`tel:${site.telefonLink}`}
            className="display mt-4 inline-block text-[clamp(2.25rem,9vw,8rem)] tabular-nums text-signal underline decoration-transparent decoration-[3px] underline-offset-[0.12em] transition-colors hover:decoration-signal"
          >
            {site.telefonAnzeige}
          </a>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-paper/25 pt-8 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="label text-paper/55">Oder schreiben Sie</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block break-all font-display text-2xl font-medium underline decoration-paper/30 underline-offset-4 hover:decoration-signal md:text-3xl"
            >
              {site.email}
            </a>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8" i={1}>
            <p className="label text-paper/55">Nicht dringend?</p>
            <p className="mt-3 text-paper/70">
              Dann lesen Sie erst mit. Mein Newsletter: Zahlen, Führung,
              Ausnahmesituationen. Kurz und ohne Weichspüler.
            </p>
            <a
              href={newsletterLink}
              className="mt-4 inline-block font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
            >
              Newsletter bestellen →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
