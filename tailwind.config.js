/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007AFF',
          dark: '#2658cb',
        },
      },
      backgroundColor: {
        primary: {
          light: '#F5FBFF',
          dark: '#0F0F0F',
        },
      },
      textColor: {
        skin: {
          base: 'var(--text-primary)',
        },
      },
      backgroundImage: {
        'header-gradient': {
          light: {
            'linear-gradient':
              '(0deg, rgba(245,251,255,0.1) 0%, rgb(255, 255, 255) 100%)',
          },
          dark: '',
        },
      },
      screens: {
        mobile: '375px',
        tablet: '960px',
        desktop: '1248px',
      },
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
};
