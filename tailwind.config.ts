import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '810px',
      desktop: '1248px',
    },
    colors: {
      white: '#E1E1E1',
      gold: '#FACB25',
      black: '#17150F',
      grey: '#717171',
      red: '#FF515B',
    },
    boxShadow: {
      golden: '0px 0px 4px 5px rgba(235, 189, 25, 0.40)',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['32px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        sans: ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
