import React from 'react';
import { SkipNavContent } from '@reach/skip-nav';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image/compat';

import { Layout } from '../../components/layout/';
import { Bio } from '../../components/bio/';
import { MDXProvider } from '../../components/mdx-provider';
import { Seperator } from '../../components/seperator/';
import styles from './blog-post.module.css';

/*
 * TODO: gatsby-image is wack here
 */
export default function BlogPost({ data }) {
  return (
    <Layout customSkipNavigation={true} compressed={true}>
      <article className={`${styles.post} post prose lg:prose-xl`}>
        <h2>{data.mdx.frontmatter.title}</h2>
        {data.mdx.frontmatter.featured && (
          <GatsbyImage
            className="full-width-image"
            {...data.mdx.frontmatter.featured.childImageSharp}
          />
        )}
        <SkipNavContent />
        <MDXProvider>
          <MDXRenderer children={data.mdx.body} />
        </MDXProvider>
        <Seperator />
        <Bio className={styles.bio} />
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
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
