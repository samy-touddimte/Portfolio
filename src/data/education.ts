export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—2026",
    institution: "UVSQ — Université Paris-Saclay à Versailles",
    degree: "Licence de Mathématiques",
    thesis: "Algèbre linéaire, Analyse réelle, Probabilités, Équations différentielles, Python, SQL, Algorithmique",
  },
  {
    year: "2021—2024",
    institution: "ESEO Paris-Vélizy, Grande École d'Ingénieurs",
    degree: "Cycle Préparatoire Informatique & Électronique",
    thesis: "C/C++, Java, Python, SQL, Algorithmique avancée, Signaux et Systèmes embarqués, Gestion de projet, Anglais C1, et un semestre Erasmus à la Universidad Atlántico Medio en Espagne",
    // thesisUrl: ""
  },
];
