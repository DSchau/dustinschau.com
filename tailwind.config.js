const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.{js,css}'],
  },
  /*
   * Resetting typography styles for pre/coe
   */
  theme: {
    typography: {
      default: {
        css: {
          maxWidth: 'none',
          pre: {
            marginTop: `0 !important` /* I don't really understand tailwind's css specificity, therefore HACK */,
            marginBottom: `0 !important`,
            borderRadius: `0 !important`,
            paddingTop: em(32, 14),
          },
          img: {
            marginTop: '0 !important',
            marginBottom: '0 !important',
          },
          ol: {
            marginTop: `0 !important`,
            marginBottom: `0 !important`,
          },
          ul: {
            marginTop: `0 !important`,
            marginBottom: `0 !important`,
          },
        },
      },
      xl: {
        css: {
          pre: {
            paddingTop: em(32, 14),
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
