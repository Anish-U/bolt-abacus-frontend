import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1124px',
    },
    colors: {
      white: '#E1E1E1',
      gold: '#FACB25',
      black: '#17150F',
      coal: '#2E2E2E',
      grey: '#717171',
      red: '#FF515B',
      green: '#50D96E',
      lightGreen: '#7AE191',
      purple: '#E678EF',
      blue: '#2B65ED',
      lightBlue: '#78D2EF',
      boxGold: 'rgba(250, 203, 37, 0.15)',
      boxPurple: 'rgba(247, 168, 254, 0.13)',
    },
    boxShadow: {
      golden: '0px 0px 4px 5px rgba(235, 189, 25, 0.40)',
      purpled: '0px 0px 4px 5px rgba(230, 120, 239, 0.40)',
      blued: '0px 0px 4px 5px rgba(43, 101, 237, 0.40)',
      boxGold: '0px 0px 100px 14px rgba(186, 186, 186, 0.15)',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['20px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['30px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['64px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
      xxl: ['106px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
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
