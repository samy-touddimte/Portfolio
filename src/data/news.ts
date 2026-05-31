export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "2026",
    title: "Intégration en BUT 3 Informatique",
    description: "Je prépare actuellement mon admission en 3ème année de BUT Informatique (parcours Réalisation d'Applications) pour la rentrée de septembre 2026.",
  },
  {
    date: "2026",
    title: "Recherche d'une entreprise pour un contrat d'alternance",
    description: "Dans le cadre de cette formation, je recherche activement une alternance en développement web ou logiciel en région parisienne. Prêt à m'investir au sein d'une équipe technique, n'hésitez pas à me contacter pour échanger sur vos projets.",
    link: "mailto:samtouddimte@gmail.com",
  }
];
