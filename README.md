# fabian-delugas-website

Onepager für Fabian Delugas: „Entwicklung mit Konsequenzen.“
Next.js (App Router), TypeScript, Tailwind CSS 4.

```bash
npm install
npm run dev
```

Die Entwicklungsseite ist unter http://localhost:3000 erreichbar. `npm run lint`
prüft den Code und `npm run build` erstellt den Produktions-Build.

## Aufbau

Eine lange Seite, sieben Abschnitte in `components/sections/`: Einstieg, Wer ist
Fabian, Wofür und wogegen er steht, Wann man ihn ruft, So arbeitet er, Belege,
Kontakt. Farben und Schriften stehen in `app/globals.css` unter `@theme`.

## Vor dem Livegang

- `lib/site.ts`: Telefonnummer und E-Mail sind Platzhalter.
- `components/sections/WerIstFabian.tsx`: Foto fehlt (analog, kein Stockfoto).
- `components/sections/Belege.tsx`: Freigabe und Anonymisierung der Szenen klären.
- Newsletter: öffnet bisher nur eine E-Mail, noch kein Anmeldeformular.
- `app/impressum`, `app/datenschutz`: Rechtstexte fehlen.
