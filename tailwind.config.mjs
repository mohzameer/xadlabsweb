/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ---- Current brand: professional white + light blue ----
        // Page grounds.
        paper: '#FFFFFF',
        // Near-white blue wash used for alternating sections.
        mist: '#F5F9FF',
        // Primary blue scale — buttons, links, accents, diagrams.
        brand: {
          DEFAULT: '#1476D2',
          50: '#F2F8FF',
          100: '#E3F0FF',
          200: '#C2DFFB',
          300: '#92C6F6',
          400: '#55A5EC',
          500: '#1476D2',
          600: '#0F5FAE',
          700: '#0D4C8B',
          800: '#0F3F70',
          900: '#10355C',
        },
        // Neutral scale — text, borders, surfaces. Cool grey, faintly blue.
        slate: {
          DEFAULT: '#3B4A5C',
          50: '#F8FAFC',
          100: '#EFF3F8',
          200: '#E1E8F0',
          300: '#C7D3E0',
          400: '#94A5B8',
          500: '#6B7D93',
          600: '#4E607A',
          700: '#3B4A5C',
          800: '#27323F',
          900: '#16202B',
        },
        // ---- Legacy tokens: kept so archived pages still compile ----
        ink: {
          DEFAULT: '#0B1020',
          900: '#0B1020',
          800: '#131A2E',
          700: '#1E2740',
          600: '#2C3654',
          500: '#5B6478',
          300: '#9AA1B2',
          200: '#C9CDD8',
          100: '#E7E9EF',
          50: '#F2F3F7',
        },
        accent: {
          DEFAULT: '#1476D2',
          300: '#92C6F6',
          400: '#55A5EC',
          500: '#1476D2',
          600: '#0F5FAE',
          700: '#0D4C8B',
        },
        spark: {
          DEFAULT: '#0D4C8B',
          500: '#0D4C8B',
          400: '#0F5FAE',
        },
      },
      fontFamily: {
        // Editorial serif for headlines; Inter for everything structural.
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '74rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 53, 92, 0.04), 0 8px 24px -16px rgba(16, 53, 92, 0.18)',
        lift: '0 2px 4px rgba(16, 53, 92, 0.05), 0 18px 40px -20px rgba(16, 53, 92, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
