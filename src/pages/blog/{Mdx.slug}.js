import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'

import { Layout } from '../../components/layout/'
import { MDXProvider } from '../../components/mdx-provider'
import styles from './blog-post.module.css'

export default ({ data }) => (
  <Layout>
    <article className={`${styles.post} post`}>
      <h2 className={styles.title}>{data.mdx.frontmatter.title}</h2>
      <MDXProvider><MDXRenderer children={data.mdx.body} /></MDXProvider>
    </article>
  </Layout>
)

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`
