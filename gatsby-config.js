const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Dustin Schau`,
    author: {
      name: `Dustin Schau`,
      bio: `is a Product Leader and Engineer who specializes in all things JavaScript and developer tooling. He's from a little ol' town in Iowa (Ida Grove represent), and then moved to San Francisco in 2019, where he lives with his _future_ wife Maggie (thanks Covid!). He claims he doesn't _totally_ suck.`,
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: path.join(__dirname, 'content', 'images'),
      },
    },
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
          /*
           * TODO: Fix this
           * unsure why it doesn't work
           * https://github.com/raae/gatsby-remark-oembed/pull/93
           */
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
