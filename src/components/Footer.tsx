import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-5xl px-6">
        {/* Panel de contacto rápido */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 md:flex-row md:items-center">
          <div>
            <span className="mb-1 block font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              // CONEXIÓN DIRECTA
            </span>
            <h3 className="text-xl font-bold text-zinc-100">
              ¿Listo para construir sistemas escalables?
            </h3>
            <p className="mt-1 max-w-md text-sm text-zinc-400">
              Disponible para proyectos de arquitectura backend, validación de datos y flujos de automatización.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/uriponce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-4 py-2 text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <span>GitHub</span>
              <span className="text-zinc-400">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/urielponce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-4 py-2 text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <span>LinkedIn</span>
              <span className="text-zinc-400">↗</span>
            </a>
          </div>
        </div>

        {/* Firma técnica inferior */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 font-mono text-xs text-zinc-400 sm:flex-row">
          <div>
            <span>© {currentYear} Uriel Ponce — Backend & Automation</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>noah-cassutti-inspired // minimal-tech-dashboard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
