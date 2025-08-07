export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  readTime: string;
  tags: string[];
  coverImage: string;
}

export const dummyPosts: Post[] = [
  {
    id: "1",
    title: "Algoritmos de ordenamiento",
    description:
      "Exploramos los algoritmos de ordenamiento más importantes y sus casos de uso en el desarrollo de software.",
    category: "ALGORITMOS",
    date: "2024-01-15",
    slug: "algoritmos-de-ordenamiento",
    readTime: "8 min",
    tags: ["algoritmos", "javascript", "programación"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Introducción a React Hooks",
    description:
      "Una guía completa sobre los React Hooks y cómo pueden mejorar tu código.",
    category: "REACT",
    date: "2024-01-10",
    slug: "introduccion-react-hooks",
    readTime: "12 min",
    tags: ["react", "hooks", "frontend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "TypeScript para principiantes",
    description:
      "Aprende los fundamentos de TypeScript y cómo puede ayudarte a escribir mejor código.",
    category: "TYPESCRIPT",
    date: "2024-01-05",
    slug: "typescript-para-principiantes",
    readTime: "15 min",
    tags: ["typescript", "javascript", "tipos"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Patrones de diseño en JavaScript",
    description:
      "Los patrones de diseño más útiles para desarrolladores JavaScript modernos.",
    category: "PATRONES",
    date: "2023-12-28",
    slug: "patrones-diseno-javascript",
    readTime: "20 min",
    tags: ["patrones", "javascript", "arquitectura"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Optimización de rendimiento web",
    description:
      "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones web.",
    category: "PERFORMANCE",
    date: "2023-12-20",
    slug: "optimizacion-rendimiento-web",
    readTime: "18 min",
    tags: ["performance", "optimización", "web"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    title: "API REST con Node.js",
    description:
      "Construye APIs REST robustas y escalables usando Node.js y Express.",
    category: "BACKEND",
    date: "2023-12-15",
    slug: "api-rest-nodejs",
    readTime: "25 min",
    tags: ["nodejs", "express", "api", "backend"],
    coverImage:
      "https://images.unsplash.com/photo-1754275049931-94958b7c0387?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default dummyPosts;
