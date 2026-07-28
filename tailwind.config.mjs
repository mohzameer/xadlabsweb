/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white for light sections.
        paper: '#FBFAF7',
        // Deep midnight-navy base — the brand's dark ground.
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
        // Electric emerald — energy, growth, "signal". The primary accent.
        accent: {
          DEFAULT: '#00D68F',
          300: '#5CF0C0',
          400: '#2EE6A6',
          500: '#00D68F',
          600: '#00B87A',
          700: '#009865',
        },
        // Secondary spark — used sparingly for highlights.
        spark: {
          DEFAULT: '#7C5CFF',
          500: '#7C5CFF',
          400: '#9A80FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
