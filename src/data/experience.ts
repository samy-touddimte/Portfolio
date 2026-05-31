export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023 - 2026",
    title: "Emplois étudiants — Service Client & Relation Commerciale",
    company: "H&M, IKEA, Auchan",
    description: "Conseiller de vente chez H&M à Issy-les-Moulineaux, conseiller financement client chez IKEA à Vélizy, et équipier polyvalent chez Auchan à Vélizy. Ces postes m'ont permis de développer la rigueur, la gestion du stress et la relation client dans des environnements à fort volume.",
  },
  {
    date: "2023 (1 mois)",
    title: "Stagiaire en intégration d'outils et support technique",
    company: "MULTIHEALTH, Vélizy-Villacoublay",
    description: "Déploiement et paramétrage du logiciel de planification Beesbusy pour optimiser l'organisation interne, et contrôles de conformité de factures.",
  },
  {
    date: "2021 (1 mois)",
    title: "Stagiaire au sein du département Recherche & Développement",
    company: "CAMECA, Gennevilliers",
    description: "Immersion dans une entreprise fabricant des instruments scientifiques de haute précision, avec de la lecture et du contrôle de conformité de plans d'armoires électriques.",
  },
];
