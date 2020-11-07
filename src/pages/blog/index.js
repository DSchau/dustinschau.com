import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'

export default ({ data }) => (
  <Layout>
    <h2>The Blog</h2>
    {
      data.posts.nodes.map(post => (
      <article>
        <h3><Link to={post.slug}>{post.frontmatter.title}</Link></h3>
      </article>
      ))
    }
  </Layout>
)

export const query = graphql`
  {
    posts: allMdx {
      nodes {
        slug: gatsbyPath(filePath: "/blog/{Mdx.parent__(File)__name}")
        frontmatter {
          title
        }
      }
    }
  }
`