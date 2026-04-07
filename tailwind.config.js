/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent:  'rgb(var(--c-accent-rgb) / <alpha-value>)',
        bg:      'rgb(var(--c-bg)      / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        fg: {
          DEFAULT: 'rgb(var(--c-fg)   / <alpha-value>)',
          2: 'rgb(var(--c-fg-2) / <alpha-value>)',
          3: 'rgb(var(--c-fg-3) / <alpha-value>)',
          4: 'rgb(var(--c-fg-4) / <alpha-value>)',
          5: 'rgb(var(--c-fg-5) / <alpha-value>)',
          6: 'rgb(var(--c-fg-6) / <alpha-value>)',
          7: 'rgb(var(--c-fg-7) / <alpha-value>)',
        },
        line: {
          1: 'rgb(var(--c-line-1) / <alpha-value>)',
          2: 'rgb(var(--c-line-2) / <alpha-value>)',
          3: 'rgb(var(--c-line-3) / <alpha-value>)',
          4: 'rgb(var(--c-line-4) / <alpha-value>)',
          5: 'rgb(var(--c-line-5) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
