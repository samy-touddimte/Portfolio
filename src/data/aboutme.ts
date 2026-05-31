export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string;
  secretDescription?: string;
  altName?: string;
  institutionUrl?: string;
  phone?: string;
}

export const aboutMe: AboutMe = {
  name: "Samy Touddimte",
  title: "Passionné par le développement web et logiciel, j'allie la rigueur mathématique à de solides bases techniques.",
  institution: "UFR des sciences, UVSQ",
  description: "",
  email: "samtouddimte@gmail.com",
  phone: "+33 698444997",
  imageUrl: "",
  githubUsername: "samy-touddimte",
  linkedinUsername: "samytouddimte",
  cvUrl: "https://drive.google.com/file/d/1a0Hnu935-7RrKNDZE37o2-GlI9p3GdEB/preview",
  funDescription: "",
  secretDescription: "Merci de votre visite. Si mon profil retient votre attention, n'hésitez pas à me contacter.",
  altName: "ÉTUDIANT AU PROFIL SCIENTIFIQUE ET INFORMATIQUE",
};
