import React from 'react'
import { graphql, Link } from 'gatsby'

import { Layout } from '../../components/layout/'
import { Preview } from '../../components/preview/'

export default ({ data }) => (
  <Layout>
    <div className="grid lg:grid-cols-2">
      {
        data.posts.nodes.map(post => (
          <Preview key={post.id} {...post} />
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  {
    posts: allMdx {
      nodes {
        id
        excerpt
        slug
        # slug: gatsbyPath(filePath: "/blog/{Mdx.slug}")
        frontmatter {
          title
        }
      }
    }
  }
`