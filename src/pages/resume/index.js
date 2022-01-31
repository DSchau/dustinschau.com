import React from 'react';

import ResumeLayout from '../../components/resume-layout/resume-layout';

import '@fontsource/raleway';
import '@fontsource/hahmlet';

import * as styles from './index.module.css';

import Experience from './experience';

export default function Resume({ data }) {
  return (
    <ResumeLayout       download={(props) => (
      <a
        {...props}
        href="/api/page-to-pdf?path=/resume/&amp;fileName=dustin-schau-resume.pdf"
      >
        Download PDF
      </a>)}>
      <h2 className={styles.subTitle}>Experience</h2>
      <Experience
        jobTitle="VP of Engineering"
        employer="Gatsby, Inc. • Fully Remote"
        dates={[new Date('08/01/2021')]}
        description="Leads the 30+ engineering team building the fastest web framework for the headless web."
        items={[
          'Launched Gatsby 4, our most fully featured release yet with game-changing features resulting in wide adoption and 10x reduced build speeds',
          'Built out management layer and increased total engineering staffing by 25% in one quarter',
        ]}
      />
      <Experience
        jobTitle="VP of Product"
        employer="Gatsby, Inc. • Fully Remote"
        dates={[new Date('09/01/2018'), new Date('07/31/2021')]}
        description="Joined as the 11th employee at Gatsby as an engineer, and built and founded the Product team at Gatsby."
        items={[
          'Established Product Council, a quarterly planning and collaborative process wherein top-down strategy from key business leaders and self-directing squads are blended to deliver strategically valuable Product offerings',
          'Grew the Product team from 1 to 8 (including Design), and organized the teams into cross-functional squads',
          'Defined and implemented product strategy which resulted in 4x increase in revenue year-over-year',
        ]}
      />
      <Experience
        jobTitle="Principal Consultant"
        employer="Object Partners • Omaha, Nebraska"
        dates={[new Date('05/01/2016'), new Date('09/01/2018')]}
        description="Served as a technical consultant to assist teams, companies, and organizations by assisting and leading developmental efforts, improving in-house developer knowledge, and establishing best practices."
        items={[
          'Built a native, cross-platform messaging app used by 10K monthly active users',
          'Recommended and re-platformed technology stack for a Fortune 1000 company to React and React Native',
        ]}
      />
      <Experience
        className={styles.printHide}
        jobTitle="Senior Application Developer"
        employer="Union Pacific • Omaha, Nebraska"
        dates={[new Date('04/01/2015'), new Date('05/01/2016')]}
        description="I began my career at Union Pacific, honing my front-end developer expertise and knowledge by creating mobile/hybrid applications, creating an application generator, and building an internal open-source component library (a la Bootstrap) and associated tooling."
        items={[
          'Built a reusable, accessible component library with AngularJS used by all teams at Union Pacific',
          'Built a next-generation application generator to speed up delivery to cut down startup time by 25%',
        ]}
      />
    </ResumeLayout>
  );
}
