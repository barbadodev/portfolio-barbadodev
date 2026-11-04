// ==============================================================================
// CONFIGURACIÓN PERSONAL DEL PORTFOLIO (barbadodev)
// ==============================================================================

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Antonio Barbado",
    handle: "barbadodev",
    title: "Desarrollador Web Full-Stack",
    subtitle: "Estudiante de 2º DAW · Especializado en React, Node.js y Supabase",
    location: "Córdoba, Andalucía, España",
    statusBadge: "Disponible para proyectos & prácticas",
    bio: "Creo aplicaciones web modernas, rápidas y orientadas a resultados reales. Combino arquitecturas limpias y seguras en el backend (Node.js, Express, PostgreSQL/Supabase) con interfaces ágiles y atractivas en el frontend (React, Vite, Tailwind CSS). Me apasiona el código bien estructurado, la automatización y la optimización de rendimiento.",
  },

  social: {
    github: "https://github.com/barbadodev",
    linkedin: "https://linkedin.com/in/barbadodev",
    email: "antoniobarbadodev@gmail.com",
    whatsapp: "34600123456", // Reemplazar con tu número real
    whatsappDirectMessage: "Hola Antonio, he visto tu portfolio y me gustaría hablar contigo sobre un proyecto web.",
  },

  techStack: {
    frontend: [
      { name: "React 18 / 19", level: "Avanzado", icon: "Atom" },
      { name: "Vite", level: "Avanzado", icon: "Zap" },
      { name: "Tailwind CSS", level: "Avanzado", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Avanzado", icon: "Code2" },
      { name: "PWA (Service Workers)", level: "Intermedio", icon: "Smartphone" },
      { name: "HTML5 / CSS3 Semántico", level: "Avanzado", icon: "Layout" },
    ],
    backend: [
      { name: "Node.js (ESM)", level: "Avanzado", icon: "Server" },
      { name: "Express.js", level: "Avanzado", icon: "Cpu" },
      { name: "RESTful APIs", level: "Avanzado", icon: "Network" },
      { name: "Autenticación JWT / RLS", level: "Intermedio", icon: "ShieldCheck" },
      { name: "Sincronización iCal / Cron", level: "Intermedio", icon: "Calendar" },
    ],
    database: [
      { name: "PostgreSQL", level: "Intermedio", icon: "Database" },
      { name: "Supabase (Auth, DB, Realtime)", level: "Avanzado", icon: "Flame" },
      { name: "SQL & Migraciones", level: "Intermedio", icon: "Layers" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Avanzado", icon: "GitBranch" },
      { name: "Vercel & Render", level: "Avanzado", icon: "Cloud" },
      { name: "PowerShell & Linux CLI", level: "Intermedio", icon: "Terminal" },
      { name: "Workflows con IA Asistida", level: "Avanzado", icon: "Bot" },
    ]
  },

  projects: [
    {
      id: "calendario-daw",
      title: "Calendario DAW — Plataforma Académica Colaborativa",
      badge: "Proyecto Destacado",
      type: "Full-Stack Web App & PWA",
      description: "Plataforma web en producción para estudiantes de 2º DAW. Cuenta con sincronización automática de entregas y exámenes con Moodle cada 15 minutos mediante node-ical, soporte PWA para instalación nativa en móviles, notificaciones Web Push y base de datos relacional en Supabase.",
      tech: ["React 18", "Node.js", "Express", "Supabase", "PostgreSQL", "PWA", "Tailwind CSS", "Web Push"],
      highlights: [
        "Sincronización automatizada con Moodle cada 15 min",
        "PWA instalable offline con Service Worker nativo",
        "Control de eventos y tablón de notas por módulo"
      ],
      github: "https://github.com/barbadodev/calendario-daw",
      demo: "#",
      featured: true,
      accentColor: "from-blue-600 to-indigo-700"
    },
    {
      id: "starter-restaurante",
      title: "Los Patios — Carta Digital & Sistema de Reservas",
      badge: "Solución para Hostelería",
      type: "Aplicación Web Gastronómica",
      description: "Solución comercial para restaurantes y tabernas que sustituye los PDFs pesados por una carta digital interactiva con filtros de alérgenos (normativa UE), detector en tiempo real de apertura de cocina y reservas de mesa directas a WhatsApp sin comisiones.",
      tech: ["React 18", "Vite", "Tailwind CSS", "WhatsApp API", "Mobile-First"],
      highlights: [
        "Reserva de mesa personalizada enviada a WhatsApp",
        "Carta interactiva por categorías y alérgenos",
        "Compilación y carga ultra-rápida (<250ms)"
      ],
      github: "https://github.com/barbadodev/starter-restaurante",
      demo: "#",
      featured: true,
      accentColor: "from-amber-600 to-orange-700"
    },
    {
      id: "starter-pyme",
      title: "Dental Córdoba — Portal de Captación para Negocios",
      badge: "Web Comercial Local",
      type: "Landing & Generador de Leads",
      description: "Plantilla web de alta conversión para clínicas, gimnasios y negocios locales. Incluye widget de apertura en directo (*Abierto ahora*), opiniones verificadas estilo Google Maps 4.9⭐ y formulario de solicitud de presupuesto con redirección instantánea.",
      tech: ["React 18", "Vite", "Tailwind CSS", "Google Maps Embed", "SEO Local"],
      highlights: [
        "Detector inteligente de horario en tiempo real",
        "Conversión directa con botón flotante de WhatsApp",
        "Personalización modular en 5 minutos para cualquier pyme"
      ],
      github: "https://github.com/barbadodev/starter-pyme",
      demo: "#",
      featured: true,
      accentColor: "from-emerald-600 to-teal-700"
    }
  ],

  services: [
    {
      title: "Desarrollo Web a Medida",
      description: "Diseño y desarrollo de sitios y aplicaciones web completas con React, Vite y Tailwind CSS. Código limpio, semántico, responsive y optimizado para Google.",
      icon: "Code"
    },
    {
      title: "Backend, APIs y Bases de Datos",
      description: "Creación de arquitecturas RESTful escalables con Node.js, Express y bases de datos relacionales PostgreSQL / Supabase con autenticación segura.",
      icon: "Server"
    },
    {
      title: "Digitalización para Negocios Locales",
      description: "Portales de captación para pymes, cartas interactivas para hostelería y sistemas de reserva directa a WhatsApp sin comisiones abusivas.",
      icon: "Store"
    },
    {
      title: "Automatización & Sincronización",
      description: "Integración de calendarios (iCal/Moodle), automatización de tareas en segundo plano y notificaciones Push personalizadas.",
      icon: "RefreshCw"
    }
  ]
};
