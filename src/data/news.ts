export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "septembre 2026",
    title: "Rentrée en BUT 2 Informatique",
    description: "Je prépare actuellement mon admission en 2ème année de BUT Informatique (parcours Réalisation d'Applications) pour la rentrée de septembre 2026, avec l'ambition de poursuivre vers un Master en Architecture Cloud & DevOps.",
  },
  {
    date: "septembre 2026",
    title: "Recherche d'une entreprise pour un contrat d'alternance",
    description: "Dans le cadre de cette formation, je recherche activement une alternance en développement web ou logiciel en région parisienne. Prêt à m'investir au sein d'une équipe technique, n'hésitez pas à me contacter pour échanger sur vos projets.",
    link: "mailto:samtouddimte@gmail.com",
  }
];
