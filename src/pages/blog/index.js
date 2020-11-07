import React from 'react'
import { SkipNavContent } from "@reach/skip-nav";

import { graphql, Link } from 'gatsby'

import { Layout } from '../../components/layout/'
import { Preview } from '../../components/preview/'

export default ({ data }) => (
  <Layout>
    <div className="grid lg:grid-cols-2">
      <SkipNavContent>
        {
          data.posts.nodes.map(post => (
            <Preview key={post.id} {...post} />
          ))
        }
      </SkipNavContent>
    </div>
  </Layout>
)

export const query = graphql`
  {
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        excerpt
        slug
        # slug: gatsbyPath(filePath: "/blog/{Mdx.slug}")
        frontmatter {
          featured {
            childImageSharp {
              fluid(maxHeight: 200, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  }
`