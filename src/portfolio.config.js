// ==============================================================================
// CONFIGURACIÓN PERSONAL DEL PORTFOLIO (barbadodev)
// ==============================================================================

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Antonio Barbado",
    handle: "barbadodev",
    avatar: "/avatar.jpg",
    title: "Estudiante de 2º DAW · Córdoba",
    subtitle: "Desarrollo web práctico y experimentación activa con Inteligencia Artificial",
    location: "Córdoba, España",
    statusBadge: "Estudiante 2º DAW · Prácticas en COSEBA",
    bio: "Estoy cursando 2º de Desarrollo de Aplicaciones Web (DAW) en Córdoba y realizando mis prácticas en COSEBA. Me apasiona construir soluciones útiles para la web y exprimir la Inteligencia Artificial a diario como herramienta para investigar, aprender rápido y crear código limpio y funcional.",
  },

  aboutCard: {
    education: "2º curso de Desarrollo de Aplicaciones Web (DAW)",
    experience: "Prácticas de DAW en COSEBA (Córdoba)",
    city: "Córdoba, Andalucía, España",
    focus: "Frontend con React, backend con Node.js y bases de datos SQL",
    aiApproach: "Uso diario de modelos de IA para acelerar aprendizaje y desarrollo",
    availability: "Desarrollo web y digitalización para comercios locales"
  },

  social: {
    github: "https://github.com/barbadodev",
    linkedin: null,
    email: "contacto.barbadodev@gmail.com",
    whatsapp: "34689413922",
    whatsappDirectMessage: "Hola Antonio, he visto tu portfolio y me gustaría hablar contigo sobre un proyecto web.",
  },

  techStackCategories: [
    {
      title: "Lo que aprendo en el ciclo de DAW",
      description: "Fundamentos teóricos y prácticos de programación, cliente, servidor y datos.",
      skills: ["JavaScript (ES6+)", "HTML5 / CSS3", "Bases de datos SQL & PostgreSQL", "Node.js & Express", "Control de versiones Git & GitHub", "Arquitectura Cliente-Servidor"]
    },
    {
      title: "Lo que investigo y uso en proyectos",
      description: "Herramientas que he probado por mi cuenta para construir aplicaciones más ágiles.",
      skills: ["React 18", "Tailwind CSS", "Vite", "Supabase (Auth & Realtime)", "PWAs (Aplicaciones Web Progresivas)", "Despliegues en Vercel"]
    },
    {
      title: "Cómo integro la Inteligencia Artificial",
      description: "No para que piense por mí, sino para multiplicar mi ritmo y productividad.",
      skills: ["Prompt engineering estructurado", "Asistentes de código y depuración", "Automatización de tareas repetitivas", "Documentación e investigación rápida de librerías"]
    }
  ],

  projects: [
    {
      id: "calendario-daw",
      title: "Calendario DAW",
      subtitle: "Plataforma académica colaborativa",
      problem: "En clase nos costaba seguir las fechas de exámenes y entregas dispersas en diferentes secciones de Moodle.",
      solution: "Construí una aplicación web instalable en el móvil (PWA) que conecta con el calendario iCal de Moodle cada 15 minutos y centraliza todo en una base de datos Supabase.",
      tech: ["React 18", "Node.js", "Express", "Supabase", "PWA", "Tailwind CSS"],
      github: "https://github.com/barbadodev/calendario-daw",
      demo: "#",
      tag: "Proyecto Real de Clase"
    },
    {
      id: "starter-restaurante",
      title: "Carta Digital & Reservas",
      subtitle: "Solución para hostelería local",
      problem: "Muchos bares y tabernas tradicionales en Córdoba tienen como carta una foto borrosa en Facebook o pagan comisiones altas a plataformas externas.",
      solution: "Diseñé una carta interactiva con el etiquetado obligatorio de alérgenos europeos, detección en directo del turno de cocina y reservas directas al WhatsApp del negocio sin intermediarios.",
      tech: ["React 18", "Vite", "Tailwind CSS", "WhatsApp Direct"],
      github: "https://github.com/barbadodev/starter-restaurante",
      demo: "#",
      tag: "Propuesta para Negocios"
    },
    {
      id: "starter-pyme",
      title: "Web Comercial para Clínicas",
      subtitle: "Portal de captación para comercios",
      problem: "Las pymes locales pierden clientes si su web no carga rápido en móviles o no deja pedir cita al instante.",
      solution: "Un portal ligero con cálculo automático de 'Abierto ahora', reseñas de Google integradas y botón directo para solicitar presupuesto por WhatsApp.",
      tech: ["React 18", "Vite", "Tailwind CSS", "SEO Local"],
      github: "https://github.com/barbadodev/starter-pyme",
      demo: "#",
      tag: "Propuesta para Negocios"
    }
  ],

  collaboration: [
    {
      title: "Digitalización para Negocios Locales en Córdoba",
      description: "Si tienes un comercio, taller o restaurante en Córdoba y necesitas una web limpia que cargue rápido en móviles y te traiga clientes a WhatsApp sin pagar cuotas abusivas.",
      badge: "Negocios Locales & PYMEs",
      detail: "📍 Trato cercano y directo en Córdoba"
    },
    {
      title: "Desarrollo Web & Aplicaciones a Medida",
      description: "Construcción de interfaces interactivas con React, desarrollo de APIs con Node.js y diseño de bases de datos relacionales para proyectos concretos.",
      badge: "Frontend & Backend",
      detail: "⚡ Código limpio, modular y mantenible"
    }
  ]
};
