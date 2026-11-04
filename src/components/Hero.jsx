import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { ArrowDown, MessageCircle, MapPin, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(PORTFOLIO_CONFIG.social.whatsappDirectMessage)}`;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-slate-950 text-slate-100">
      {/* Luces y degradados de fondo */}
      <div className="absolute top-0 right-1/4 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Introducción y Propuesta */}
          <div className="lg:col-span-8 space-y-7 text-center lg:text-left">
            
            {/* Foto de perfil + Badge de Disponibilidad */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="relative group shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all bg-slate-900">
                  <img
                    src={PORTFOLIO_CONFIG.personal.avatar}
                    alt={PORTFOLIO_CONFIG.personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-slate-300">{PORTFOLIO_CONFIG.personal.statusBadge}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{PORTFOLIO_CONFIG.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Desarrollo aplicaciones web modernas, rápidas y orientadas a <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">resultados reales</span>.
            </h1>

            {/* Biografía Técnica */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hola, soy <span className="text-white font-semibold">{PORTFOLIO_CONFIG.personal.name}</span>. Creo soluciones digitales combinando la velocidad de <strong className="text-blue-400 font-semibold">React y Tailwind</strong> con la solidez en backend de <strong className="text-emerald-400 font-semibold">Node.js, Express y Supabase</strong>.
            </p>

            {/* Botones de Conversión */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Proyectos Destacados</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Métricas / Garantías de Trabajo */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                3 proyectos en producción
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Cero mocks o stubs (100% código real)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                Compilación y testeo automatizado
              </span>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta de Perfil & Terminal */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 relative backdrop-blur-sm space-y-4">
              
              {/* Encabezado con foto y datos de contacto */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-700 shrink-0 shadow-md">
                  <img
                    src={PORTFOLIO_CONFIG.personal.avatar}
                    alt={PORTFOLIO_CONFIG.personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{PORTFOLIO_CONFIG.personal.name}</h3>
                  <span className="text-xs text-blue-400 font-mono">@{PORTFOLIO_CONFIG.personal.handle}</span>
                  <span className="text-[11px] text-slate-400 block">Estudiante 2º DAW · Córdoba</span>
                </div>
              </div>

              {/* Ventana de Terminal */}
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>profile.sh</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400">$</span> <span className="text-slate-200">cat stack.json</span>
                </div>
                <pre className="text-slate-400 leading-relaxed overflow-x-auto text-[11px]">
{`{
  "focus": "Full-Stack Web Dev",
  "frontend": ["React", "Tailwind", "Vite"],
  "backend": ["Node.js", "Express", "iCal"],
  "database": ["Supabase", "PostgreSQL"],
  "status": "Available for Work"
}`}
                </pre>
                <div className="pt-2 text-slate-500 text-[10px] flex items-center justify-between border-t border-slate-800/60">
                  <span>Git: main* [clean]</span>
                  <span className="text-emerald-400 font-bold">READY TO DEPLOY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
