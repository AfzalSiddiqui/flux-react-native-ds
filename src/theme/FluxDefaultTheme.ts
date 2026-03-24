import { FluxTheme } from './FluxThemeProtocol';

/** Default Flux theme — Light variant */
export const FluxDefaultLightTheme: FluxTheme = {
  // Brand
  primary: '#007AFF',
  secondary: '#1C2541',
  accent: '#5BC0BE',

  // Surfaces
  background: '#FFFFFF',
  surface: '#F2F2F7',

  // Text
  textPrimary: '#000000',
  textSecondary: '#3C3C4399',

  // Semantic
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',

  // Borders
  border: '#3C3C434A',
  divider: '#C6C6C8',

  // On-colors
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onError: '#FFFFFF',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
};

/** Default Flux theme — Dark variant */
export const FluxDefaultDarkTheme: FluxTheme = {
  // Brand
  primary: '#0A84FF',
  secondary: '#1C2541',
  accent: '#5BC0BE',

  // Surfaces
  background: '#000000',
  surface: '#1C1C1E',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#EBEBF599',

  // Semantic
  success: '#30D158',
  warning: '#FF9F0A',
  error: '#FF453A',

  // Borders
  border: '#54545899',
  divider: '#38383A',

  // On-colors
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onError: '#FFFFFF',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
};
