import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import StatusBadge from "./StatusBadge";
import ProjectCover from "./ProjectCover";

const groups: { type: Project["type"]; title: string; intro: string }[] = [
  { type: "personnel", title: "Projets personnels", intro: "Des projets que j'ai initiés." },
  { type: "client", title: "Projets clients", intro: "Réalisés pour des entreprises." },
];

function Card({ p }: { p: Project }) {
  return (
    <Link href={`/projets/${p.slug}`} className="group block h-full border border-line bg-surface transition hover:border-muted">
      <div className="border-b border-line"><ProjectCover project={p} /></div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted">{p.category === "web" ? "Web" : "Mobile"}</span>
          <StatusBadge status={p.status} />
        </div>
        <h4 className="mt-4 font-serif text-2xl">{p.title}</h4>
        <p className="mt-2 text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {p.stack.map((s) => (
            <li key={s} className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-muted">{s}</li>
          ))}
        </ul>
        <div className="mt-6 flex justify-end">
          <span className="inline-flex items-center gap-2 border-b border-transparent text-sm font-medium text-cream transition group-hover:border-accent">
            Voir le projet <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container-x">
        <p className="eyebrow">Projets</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Ce que j'ai construit</h2>
        {groups.map((g) => {
          const list = projects.filter((p) => p.type === g.type);
          if (!list.length) return null;
          return (
            <div key={g.type} className="mt-14">
              <h3 className="font-serif text-2xl">{g.title}</h3>
              <p className="mt-1 text-muted">{g.intro}</p>
              <ul className="mt-6 grid gap-6 md:grid-cols-2">
                {list.map((p) => <li key={p.slug}><Card p={p} /></li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
