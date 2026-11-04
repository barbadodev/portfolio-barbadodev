import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { Code2, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(PORTFOLIO_CONFIG.social.whatsappDirectMessage)}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Personal */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              &lt;/&gt;
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span>{PORTFOLIO_CONFIG.personal.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  {PORTFOLIO_CONFIG.personal.handle}
                </span>
              </span>
              <span className="text-xs text-slate-400 block">
                {PORTFOLIO_CONFIG.personal.title}
              </span>
            </div>
          </a>

          {/* Enlaces de Escritorio */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">
              Proyectos
            </a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">
              Tecnologías
            </a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">
              Soluciones
            </a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Acciones de Escritorio */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-colors border border-transparent hover:border-slate-800"
              aria-label="GitHub de barbadodev"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-slate-300">
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-900"
            >
              Proyectos Destacados
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-900"
            >
              Tecnologías y Stack
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-900"
            >
              Soluciones para Empresas
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-900 text-blue-400"
            >
              Contacto Directo
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-slate-300 bg-slate-900 border border-slate-800 rounded-xl text-sm font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver GitHub (@barbadodev)</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-white bg-emerald-600 rounded-xl text-sm font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
