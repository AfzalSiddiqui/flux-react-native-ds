/** Flux Design System — Spacing tokens (in points) */
export const FluxSpacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export type FluxSpacingKey = keyof typeof FluxSpacing;
