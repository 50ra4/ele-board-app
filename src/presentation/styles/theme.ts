import { css, DefaultTheme, keyframes, ThemedCssFunction } from 'styled-components';

const color = {
  default: {
    font: '#212121',
    background: '#e8eaed',
  },
  primary: {
    font: '#fafafa',
    background: '#212121',
  },
  secondary: {
    font: '#fafafa',
    background: '#2e7c31',
  },
  disabled: {
    // FIXME:
    font: '#fafafa',
    background: '#62727b',
  },
} as const;
export type ColorPalette = keyof Omit<typeof color, 'disabled'>;

const FONT_FAMILIES = [
  'Hiragino Kaku Gothic ProN',
  'Hiragino Sans',
  'Helvetica Neue',
  'Arial',
  'Meiryo',
  'sans-serif',
] as const;

const fontFamilies = FONT_FAMILIES.join(',');

const fontWeight = {
  bold: 'bold',
  normal: 400,
} as const;

const ellipsis = (row: number = 1) =>
  row === 1
    ? css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      `
    : css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${row};
      `;

const rotation = keyframes`
  from { 
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg); 
  }
`;

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }
  to {
    opacity: 1; 
  }
`;

const fadeOut = keyframes`
  from { 
    opacity: 1;
  }
  to {
    opacity: 0; 
  }
`;

type InsetSafeArea = (
  property: string,
  value: string,
  symbol: '+' | '-',
) => ReturnType<ThemedCssFunction<DefaultTheme>>;
const insetSafeArea: Record<'top' | 'bottom' | 'topBottom', InsetSafeArea> = {
  top: (prop, value, symbol) => css`
    ${`${prop}: calc(${value})`};
    ${`${prop}: calc(${value} ${symbol} constant(safe-area-inset-top))`};
    ${`${prop}: calc(${value} ${symbol} env(safe-area-inset-top))`};
  `,
  bottom: (prop, value, symbol) => css`
    ${`${prop}: calc(${value})`};
    ${`${prop}: calc(${value} ${symbol} constant(safe-area-inset-bottom))`};
    ${`${prop}: calc(${value} ${symbol} env(safe-area-inset-bottom))`};
  `,
  topBottom: (prop, value, symbol) => css`
    ${`${prop}: calc(${value})`};
    ${`${prop}: calc(${value} ${symbol} calc(constant(safe-area-inset-top) + constant(safe-area-inset-bottom)))`};
    ${`${prop}: calc(${value} ${symbol} calc(env(safe-area-inset-top) + env(safe-area-inset-bottom)))`};
  `,
};

export const StyledTheme = {
  color,
  font: {
    family: fontFamilies,
    weight: fontWeight,
  },
  ellipsis,
  keyframe: {
    rotation,
    fadeIn,
    fadeOut,
  },
  safeArea: insetSafeArea,
} as const;

export type StyledComponentsTheme = typeof StyledTheme;
