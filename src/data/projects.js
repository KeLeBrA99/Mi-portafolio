// ──────────────────────────────────────────
// Aquí defines tus proyectos.
// featured: true  → tarjeta grande (la principal)
// featured: false → tarjeta normal
// ──────────────────────────────────────────

export const projects = [
  {
    id: 1,
    featured: true,
    emoji: '📦',
    name: 'SmartBin WMS',
    badge: '⭐ Proyecto Destacado',
    tags: ['JavaScript', 'React', 'Python', 'MySQL', 'Full Stack'],
    tagAccent: ['Full Stack'],   // estos van en naranja
    description:
      'Sistema de Gestión de Bodegas completo para control de inventarios en tiempo real, optimización inteligente de ubicaciones y reducción de pérdidas operativas.',
    bullets: [
      '📊 Dashboard en tiempo real con KPIs de inventario',
      '🗺️ Mapa de ubicaciones y asignación automática',
      '📋 Gestión de entradas, salidas y transferencias',
      '🔔 Alertas de stock mínimo y caducidad',
    ],
    links: {
      code: 'https://github.com/KeLeBrA99/SmartBin-WMS',
      demo: null,   // cuando tengas demo, pon la URL aquí
    },
  },
  {
    id: 2,
    featured: false,
    emoji: '♻️',
    name: 'Recicla Ya',
    badge: null,
    tags: ['JavaScript'],
    tagAccent: [],
    description:
      'Página web sobre la iniciativa verde ReciclaYa. Plataforma de concienciación ambiental con información sobre reciclaje y puntos de recolección.',
    bullets: [],
    links: {
      code: 'https://github.com/KeLeBrA99/recicla-ya-main',
      demo: null,
    },
  },
  {
    id: 3,
    featured: false,
    emoji: '🎸',
    name: 'Ácidos Colombia',
    badge: null,
    tags: ['Python', 'Flask', 'HTML'],
    tagAccent: [],
    description:
      'Aplicación web full-stack con Python y Flask para el blog Ácidos Colombia. Arquitectura completa cliente-servidor.',
    bullets: [],
    links: {
      code: 'https://github.com/KeLeBrA99/Pagina-Acidos-Colombia',
      demo: null,
    },
  },
  {
    id: 4,
    featured: false,
    emoji: '🛒',
    name: 'TechStore E-commerce',
    badge: null,
    tags: ['JavaScript', 'E-commerce'],
    tagAccent: [],
    description:
      'Tienda online de tecnología con catálogo de productos, carrito de compras y flujo de checkout completo.',
    bullets: [],
    links: {
      code: 'https://github.com/KeLeBrA99/techstore-ecommerce',
      demo: null,
    },
  },
]