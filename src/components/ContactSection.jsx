import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolio.config';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    topic: 'Crear una web o aplicación para mi negocio',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    const text = `👋 *NUEVO MENSAJE DESDE EL PORTFOLIO*
━━━━━━━━━━━━━━━━━━━━
👤 *Nombre:* ${formData.name}
📌 *Interés:* ${formData.topic}
${formData.message ? `📝 *Mensaje:* ${formData.message}` : ''}
━━━━━━━━━━━━━━━━━━━━
_Enviado desde barbadodev.com_`;

    const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-[#090d16] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Información de Contacto Directo */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                Contacto Directo
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
                Contáctame aquí
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
                Trabajo con seriedad, transparencia y comunicación directa. Si tienes un negocio en Córdoba y buscas una web a medida con un desarrollo profesional bien estructurado, cuéntame tu caso y te respondo con una valoración clara.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${PORTFOLIO_CONFIG.social.whatsapp}?text=${encodeURIComponent(PORTFOLIO_CONFIG.social.whatsappDirectMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">WhatsApp</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {PORTFOLIO_CONFIG.social.whatsapp.replace('34', '+34 ')}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${PORTFOLIO_CONFIG.social.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Correo Electrónico</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {PORTFOLIO_CONFIG.social.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">Localización</h4>
                  <p className="text-sm font-semibold text-white">
                    {PORTFOLIO_CONFIG.personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Rápido */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xs">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje preparado!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Se ha abierto WhatsApp con los datos de tu consulta para que podamos hablar directamente.
                </p>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-500 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reabrir WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Tu nombre o empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Navarro (o Clínica Dental Sur)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    ¿En qué puedo ayudarte?
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="Crear una web o aplicación para mi negocio">Crear una web o aplicación para mi negocio</option>
                    <option value="Digitalizar carta/reservas para hostelería">Digitalizar carta / reservas para hostelería</option>
                    <option value="Presupuesto o consulta para mi negocio">Presupuesto o consulta para mi negocio</option>
                    <option value="Colaboración o desarrollo a medida">Colaboración o desarrollo a medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Mensaje o detalles (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntame brevemente qué necesitas o en qué consiste la propuesta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Mensaje por WhatsApp</span>
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    Sin intermediarios ni formularios que se pierden en el correo.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
