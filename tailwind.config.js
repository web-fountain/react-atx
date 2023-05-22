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
        'header-gradient': 'var(--header-bg-linear-gradient)',
        'header-image': 'var(--header-bg-image)'
      },
      screens: {
        mobile: '375px',
        tablet: '960px',
        desktop: '1248px'
      },
      fontFamily: {
        regular: ['Poppins Regular, sans-serif']
      },
      fontSize: {
        '2px': 'var(--2px)',
        '4px': 'var(--4px)',
        '8px': 'var(--8px)',
        '12px': 'var(--12px)',
        '16px': 'var(--16px)',
        '20px': 'var(--20px)',
        '24px': 'var(--24px)',
        '32px': 'var(--32px)',
        '40px': 'var(--40px)',
        '48px': 'var(--48px)',
        '56px': 'var(--56px)',
        '64px': 'var(--64px)'
      },
      fontWeight: {
        regular: 'var(--regular)',
        medium: 'var(--medium)',
        'semi-bold': 'var(--semi-bold)',
        bold: 'var(--bold)'
      },
      lineHeight: {
        20: '20px',
        30: '30px'
      }
    }
  },
  plugins: []
};
