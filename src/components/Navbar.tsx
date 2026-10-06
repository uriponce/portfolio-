import React from 'react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand / Identity */}
        <div className="flex flex-col">
          <a href="#" className="group flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-400">[backend]</span>
            <span className="font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
              Uriel Ponce
            </span>
          </a>
          <span className="hidden font-mono text-xs text-zinc-400 sm:inline-block">
            Desarrollador Back-End | Datos y Automatización
          </span>
        </div>

        {/* Navigation & Fast Links */}
        <nav className="flex items-center gap-5 text-sm">
          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-100"
          >
            /proyectos
          </a>
          <a
            href="#about"
            className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-100"
          >
            /trayectoria
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-100"
          >
            /contacto
          </a>
          <a
            href="https://github.com/uriponce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 font-mono text-xs text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            aria-label="GitHub Profile"
          >
            <span>github</span>
            <span className="text-zinc-400">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
