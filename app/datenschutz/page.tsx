import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz – Fabian Delugas" };

// PLATZHALTER: Rechtstext vor dem Livegang einsetzen.
export default function Datenschutz() {
  return (
    <main className="wrap min-h-[70svh] py-24">
      <h1 className="display text-5xl md:text-7xl">Datenschutz</h1>
      <p className="mt-8 max-w-xl text-ink-soft">Der Text folgt vor dem Livegang.</p>
    </main>
  );
}
