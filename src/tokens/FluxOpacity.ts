/** Flux Design System — Opacity tokens */
export const FluxOpacity = {
  subtle: 0.08,
  light: 0.1,
  muted: 0.3,
  overlay: 0.4,
  disabled: 0.5,
} as const;

export type FluxOpacityKey = keyof typeof FluxOpacity;
