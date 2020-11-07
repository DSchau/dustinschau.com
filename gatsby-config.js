const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Dustin Schau`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'Blog',
        path: path.join(__dirname, 'content', 'blog')
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {

      }
    },
    {
      resolve: 'gatsby-plugin-postcss'
    }
  ]
}