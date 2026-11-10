# Portfolio — Développeur logiciel Web & Mobile

Next.js (App Router) · React · TypeScript · Tailwind CSS. Sans backend.

## Lancer
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérifie que tout compile
```

## Modifier le contenu (aucun texte n'est dans les composants)
| Fichier | Contenu |
|---|---|
| `content/site.ts` | nom, domaine, hero, à propos, contact, GitHub, LinkedIn, photo, CV |
| `content/projects.ts` | un bloc par projet : catégorie, statut, stack, fonctionnalités, liens GitHub/démo, captures |
| `content/skills.ts` | compétences |
| `content/experience.ts` | parcours |
| `content/services.ts` | services proposés et étapes « Comment je travaille » |

- **Ajouter un projet** : copiez un bloc dans `projects.ts` et changez le `slug`. La page `/projets/<slug>` est créée automatiquement.
- **Champs vides = masqués** : sans lien démo, sans capture, sans contexte, la partie n'apparaît pas.
- **Photo / CV** : placez `photo.jpg` et `cv.pdf` dans `public/`, puis renseignez `hero.photo` et `hero.cv`.
- **Captures** : placez de vraies captures dans `public/projets/` et référencez-les dans `image` / `screenshots`.
- **Couleurs et thèmes** : les valeurs des thèmes sombre (par défaut) et clair sont dans `app/globals.css` (variables CSS). Le bouton « Clair / Sombre » de la barre de navigation mémorise le choix du visiteur. Le turquoise reste réservé au statut « Terminé ».

## À vérifier avant de publier (cherchez `TODO` dans `content/`)
- Statuts de chaque projet (terminé / en cours / prévu) et liste réelle des fonctionnalités.
- Stack d'ETS Complexe (React + Tailwind mis par défaut).
- Aucune affirmation de sécurité sur BilankApp sans implémentation réelle.
- `site.url` : votre vrai nom de domaine.

## SEO
Metadata, Open Graph, `sitemap.xml` et `robots.txt` sont générés. Après déploiement, ajoutez le site dans Google Search Console et envoyez `/sitemap.xml`. Aucun classement n'est garanti.

## Statistiques de visites (non activées)
Aucun outil n'est installé. Si vous choisissez Vercel Web Analytics, vérifiez d'abord que l'offre utilisée autorise un usage commercial/freelance, puis ajoutez `@vercel/analytics` et `<Analytics />` dans `app/layout.tsx`. Les statistiques restent privées dans votre tableau de bord.

## Formulaire de contact
Le formulaire s'affiche uniquement quand `contact.formEndpoint` est renseigné dans `content/site.ts` (sinon aucun faux envoi n'est possible).
1. Créez un compte sur un service de formulaires (par exemple Formspree ou Web3Forms) et vérifiez son offre gratuite.
2. Collez l'adresse d'envoi dans `formEndpoint` (pour Web3Forms : `https://api.web3forms.com/submit`, plus la clé dans `formAccessKey`).
3. Envoyez-vous un message de test avant de publier. Le message de succès n'apparaît que si le service a accepté l'envoi.
Les messages passent par ce service tiers : mentionnez-le si vous ajoutez une page de confidentialité.

## Projets : type, rôle, sécurité
Dans `content/projects.ts` : `type` ("personnel" ou "client") classe le projet dans son groupe et adapte la page ; `role` décrit ce que vous avez réellement fait ; `security` liste uniquement les mesures réellement en place (vide = rien d'affiché). L'image de la carte est aussi l'image d'en-tête de la page projet : pour un projet mobile, préparez une image 16:10 avec 2 ou 3 écrans, et mettez les captures en portrait dans `screenshots`.
