
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Sistemas de cableado estructurado y Fibra Óptica",
    officialName: "CommScope – Residential & MDU Cabling Solutions",
    link: "https://www.commscopetraining.com/courses/cabling/wr9100/residentialmdu-cabling-solutions",
    description: "Estándares de cableado estructurado, diseño de infraestructura física, fibra óptica, pruebas de certificación y buenas prácticas en entornos residenciales y multiusuario.",
    certification: "CommScope Infrastructure Academy – WR9100",
    icon: "Network"
  },
  {
    id: 2,
    title: "Arquitectura de Servidores",
    officialName: "ScrumStudy – Fundamentos de Scrum (TEO)",
    link: "https://www.scrumstudy.com/certification/certification-hierarchy",
    description: "Introducción a metodologías ágiles, roles Scrum (Product Owner, Scrum Master, Team), sprints, backlog y gestión de proyectos tecnológicos.",
    certification: "Scrum Fundamentals Certified (SFC™)",
    icon: "Server"
  },
  {
    id: 3,
    title: "Ethical Hacking y Análisis Forense",
    officialName: "Tecsup – Hacker Ético (Cisco NetAcad)",
    link: "https://www.netacad.com/courses/ethical-hacker?courseLang=es-XL&instance_id=9486cff1-0591-4e8a-8da7-d64e66d21481",
    description: "Principios de hacking ético, reconocimiento, escaneo, explotación, post-explotación y análisis forense básico.",
    certification: "Cisco Networking Academy – Ethical Hacker",
    icon: "ShieldAlert"
  },
  {
    id: 4,
    title: "Servicios de Red",
    officialName: "ICANN – DNS Fundamentals",
    link: "https://www.icann.org/en/beginners/courses-and-learning",
    description: "Funcionamiento del DNS, jerarquía de dominios, registros DNS, seguridad (DNSSEC) y rol de ICANN en la gobernanza de Internet.",
    certification: "ICANN Learn – DNS Fundamentals (reconocimiento institucional)",
    icon: "Globe"
  }
];

export const CHECKPOINT_TEXT = "Diseña una infraestructura de red completa: incluye cableado estructurado, servidores configurados, servicios DNS y DHCP, y realiza una auditoría de seguridad básica con herramientas de ethical hacking.";
