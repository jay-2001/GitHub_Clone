const FONT_SIZE = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const HTML_FONT_SIZE = 16;
const COEF = FONT_SIZE / 14;
const FONT_FMILY = ['Inter', 'Arial', 'sans-serif'].join(',');

const pxToRem = (size: number) => `${(size / HTML_FONT_SIZE) * COEF}rem`;

// Brand Colors
const GREEN_PRIMARY = '#39CEA0';
const GREEN_LIGHT = '#49DCAF';

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const TRANSPARENT = 'rgba(0, 0, 0, 0)';

const BLUE_PRIMARY = '#1F4068';
const BLUE_LIGHT = '#334963';
const BLUE_DARK = '#162447';

const GREY_BODY = '#212121';
const GREY_BACKGROUND = '#F5F5F5';

const RED_PRIMARY = '#DF1642';

const siqTheme = {
  palette: {
    common: {
      black: BLACK,
      white: WHITE,
      errorRed: RED_PRIMARY,
      greyBackground: GREY_BACKGROUND,
      greyBody: GREY_BODY,
      transparent: TRANSPARENT,
      blueLight: BLUE_LIGHT,
    },
    primary: {
      main: GREEN_PRIMARY,
      light: GREEN_LIGHT,
      contrastText: WHITE,
    },
    secondary: {
      main: BLUE_PRIMARY,
      light: BLUE_DARK,
    },
    background: {
      paper: WHITE,
      default: GREY_BACKGROUND,
    },
    text: {
      primary: GREY_BODY,
      secondary: GREY_BODY,
      hint: GREY_BODY,
    },
    error: {
      main: RED_PRIMARY,
    },
  },
  typography: {
    pxToRem: (size: number) => pxToRem(size),
    fontFamily: FONT_FMILY,
    fontSize: HTML_FONT_SIZE,
    useNextVariants: true,
  },
  spacing: (size: number) => pxToRem(size),
  overrides: {},
};

export default siqTheme;
