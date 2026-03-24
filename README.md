# flux-react-native-ds

**Design tokens for the Flux React Native Design System.** Build your app's visual foundation once and reuse it everywhere.

`flux-react-native-ds` is the base layer of the Flux Design System for React Native. It defines every visual property — colors, typography, spacing, shadows, borders, opacity, and theming — as **type-safe TypeScript tokens**. No hard-coded magic numbers.

**16 color tokens | 10 typography styles | 8 spacing steps | 3 themes | Light/Dark mode**

---

## Features

- **16 semantic color tokens** — Brand, surface, text, semantic, border, overlay
- **10 typography styles** — Display, heading, body with system fonts
- **8-step spacing scale** — From 2pt (xxxs) to 48pt (xxl)
- **6 corner radius presets** — xs through full (pill)
- **3 shadow elevations** — Small, medium, large with iOS shadow + Android elevation
- **3 border widths** — Thin, medium, thick
- **5 opacity presets** — Subtle, light, muted, overlay, disabled
- **Shimmer effect** — Animated gradient sweep for skeleton loading
- **Runtime theme switching** — Context-based, swap themes without touching components
- **Light/Dark mode** — Native `useColorScheme()` + manual override
- **Cross-platform shadows** — `Platform.select` for iOS shadow properties + Android elevation

---

## Installation

```bash
npm install @anthropic-flux/react-native-ds
# or
yarn add @anthropic-flux/react-native-ds
```

**Peer dependencies:** `react`, `react-native`

> **Note:** If you use `@anthropic-flux/react-native-foundation`, it re-exports `@anthropic-flux/react-native-ds` tokens via barrel exports.

---

## Quick Start

Wrap your app with the theme provider:

```tsx
import { FluxThemeProvider } from '@anthropic-flux/react-native-ds';

export default function App() {
  return (
    <FluxThemeProvider>
      <YourApp />
    </FluxThemeProvider>
  );
}
```

Use tokens and theme colors in components:

```tsx
import {
  FluxSpacing,
  FluxTypography,
  FluxRadius,
  useFluxColors,
} from '@anthropic-flux/react-native-ds';

function MyCard() {
  const colors = useFluxColors();
  return (
    <View style={{
      padding: FluxSpacing.md,
      borderRadius: FluxRadius.lg,
      backgroundColor: colors.surface,
    }}>
      <Text style={[FluxTypography.headline, { color: colors.textPrimary }]}>
        Hello Flux
      </Text>
    </View>
  );
}
```

---

## Token Reference

### Colors (useFluxColors)

All colors are theme-aware — they update automatically when the theme changes.

| Category | Tokens |
|----------|--------|
| Brand | `primary`, `secondary`, `accent` |
| Surface | `background`, `surface` |
| Text | `textPrimary`, `textSecondary` |
| Semantic | `success`, `warning`, `error` |
| Border | `border`, `divider` |
| On-Colors | `onPrimary`, `onSecondary`, `onError` |
| Overlay | `overlay` |

```tsx
const colors = useFluxColors();
<Text style={{ color: colors.textPrimary }}>Hello</Text>
<View style={{ backgroundColor: colors.background }} />
```

### Typography (FluxTypography)

10 text styles using system fonts with appropriate weights:

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| `largeTitle` | 34 | Bold | Hero headings |
| `title1` | 28 | Bold | Page titles |
| `title2` | 22 | Bold | Section titles |
| `title3` | 20 | 600 | Subsection titles |
| `headline` | 17 | 600 | Emphasized labels |
| `body` | 17 | 400 | Main content |
| `callout` | 16 | 400 | Highlighted info |
| `subheadline` | 15 | 400 | Supporting text |
| `footnote` | 13 | 400 | Small descriptions |
| `caption` | 12 | 400 | Metadata, timestamps |

```tsx
<Text style={FluxTypography.headline}>Title</Text>
<Text style={[FluxTypography.body, { color: colors.textPrimary }]}>Content</Text>
```

### Spacing (FluxSpacing)

8-step scale based on a 4pt grid:

| Token | Value | Usage |
|-------|-------|-------|
| `xxxs` | 2 | Hairline gaps |
| `xxs` | 4 | Tight padding |
| `xs` | 8 | Small gaps |
| `sm` | 12 | Compact padding |
| `md` | 16 | Default padding |
| `lg` | 24 | Section spacing |
| `xl` | 32 | Large gaps |
| `xxl` | 48 | Page margins |

```tsx
<View style={{ padding: FluxSpacing.md, gap: FluxSpacing.sm }}>
```

### Radius (FluxRadius)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4 | Small chips |
| `sm` | 8 | Input fields |
| `md` | 12 | Cards, buttons |
| `lg` | 16 | Modals, sheets |
| `xl` | 24 | Large containers |
| `full` | 9999 | Pills, circles |

### Shadow (FluxShadow)

