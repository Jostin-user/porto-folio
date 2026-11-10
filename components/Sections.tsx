import Link from "next/link";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { experience } from "@/content/experience";
import { services, process } from "@/content/services";
import ContactForm from "./ContactForm";

function Head({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Head eyebrow="Services" title="Ce que je peux construire pour vous" />
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.title} className="grid gap-3 py-8 md:grid-cols-[1fr_1.6fr_1fr] md:gap-8">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="text-lg text-muted">{s.description}</p>
              <p className="font-mono text-sm text-muted md:text-right">{s.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="processus" className="section">
      <div className="container-x">
        <Head eyebrow="Processus" title="Comment je travaille" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.title} className="border-t border-line pt-4">
              <span className="font-mono text-sm text-brand">{i + 1}</span>
              <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-muted">{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="a-propos" className="section">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Head eyebrow="À propos" title={site.about.title} />
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
          {site.about.paragraphs.map((t) => <p key={t}>{t}</p>)}
          <Link href="/#projets" className="inline-block text-cream underline decoration-accent underline-offset-4">Voir mes projets</Link>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="competences" className="section">
      <div className="container-x">
        <Head eyebrow="Compétences" title="Ce que je sais utiliser" />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {skills.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-sm text-muted">{g.title}</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {g.items.map((i) => <li key={i} className="py-3">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Head eyebrow="Parcours" title="Expérience et réalisations" />
        <ol className="space-y-8 border-l border-line pl-6">
          {experience.map((e) => (
            <li key={e.title}>
              <h3 className="font-serif text-xl">{e.title}</h3>
              {e.period && <p className="font-mono text-xs text-muted">{e.period}</p>}
              {e.detail && <p className="mt-1 text-muted">{e.detail}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const c = site.contact;
  const links = [
    c.github && { label: "GitHub", href: c.github },
    c.linkedin && { label: "LinkedIn", href: c.linkedin },
    site.hero.cv && { label: "CV (PDF)", href: site.hero.cv },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Head eyebrow="Contact" title={c.title} />
        <p className="mt-6 max-w-xl text-lg text-muted">{c.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {c.email && <a href={`mailto:${c.email}`} className="btn btn-primary break-all">{c.email}</a>}
          {c.whatsapp && (
            <a href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              WhatsApp {c.whatsappLabel}
            </a>
          )}
        </div>
        {c.formEndpoint && <ContactForm />}
        {links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-cream">{l.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  const c = site.contact;
  const contacts = [
    c.email && { label: c.email, href: `mailto:${c.email}` },
    c.whatsapp && { label: `WhatsApp ${c.whatsappLabel}`, href: `https://wa.me/${c.whatsapp.replace(/\D/g, "")}` },
    c.github && { label: "GitHub", href: c.github },
    c.linkedin && { label: "LinkedIn", href: c.linkedin },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="border-t border-line py-12 pb-24 sm:pb-12">
      <div className="container-x grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{site.name}<span className="text-brand">.</span></p>
          <p className="mt-2 text-sm text-muted">{site.title}</p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}><Link href={`/${n.href}`} className="text-muted hover:text-cream">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 text-sm">
          {contacts.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="break-all text-muted hover:text-cream">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-x mt-10 border-t border-line pt-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
