import contextNimacOptiwork  from "../assets/c4/nimacOptiwork/context-NimacOptiworkcontext.svg"
import contenedoresNimacOptiwork  from "../assets/c4/nimacOptiwork/container-NimacOptiworkcontainer.svg"
import nimacOptiwork from "../assets/NimacOptiwork.png"
import componentNimacOptiwork from "../assets/c4/nimacOptiwork/component-NimacOptiworkcomponent.svg"

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
    slug: "gestion",
    title: "Nimac Optiwork",
    shortDescription: "Sistema de escritorio para gestionar tareas de almacén",
    fullDescription: "Sistema de escritorio a la medida para la gestión de tickets que se asignan a distintos colaboradores, con una arquitectura DDD y desacoplada que permite la modificación y agregar nuevas features sin romper nada existente, la particularidad de este sistema es que obtiene facturas desde un sistema externo AS/400 para que los colaboradores puedan asignarselas y trabajarlas, el software construye gráficos en un dashboard para que parte de la gerencia pueda observar las kpi de desempeño de los distintos colaboradores en el día a día ",
    tags: ["WinUi3", "C#", "SQLServer", "AS/400"],
    image: nimacOptiwork.src,
    gallery: [
      "",
      "",
    ],
    diagrams: [
      {
        title: "Diagrama de Contexto (C4 - Nivel 1)",
        description: "Interacción del usuario y sistemas externos con el sistema Nimac OptiWork.",
        image: contextNimacOptiwork.src,
      },
      {
        title: "Diagrama de Contenedores (C4 - Nivel 2)",
        description: "Arquitectura desacoplada entre frontend, API y servicios.",
        image: contenedoresNimacOptiwork.src,
      },
      {
        title: "Diagrama de Componentes (C4 - Nivel 3)",
        description: "Componentes internos del contenedor Applicación de escritorio y sus relaciones.",
        image: componentNimacOptiwork.src,
      },
    ],
    visibility: "private",
    liveUrl: "https://github.com/ed031104/NimacOptiWork.git",
    repoUrl: "",
    features: [
      "Arquitectura DDD desacoplada",
      "Dashboard de desempeño de colaboradores",
      "Panel de reportes",
      "Integración con AS/400",
    ],
    year: "2025",
    role: "Software Developer",
  },

];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
