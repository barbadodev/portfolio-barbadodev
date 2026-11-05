import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { Check } from 'lucide-react';

export default function TechStack() {
  const categories = PORTFOLIO_CONFIG.techStackCategories;

  return (
    <section id="stack" className="py-20 bg-[#090d16] border-b border-slate-800/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Conocimientos & Aprendizaje
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Tecnologías y herramientas que utilizo
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
            Una visión honesta de lo que domino en el ciclo de 2º DAW, lo que he explorado por mi cuenta y cómo aplico la IA en mi día a día.
          </p>
        </div>

        {/* 3 Columnas Editoriales Limpias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/70 text-[11px] text-slate-500 font-mono">
                {idx === 0 ? "Módulos oficiales DAW" : idx === 1 ? "Iniciativa personal" : "Multiplicador de aprendizaje"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
