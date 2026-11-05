// ==============================================================================
// CONFIGURACIÓN PERSONAL DEL PORTFOLIO (barbadodev)
// ==============================================================================

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Antonio Barbado",
    handle: "barbadodev",
    avatar: "/avatar.jpg",
    title: "Estudiante de 2º DAW & Desarrollador Web",
    subtitle: "2º curso de Desarrollo de Aplicaciones Web en Córdoba · Apasionado de la Inteligencia Artificial y el software práctico",
    location: "Córdoba, Andalucía, España",
    statusBadge: "Buscando prácticas de empresa & proyectos",
    bio: "Soy estudiante de 2º año de DAW en Córdoba. No pretendo vender humo ni hacerme pasar por senior: cuento con una base técnica sólida aprendida en clase, una enorme curiosidad y muchas ganas de aprender cada día. Me apasiona el impacto de la Inteligencia Artificial en la programación y la utilizo a diario para acelerar mi aprendizaje, investigar documentación y resolver problemas con agilidad. Busco una oportunidad para aportar valor desde el primer minuto en mis prácticas de empresa o colaborando en proyectos reales.",
  },

  social: {
    github: "https://github.com/barbadodev",
    linkedin: null,
    email: "contacto.barbadodev@gmail.com",
    whatsapp: "34689413922",
    whatsappDirectMessage: "Hola Antonio, he visto tu portfolio y me gustaría hablar contigo sobre una oportunidad o proyecto.",
  },

  techStack: {
    frontend: [
      { name: "JavaScript (ES6+)", level: "Fundamentos sólidos de DAW", icon: "Code2" },
      { name: "React 18 / 19", level: "Base práctica en proyectos", icon: "Atom" },
      { name: "HTML5 & CSS3 Semántico", level: "Estructura & accesibilidad", icon: "Layout" },
      { name: "Tailwind CSS", level: "Diseño ágil y responsive", icon: "Palette" },
      { name: "Vite", level: "Entorno de desarrollo rápido", icon: "Zap" },
      { name: "PWA (Service Workers)", level: "Nociones aplicadas en proyectos", icon: "Smartphone" },
    ],
    backend: [
      { name: "Node.js (ESM)", level: "Base de servidor y runtime", icon: "Server" },
      { name: "Express.js", level: "Creación de endpoints REST", icon: "Cpu" },
      { name: "APIs RESTful", level: "Consumo y diseño de rutas", icon: "Network" },
      { name: "Autenticación & JWT", level: "Conceptos aprendidos en DAW", icon: "ShieldCheck" },
      { name: "Sincronización iCal", level: "Integración con Moodle", icon: "Calendar" },
    ],
    database: [
      { name: "SQL & Relaciones", level: "Diseño y consultas de DAW", icon: "Layers" },
      { name: "PostgreSQL", level: "Modelo relacional", icon: "Database" },
      { name: "Supabase", level: "BaaS, Auth y base de datos", icon: "Flame" },
    ],
    tools: [
      { name: "Inteligencia Artificial Asistida", level: "Pasión activa & uso diario", icon: "Bot" },
      { name: "Git & GitHub", level: "Control de versiones habitual", icon: "GitBranch" },
      { name: "Vercel & Despliegues", level: "Puesta en producción web", icon: "Cloud" },
      { name: "PowerShell & Terminal", level: "Manejo de entorno local", icon: "Terminal" },
    ]
  },

  projects: [
    {
      id: "calendario-daw",
      title: "Calendario DAW — Plataforma Académica Colaborativa",
      badge: "Proyecto de Clase Real",
      type: "Full-Stack Web App & PWA",
      description: "Plataforma web construida para resolver un problema real de mis compañeros de 2º DAW: centralizar entregas y exámenes. Conecta automáticamente con el calendario Moodle cada 15 minutos, permite instalación como PWA en móviles y guarda datos en Supabase/PostgreSQL.",
      tech: ["React 18", "Node.js", "Express", "Supabase", "PostgreSQL", "PWA", "Tailwind CSS"],
      highlights: [
        "Sincronización automática de tareas con Moodle",
        "PWA instalable offline en teléfonos móviles",
        "Diseñado para uso diario real entre estudiantes"
      ],
      github: "https://github.com/barbadodev/calendario-daw",
      demo: "#",
      featured: true,
      accentColor: "from-blue-600 to-indigo-700"
    },
    {
      id: "starter-restaurante",
      title: "Los Patios — Carta Digital & Reservas Directas",
      badge: "Iniciativa para Negocios",
      type: "Aplicación Web Gastronómica",
      description: "Propuesta práctica orientada a la hostelería cordobesa. Sustituye las fotos borrosas de cartas por un menú digital adaptado a móviles con indicación obligatoria de alérgenos (normativa UE) y reservas directas por WhatsApp sin pagar comisiones a plataformas intermediarias.",
      tech: ["React 18", "Vite", "Tailwind CSS", "WhatsApp API", "Mobile-First"],
      highlights: [
        "Reservas directas al WhatsApp del local",
        "Filtro de alérgenos según normativa europea",
        "Carga instantánea y pensada para móviles"
      ],
      github: "https://github.com/barbadodev/starter-restaurante",
      demo: "#",
      featured: true,
      accentColor: "from-amber-600 to-orange-700"
    },
    {
      id: "starter-pyme",
      title: "Dental Córdoba — Portal de Captación Local",
      badge: "Iniciativa para PYMEs",
      type: "Landing & Solicitud de Citas",
      description: "Demostración de web comercial orientada a clínicas o talleres locales. Integra cálculo en tiempo real de apertura comercial (Abierto ahora / Cerrado), opiniones de Google y botón rápido para solicitar cita o presupuesto por WhatsApp.",
      tech: ["React 18", "Vite", "Tailwind CSS", "Google Maps Embed", "SEO Básico"],
      highlights: [
        "Cálculo automático de horario comercial en vivo",
        "Botón directo de WhatsApp para pedir cita",
        "Estructura limpia y fácil de personalizar"
      ],
      github: "https://github.com/barbadodev/starter-pyme",
      demo: "#",
      featured: true,
      accentColor: "from-emerald-600 to-teal-700"
    }
  ],

  services: [
    {
      title: "Desarrollo Frontend con React & Tailwind",
      description: "Creación de interfaces web limpias, modernas y adaptadas a teléfonos móviles utilizando las tecnologías aprendidas en el ciclo.",
      icon: "Code"
    },
    {
      title: "Lógica Backend & APIs REST",
      description: "Conexión de aplicaciones a servidores Node.js con Express y gestión de bases de datos relacionales PostgreSQL / Supabase.",
      icon: "Server"
    },
    {
      title: "Desarrollo Acelerado con IA",
      description: "Uso diario y apasionado de asistentes de inteligencia artificial para investigar, optimizar código y entregar soluciones funcionales en menos tiempo.",
      icon: "Bot"
    },
    {
      title: "Digitalización Práctica para Comercios",
      description: "Ayudo a pequeños comercios y autónomos a tener presencia web real, cartas digitales y contacto directo a WhatsApp sin complicaciones técnicas.",
      icon: "Store"
    }
  ]
};
