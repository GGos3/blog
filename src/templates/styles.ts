import { styled } from '~/stitches.config';

export const Article = styled('article', {
  position: 'relative',
  padding: '2rem 1rem',
  maxWidth: '768px',
  margin: '0 auto',

  '& .heading-anchor': {
    borderBottom: 0,

    svg: {
      fill: '$text500',
    }
  }
});

export const TableOfContents = styled('div', {
  marginBottom: '2rem',
  border: '1px solid $borderGray',
  borderRadius: '0.25rem',
  padding: '1rem',
  backgroundColor: '$backgroundSecondary',

  '> ul': {
    marginLeft: 0,
  },

  ul: {
    listStyle: 'none',

    li: {
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',

      color: '$text500',
      fontSize: '0.875rem',

      transition: 'color $transitionDuration $transitionTiming',

      a: {
        textDecoration: 'none',
        color: '$link',
        fontWeight: 500,

        '&:hover': {
          textDecoration: 'underline',
        }
      }
    },
  },
});

export const Header = styled('header', {
  marginBottom: '2.5rem',
  borderBottom: '1px solid $borderGray',
  paddingBottom: '1rem',
});

export const Title = styled('h1', {
  fontSize: '2.5rem',
  fontWeight: 700,
  lineHeight: '1.2',
});

export const ArticleMetadata = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.75rem',
  fontSize: '0.875rem',

  color: '$text400',

  fontWeight: 500,

  transition: 'color $transitionDuration $transitionTiming',
});

export const Content = styled('section', {
  wordBreak: 'keep-all',
  lineHeight: '1.7',

  h1: {
    marginTop: '2.5rem',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid $borderGray',

    a: {
      borderBottom: 'none',
    }
  },
  h2: {
    marginTop: '2rem',
    marginBottom: '1.25rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid $borderGray',

    a: {
      borderBottom: 'none',
    }
  },
  h3: {
    marginTop: '1.75rem',
    marginBottom: '1rem',
  },
  a: {
    color: '$link',
    textDecoration: 'none',
    borderBottom: '2px solid $link',

    transition: 'color $transitionDuration $transitionTiming, border-bottom-color $transitionDuration $transitionTiming',

    '&:hover': {
      color: '$linkHover',
      borderBottomColor: '$linkHover',
    }
  },
  pre: {
    code: {
      padding: '0rem',
      wordBreak: 'break-all',
      overflowWrap: 'break-word',
      backgroundColor: 'transparent'
    },
  },
  code: {
    backgroundColor: '$borderGray',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontFamily: 'monospace',
  },
  'pre, code': {
    fontVariantLigatures: 'none',
  }
});

export const Footer = styled('footer', {
  marginTop: '3rem',
  paddingTop: '2rem',
  borderTop: '1px solid $borderGray',

  '&:before': {
    display: 'block',
    width: '100%',
    height: '0.25rem',
    margin: '3rem auto',

    backgroundColor: '$primary200',

    transition: 'background-color $transitionDuration $transitionTiming',

    content: '',
  }
});
