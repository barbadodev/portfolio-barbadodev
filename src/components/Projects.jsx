import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { ExternalLink, Check, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-slate-900/60 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Portfolio Seleccionado
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Proyectos reales que resuelven problemas reales
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal leading-relaxed">
            Nada de proyectos de tutorial incompletos. Cada uno de estos desarrollos cuenta con arquitectura desacoplada, lógica completa de backend o negocio y despliegue funcional.
          </p>
        </div>

        {/* Listado de Proyectos */}
        <div className="space-y-12">
          {PORTFOLIO_CONFIG.projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-950 border border-slate-800/90 overflow-hidden shadow-xl hover:border-slate-700 transition-all p-8 sm:p-10 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Información Principal */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Retos y Logros Técnicos */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Puntos Clave de la Arquitectura:
                    </h4>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Etiquetas de Tecnologías */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Columna Derecha: Tarjeta de Enlaces Rápidos y Acción */}
                <div className="lg:col-span-4 bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <FolderGit2 className="w-4 h-4 text-blue-400" />
                    <span>Control de Versiones & Código</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Repositorio limpio con historial de commits convencional, estructura modular y documentación de despliegue paso a paso.
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Ver Código en GitHub</span>
                    </a>

                    <a
                      href={project.demo}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Explorar Proyecto</span>
                    </a>
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
