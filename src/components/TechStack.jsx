import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { 
  Atom, Zap, Palette, Code2, Smartphone, Layout, 
  Server, Cpu, Network, ShieldCheck, Calendar, 
  Database, Flame, Layers, GitBranch, Cloud, Terminal, Bot 
} from 'lucide-react';

const iconComponents = {
  Atom, Zap, Palette, Code2, Smartphone, Layout,
  Server, Cpu, Network, ShieldCheck, Calendar,
  Database, Flame, Layers, GitBranch, Cloud, Terminal, Bot
};

export default function TechStack() {
  const { frontend, backend, database, tools } = PORTFOLIO_CONFIG.techStack;

  const categories = [
    { title: "Frontend & UI", items: frontend, accent: "border-blue-500/20 text-blue-400" },
    { title: "Backend & APIs", items: backend, accent: "border-emerald-500/20 text-emerald-400" },
    { title: "Bases de Datos & Cloud", items: database, accent: "border-amber-500/20 text-amber-400" },
    { title: "Herramientas & Entorno", items: tools, accent: "border-indigo-500/20 text-indigo-400" },
  ];

  return (
    <section id="stack" className="py-24 bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Habilidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Tecnologías con las que construyo
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal leading-relaxed">
            Stack contemporáneo enfocado en velocidad de desarrollo, rendimiento en producción y mantenibilidad a largo plazo.
          </p>
        </div>

        {/* Rejilla de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 pb-3 border-b ${cat.accent}`}>
                  {cat.title}
                </h3>

                <div className="space-y-4">
                  {cat.items.map((tech, i) => {
                    const Icon = iconComponents[tech.icon] || Code2;
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-slate-200 block">
                              {tech.name}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {tech.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
