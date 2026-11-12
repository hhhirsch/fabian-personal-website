import type { CSSProperties } from "react";
import { site } from "@/lib/site";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Hero() {
  return (
    <section id="hero" className="wrap flex min-h-[calc(100svh-3.5rem)] flex-col justify-between pt-10 pb-8 md:pt-16 md:pb-12">
      <p className="label rise text-ink-soft" style={i(0)}>
        Sozial- und Gesundheitswirtschaft · bundesweit
      </p>

      <div className="py-12">
        <h1 className="display text-[13vw] md:text-[clamp(4rem,9.3vw,10rem)]">
          <span className="rise block" style={i(1)}>
            Entwicklung
          </span>
          <span className="rise block" style={i(2)}>
            mit Konsequenzen<span className="text-signal">.</span>
          </span>
        </h1>
        <div className="draw mt-8 h-[3px] bg-ink md:mt-12" />
        <p
          className="rise mt-5 font-display text-[clamp(1.35rem,3.4vw,2.6rem)] font-medium italic tracking-tight"
          style={i(5)}
        >
          {site.unterzeile}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <p className="rise max-w-xl text-lg leading-snug md:col-span-6 md:text-xl" style={i(6)}>
          Ich komme, wenn es ernst wird: in der Krise, wenn die Führung fehlt,
          wenn sich eine Organisation bewegen muss.
        </p>
        <div className="rise md:col-span-6 md:justify-self-end" style={i(7)}>
          <a
            href={`tel:${site.telefonLink}`}
            className="group flex w-full items-stretch border-2 border-ink text-left transition-colors hover:border-signal md:w-auto"
          >
            <span className="flex items-center bg-ink px-5 py-4 text-base font-semibold text-paper transition-colors group-hover:bg-signal">
              Rufen Sie an
            </span>
            <span className="flex flex-1 items-center px-5 py-4 font-display text-2xl font-semibold tabular-nums tracking-tight md:text-3xl">
              {site.telefonAnzeige}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
