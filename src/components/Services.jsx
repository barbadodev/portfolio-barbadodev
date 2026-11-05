import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { Briefcase, Building2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#090d16] border-b border-slate-800/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Disponibilidad & Enfoque
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            ¿En qué puedo colaborar ahora mismo?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
            Abierto tanto a incorporarme a un equipo para mis prácticas del ciclo formativo como a ayudar a autónomos de mi ciudad.
          </p>
        </div>

        {/* 2 Bloques Prácticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CONFIG.collaboration.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200">
                    {index === 0 ? <Building2 className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                {index === 0 ? "📍 Modalidad presencial en Córdoba o híbrido/remoto" : "📍 Trato cercano y directo en Córdoba"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
