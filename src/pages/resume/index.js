import React from 'react';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Box from './box'

import * as styles from './index.module.css';

export default function Resume({ data }) {
  return (
    <main className={styles.main}>
      <section className={[styles.grid, styles.bio].join(' ')}>
        <div className={styles.cell}>
          <Box>Engineering &amp; Product Leader</Box>
          <h1 className={styles.title}>Hello! I'm Dustin Schau.</h1>
          <p className={styles.bioText}>
            I'm a Product and Engineering leader who has experience in scaling Product delivery at hyper-growth startups. I care <strong>quite a lot</strong> about the details, and believe that the best performing Engineering teams blend the best parts of Product, Engineering, and Design.
          </p>
        </div>
        <div className={[styles.cell, styles.image].join(' ')}>
          <GatsbyImage image={getImage(data.me)} alt="Picture of Dustin in Ireland" />
        </div>
      </section>
      <section className={[styles.grid].join(' ')}>
        <div className={[styles.cell, styles.experience].join(' ')}>
          <h2 className={styles.subTitle}>Experience</h2>
        </div>
        <div className={styles.details}>
          <Box>Contact Info</Box>
          <ul>
            <li>dustinschau@gmail.com</li>
            <li>712.212.3001</li>
            <li>dustinschau.com</li>
            <li>San Francisco, CA</li>
          </ul>
          <Box>Education</Box>
          <ul>
            <li><strong>2009 &ndash; 2013</strong></li>
            <li>Creighton University</li>
            <li>Computer Science</li>
            <li className={styles.small}>3.85 GPA, Summa Cum Laude</li>
          </ul>
          <Box>Skills</Box>
          <ul>
            <li>Building Teams</li>
            <li>Scaling Product Delivery</li>
            <li>Hyper-growth Startups</li>
            <li>Leading with Kindness</li>
          </ul>
        </div>
      </section>
      <a href="/api/page-to-pdf?path=/resume/">Download PDF</a>
    </main>
  );
}

export const resumeQuery = graphql`
  {
    me: file(relativePath: {eq: "me.png"}) {
      childImageSharp {
        gatsbyImageData(layout:FIXED, height:144, width:144)
      }
    }
  }
`
