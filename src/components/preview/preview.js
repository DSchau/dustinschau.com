import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image/compat';

import styles from './preview.module.css';

function Preview({ excerpt, frontmatter, slug, wrapper: Wrapper = 'article' }) {
  return (
    <Wrapper className={styles.container}>
      {frontmatter.featured && (
        <div className={styles.featured}>
          <GatsbyImage {...frontmatter.featured.childImageSharp} />
        </div>
      )}
      <h3 className={styles.title}>
        <Link to={slug}>{frontmatter.title}</Link>
      </h3>
      <p>{excerpt}</p>
    </Wrapper>
  );
}

export const blogPostPreviewFragment = graphql`
  fragment MdxBlogPostPreviewFragment on Mdx {
    id
    excerpt
    slug: gatsbyPath(filePath: "/blog/{Mdx.parent__(File)__relativeDirectory}")
    frontmatter {
      featured {
        childImageSharp {
          fluid(maxHeight: 400, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
    }
  }
`;

export { Preview };
