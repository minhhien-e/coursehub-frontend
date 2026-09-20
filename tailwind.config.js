/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        surfaceHighlight: 'var(--surface-highlight)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)', 
        textMain: 'var(--text-main)',
        textMuted: 'var(--text-muted)',
        borderDim: 'var(--border-dim)',
      },
    },
  },
  plugins: [],
}
