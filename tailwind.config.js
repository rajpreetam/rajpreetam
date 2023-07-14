/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#f1f5f9',
        'bg-dark': '#0f172a',
        'text-light': '#374151',
        'text-dark': '#cbd5e1',
        'bg-card-light': '#e2e8f0',
        'bg-card-dark': '#1e293b',
        'text-light-lighter': '#4b5563',
        'text-dark-lighter': '#94a3b8'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
