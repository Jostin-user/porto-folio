import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Valeurs définies dans app/globals.css (thème sombre par défaut, thème clair en option)
        ink: "rgb(var(--ink) / <alpha-value>)", // fond
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)", // texte principal
        muted: "rgb(var(--muted) / <alpha-value>)", // texte secondaire
        accent: "rgb(var(--accent) / <alpha-value>)", // marque : fonds, boutons
        brand: "rgb(var(--brand) / <alpha-value>)", // marque en texte / bordure
        onaccent: "rgb(var(--onaccent) / <alpha-value>)", // texte sur fond orange
        done: "rgb(var(--done) / <alpha-value>)", // réservé au statut « Terminé »
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
