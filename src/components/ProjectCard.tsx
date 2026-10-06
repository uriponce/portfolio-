import React from 'react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const indexFormatted = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/60">
      <div>
        {/* Cabecera de la tarjeta técnica */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3 font-mono text-xs">
          <span className="text-zinc-400">SYS_REF // {indexFormatted}</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-emerald-400"
            aria-label={`Ver código fuente de ${project.title}`}
          >
            <span>source</span>
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Título del proyecto */}
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
          {project.title}
        </h3>

        {/* Descripción técnica */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>

      {/* Pie de tarjeta: Etiquetas y botón de repositorio */}
      <div className="mt-6 flex flex-col gap-4 border-t border-zinc-800/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón de acceso al repositorio */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-200 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
        >
          <span>Ver código</span>
          <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </article>
  );
}
