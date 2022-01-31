import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FiPhone, FiHome, FiMail, FiLink, FiLinkedin, FiGithub } from 'react-icons/fi'

import '@fontsource/raleway'
import '@fontsource/hahmlet'

import * as styles from './resume-layout.module.css';

import Box from './box'
import Skill from './skill'

export default function ResumeLayout({ children, download: Download }) {
  const data = useStaticQuery(graphql`
    query Avatar {
      me: file(relativePath: {eq: "me.png"}) {
        childImageSharp {
          gatsbyImageData(layout:FIXED, height:144, width:144)
        }
      }
    }
  `)

  return (
    <main className={styles.resume}>
      <p className={styles.lastEdited}>Last Edited: January 29th, 2022</p>
      <section className={[styles.grid, styles.bio].join(' ')}>
        <div className={styles.cell}>
          <Box className={styles.printHide}>Engineering &amp; Product Leader</Box>
          <h1 className={styles.title}>Hello! I'm Dustin Schau.</h1>
          <p className={styles.bioText}>
            I'm a Product and Engineering leader who has experience in scaling Product delivery for maximal impact at hyper-growth startups. <span className={styles.printHide}>I care <strong>quite a lot</strong> about the details, and believe that the best performing Engineering teams pull insights, practices, and expertise from Product, Engineering, and Design, without losing sight of what matters most: <span class={styles.under}>building a product that delights the customer</span>.</span>
          </p>
        </div>
        <div className={[styles.cell, styles.image].join(' ')}>
          <GatsbyImage image={getImage(data.me)} alt="Picture of Dustin in Ireland" />
        </div>
      </section>
      <section className={[styles.grid].join(' ')}>
        <div className={[styles.cell, styles.experience].join(' ')}>
          {children}
        </div>
        <div className={styles.details}>
          <Skill title="Contact" items={[
            <a className={styles.iconLink} href="mailto:dustinschau@gmail.com"><FiMail className={styles.icon} />dustinschau@gmail.com</a>,
            <span><FiPhone className={styles.icon} />712.212.3001</span>,
            <a className={styles.iconLink} href="https://dustinschau.com"><FiLink className={styles.icon} />dustinschau.com</a>,
            <a className={styles.iconLink} href="https://www.linkedin.com/in/dschau/"><FiLinkedin className={styles.icon} />linkedin.com/in/dschau</a>,
            <a className={styles.iconLink} href="https://www.github.com/dschau"><FiGithub className={styles.icon} />github.com/dschau</a>,
            <span><FiHome className={styles.icon} />San Francisco, CA</span>,
          ]} />
          <Skill title="Education" items={[
            <strong>2009 &ndash; 2013</strong>,
            'Creighton University',
            'B.S. in Computer Science',
            <span className={styles.small}>3.85 GPA, Summa Cum Laude</span>
          ]} />
          <Skill title="Skills" items={[
            'Building empowered teams',
            'Scaling Product delivery',
            'Hyper-growth startups',
            'Building empowered teams',
            'Leading with kindness'
          ]} />
        </div>
      </section>
      <Download className={styles.downloadResume} />
    </main>
  );
}

