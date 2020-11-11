const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Dustin Schau`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: path.join(__dirname, 'content', 'blog'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins: [
          require('remark-unwrap-images'), // god damn this is annoying
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: ['Twitter'],
                settings: {
                  Twitter: {
                    theme: 'dark', // Use the Twitter dark theme
                  },
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
  ],
};
