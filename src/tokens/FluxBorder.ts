/** Flux Design System — Border width tokens (in points) */
export const FluxBorder = {
  thin: 1,
  medium: 1.5,
  thick: 2,
} as const;

export type FluxBorderKey = keyof typeof FluxBorder;
