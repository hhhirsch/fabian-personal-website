import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

const newsreader = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-italic.woff2",
      style: "italic",
    },
  ],
  weight: "200 800",
  variable: "--font-newsreader",
});

const schibsted = localFont({
  src: "../node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2",
  weight: "400 900",
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: `${site.name} – ${site.claim}`,
  description:
    "Fabian Delugas kommt, wenn es ernst wird: rote Zahlen, fehlende Führung, eine Organisation, die sich bewegen muss. Er sagt, was er sieht, und bleibt, bis es umgesetzt ist.",
};

export const viewport: Viewport = {
  themeColor: "#f3efe6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${newsreader.variable} ${schibsted.variable}`}>
      <body>
        <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
          <div className="wrap flex h-14 items-center justify-between">
            <Link href="/" className="font-display text-lg font-semibold tracking-tight">
              {site.name}
            </Link>
            <a
              href={`tel:${site.telefonLink}`}
              className="group flex items-center gap-2.5 text-[0.95rem] font-semibold tabular-nums"
            >
              <span className="pulse size-2 rounded-full bg-signal" aria-hidden />
              <span className="sr-only">Anrufen: </span>
              <span className="underline-offset-4 group-hover:underline">
                {site.telefonAnzeige}
              </span>
            </a>
          </div>
        </header>
        {children}
        <footer className="bg-ink text-paper/60">
          <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-paper/15 py-6 text-sm">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <nav className="flex gap-6">
              <Link href="/impressum" className="hover:text-paper">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-paper">
                Datenschutz
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
