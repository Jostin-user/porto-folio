import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, type Status } from "@/content/projects";
import StatusBadge from "@/components/StatusBadge";
import ProjectCover from "@/components/ProjectCover";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.title, description: p.summary,
    alternates: { canonical: `/projets/${p.slug}` },
    openGraph: { title: p.title, description: p.summary, type: "article" },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[1fr_2fr]">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="max-w-prose text-lg leading-relaxed text-muted">{children}</div>
    </section>
  );
}

const groups: { id: Status; title: string }[] = [
  { id: "termine", title: "Terminées" },
  { id: "en-cours", title: "En cours" },
  { id: "prevu", title: "Prévues" },
];

export default function ProjectPage({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const client = p.type === "client";
  const next = projects[(projects.findIndex((x) => x.slug === p.slug) + 1) % projects.length];
  const list = (items: string[]) => <ul className="list-disc space-y-2 pl-5">{items.map((t) => <li key={t}>{t}</li>)}</ul>;

  const problem = p.problem ? <Block title={client ? "Besoin du client" : "Objectif"}><p>{p.problem}</p></Block> : null;
  const solution = p.solution ? <Block title="Solution"><p>{p.solution}</p></Block> : null;
  const tech = p.technical?.length ? <Block title={client ? "Aspects techniques" : "Architecture et choix techniques"}>{list(p.technical)}</Block> : null;
  const security = p.security?.length ? <Block title="Sécurité">{list(p.security)}</Block> : null;
  const features = p.features.length > 0 ? (
    <Block title="Fonctionnalités">
      <div className="space-y-6">
        {groups.map((g) => {
          const items = p.features.filter((f) => f.status === g.id);
          if (!items.length) return null;
          return (
            <div key={g.id}>
              <StatusBadge status={g.id} />
              <ul className="mt-3 list-disc space-y-1 pl-5">{items.map((f) => <li key={f.label}>{f.label}</li>)}</ul>
            </div>
          );
        })}
      </div>
    </Block>
  ) : null;

  return (
    <article className="container-x py-12 sm:py-20">
      <Link href="/#projets" className="text-sm text-muted underline underline-offset-4 hover:text-cream">Tous les projets</Link>

      <div className="mt-8 border border-line"><ProjectCover project={p} priority /></div>

      <header className="mt-10 pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted">{client ? "Projet client" : "Projet personnel"}</span>
          <span className="font-mono text-xs text-muted">{p.category === "web" ? "Web" : "Mobile"}</span>
          <StatusBadge status={p.status} />
        </div>
        <h1 className="mt-5 font-serif text-4xl sm:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{p.summary}</p>
        {p.role && <p className="mt-4 max-w-2xl"><span className="font-mono text-sm text-muted">Mon rôle : </span>{p.role}</p>}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {p.stack.map((s) => <li key={s} className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-muted">{s}</li>)}
        </ul>
        {(p.links?.github || p.links?.demo) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {p.links.demo && <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir la démo</a>}
            {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Code sur GitHub</a>}
          </div>
        )}
      </header>

      {p.context && <Block title="Contexte"><p>{p.context}</p></Block>}
      {client ? <>{problem}{solution}{features}{security}{tech}</> : <>{problem}{solution}{tech}{features}{security}</>}

      {p.screenshots && p.screenshots.length > 0 && (
        <section className="border-t border-line py-10">
          <h2 className="font-serif text-2xl">Interface</h2>
          {p.category === "mobile" ? (
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
              {p.screenshots.map((s) => (
                <Image key={s.src} src={s.src} alt={s.alt} width={360} height={780} className="h-auto w-52 shrink-0 border border-line" />
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {p.screenshots.map((s) => (
                <Image key={s.src} src={s.src} alt={s.alt} width={900} height={600} className="h-auto w-full border border-line" />
              ))}
            </div>
          )}
        </section>
      )}

      {next.slug !== p.slug && (
        <nav aria-label="Projet suivant" className="border-t border-line pt-10">
          <p className="eyebrow">Projet suivant</p>
          <Link href={`/projets/${next.slug}`} className="mt-2 inline-block font-serif text-3xl underline decoration-accent underline-offset-8">{next.title}</Link>
        </nav>
      )}
    </article>
  );
}
