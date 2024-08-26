import React, { memo } from 'react';
import ArticleListItem from '~/components/ArticleList/Item';

import { Container } from './styles';

interface Props {
    posts: GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['nodes'],
}

const ArticleList = ({posts}: Props) => {
    return (
        <Container>
            <ul>
                {posts
                    .filter(post => post && post.frontmatter?.title) // 필터링: post가 undefined가 아니고, title이 있는 경우에만 진행
                    .map(post => {
                        const title = post.frontmatter?.title ?? post.fields?.slug ?? '';
                        const slug = post.fields?.slug ?? '';
                        const description = post.frontmatter?.description ?? post.excerpt ?? '';

                        if (!title || !slug) {
                            return null; // title이나 slug가 없는 경우 렌더링하지 않음
                        }

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
