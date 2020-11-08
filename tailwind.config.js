module.exports = {
  future: {
    defaultLineHeights: true,
  },
  purge: ['src/**/*.{js,css}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
