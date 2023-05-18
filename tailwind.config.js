/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'background-color': 'var(--background-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-success': 'var(--text-success)',
        'text-danger': 'var(--text-danger)',
        'text-warning': 'var(--text-warning)',
        'text-info': 'var(--text-info)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted',
        'text-white': 'var(--text-white)'
      },
      backgroundImage: {
        'header-gradient': {
          light: {
            'linear-gradient':
              '(0deg, rgba(245,251,255,0.1) 0%, rgb(255, 255, 255) 100%)'
          },
          dark: ''
        }
      },
      screens: {
        mobile: '375px',
        tablet: '960px',
        desktop: '1248px'
      },
      fontFamily: {
        poppins: ['Poppins, sans-serif']
      }
    }
  },
  plugins: []
};
