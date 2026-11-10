// Tout le texte du site est ici. Modifiez, enregistrez, c'est tout.
export const site = {
  name: "Derick Fokou",
  title: "Développeur logiciel — Web & Mobile",
  url: "https://derick-fokou.vercel.app",
  description:
    "Développeur logiciel web et mobile basé au Cameroun. Applications Flutter, sites Next.js et API Laravel. Disponible en freelance et pour des stages.",
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Projets", href: "#projets" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#a-propos" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Je transforme vos idées en applications web et mobiles.",
    intro: "Je conçois et développe des solutions numériques adaptées à vos besoins : sites web, applications mobiles et systèmes de gestion. Flutter · React · Next.js · Laravel. Basé au Cameroun, je travaille en solo et à distance.",
    availability: "Disponible pour des missions freelance et des opportunités d'emploi.",
    photo: "/photo1.1.jpg",
    photoAlt: "Portrait Derick",
    cv: "", // ex. "/cv.pdf" (fichier à placer dans public/)
  },
  about: {
    title: "Un développeur qui livre de bout en bout",
    paragraphs: [
      "Étudiant en licence CDRI (Concepteur Développeur Réseau et Internet) à l'IUT de Bandjoun, je développe des applications web et mobiles en parallèle de mes études, pour des entreprises au Cameroun et en Côte d'Ivoire.",
      "Je travaille seul en freelance : je prends un projet en charge de la conception à la mise en ligne.",
    ],
  },
  contact: {
    title: "Parlons de votre projet",
    intro: "Un projet, une collaboration ou une opportunité professionnelle : écrivez-moi, je réponds directement.",
    email: "fokouderick796@gmail.com",
    whatsapp: "+237651983756",
    whatsappLabel: "+237 651 983 756",
    github: "https://github.com/derickfokou", // ex. "https://github.com/votre-pseudo"
    linkedin: "https://www.linkedin.com/in/derickfokou", // ex. "https://www.linkedin.com/in/votre-profil"
    // Formulaire : collez ici l'adresse d'envoi fournie par votre service de formulaires.
    // Tant que formEndpoint est vide, le formulaire n'est pas affiché (aucun faux envoi).
    formEndpoint: "", // renseignez une URL réelle après avoir configuré votre service de formulaires
    formAccessKey: "", // uniquement pour Web3Forms (clé d'accès), sinon laissez vide
  },
};
