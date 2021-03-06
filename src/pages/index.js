import React from 'react';
import { graphql, Link } from 'gatsby';

import { Grid } from '../components/grid/';
import { Layout } from '../components/layout/';
import { Preview } from '../components/preview/';

import * as styles from './index.module.css';

const Section = function ({ children, className, title, ...props }) {
  return (
    <section
      className={[styles.section].concat(className).join(' ')}
      {...props}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default function Index({ data: { posts } }) {
  return (
    <Layout compressed={false}>
      <Section title="Hey-o 👋">
        <h3>Well hello!</h3>
      </Section>
      <Section title="The Blog">
        <Grid>
          {posts.nodes.map((post) => (
            <Preview key={post.id} {...post} />
          ))}
        </Grid>
        <Link to="/blog/" className={styles.link}>
          View all
        </Link>
      </Section>
      <Section title="Open Source">
        <Grid>{/* TODO: iterate over GitHub stuff */}</Grid>
        <Link to="/open-source/" className={styles.link}>
          Learn more
        </Link>
      </Section>
    </Layout>
  );
}

export const indexQuery = graphql`
  {
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
      nodes {
        ...MdxBlogPostPreviewFragment
      }
    }
  }
`;
