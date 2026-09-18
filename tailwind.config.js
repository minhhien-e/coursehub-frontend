/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f0d',
        surface: '#111816',
        surfaceHighlight: '#1a2421',
        primary: '#10b981',
        secondary: '#1f2937', 
        textMain: '#f3f4f6',
        textMuted: '#9ca3af',
        borderDim: '#1f2937',
      },
    },
  },
  plugins: [],
}
