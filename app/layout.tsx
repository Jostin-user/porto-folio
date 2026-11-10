import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import WhatsAppButton from "@/components/WhatsAppButton";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.title}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website", locale: "fr_FR", siteName: site.name,
    title: `${site.name} — ${site.title}`, description: site.description,
  },
};
export const viewport: Viewport = { themeColor: "#0B1220" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        {/* Applique le thème enregistré avant l'affichage (sombre par défaut) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}',
          }}
        />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
