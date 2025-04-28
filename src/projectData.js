import BookWise from "./assets/BookWise.jpg";
import MechWeb from "./assets/MechWeb.jpg";
import { title } from "framer-motion/client";
import portfolio from "./assets/portfolio.jpg";

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
  {
    id: 3,
    image: portfolio,
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website, built with React and Tailwind CSS. It showcases my skills, projects, and contact information. The site features a modern design and smooth animations.",
    Link: "https://portfolio-orcin-one-81.vercel.app/",
    technologies: ["React", "Tailwindcss", "Framer-motion"],
  },
];
