/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent:  '#00d4aa',
        accent2: '#f7931a',
        dark:    '#080c10',
        dark2:   '#0d1117',
        surface: '#111820',
        border:  '#1e2d3d',
        muted:   '#546e7a',
      },
      animation: {
        'fade-up':   'fadeUp .7s ease both',
        'blink':     'blink 1s step-end infinite',
        'float':     'float 3s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseDot: { '0%,100%': { boxShadow: '0 0 0 0 rgba(0,212,170,.4)' }, '70%': { boxShadow: '0 0 0 8px rgba(0,212,170,0)' } },
      },
    },
  },
  plugins: [],
}