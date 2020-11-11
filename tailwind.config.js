module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.{js,css}'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
