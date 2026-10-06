import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-zinc-800/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Encabezado de la sección */}
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              // REPOSITORIOS & SISTEMAS
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Proyectos Destacados
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400">
            TOTAL_PROJECTS: {String(projects.length).padStart(2, '0')}
          </p>
        </div>

        {/* Grid de proyectos dinámicos */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
