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
      },
    },
    plugins: [],
  },
}
