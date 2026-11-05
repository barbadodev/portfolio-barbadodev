import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-[#090d16] border-b border-slate-800/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="max-w-2xl text-left mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Trabajo Práctico
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Proyectos reales que he construido
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
            Nada de clones ficticios o tutoriales a medias. Cada desarrollo responde a una necesidad real, con código probado y funcionando.
          </p>
        </div>

        {/* Aclaración Profesional sobre Demostraciones para Negocios */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Aclaración para empresas sobre las propuestas comerciales:
            </span>
            <p className="text-slate-400 leading-relaxed">
              Las aplicaciones de hostelería y comercios mostradas abajo son <strong>versiones base demostrativas</strong> que enseñan el nivel más básico de partida. Cada proyecto real se diseña, estructura y programa <strong>100% a medida</strong> según la identidad, necesidades y operativa de cada empresa.
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 text-center">
            Desarrollo 100% a su gusto
          </span>
        </div>

        {/* Listado Editorial de Proyectos */}
        <div className="space-y-8">
          {PORTFOLIO_CONFIG.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Historia y Solución */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300">
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-white font-medium">El reto: </strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className="text-white font-medium">La solución: </strong>
                      {project.solution}
                    </p>
                  </div>

                  {/* Nota sobre personalización si existe */}
                  {project.scopeNote && (
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
                        Nivel de Personalización:
                      </span>
                      <p className="leading-relaxed text-slate-300">
                        {project.scopeNote}
                      </p>
                    </div>
                  )}

                  {/* Etiquetas de Tecnologías */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Columna Derecha: Enlaces Directos */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:border-l lg:border-slate-800 lg:pl-8">
                  <div className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-300 block mb-1">Acceso al proyecto</span>
                    <p>Disponible para inspeccionar la arquitectura y la implementación.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-slate-700"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Ver código en GitHub</span>
                    </a>

                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
                      >
                        <span>Abrir demo en vivo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
