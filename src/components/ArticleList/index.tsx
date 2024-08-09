import React, { memo } from 'react';
import ArticleListItem from '~/components/ArticleList/Item';

import { Container } from './styles';

interface Props {
  posts: GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['nodes'],
}

const ArticleList = ({ posts }: Props) => {
  return (
    <Container>
      <ul>
        {posts.map(post => {
          if (post === undefined) {
            return null;
          }

          const title = post.frontmatter?.title ?? post.fields?.slug ?? '';
          const slug = post.fields?.slug ?? '';
          const description = post.frontmatter?.description ?? post.excerpt ?? '';

          return (
            <ArticleListItem
              key={slug}
              title={title}
              slug={slug}
              description={description}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default memo(ArticleList);
