/** Flux Design System — Corner radius tokens (in points) */
export const FluxRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export type FluxRadiusKey = keyof typeof FluxRadius;
