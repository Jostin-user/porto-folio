"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/#accueil" className="font-serif text-xl">
          {site.name}<span className="text-brand">.</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-4 md:flex lg:gap-6">
          {site.nav.map((n) => (
            <Link key={n.href} href={`/${n.href}`} className="text-sm text-muted transition hover:text-cream">{n.label}</Link>
          ))}
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-primary !py-2">Me contacter</Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button" className="btn btn-ghost !py-2"
            aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-line bg-ink md:hidden">
          <ul className="container-x flex flex-col py-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={`/${n.href}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg">{n.label}</Link>
              </li>
            ))}
            <li className="py-4">
              <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">Me contacter</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
