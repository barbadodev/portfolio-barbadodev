import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { MessageCircle, Mail, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090d16] text-slate-400 text-xs py-14 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/60">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-700 shrink-0">
              <img
                src={PORTFOLIO_CONFIG.personal.avatar}
                alt={PORTFOLIO_CONFIG.personal.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              <span className="text-slate-400 text-xs">
                {PORTFOLIO_CONFIG.personal.title}
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-slate-400 text-xs">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#stack" className="hover:text-white transition-colors">Tecnologías</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(PORTFOLIO_CONFIG.social.whatsappDirectMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.social.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {currentYear} Antonio Barbado (@barbadodev). Código abierto y modular.</p>
          <p className="flex items-center gap-1.5">
            <span>Construido con</span>
            <span className="text-blue-400 font-medium">React + Vite + Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
