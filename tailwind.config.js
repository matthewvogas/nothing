/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      padding: {
        xs: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        'xs-up': '475px',
        'sm-up': '640px',
        'md-up': '768px',
        'lg-up': '1024px',
        'xl-up': '1280px',
        '2xl-up': '1536px',
      },
      colors: {
        'color-bg': 'var(--color-bg)',
        'color-bg-secondary': 'var(--color-bg-secondary)',
        'color-bg-tertiary': 'var(--color-bg-tertiary)',
        'color-text-primary': 'var(--color-text-primary)',

        // borders
        'color-border-primary': 'rgba(222, 222, 222, 0.40)',
      },
      backgroundImage: {
        'color-text-gradient-primary': 'linear-gradient(180deg, rgba(99, 180, 255, 0) -27.76%, rgba(255, 255, 255, 0.01) 100%), rgba(255, 255, 255, 0.02)',
      },
      backdropBlur: {
        '100': '100px',
      },
      padding: {
        '0.25': '0.0625rem', // 1px
      },
    },
    plugins: [],
  },
}
