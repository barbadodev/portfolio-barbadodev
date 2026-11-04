import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { Code, Server, Store, RefreshCw, CheckCircle2 } from 'lucide-react';

const serviceIcons = {
  Code,
  Server,
  Store,
  RefreshCw
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-900/40 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Servicios y Soluciones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            ¿Cómo puedo ayudarte en tu proyecto?
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal leading-relaxed">
            Tanto si necesitas una web rápida que te traiga clientes como si buscas incorporar un perfil con ganas y solidez técnica a tu equipo.
          </p>
        </div>

        {/* Rejilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Code;
            return (
              <div
                key={index}
                className="bg-slate-950 p-8 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrega rápida con código limpio y sin atajos</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
