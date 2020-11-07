import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import styles from './preview.module.css'

function Preview({ excerpt, frontmatter, slug }) {
  return (
    <section className={styles.container}>
      {frontmatter.featured && (
        <div className={styles.featured}>
          <Image {...frontmatter.featured.childImageSharp} />
        </div>
      )}
      <h3 className={styles.title}><Link to={slug}>{frontmatter.title}</Link></h3>
      <p>{excerpt}</p>
    </section>
  ) 
}

export { Preview }
