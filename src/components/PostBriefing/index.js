import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostBriefing = ({
  excerpt,
  fields: { slug },
  frontmatter: {
    title,
    cover: {
      childImageSharp: { fluid }
    }
  },
  className
}) => {
  return (
    <article>
      <Image fluid={fluid} />
      <section>
        <h2>
          <Link to={`/blog${slug}`}>{title}</Link>
        </h2>
        <p>{excerpt}</p>
      </section>
    </article>
  );
};

export default PostBriefing;
