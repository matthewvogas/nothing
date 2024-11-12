/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        'size-primary': '124px',
        'size-secondary': '20px',
      },
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
        'text-gradient': 'linear-gradient(180deg, #3B3B3B 0%, #FFF 100%)',
        'color-bg-gradient-primary': 'linear-gradient(180deg, rgba(99,180,255,0) -27.76%, rgba(255,255,255,0.07) 100%), rgba(255,255,255,0.02)',
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
      backdropBlur: {
        '100': '100px',
        '10': '10px',
      },
      padding: {
        '0.25': '0.0625rem',
      },
      spacing: {
        'subtitle': '524px', 
        'box': '792px',
        'sm': '10px', 
      },
      boxShadow: {
        'sm': '0px 0px 10px rgba(0, 0, 0, 0.1)',
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.bg-clip-text': {
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
          },
          '.text-fill-transparent': {
            '-webkit-text-fill-color': 'transparent',
            'text-fill-color': 'transparent',
          },
        });
      },
    ],
  },
}
