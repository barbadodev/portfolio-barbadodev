import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { ArrowDown, MessageCircle, MapPin, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(PORTFOLIO_CONFIG.social.whatsappDirectMessage)}`;

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#090d16] text-slate-100 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Columna Izquierda: Presentación Personal Directa */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Foto + Estado */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shrink-0 shadow-sm">
                <img
                  src={PORTFOLIO_CONFIG.personal.avatar}
                  alt={PORTFOLIO_CONFIG.personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{PORTFOLIO_CONFIG.personal.statusBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PORTFOLIO_CONFIG.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Titular Principal sin estridencias */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Desarrollo web práctico, estudiante de 2º DAW en Córdoba y apasionado de la Inteligencia Artificial.
            </h1>

            {/* Biografía Honesta */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Hola, soy <span className="text-white font-semibold">{PORTFOLIO_CONFIG.personal.name}</span>. 
              {` ${PORTFOLIO_CONFIG.personal.bio}`}
            </p>

            {/* Botones de Acción */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbeme por WhatsApp</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>Ver Proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Puntos clave */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                Código 100% propio y funcional
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                Ganas constantes de aprender
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                Flujos de trabajo ágiles con IA
              </span>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Personal Auténtica (Sin falsas terminales) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5 text-left">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-white">Mi Perfil & Situación Actual</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">2026/2027</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Formación Oficial</span>
                  <p className="text-slate-200 mt-0.5 font-medium">{PORTFOLIO_CONFIG.aboutCard.education}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Ubicación</span>
                  <p className="text-slate-200 mt-0.5">{PORTFOLIO_CONFIG.aboutCard.city}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Fundamentos Técnicos</span>
                  <p className="text-slate-200 mt-0.5">{PORTFOLIO_CONFIG.aboutCard.focus}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Experiencia Práctica</span>
                  <p className="text-slate-200 mt-0.5">{PORTFOLIO_CONFIG.aboutCard.experience}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Mi Enfoque con la Inteligencia Artificial</span>
                  <p className="text-slate-200 mt-0.5">{PORTFOLIO_CONFIG.aboutCard.aiApproach}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Disponibilidad</span>
                  <p className="text-emerald-400 mt-0.5 font-medium">{PORTFOLIO_CONFIG.aboutCard.availability}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>📍 Córdoba, España</span>
                <span className="text-slate-300 font-mono">@barbadodev</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
