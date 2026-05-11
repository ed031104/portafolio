export interface Diagram {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  diagrams: Diagram[];
  visibility: 'public' | 'private';
  liveUrl: string;
  repoUrl: string;
  features: string[];
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "findash-pro",
    title: "FinDash Pro",
    shortDescription: "Plataforma de análisis financiero en tiempo real con dashboards interactivos.",
    fullDescription: "FinDash Pro es una plataforma integral de análisis financiero diseñada para empresas que necesitan visualizar sus datos en tiempo real. Construida con una arquitectura de microservicios, permite la conexión con múltiples fuentes de datos financieros y ofrece dashboards personalizables con más de 20 tipos de gráficos interactivos. El sistema soporta alertas inteligentes basadas en umbrales configurables y exportación de reportes en múltiples formatos.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "Node.js", "WebSocket"],
    image: "https://storage.googleapis.com/banani-generated-images/generated-images/ececff34-bb2f-4011-b7bc-f12286ee05c1.jpg",
    gallery: [
      "https://storage.googleapis.com/banani-generated-images/generated-images/ececff34-bb2f-4011-b7bc-f12286ee05c1.jpg",
      "https://storage.googleapis.com/banani-generated-images/generated-images/ee50de1f-46fb-43e9-b42e-cc1dd841162d.jpg",
    ],
    diagrams: [
      {
        title: "Diagrama de Contexto (C4 - Nivel 1)",
        description: "Vista general del sistema y sus actores principales.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contexto+FinDash+Pro&font=inter",
      },
      {
        title: "Diagrama de Contenedores (C4 - Nivel 2)",
        description: "Descomposición del sistema en contenedores de alto nivel.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contenedores+FinDash+Pro&font=inter",
      },
      {
        title: "Diagrama de Componentes (C4 - Nivel 3)",
        description: "Componentes internos del contenedor API y sus relaciones.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Componentes+FinDash+Pro&font=inter",
      },
    ],
    visibility: "public",
    liveUrl: "https://findash-pro.example.com",
    repoUrl: "https://github.com/user/findash-pro",
    features: [
      "Dashboards en tiempo real con WebSockets",
      "Más de 20 tipos de gráficos interactivos",
      "Alertas inteligentes configurables",
      "Exportación a PDF, CSV y Excel",
      "Autenticación OAuth2 y SSO",
      "Modo oscuro y personalización de temas",
    ],
    year: "2024",
    role: "Full-Stack Developer",
  },
  {
    slug: "ecommerce-core",
    title: "E-Commerce Core",
    shortDescription: "Un motor de comercio electrónico headless diseñado para máxima velocidad.",
    fullDescription: "E-Commerce Core es un motor headless de comercio electrónico construido con una arquitectura desacoplada que permite integrarse con cualquier frontend. Procesa más de 1000 transacciones por minuto con una latencia inferior a 200ms. Incluye un sistema de inventario en tiempo real, motor de búsqueda elástico, y un panel de administración completo con análisis predictivo de ventas.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    image: "https://storage.googleapis.com/banani-generated-images/generated-images/ee50de1f-46fb-43e9-b42e-cc1dd841162d.jpg",
    gallery: [
      "https://storage.googleapis.com/banani-generated-images/generated-images/ee50de1f-46fb-43e9-b42e-cc1dd841162d.jpg",
      "https://storage.googleapis.com/banani-generated-images/generated-images/ececff34-bb2f-4011-b7bc-f12286ee05c1.jpg",
    ],
    diagrams: [
      {
        title: "Diagrama de Contexto (C4 - Nivel 1)",
        description: "Interacción del usuario con el sistema headless de e-commerce.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contexto+E-Commerce+Core&font=inter",
      },
      {
        title: "Diagrama de Contenedores (C4 - Nivel 2)",
        description: "Arquitectura desacoplada entre frontend, API y servicios.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contenedores+E-Commerce+Core&font=inter",
      },
    ],
    visibility: "private",
    liveUrl: "https://ecommerce-core.example.com",
    repoUrl: "",
    features: [
      "Arquitectura headless desacoplada",
      "1000+ transacciones por minuto",
      "Búsqueda elástica con filtros avanzados",
      "Panel de administración con analytics",
      "Sistema de inventario en tiempo real",
      "Integración con Stripe y PayPal",
    ],
    year: "2023",
    role: "Backend Developer",
  },
  {
    slug: "taskflow-ai",
    title: "TaskFlow AI",
    shortDescription: "Gestor de tareas impulsado por inteligencia artificial para equipos ágiles.",
    fullDescription: "TaskFlow AI es un gestor de tareas inteligente que utiliza aprendizaje automático para optimizar el flujo de trabajo de equipos ágiles. Ofrece sugerencias automáticas de asignación de tareas, predicción de tiempos de entrega, y detección de cuellos de botella en tiempo real. Integra con GitHub, GitLab y Slack para una experiencia de desarrollo unificada.",
    tags: ["React", "OpenAI", "Supabase", "Tailwind", "Socket.io"],
    image: "https://storage.googleapis.com/banani-generated-images/generated-images/c3ff7649-e908-466f-a6a2-fac7d813e949.jpg",
    gallery: [
      "https://storage.googleapis.com/banani-generated-images/generated-images/c3ff7649-e908-466f-a6a2-fac7d813e949.jpg",
      "https://storage.googleapis.com/banani-generated-images/generated-images/ececff34-bb2f-4011-b7bc-f12286ee05c1.jpg",
    ],
    diagrams: [
      {
        title: "Diagrama de Contexto (C4 - Nivel 1)",
        description: "Usuarios, sistemas externos e integraciones de TaskFlow AI.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contexto+TaskFlow+AI&font=inter",
      },
      {
        title: "Diagrama de Contenedores (C4 - Nivel 2)",
        description: "Distribución de servicios y flujo de datos entre contenedores.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Contenedores+TaskFlow+AI&font=inter",
      },
      {
        title: "Diagrama de Despliegue (C4 - Nivel 4)",
        description: "Infraestructura en la nube y nodos de procesamiento.",
        image: "https://placehold.co/800x450/1f1f22/a855f7?text=C4+-+Despliegue+TaskFlow+AI&font=inter",
      },
    ],
    visibility: "public",
    liveUrl: "https://taskflow-ai.example.com",
    repoUrl: "https://github.com/user/taskflow-ai",
    features: [
      "Asignación inteligente de tareas con IA",
      "Predicción de tiempos de entrega",
      "Detección de cuellos de botella",
      "Integración con GitHub, GitLab y Slack",
      "Kanban y Scrum boards",
      "Reportes automáticos de productividad",
    ],
    year: "2024",
    role: "Full-Stack Developer",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
