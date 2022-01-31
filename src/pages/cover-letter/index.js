import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ResumeLayout from '../../components/resume-layout/resume-layout';

import * as styles from './index.module.css';

export default function CoverLetter({ data }) {
  const companyName = 'Gatsby';
  return (
    <ResumeLayout
      download={(props) => (
        <a
          {...props}
          href="/api/page-to-pdf?path=/cover-letter/&amp;fileName=dustin-schau-cover-letter.pdf"
        >
          Download PDF
        </a>
      )}
    >
      <section className={styles.cover}>
        <p>
          I’m an experienced Product and Engineering leader with a deep love of
          managing teams and helping lead, create, inspire, and enable future
          leaders at high-growth startups. I strongly believe that one's career
          is a blend of experiences, lessons, and insights that helps prepare
          you for the next thing and something grander. I believe that that
          “something grander” is at {companyName}. You may ask yourself...
          sounds great. Why? Let me explain:
        </p>
        <p>
          <ul className={styles.list}>
            <li>
              <strong>Intersection of Product, Design, and Engineering</strong>.
              To “pay the bills” in high school and college, I free-lanced iOS
              icon design, which taught me the value of design, the value for
              “the little big details,” and this led me to find my passion in
              web development which I've honed ever since.
            </li>
            <li>
              <strong>High-growth startup experience</strong>. At Gatsby, I
              joined as a wide-eyed idealist, new to the world of startups as a
              Frontend Engineer. I quickly tackled increasingly sophisticated
              projects and leadership areas, including managing the Open Source
              engineering team, founding the Customer Success and Product teams,
              and then finally executive experience as VP of Product and
              Engineering.
            </li>
            <li>
              <strong>The value of kindness</strong>. One of the great joys of
              my career that I’ve found at Gatsby is the privilege to get to
              manage, shape, and influence the careers of so many, and to do so
              with the highest bar for kindness and empathy. I now manage a team
              of four Engineering Managers, four squads/product areas, and a
              broader Engineering team of 30. By weaving in my experience of
              first doing the work, then enabling others to do the work, then
              inspiring the teams to do the work best, the chief lesson I’ve
              learned is to lead with kindness and help inspire others to yearn for the
              glorious future.
            </li>
          </ul>
        </p>
        <p>
          All this to say, I believe this intersection of Product, Design,
          Engineering and the experiences I’ve had in wearing many hats,
          empathizing and understanding each, has prepared me to wear the one
          that I believe I can wear uniquely best and do the best work of my
          career. I believe that best work is at {companyName}. I couldn’t be
          more excited about the opportunity to help the team achieve its
          mission to unlock the potential of the fully distributed future where
          every person and business truly belongs.
        </p>
        <p>Thank you for your consideration!</p>
        <GatsbyImage
          image={getImage(data.signature.childImageSharp)}
          alt="Dustin Schau Signature"
        />
        <p>Dustin Schau</p>
      </section>
    </ResumeLayout>
  );
}

export const coverLetterQuery = graphql`
  {
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 64)
      }
    }
  }
`;
