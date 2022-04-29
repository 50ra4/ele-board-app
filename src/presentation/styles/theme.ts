import { css, DefaultTheme, keyframes, ThemedCssFunction } from 'styled-components';

const fontColor = {
  link: '#c6a700',
  error: '#c62828',
} as const;

const inputColor = {
  default: {
    background: '#ffffff',
  },
  focused: {
    outline: 'rgba(198, 167, 0, 0.8)',
    background: '#ffffff',
  },
  error: {
    outline: 'rgba(198, 40, 40, 0.8)',
    background: '#ffeeff',
  },
  caret: '#c6a700',
} as const;

const borderColor = {
  light: '#c7c7c7',
  medium: '#828d86',
  dark: '#828d86',
} as const;
export type BorderColor = keyof typeof borderColor;

const cardColor = {
  font: '#212121',
  background: '#fafafa',
} as const;

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

const ellipsis = (row = 1) =>
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

/**
 * @see https://qiita.com/uto-usui/items/9208afc3955c7465e554
 */
const visuallyHidden = () => css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

const focusOutline = (color: string) => css`
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 3px solid ${color};
    outline-offset: -2px;
  }
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

/**
 * @see https://material-ui.com/customization/z-index/
 */
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

export const STYLE_THEME = {
  color: {
    ...color,
    border: borderColor,
    card: cardColor,
    font: fontColor,
    input: inputColor,
  },
  font: {
    family: fontFamilies,
    weight: fontWeight,
  },
  ellipsis,
  visuallyHidden,
  focusOutline,
  keyframe: {
    rotation,
    fadeIn,
    fadeOut,
  },
  safeArea: insetSafeArea,
  zIndex,
} as const;

export type StyledComponentsTheme = typeof STYLE_THEME;
