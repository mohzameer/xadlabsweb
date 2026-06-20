/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Minimal monochrome palette: near-black ink on warm off-white paper.
        paper: '#faf9f6',
        ink: {
          DEFAULT: '#1a1a1a',
          900: '#1a1a1a',
          700: '#3d3d3d',
          500: '#6b6b6b',
          300: '#a3a3a3',
          200: '#d6d4ce',
          100: '#e8e6e0',
        },
      },
      fontFamily: {
        // Headings/UI: Inter (Medium uses a bold sans for titles).
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Reading body: Charter-like serif, Medium's signature article face.
        serif: ['"Source Serif 4"', 'Charter', '"Bitstream Charter"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
