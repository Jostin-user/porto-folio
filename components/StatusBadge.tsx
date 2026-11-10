import type { Status } from "@/content/projects";

// Signature visuelle du site : le statut réel de chaque projet.
const styles: Record<Status, { label: string; cls: string }> = {
  termine: { label: "Terminé", cls: "border-done text-done" },
  "en-cours": { label: "En cours", cls: "border-brand text-brand" },
  prevu: { label: "Prévu", cls: "border-dashed border-muted text-muted" },
};

export default function StatusBadge({ status }: { status: Status }) {
  const s = styles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-xs ${s.cls}`}>
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {s.label}
    </span>
  );
}
