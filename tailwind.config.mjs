/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'midnight-indigo': '#191A2A',
        'snow': '#FBFBFE',
        'electric-teal': '#00F5D4',
        'soft-lilac': '#C4B5FD',
        'card-bg-dark': '#2A2B3C',
        'card-border-dark': '#3D3E4F',
        'card-bg-light': '#FFFFFF',
        'card-border-light': '#E5E7EB',
        'text-dark': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        '150': '150px',
      },
      screens: {
        xs: '480px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.800'),
            lineHeight: '1.7',
            '[class~="lead"]': {
              color: theme('colors.gray.600'),
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '2em',
              listStyle: 'none',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: theme('colors.gray.500'),
              left: '-0.75em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '2em',
              listStyle: 'none',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.400'),
              borderRadius: '50%',
              width: '0.375em',
              height: '0.375em',
              top: 'calc(0.875em - 0.1875em)',
              left: '-0.75em',
            },
            ul: {
              listStyle: 'none',
              paddingLeft: '0',
            },
            ol: {
              listStyle: 'none', 
              paddingLeft: '0',
            },
            hr: {
              borderColor: theme('colors.gray.300'),
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.gray.700'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.blue.400'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
              backgroundColor: theme('colors.gray.50'),
              paddingTop: '1em',
              paddingBottom: '1em',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '800',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
              borderBottom: `2px solid ${theme('colors.gray.200')}`,
              paddingBottom: '0.5rem',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
              borderBottom: `1px solid ${theme('colors.gray.300')}`,
              paddingBottom: '0.25rem',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            code: {
              color: theme('colors.red.600'),
              fontWeight: '600',
              fontSize: '0.875em',
              backgroundColor: theme('colors.gray.100'),
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              borderRadius: '0.375rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.900'),
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
              border: `1px solid ${theme('colors.gray.700')}`,
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.gray.400'),
            '--tw-prose-links': theme('colors.blue.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray.400'),
            '--tw-prose-bullets': theme('colors.gray.600'),
            '--tw-prose-hr': theme('colors.gray.700'),
            '--tw-prose-quotes': theme('colors.gray.100'),
            '--tw-prose-quote-borders': theme('colors.blue.500'),
            '--tw-prose-captions': theme('colors.gray.400'),
            '--tw-prose-code': theme('colors.red.400'),
            '--tw-prose-pre-code': theme('colors.gray.100'),
            '--tw-prose-pre-bg': theme('colors.gray.950'),
            '--tw-prose-th-borders': theme('colors.gray.600'),
            '--tw-prose-td-borders': theme('colors.gray.700'),
            color: 'var(--tw-prose-body)',
            h1: {
              borderBottomColor: theme('colors.gray.700'),
            },
            h2: {
              borderBottomColor: theme('colors.gray.600'),
            },
            blockquote: {
              backgroundColor: theme('colors.gray.800'),
              borderLeftColor: theme('colors.blue.500'),
              color: theme('colors.gray.400'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.red.400'),
            },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            ul: {
              listStyle: 'none',
              paddingLeft: '0',
            },
            ol: {
              listStyle: 'none', 
              paddingLeft: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
