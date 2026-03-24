/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
      extend: {
          colors: {
              theme: {
                  bg: 'var(--bg)',
                  panel: 'var(--panel)',
                  card: 'var(--card)',
                  border: 'var(--border)',
                  text: 'var(--text)',
                  muted: 'var(--muted)',
                  accent: 'var(--accent)',
                  accentGlow: 'var(--accent-glow)',
                  altBg: 'var(--alt-bg)'
              }
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
          backgroundImage: {
              'hero-glow': 'var(--hero-glow)',
              'grid-pattern': 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)'
          }
      }
  },
  plugins: [],
}
