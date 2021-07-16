import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './bio.module.css';

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
          gatsbyImageData(layout: FIXED, height: 72, width: 72)
        }
      }
    }
  `);

  const bioHtml = data.site.siteMetadata.author.bio
    .replace(/_([^_]+)_/g, (_, match) => {
      return `<em>${match}</em>`;
    })
    .replace(/\*([^*]+)\*/g, (_, match) => {
      return `<strong>${match}</strong>`;
    });

  return (
    <div className={[styles.bio].concat(className).join(' ')} {...props}>
      <div className={styles.imageContainer}>
        <GatsbyImage className={styles.image} image={getImage(data.file)} alt="Face of Dustin Schau" />
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
