import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './preview.module.css';

function Preview({ excerpt, frontmatter, slug, wrapper: Wrapper = 'article' }) {
  return (
    <Wrapper className={styles.container}>
      {frontmatter.featured && (
        <div className={styles.featured}>
          <GatsbyImage image={getImage(frontmatter.featured)} />
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
    excerpt(pruneLength: 160, truncate: true)
    slug: gatsbyPath(filePath: "/blog/{Mdx.parent__(File)__relativeDirectory}")
    frontmatter {
      featured {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, height:400)
        }
      }
      title
    }
  }
`;

export { Preview };
