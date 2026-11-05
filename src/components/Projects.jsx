import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-[#090d16] border-b border-slate-800/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="max-w-2xl text-left mb-14">
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
