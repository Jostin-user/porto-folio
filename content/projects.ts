// Présentation des projets du portfolio, renseignée à partir des projets sources fournis.
export type Category = "web" | "mobile";
export type Status = "termine" | "en-cours" | "prevu";

export type Project = {
  slug: string;
  type: "personnel" | "client";
  role?: string;
  security?: string[];
  title: string;
  category: Category;
  status: Status;
  summary: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  context?: string;
  problem?: string;
  solution?: string;
  features: { label: string; status: Status }[];
  technical?: string[];
  screenshots?: { src: string; alt: string }[];
  links?: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "monitrack",
    type: "personnel",
    role: "Conception et développement de l’application mobile",
    title: "MoniTrack",
    category: "mobile",
    status: "termine",
    summary:
      "Application mobile de gestion commerciale destinée aux petits commerçants : ventes, achats, produits, stock, dépenses et dettes, avec prise en charge du travail hors ligne.",
    stack: ["Flutter", "Dart", "SQLite / stockage local", "API REST", "Laravel", "MySQL"],
    image: "/projets/monotrack-dashboard.jpg",
    imageAlt: "Tableau de bord de l’application MoniTrack",
    context:
      "MoniTrack vise les petits commerces qui suivent encore leurs opérations dans un cahier ou à l’aide d’une calculatrice. L’application rassemble les informations de gestion courante dans un outil mobile adapté à leur activité.",
    problem:
      "Le suivi manuel des ventes, des achats, du stock, des dépenses et des dettes rend les opérations difficiles à contrôler et peut entraîner des erreurs ou des pertes d’informations.",
    solution:
      "Une application Flutter qui conserve les données localement sur le téléphone et dispose de mécanismes de communication avec un serveur pour synchroniser les données lorsque la connexion est disponible.",
    features: [
      { label: "Enregistrement des ventes et consultation de l’historique", status: "termine" },
      { label: "Gestion des achats et des fournisseurs", status: "termine" },
      { label: "Gestion des produits et du stock", status: "termine" },
      { label: "Suivi des dettes clients et fournisseurs", status: "termine" },
      { label: "Enregistrement et suivi des dépenses", status: "termine" },
      { label: "Tableau de bord et statistiques commerciales", status: "termine" },
      { label: "Factures et aperçu des ventes", status: "termine" },
      { label: "Notifications et alertes", status: "termine" },
      { label: "Gestion des utilisateurs", status: "termine" },
      { label: "Stockage local et synchronisation avec le serveur", status: "termine" },
    ],
    technical: [
      "Interface mobile développée avec Flutter et Dart.",
      "Organisation du code en couches de présentation, domaine et données.",
      "Persistance locale pour soutenir l’utilisation hors ligne.",
      "Services clients pour l’authentification, les données distantes et la synchronisation.",
    ],
    screenshots: [
      { src: "/projets/monotrack-dashboard.jpg", alt: "Tableau de bord de MoniTrack" },
      { src: "/projets/monitrack-vente.jpg", alt: "Écran de vente de MoniTrack" },
      { src: "/projets/monitrack-stock.jpg", alt: "Gestion des produits et du stock" },
      { src: "/projets/monitrack-dettes.jpg", alt: "Suivi des dettes" },
      { src: "/projets/monitrack-stats.jpg", alt: "Statistiques commerciales" },
    ],
    links: {},
  },
  {
    slug: "bilankapp",
    type: "personnel",
    role: "Conception et développement de l’application mobile",
    title: "BilankApp",
    category: "mobile",
    status: "termine",
    summary:
      "Application mobile de suivi financier qui aide à organiser plusieurs activités et à suivre les revenus, les dépenses et les bénéfices de chacune.",
    stack: ["Flutter", "Dart", "Riverpod", "SQLite", "Stockage local"],
    image: "/projets/bilankapp-accueil.jpg",
    imageAlt: "Tableau de bord de l’application BilankApp",
    context:
      "BilankApp s’adresse aux personnes qui gèrent plusieurs activités et souhaitent distinguer leurs opérations pour mieux comprendre leurs résultats financiers.",
    problem:
      "Lorsque les revenus et les dépenses de différentes activités sont mélangés, il devient difficile d’évaluer les résultats de chaque activité.",
    solution:
      "Une application mobile qui organise les transactions par activité et présente une synthèse des principaux indicateurs financiers dans un tableau de bord.",
    features: [
      { label: "Création et organisation de plusieurs activités", status: "termine" },
      { label: "Enregistrement des revenus et des dépenses", status: "termine" },
      { label: "Consultation des transactions par activité", status: "termine" },
      { label: "Calcul et suivi des bénéfices", status: "termine" },
      { label: "Tableau de bord et analyses financières", status: "termine" },
      { label: "Catégories de transactions", status: "termine" },
      { label: "Notes et rappels liés aux activités", status: "termine" },
      { label: "Stockage local", status: "termine" },
    ],
    technical: [
      "Application mobile réalisée avec Flutter et Dart.",
      "Gestion de l’état avec Riverpod.",
      "Séparation des responsabilités entre présentation, logique métier et accès aux données.",
      "Stockage local des données de l’application.",
    ],
    screenshots: [
      { src: "/projets/bilankapp-accueil.jpg", alt: "Vue d’ensemble financière de BilankApp" },
      { src: "/projets/bilankapp-activities.jpg", alt: "Liste des activités" },
      { src: "/projets/bilankapp-transaction.jpg", alt: "Écran des transactions" },
      { src: "/projets/bilankapp-parametre.jpg", alt: "Paramètres de l’application" },
    ],
    links: {},
  },
  {
    slug: "ib-technology",
    type: "client",
    role: "Développement de la boutique en ligne et de son espace d’administration",
    title: "IB Technology",
    category: "web",
    status: "termine",
    image: "/projets/technology-1.jpg",
    imageAlt: "Page d’accueil du site IB Technology",
    summary:
      "Boutique e-commerce développée pour une entreprise technologique en Côte d’Ivoire, avec catalogue de produits, panier, gestion des commandes et interface d’administration.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    context:
      "Le site permet aux visiteurs de parcourir le catalogue de produits et de passer des commandes, tandis que l’administration dispose d’outils pour gérer les opérations commerciales.",
    problem:
      "L’entreprise avait besoin de présenter ses produits en ligne et de disposer d’un espace centralisé pour administrer le catalogue, les clients, les commandes et le stock.",
    solution:
      "Une application web structurée en PHP avec une base de données MySQL, une interface destinée aux clients et un espace d’administration.",
    features: [
      { label: "Catalogue de produits et navigation par catégories", status: "termine" },
      { label: "Recherche et pages de détail des produits", status: "termine" },
      { label: "Panier d’achat", status: "termine" },
      { label: "Gestion et suivi des commandes", status: "termine" },
      { label: "Comptes et profils clients", status: "termine" },
      { label: "Administration des produits, catégories et clients", status: "termine" },
      { label: "Gestion des stocks et alertes de stock", status: "termine" },
      { label: "Suivi des ventes et tableau de bord d’administration", status: "termine" },
      { label: "Notifications et avis sur les produits", status: "termine" },
      { label: "Gestion des livraisons", status: "termine" },
    ],
    technical: [
      "Traitement des requêtes et logique applicative côté serveur en PHP.",
      "MySQL pour les données des produits, catégories, clients, commandes et stocks.",
      "Interface web structurée en HTML et CSS avec des interactions JavaScript.",
    ],
    links: { demo: "https://ibtechnology.wuaze.com/" },
  },
  {
    slug: "ets-complexe-metal-industriel",
    type: "client",
    role: "Conception et développement du site vitrine",
    title: "ETS Complexe Metal & Industriel de Bafoussam",
    category: "web",
    status: "termine",
    image: "/projets/ets_complexe_metal.jpg",
    imageAlt: "Page d’accueil du site Ets Complexe metal",
    summary:
      "Site vitrine pour une entreprise de fabrication mecanique et installation industrielle à Bafoussam.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    context:
      "Le site vise à présenter clairement les prestations de l’entreprise, renforcer sa présence en ligne et faciliter la prise de contact ainsi que les demandes de devis.",
    problem:
      "Une entreprise proposant plusieurs services techniques a besoin d’une présentation structurée qui aide les visiteurs à comprendre son offre et à demander des renseignements.",
    solution:
      "Un site vitrine responsive avec des pages de services, une présentation des réalisations et formations, une FAQ et des moyens de contact.",
    features: [
      { label: "Présentation de l’entreprise et de ses services", status: "termine" },
      { label: "Pages détaillées pour les services techniques", status: "termine" },
      { label: "Présentation des réalisations et de la formation", status: "termine" },
      { label: "Formulaire de demande de devis préparant un message WhatsApp", status: "termine" },
      { label: "Navigation adaptée aux écrans mobiles", status: "termine" },
      { label: "FAQ et contenus d’accompagnement", status: "termine" },
      { label: "Navigation entre les pages avec React Router", status: "termine" },
    ],
    technical: [
      "Interface développée avec React et JavaScript.",
      "Vite pour le serveur de développement et la génération de production.",
      "Tailwind CSS pour la mise en forme.",
      "React Router pour la navigation entre les pages.",
      "Le formulaire de devis prépare un message WhatsApp et ne nécessite pas de backend de formulaire.",
    ],
    links: { demo: "https://ets-complexe-metal-industriel-nsbp.vercel.app/" },
  },
  {
    slug: "savory-house",
    type: "personnel",
    role: "Conception et développement du site web",
    title: "Savory House",
    category: "web",
    status: "termine",
    summary:
      "Site vitrine multipage en anglais pour un café-boulangerie, avec présentation de l’établissement, menu, informations pratiques et page de contact.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projets/coffeescreen.jpg",
    imageAlt: "Page d’accueil du site Savory House",
    context:
      "Ce projet présente l’univers d’un café-boulangerie et permet aux visiteurs de consulter le menu, de découvrir l’établissement et de trouver ses informations pratiques.",
    problem:
      "Un établissement de restauration a besoin d’un site simple qui met en valeur son offre et donne rapidement accès aux informations utiles.",
    solution:
      "Un site composé de pages dédiées à l’accueil, à la présentation du café, au menu et au contact, avec une navigation adaptée aux petits écrans.",
    features: [
      { label: "Page d’accueil et présentation du café", status: "termine" },
      { label: "Page About / À propos", status: "termine" },
      { label: "Menu des boissons et produits", status: "termine" },
      { label: "Page Contact avec informations pratiques", status: "termine" },
      { label: "Menu de navigation mobile interactif", status: "termine" },
    ],
    technical: [
      "Pages structurées en HTML.",
      "Feuille de styles CSS dédiée à la mise en page.",
      "JavaScript pour les interactions côté navigateur.",
    ],
    links: { demo: "https://savoryhouse.vercel.app/" },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
