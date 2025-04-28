import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
import BookWise from "./assets/BookWise.jpg";
import MechWeb from "./assets/MechWeb.jpg";
export const projectData = [
  {
    id: 1,
    image: MechWeb,
    title: "Website for showcasing welding research at LNMIIT",
    description:
      "A website designed to showcase the welding research at LNMIIT. The site features a clean and modern design, with sections for research papers, projects, and contact information. Built with React and Tailwind CSS.",
    link: "https://mech-website-iota.vercel.app/",
    technologies: ["React", "Tailwindcss", "Framer-motion"],
  },
  {
    id: 2,
    image: BookWise,
    title: "Book Management System",
    description:
      "A full-scale, production-grade library system with rate-limiting, DDoS protection, caching (Redis), multi-media uploads, complex database queries, advanced error handling, and custom notifications. Built with Next.js, PostgreSQL, Redis, and NextAuth.",
    link: "https://book-wise-eta.vercel.app/",
    technologies: ["NextJs", "TypeScript", "PostgreSQL", "Redis", "Drizzle"],
  },
];
