import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './bio.module.css';

function Bio({ className, ...props }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author {
            name
            bio
          }
        }
      }

      file(relativePath: { regex: "/me.png/" }) {
        childImageSharp {
          fixed(height: 72, width: 72, cropFocus: NORTH) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const bioHtml = data.site.siteMetadata.author.bio
    .replace(/_([^_]+)_/g, (_, match) => {
      return `<em>${match}</em>`;
    })
    .replace(/\*([^\*]+)\*/g, (_, match) => {
      return `<strong>${match}</strong>`;
    });

  return (
    <div className={[styles.bio].concat(className).join(' ')} {...props}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} {...data.file.childImageSharp} />
      </div>
      <p>
        <strong className={styles.name}>
          {data.site.siteMetadata.author.name + ` `}
        </strong>
        <span dangerouslySetInnerHTML={{ __html: bioHtml }} />
      </p>
    </div>
  );
}

export { Bio };
