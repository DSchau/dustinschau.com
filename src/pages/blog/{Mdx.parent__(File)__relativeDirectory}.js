import React from 'react';
import { SkipNavContent } from '@reach/skip-nav';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Layout } from '../../components/layout/';
import { Bio } from '../../components/bio/';
import { MDXProvider } from '../../components/mdx-provider';
import styles from './blog-post.module.css';

export default function BlogPost({ data }) {
  return (
    <Layout customSkipNavigation={true} compressed={true}>
      <article className={`${styles.post} post prose lg:prose-xl`}>
        <SkipNavContent>
          <h2 className={styles.title}>{data.mdx.frontmatter.title}</h2>
        </SkipNavContent>
        {data.mdx.frontmatter.featured && (
          <Image
            className="full-width-image"
            {...data.mdx.frontmatter.featured.childImageSharp}
          />
        )}
        <MDXProvider>
          <MDXRenderer children={data.mdx.body} />
        </MDXProvider>
        <Bio />
      </article>
    </Layout>
  );
}

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
`;
