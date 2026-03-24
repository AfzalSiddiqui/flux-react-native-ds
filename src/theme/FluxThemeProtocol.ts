/** Defines a complete set of design tokens for a Flux theme */
export interface FluxTheme {
  // Brand
  primary: string;
  secondary: string;
  accent: string;

  // Surfaces
  background: string;
  surface: string;

  // Text
  textPrimary: string;
  textSecondary: string;

  // Semantic
  success: string;
  warning: string;
  error: string;

  // Borders
  border: string;
  divider: string;

  // On-colors (foreground on filled backgrounds)
  onPrimary: string;
  onSecondary: string;
  onError: string;

  // Overlay
  overlay: string;
}
