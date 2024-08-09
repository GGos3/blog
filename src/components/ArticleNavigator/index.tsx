import React from 'react';
import { Link } from 'gatsby';

import { Container, NavigationList, PostLink } from './styles';

interface Props {
  previousArticle: GatsbyTypes.BlogPostBySlugQuery['previous'] | null,
  nextArticle: GatsbyTypes.BlogPostBySlugQuery['next'] | null,
}

const ArticleNavigator = ({ previousArticle, nextArticle }: Props) => (
  <Container>
    <NavigationList>
      <li>
        {previousArticle ? (
          <PostLink to={previousArticle.fields?.slug ?? ''} rel='prev'>
            ← {previousArticle.frontmatter?.title}
          </PostLink>
        ) : (
          <span>← No previous article</span> // Optional fallback text
        )}
      </li>
      <li>
        {nextArticle ? (
          <PostLink to={nextArticle.fields?.slug ?? ''} rel='next'>
            {nextArticle.frontmatter?.title} →
          </PostLink>
        ) : (
          <span>No next article →</span> // Optional fallback text
        )}
      </li>
    </NavigationList>
  </Container>
);

export default ArticleNavigator;
