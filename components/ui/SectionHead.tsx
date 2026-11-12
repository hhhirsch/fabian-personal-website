type Props = { nr: string; titel: string; dark?: boolean };

/** Kopfzeile eines Abschnitts: Nummer, Linie, Titel. */
export default function SectionHead({ nr, titel, dark = false }: Props) {
  return (
    <div
      className={`label flex items-center gap-4 border-t pt-4 ${
        dark ? "border-paper/25 text-paper/70" : "border-ink text-ink-soft"
      }`}
    >
      <span className="text-signal">{nr}</span>
      <h2>{titel}</h2>
    </div>
  );
}
