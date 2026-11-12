import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Titel – Platzhalter",
  description: "Beschreibung – Platzhalter",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body className={geist.className}>
        <header className="flex justify-between">
          <span>Fabian Delugas</span>
          <a href="tel:+490000000000">Telefonnummer – Platzhalter</a>
        </header>
        {children}
        <footer>
          <a href="/impressum">Impressum</a>{" "}
          <a href="/datenschutz">Datenschutz</a>
        </footer>
      </body>
    </html>
  );
}
