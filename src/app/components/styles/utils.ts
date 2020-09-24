import Color from 'color';

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const rgba = (hexColor: string, alpha: number) =>
  Color(hexColor).alpha(alpha).rgb().string();

export const lighten = (hexColor: string, ratio: number) =>
  Color(hexColor).lighten(ratio).hex();

export const darken = (hexColor: string, ratio: number) =>
  Color(hexColor).darken(ratio).hex();

export const saturate = (hexColor: string, ratio: number) =>
  Color(hexColor).saturate(ratio).hex();

export const desaturate = (hexColor: string, ratio: number) =>
  Color(hexColor).desaturate(ratio).hex();

export const grayscale = (hexColor: string) =>
  Color(hexColor).grayscale().hex();
