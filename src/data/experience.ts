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
    title: "Emplois en parallèle de mes études dans le service client & la vente",
    company: "H&M, IKEA, Auchan",
    description: "<u>Communication & Analyse des besoins</u> : Écoute active et vulgarisation d'informations auprès des clients (notamment sur les dossiers de financement client chez IKEA).<br /><u>Réactivité & Gestion du stress</u> : Prise de décision rapide, résolution de problèmes et maintien de la rigueur opérationnelle dans des environnements à très fort trafic.<br /><u>Esprit d'équipe</u> : Coordination quotidienne avec les collaborateurs pour assurer la fluidité du service.",
  },
  {
    date: "2023 (1 mois)",
    title: "Stagiaire en intégration d'outils et support technique",
    company: "MULTIHEALTH",
    description: "Déploiement et paramétrage du logiciel de planification Beesbusy pour optimiser l'organisation interne, et contrôles de conformité de factures.",
  },
  {
    date: "2021 (1 mois)",
    title: "Stagiaire au sein du département Recherche & Développement",
    company: "CAMECA",
    description: "Immersion dans une entreprise fabricant des instruments scientifiques de haute précision, avec de la lecture et du contrôle de conformité de plans d'armoires électriques.",
  },
];
