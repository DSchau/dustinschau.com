import React from 'react';
import { SkipNavContent } from '@reach/skip-nav';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Layout } from '../../components/layout/';
import { Bio } from '../../components/bio/';
import { MDXProvider } from '../../components/mdx-provider';
import { Seperator } from '../../components/seperator/';
import * as styles from './blog-post.module.css';

/*
 * TODO: gatsby-image is wack here
 */
export default function BlogPost({ data }) {
  return (
    <Layout customSkipNavigation={true} compressed={true}>
      <article className={`${styles.post} post prose lg:prose-xl`}>
        <h2 className={styles.title}>{data.mdx.frontmatter.title}</h2>
        <h3 className={styles.date}>{data.mdx.frontmatter.date}</h3>
        {data.mdx.frontmatter.featured && (
          <GatsbyImage
            className="full-width-image"
            image={getImage(data.mdx.frontmatter.featured)}
            alt={data.mdx.title}
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
        date(formatString: "MMMM Do YYYY")
        featured {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, height: 600)
          }
        }
        title
      }
    }
  }
`;
