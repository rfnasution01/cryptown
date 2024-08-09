/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // --- Border Radius ---
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      rounded: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      '2x': '2rem',
      '3x': '3rem',
      '4x': '4rem',
    },

    //? ----- WHITESPACE SYSTEM -----
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      48: '4.8rem',
      64: '6.4rem',
      80: '8rem',
      96: '9.6rem',
      128: '12.8rem',
    },

    //? ----- TYPOGRAPHY SYSTEM -----
    fontSize: {
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      30: '3rem',
      36: '3.6rem',
      44: '4.4rem',
      52: '5.2rem',
      62: '6.2rem',
      74: '7.4rem',
      86: '8.6rem',
      98: '9.8rem',
    },
    lineHeight: {
      DEFAULT: '1',
      medium: '1.2',
      paragraph: '1.5',
    },
    letterSpacing: {
      DEFAULT: '0.1rem',
      0.1: '0.01rem',
      0.25: '0.025rem',
      0.5: '0.05rem',
      0.75: '0.075rem',
      1.25: '0.125rem',
      1.5: '0.15rem',
      6: '0.6rem',
    },

    // ! Rem and em do not depend on html font-size in media queries.
    // ! Instead, 1rem = 1em = 16px

    // ! We use em units for media queries because rem has some bugs in media queries.
    /* 
    Example:
    1680px / 16px = 105em
    */
    screens: {
      'bigger-desktops': { max: '105em' },
      'smaller-desktops': { max: '85em' },
      'landscape-tablets': { max: '75em' },
      tablets: { max: '59em' },
      'smaller-tablets': { max: '44em' },
      phones: { max: '34em' },
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },

      // ? ----- COLOR SYSTEM
      colors: {
        background: {
          DEFAULT: '#F0f0f0',
          secondary: '#f8fafc',
        },
        border: {
          DEFAULT: '#8C9196',
          subdued: '#C9CCCF',
        },
        sunset: {
          orange: '#fc5c7d',
          pink: '#fca9c6',
          purple: '#6a0572',
        },
        dawn: {
          yellow: '#FDE68A',
          orange: '#FCA5A5',
          pink: '#FBCFE8',
        },
        twilight: {
          light: '#d3b8e8', // Warna ungu muda lembut
          medium: '#8e5ea2', // Warna ungu sedang
          dark: '#4a1a66', // Warna ungu tua
        },
        aurora: {
          green: '#00ff9f', // Hijau neon
          blue: '#00c3ff', // Biru terang
          purple: '#a06eff', // Ungu
          pink: '#ff66c4',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#EFF9F8',
          //* Background
          100: '#E8F4F3',
          200: '#E0F3F1',
          //* Complement
          300: '#D0EDEB',
          400: '#A2DBD7',
          //* Default
          500: '#40A69F',
          //* Hovered
          600: '#3B9993',
          //* Active
          700: '#2F7A75',
          800: '#235C58',
          900: '#173D3A',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
        cryptown: {
          'deep-blue': '#0B3D91',
          white: '#FFFFFF',
          'golder-yellow': '#FFD700',
          'light-gray': '#B0B0B0',
          'deep-indigo': '#1A237E',
          'dark-blue': '#123456',
        },
        dark: '#222222',
        light: '#F5F5F5',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },

      // ? ----- SHADOW SYSTEM
      boxShadow: {
        disabled: '0px -0.9471396207809448px 0px 0px rgba(0, 0, 0, 0.08) inset',
        'active-primary': '0 0 0 3px rgba(64, 0, 83, 0.5)',
      },

      // ? ----- ANIMATION
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-up': {
          '0%': { transform: 'translateY(`0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 25s linear infinite',
        'marquee-up': 'marquee-up 15s linear infinite',
      },
    },
  },
  plugins: ['tailwindcss-animate'],
}
