import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: [
          'var(--font-plex-sans)',
          'var(--font-lxgw-wenkai)',
          ...defaultTheme.fontFamily.sans,
        ],
        heading: [
          'var(--font-plex-sans)',
          'var(--font-lxgw-wenkai)',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'var(--font-plex-mono)',
          'var(--font-lxgw-wenkai)',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Registered as a plugin (not in globals.css) so posts.css can @apply it —
    // Tailwind cannot resolve @apply of classes defined in a different CSS file.
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animated-underline': {
          backgroundImage:
            'linear-gradient(transparent, transparent), linear-gradient(to right, currentColor, currentColor)',
          backgroundSize: '100% 2px, 0 2px',
          backgroundPosition: '100% 100%, 0 100%',
          backgroundRepeat: 'no-repeat',
        },
        '@media (prefers-reduced-motion: no-preference)': {
          '.animated-underline': {
            transition: '0.3s ease',
            transitionProperty:
              'background-size, color, background-color, border-color',
          },
        },
        '.animated-underline:hover, .animated-underline:focus-visible, .animated-underline.active':
          {
            backgroundSize: '0 2px, 100% 2px',
          },
      });
    }),
  ],
} satisfies Config;
