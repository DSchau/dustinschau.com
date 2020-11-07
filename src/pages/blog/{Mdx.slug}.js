import React from 'react'
import { SkipNavContent } from "@reach/skip-nav";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Layout } from '../../components/layout/'
import { MDXProvider } from '../../components/mdx-provider'
import styles from './blog-post.module.css'

export default ({ data }) => (
  <Layout skipNavigation={false}>
    <article className={`${styles.post} post`}>
      {data.mdx.frontmatter.featured && (
        <Image className="full-width-image" {...data.mdx.frontmatter.featured.childImageSharp} />
      )}
      <SkipNavContent>
        <h2 className={styles.title}>{data.mdx.frontmatter.title}</h2>
      </SkipNavContent>
      <MDXProvider><MDXRenderer children={data.mdx.body} /></MDXProvider>
    </article>
  </Layout>
)

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        featured {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`
