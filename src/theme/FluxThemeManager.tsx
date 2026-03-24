import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { FluxTheme } from './FluxThemeProtocol';
import { FluxDefaultLightTheme, FluxDefaultDarkTheme } from './FluxDefaultTheme';

export type ColorSchemePreference = 'system' | 'light' | 'dark';

export interface FluxThemeConfig {
  light: FluxTheme;
  dark: FluxTheme;
}

interface FluxThemeContextValue {
  theme: FluxTheme;
  colorScheme: 'light' | 'dark';
  colorSchemePreference: ColorSchemePreference;
  setColorSchemePreference: (pref: ColorSchemePreference) => void;
  setThemeConfig: (config: FluxThemeConfig) => void;
  themeConfig: FluxThemeConfig;
}

const defaultConfig: FluxThemeConfig = {
  light: FluxDefaultLightTheme,
  dark: FluxDefaultDarkTheme,
};

const FluxThemeContext = createContext<FluxThemeContextValue>({
  theme: FluxDefaultLightTheme,
  colorScheme: 'light',
  colorSchemePreference: 'system',
  setColorSchemePreference: () => {},
  setThemeConfig: () => {},
  themeConfig: defaultConfig,
});

interface FluxThemeProviderProps {
  children: ReactNode;
  initialConfig?: FluxThemeConfig;
  initialColorScheme?: ColorSchemePreference;
}

export function FluxThemeProvider({
  children,
  initialConfig,
  initialColorScheme = 'system',
}: FluxThemeProviderProps) {
  const systemScheme = useColorScheme();
  const [colorSchemePreference, setColorSchemePreference] = useState<ColorSchemePreference>(initialColorScheme);
  const [themeConfig, setThemeConfig] = useState<FluxThemeConfig>(initialConfig ?? defaultConfig);

  const resolvedScheme: 'light' | 'dark' =
    colorSchemePreference === 'system'
      ? (systemScheme ?? 'light')
      : colorSchemePreference;

  const theme = resolvedScheme === 'dark' ? themeConfig.dark : themeConfig.light;

  const value = useMemo<FluxThemeContextValue>(
    () => ({
      theme,
      colorScheme: resolvedScheme,
      colorSchemePreference,
      setColorSchemePreference,
      setThemeConfig,
      themeConfig,
    }),
    [theme, resolvedScheme, colorSchemePreference, themeConfig],
  );

  return (
    <FluxThemeContext.Provider value={value}>
      {children}
    </FluxThemeContext.Provider>
  );
}

/** Hook to access the full theme context */
export function useFluxTheme(): FluxThemeContextValue {
  return useContext(FluxThemeContext);
}

/** Convenience hook for just the resolved theme colors */
export function useFluxColors(): FluxTheme {
  return useContext(FluxThemeContext).theme;
}
