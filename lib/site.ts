// Zentrale Angaben. Alles mit PLATZHALTER muss vor dem Livegang ersetzt werden.
export const site = {
  name: "Fabian Delugas",
  claim: "Entwicklung mit Konsequenzen.",
  unterzeile: "Zahlen. Entscheidung. Umsetzung.",
  // PLATZHALTER: echte Nummer eintragen (Anzeige und tel:-Link).
  telefonAnzeige: "0761 000 00 00",
  telefonLink: "+497610000000",
  // PLATZHALTER: echte Adresse eintragen.
  email: "fabian@example.org",
};

export const newsletterLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Newsletter: Bitte aufnehmen",
)}`;