Cross-platform shadows using `Platform.select` for iOS shadow props + Android elevation:

| Preset | Blur | Y-Offset | Opacity | Elevation |
|--------|------|----------|---------|-----------|
| `small` | 4 | 2 | 0.08 | 2 |
| `medium` | 8 | 4 | 0.12 | 4 |
| `large` | 16 | 8 | 0.16 | 8 |

```tsx
<View style={FluxShadow.small}>
```

### Border (FluxBorder)

| Token | Value | Usage |
|-------|-------|-------|
| `thin` | 1 | Default borders |
| `medium` | 1.5 | Focused inputs |
| `thick` | 2 | Selected states |

### Opacity (FluxOpacity)

| Token | Value | Usage |
|-------|-------|-------|
| `subtle` | 0.08 | Background tints |
| `light` | 0.1 | Light overlays |
| `muted` | 0.3 | Muted elements |
| `overlay` | 0.4 | Modal backgrounds |
| `disabled` | 0.5 | Disabled states |

---

## Theming

### Built-in Themes

| Theme | Primary | Style |
|-------|---------|-------|
| `FluxDefaultLightTheme` | #007AFF (Blue) | System light colors |
| `FluxDefaultDarkTheme` | #0A84FF (Blue) | System dark colors |
| `FluxDarkBrandTheme` | #6C63FF (Purple) | Custom dark brand |

### Switch Themes at Runtime

```tsx
import { useFluxTheme } from '@anthropic-flux/react-native-ds';

function ThemeSwitcher() {
  const { setColorSchemePreference, setThemeConfig } = useFluxTheme();

  // Switch color scheme
  setColorSchemePreference('dark'); // 'system' | 'light' | 'dark'

  // Switch brand theme
  setThemeConfig({
    light: FluxDarkBrandTheme,
    dark: FluxDarkBrandTheme,
  });
}
```

### useFluxTheme Hook

Returns the full theme context:

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `FluxTheme` | Active theme object |
| `colorScheme` | `'light' \| 'dark'` | Resolved color scheme |
| `colorSchemePreference` | `ColorSchemePreference` | User preference |
| `setColorSchemePreference` | `(pref) => void` | Update preference |
| `themeConfig` | `{ light, dark }` | Current theme config |
| `setThemeConfig` | `(config) => void` | Swap brand theme |

### useFluxColors Hook

Convenience hook returning all 16 color tokens from the active theme:

```tsx
const colors = useFluxColors();
// colors.primary, colors.surface, colors.textPrimary, etc.
```

### Create a Custom Theme

```tsx
import { FluxTheme } from '@anthropic-flux/react-native-ds';

const MyBrandTheme: FluxTheme = {
  primary: '#FF6B35',
  secondary: '#004E89',
  accent: '#00B4D8',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
  border: '#DEE2E6',
  divider: '#E9ECEF',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onError: '#FFFFFF',
  overlay: 'rgba(0,0,0,0.4)',
};
```

---

## Shimmer Effect

Animated gradient sweep for skeleton loading states:

```tsx
import { FluxShimmerEffect } from '@anthropic-flux/react-native-ds';

<FluxShimmerEffect active={true} cornerRadius={FluxRadius.sm}>
  <View style={{ width: 200, height: 20 }} />
</FluxShimmerEffect>
```

- 1.5s linear loop animation
- Left-to-right gradient sweep
- Hides content while preserving frame

---

## Utilities

### hexToRgba

```tsx
import { hexToRgba } from '@anthropic-flux/react-native-ds';

hexToRgba('#007AFF', 0.5); // 'rgba(0,122,255,0.5)'
```

---

## File Structure

```
flux-react-native-ds/
|-- package.json
|-- tsconfig.json
|-- LICENSE
|-- README.md
+-- src/
    |-- index.ts                         (barrel exports)
    |-- tokens/
    |   |-- FluxSpacing.ts               (8-step spacing scale)
    |   |-- FluxRadius.ts                (6 corner radius presets)
    |   |-- FluxBorder.ts                (3 border widths)
    |   |-- FluxOpacity.ts               (5 opacity presets)
    |   |-- FluxShadow.ts                (3 shadow elevations)
    |   |-- FluxTypography.ts            (10 text styles)
    |   +-- FluxColors.ts                (useFluxColors re-export)
    |-- theme/
    |   |-- FluxThemeProtocol.ts         (FluxTheme interface)
    |   |-- FluxDefaultTheme.ts          (light + dark system themes)
    |   |-- FluxDarkBrandTheme.ts        (custom brand theme)
    |   +-- FluxThemeManager.tsx         (Context + Provider + hooks)
    |-- modifiers/
    |   +-- FluxShimmerEffect.tsx         (skeleton loading animation)
    +-- utils/
        +-- hexToRgba.ts                 (color utility)
```

---

## License

MIT License - Copyright (c) 2026 Afzal Siddiqui
