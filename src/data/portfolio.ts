export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "MacroTrack",
    description:
      "Projet full-stack développé en autonomie complète, qui permet d'atteindre ses objectifs de perte ou de prise de poids, pilotée par un algorithme qui dicte exactement les calories et les macros à consommer au quotidien.",
    technologies: ["Java 21", "Spring Boot 3", "React 18", "PostgreSQL", "Docker", "JWT", "GitHub Actions", "Flyway", "JUnit 5"],
    projectUrl: "https://project-macrotrack.vercel.app",
    codeUrl: "https://github.com/samy-touddimte/MacroTrack",
    imageUrl: "/macrotrack.png",
  },
];
