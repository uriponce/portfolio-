import React from 'react';

interface StackCategory {
  code: string;
  category: string;
  skills: string[];
}

interface TimelineItem {
  id: string;
  entity: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

const STACK_DATA: StackCategory[] = [
  {
    code: '01 // BACKEND',
    category: 'Backend & Arquitectura',
    skills: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Arquitectura REST',
      'Validación & Sanitización',
      'Manejo Centralizado de Excepciones',
      'Clean Code & Modularidad',
    ],
  },
  {
    code: '02 // DATA',
    category: 'Datos & Persistencia',
    skills: [
      'Modelado de Esquemas',
      'Bases de Datos Relacionales (SQL)',
      'Consultas & Normalización',
      'Conciliación Transaccional',
      'Consistencia de Datos',
      'Trazabilidad Financiera',
    ],
  },
  {
    code: '03 // INFRA',
    category: 'Infraestructura & Herramientas',
    skills: [
      'Git & GitHub',
      'Postman / Insomnia',
      'Entornos Linux / Bash',
      'Docker (Básico / Contenedores)',
      'Gestión de Variables de Entorno',
      'Logging & Debugging',
    ],
  },
];

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'TL-01',
    entity: 'UTN + Santander',
    role: 'Especialización en Desarrollo Backend',
    period: 'Formación Tecnológica',
    type: 'ACADÉMICO / BECA',
    description:
      'Programa intensivo y formativo en desarrollo backend y arquitectura de software, otorgado a través de beca Santander en articulación con la Universidad Tecnológica Nacional (UTN). Enfoque en lógica de servidor, APIs y bases de datos.',
  },
  {
    id: 'TL-02',
    entity: 'bpco',
    role: 'Desarrollo & Automatización de Procesos',
    period: 'Experiencia Profesional',
    type: 'SOFTWARE / AUTOMATIZACIÓN',
    description:
      'Diseño e implementación de flujos lógicos, organización de datos y automatización para optimizar la eficiencia operativa y la consistencia de sistemas internos.',
  },
  {
    id: 'TL-03',
    entity: 'Ciro Gastronomía',
    role: 'Gestión Operativa & Control de Procesos',
    period: 'Operaciones & Logística',
    type: 'OPERACIONES',
    description:
      'Supervisión y control de stock, gestión integral de flujos de insumos y estandarización de procesos operativos en un entorno de alta concurrencia y demanda continua.',
  },
  {
    id: 'TL-04',
    entity: 'Escuela Técnica Fernando Fader',
    role: 'Educación Técnica',
    period: 'Base Académica Técnica',
    type: 'FUNDAMENTOS TÉCNICOS',
    description:
      'Formación técnica de base orientada al pensamiento analítico, diseño estructurado y resolución metodológica de problemas complejos.',
  },
];

export function StackAndEducation() {
  return (
    <section id="about" className="border-b border-zinc-800/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* ================= STACK TECNOLÓGICO ================= */}
        <div>
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                // CAPACIDADES TÉCNICAS
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                Stack Tecnológico
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              CORE_DOMAINS: 03
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {STACK_DATA.map((item) => (
              <div
                key={item.category}
                className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <div>
                  <div className="border-b border-zinc-800/60 pb-2.5 font-mono text-xs text-zinc-400">
                    {item.code}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {item.category}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 font-mono text-xs text-zinc-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500/80"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separador de subsección estilo línea de circuito */}
        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800/80"></div>
          <span className="font-mono text-xs text-zinc-400">
            CHRONOLOGY // TRACK_RECORD
          </span>
          <div className="h-px flex-1 bg-zinc-800/80"></div>
        </div>

        {/* ================= TRAYECTORIA Y EDUCACIÓN ================= */}
        <div>
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                // TRAYECTORIA & FORMACIÓN
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                Línea de Tiempo Académica & Profesional
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              ENTRIES: {String(TIMELINE_DATA.length).padStart(2, '0')}
            </span>
          </div>

          <div className="space-y-4">
            {TIMELINE_DATA.map((entry) => (
              <div
                key={entry.entity}
                className="group relative rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400">{entry.id}</span>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white">
                      {entry.entity}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-zinc-300">
                      {entry.type}
                    </span>
                    <span className="text-zinc-400">{entry.period}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="font-mono text-xs font-medium text-emerald-400">
                    {entry.role}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
