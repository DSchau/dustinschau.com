import React from 'react';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FiPhone, FiHome, FiMail, FiLink, FiLinkedin, FiGithub } from 'react-icons/fi'

import '@fontsource/raleway'
import '@fontsource/hahmlet'

import * as styles from './index.module.css';

import Box from './box'
import Experience from './experience'
import Skill from './skill'

export default function Resume({ data }) {
  return (
    <main className={styles.main}>
      <section className={[styles.grid, styles.bio].join(' ')}>
        <div className={styles.cell}>
          <Box>Engineering &amp; Product Leader</Box>
          <h1 className={styles.title}>Hello! I'm Dustin Schau.</h1>
          <p className={styles.bioText}>
            I'm a Product and Engineering leader who has experience in scaling Product delivery at hyper-growth startups. I care <strong>quite a lot</strong> about the details, and believe that the best performing Engineering teams pull insights, practices, and expertise from Product, Engineering, and Design, without losing sight of what matters most: <span class={styles.under}>building a product that delights the customer</span>.
          </p>
        </div>
        <div className={[styles.cell, styles.image].join(' ')}>
          <GatsbyImage image={getImage(data.me)} alt="Picture of Dustin in Ireland" />
        </div>
      </section>
      <section className={[styles.grid].join(' ')}>
        <div className={[styles.cell, styles.experience].join(' ')}>
          <h2 className={styles.subTitle}>Experience</h2>
          <Experience
            jobTitle="VP of Engineering"
            employer="Gatsby, Inc. • Fully Distributed"
            dates={[
              new Date('08/01/2021')
            ]}
            description="Leads the 30+ engineering team building the fastest web framework for the headless web"
            items={[
              'Launched Gatsby 4, our most fully featured release yet with game-changing features like DSG (deferred static generation) and SSR (server-side rendering)',
              'Launched new Hosting product, a best-in-class CDN customized to key performance metrics for the Gatsby user',
              'Built out management layer and increased total engineering staffing by 25% in one quarter'
            ]}
          />
          <Experience
            jobTitle="VP of Product"
            employer="Gatsby, Inc. • Fully Distributed"
            dates={[
              new Date('09/01/2018'),
              new Date('07/31/2021')
            ]}
            description="Joined as the 11th employee at Gatsby as an engineer, and built and founded the Product team at Gatsby"
            items={[
              'Helped establish and implement product vision and helped build an open-core business model which increased revenue from $400K to $2.5M ARR',
              'Established Product Council, a quarterly planning and collaborative process wherein top-down strategy from key business leaders and self-directing squads are blended to deliver strategically valuable Product offerings',
              'Grew the Product team from 1 to 8 (including Design), and organized the teams into cross-functional squads composed of Product, Engineering, and Design'
            ]}
          />
          <Experience
            jobTitle="Principal Consultant"
            employer="Object Partners • Omaha, Nebraska"
            dates={[
              new Date('05/01/2016'),
              new Date('09/01/2018')
            ]}
            description="Served as a technical consultant to assist teams, companies, and organizations by assisting and leading developmental efforts, improving in-house developer knowledge, and establishing best practices."
            items={[
              'Built a native, cross-platform messaging app used by 10K monthly active users',
              'Recommended and re-platformed technology stack for a Fortune 1000 company to React and React Native'
            ]}
          />
          <Experience
            jobTitle="Senior Application Developer"
            employer="Union Pacific • Omaha, Nebraska"
            dates={[
              new Date('04/01/2015'),
              new Date('05/01/2016')
            ]}
            description="I began my career at Union Pacific, honing my front-end developer expertise and knowledge by creating mobile/hybrid applications, creating an application generator, and building an internal open-source component library (a la Bootstrap) and associated tooling."
            items={[
              'Built a reusable, accessible component library with AngularJS used by all teams at Union Pacific',
              'Built a next-generation application generator to speed up delivery to cut down startup time by 25%'
            ]}
          />
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
      <a className={styles.downloadResume} href="/api/page-to-pdf?path=/resume/">Download PDF</a>
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
