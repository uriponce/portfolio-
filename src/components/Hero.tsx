import React from 'react';

export function Hero() {
  return (
    <section className="relative border-b border-zinc-800/80 pt-14 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Status indicator estilo dashboard */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-950/80 bg-emerald-950/30 px-3 py-1 font-mono text-xs text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>SYSTEM STATUS: OPERATIONAL</span>
        </div>

        {/* Headline principal */}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
          Arquitectura backend orientada a fiabilidad, persistencia y procesamiento de datos.
        </h1>

        {/* Resumen de enfoque técnico */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Diseño e implemento servicios robustos, motores de conciliación transaccional y pipelines de automatización. Especializado en lógica de negocio predecible, validación estricta y resiliencia de excepciones operativas.
        </p>

        {/* Pilares técnicos / Métricas dashboard */}
        <div className="mt-8 grid grid-cols-2 gap-3 font-mono text-xs sm:grid-cols-4">
          <div className="rounded border border-zinc-800/90 bg-zinc-900/40 p-3">
            <span className="block text-[10px] uppercase tracking-wider text-zinc-400">01 // DATA</span>
            <span className="font-medium text-zinc-200">Conciliación & Consistencia</span>
          </div>
          <div className="rounded border border-zinc-800/90 bg-zinc-900/40 p-3">
            <span className="block text-[10px] uppercase tracking-wider text-zinc-400">02 // ARCH</span>
            <span className="font-medium text-zinc-200">APIs REST & Integraciones</span>
          </div>
          <div className="rounded border border-zinc-800/90 bg-zinc-900/40 p-3">
            <span className="block text-[10px] uppercase tracking-wider text-zinc-400">03 // OPS</span>
            <span className="font-medium text-zinc-200">Resiliencia & Error Handling</span>
          </div>
          <div className="rounded border border-zinc-800/90 bg-zinc-900/40 p-3">
            <span className="block text-[10px] uppercase tracking-wider text-zinc-400">04 // FLOW</span>
            <span className="font-medium text-zinc-200">Automatización de Procesos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
