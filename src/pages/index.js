import React from 'react';
import { graphql } from 'gatsby';

import { Grid } from '../components/grid/';
import { Layout } from '../components/layout/';
import { Preview } from '../components/preview/';

import styles from './index.module.css';

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
      <Section title="Hey-o 👋">{/* TODO */}</Section>
      <Section title="The Blog">
        <Grid>
          {posts.nodes.map((post) => (
            <Preview key={post.id} {...post} />
          ))}
        </Grid>
      </Section>
      <Section title="Open Source">
        <Grid>{/* TODO: iterate over GitHub stuff */}</Grid>
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
