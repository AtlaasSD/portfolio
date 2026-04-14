/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        panel: {
          DEFAULT: '#0a0a0a',
          surface: '#0f0f0f',
          card:    '#141414',
          hover:   '#1c1c1c',
        },
        hi:    '#e2e8f0',
        mid:   '#94a3b8',
        lo:    '#475569',
        dim:   '#1e293b',
        accent: '#3b82f6',
        green:  '#22c55e',
        amber:  '#f59e0b',
        rose:   '#f43f5e',
      },
      animation: {
        'scroll-l':  'scroll-l 38s linear infinite',
        'scroll-r':  'scroll-r 34s linear infinite',
        'blink':     'blink 1.1s step-end infinite',
        'reveal-up': 'reveal-up 0.55s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-dot': 'pulse-dot 2.5s ease-in-out infinite',
      },
      keyframes: {
        'scroll-l': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'scroll-r': {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
        'blink': {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.6)' },
          '50%':     { boxShadow: '0 0 0 6px rgba(34,197,94,0)' },
        },
      },
      borderColor: {
        panel: 'rgba(255,255,255,0.07)',
        mid:   'rgba(255,255,255,0.12)',
      },
    },
  },
  plugins: [],
};
