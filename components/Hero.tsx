import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  const h = site.hero;
  return (
    <section id="accueil" className="container-x grid gap-12 py-16 sm:py-24 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div>
        <p className="eyebrow">{site.title}</p>
        <h1 className="mt-5 font-serif text-4xl leading-[1.1] sm:text-6xl">{h.headline}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{h.intro}</p>
        <p className="mt-4 font-mono text-sm">{h.availability}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#projets" className="btn btn-primary">Voir les projets</Link>
          <Link href="/#contact" className="btn btn-ghost">Me contacter</Link>
          {h.cv && (
            <a href={h.cv} className="px-2 text-sm text-muted underline underline-offset-4 hover:text-cream" download>
              Télécharger mon CV
            </a>
          )}
        </div>
      </div>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-none md:w-full">
        {h.photo ? (
          <Image src={h.photo} alt={h.photoAlt} width={650} height={800} priority className="aspect-square w-full rounded-sm object-cover object-top md:aspect-[4/5]" />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-sm border border-dashed border-line p-6 text-center font-mono text-xs text-muted">
            Photo à ajouter : public/photo.jpg
          </div>
        )}
      </div>
    </section>
  );
}
