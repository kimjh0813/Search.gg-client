module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'page-full': '1080px ',
      },
    },
    screens: {
      xsm: '570px',
      sm: '640px',
      md: '768px',
      mlg: '900px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
