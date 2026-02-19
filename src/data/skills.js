// ──────────────────────────────────────────
// Aquí defines tus habilidades.
// Para agregar una: copia un objeto y cambia los datos.
// ──────────────────────────────────────────

export const skills = [
  {
    id: 1,
    category: 'Frontend',
    icon: '⚛️',
    items: [
      { name: 'React',        pct: 80 },
      { name: 'HTML5 / CSS3', pct: 90 },
      { name: 'Tailwind CSS', pct: 75 },
      { name: 'JavaScript',   pct: 78 },
    ],
    badges: ['JSX', 'Hooks', 'Responsive'],
  },
  {
    id: 2,
    category: 'Backend',
    icon: '🐍',
    items: [
      { name: 'Python',    pct: 82 },
      { name: 'Flask',     pct: 70 },
      { name: 'REST APIs', pct: 75 },
    ],
    badges: ['Flask-CORS', 'JWT', 'API REST'],
  },
  {
    id: 3,
    category: 'Base de Datos',
    icon: '🗄️',
    items: [
      { name: 'MySQL ★',     pct: 85 },
      { name: 'SQL Avanzado', pct: 78 },
      { name: 'Diseño de BD', pct: 80 },
    ],
    badges: ['Modelado ER', 'Joins', 'Triggers'],
  },
  {
    id: 4,
    category: 'Herramientas',
    icon: '🛠️',
    items: [
      { name: 'Git / GitHub',    pct: 80 },
      { name: 'VS Code',         pct: 95 },
      { name: 'Vercel / Netlify', pct: 72 },
    ],
    badges: ['Git Flow', 'CI/CD', 'Deploy'],
  },
]