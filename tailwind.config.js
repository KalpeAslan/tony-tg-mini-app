/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './modules/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CheekyChic', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        cheeky: ['CheekyChic', 'cursive'],
        roboto: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        tony: {
          // Purple theme
          primary: 'var(--bg-primary)',
          primaryHover: '#401d6c',
          secondary: 'var(--bg-secondary)',
          secondaryHover: '#5d2e85',
          accent: 'var(--bg-accent)',
          accentHover: 'var(--btn-primary-hover)',
          highlight: 'var(--bg-highlight)',
          dark: 'var(--theme-dark)',
          muted: 'var(--text-muted)',

          // Yellow/orange theme
          yellow: 'var(--theme-yellow)',
          orange: 'var(--theme-orange)',
          orangeLight: 'var(--theme-orange-light)',
          orangeDark: '#d06a09',
          orangeHover: '#e59613',

          // Currency colors
          gray: '#9e9e9e',
          grayHover: '#8e8e8e',
          blue: 'var(--bg-accent)',
          blueHover: 'var(--btn-primary-hover)',
          green: '#55fc33',
          greenHover: '#45ec23',
          
          // Status colors
          error: 'var(--text-error)',
          
          // Border colors
          whiteBorder: 'var(--border-white-light)',
          whiteBorderMedium: 'var(--border-white-medium)',
          whiteBorderStrong: 'var(--border-white-strong)',
        },
      },
      borderWidth: {
        '2.5': '2.5px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
