import Image from "next/image";
import type { Project } from "@/content/projects";

// Même image sur la carte et en tête de la page projet (continuité visuelle).
// Les écrans de téléphone ne sont pas recadrés (object-contain).
export default function ProjectCover({ project: p, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
      {p.image ? (
        <Image
          src={p.image} alt={p.imageAlt ?? `Aperçu du projet ${p.title}`} fill priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={p.category === "mobile" ? "object-contain" : "object-cover"}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="font-serif text-3xl text-muted">{p.title}</span>
          <span className="font-mono text-xs text-muted">Capture à ajouter</span>
        </div>
      )}
    </div>
  );
}
