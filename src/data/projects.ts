import { Project } from '../types/project';

export type { Project };

export const projects: Project[] = [
  {
    title: 'Conciliation Engine',
    description:
      'Motor de conciliación y procesamiento de datos transaccionales. Enfoque backend en validación, consistencia y trazabilidad financiera.',
    tags: ['Node.js', 'Express', 'JavaScript', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/uriponce/conciliation-engine',
  },
  {
    title: 'Mueblería Jota (Colaborativo)',
    description:
      'Proyecto full-stack colaborativo desarrollado junto a colegas para la gestión integral de un negocio de mobiliario.',
    tags: ['Node.js', 'JavaScript', 'Arquitectura REST', 'Git'],
    githubUrl: 'https://github.com/noahcassutti/muebleria-jota.git',
  },
  {
    title: 'Backend con Errores',
    description:
      'Laboratorio de resiliencia y manejo de excepciones en servidores. Demostración de debugging, control de errores y robustez operativa.',
    tags: ['Node.js', 'Express', 'Manejo de Errores', 'Git'],
    githubUrl: 'https://github.com/uriponce/backend-con-errores',
  },
  {
    title: 'GyMaps',
    description:
      'Aplicación web full-stack con mapa interactivo, favoritos, reseñas y estructuración avanzada de datos orientada a producto digital.',
    tags: ['Full-Stack', 'APIs', 'Mapas Interactivos', 'JavaScript'],
    githubUrl: 'https://github.com/uriponce/GyMaps',
  },
];
