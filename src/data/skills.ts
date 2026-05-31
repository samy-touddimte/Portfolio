export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Langages",
    items: ["Java 21", "Python", "TypeScript / JavaScript", "SQL", "C/C++"],
  },
  {
    category: "Backend & Architecture",
    items: [
      "Spring Boot 3",
      "API REST",
      "Clean Architecture",
      "Design Patterns GoF",
      "JWT",
      "Rate Limiting avec Bucket4j",
    ],
  },
  {
    category: "Frontend",
    items: ["React 18", "Vite", "React Query", "Next", "Tailwind CSS"],
  },
  {
    category: "Bases de données",
    items: ["PostgreSQL", "MongoDB", "Hibernate / JPA", "Flyway"],
  },
  {
    category: "DevOps & Qualité",
    items: [
      "Docker multi-services",
      "GitHub Actions CI/CD",
      "Linux WSL Ubuntu",
      "JUnit 5 et Mockito",
      "Agile Scrum et Jira",
    ],
  },
  {
    category: "Data & Maths",
    items: [
      "Pandas",
      "Matplotlib",
      "Plotly",
      "Algorithmique avancée",
      "Probabilités",
      "Algèbre linéaire",
      "Modélisation mathématique",
    ],
  },
];
