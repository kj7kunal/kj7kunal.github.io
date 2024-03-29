import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.slice(0, 3).map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {posts.length >= 3 && (
        <Link className="text-gray-500 text-sm hover:text-blue-500" to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
