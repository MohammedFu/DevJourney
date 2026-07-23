export interface ThemeColorTokens {
  id: string;
  name: string;
  colors: {
    primary: string;
    onPrimary: string;
    surface: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    border: string;
    glass: string;
  };
}

export const themeTokens: Record<'light' | 'dark', ThemeColorTokens> = {
  // Aurora Modern (Light Theme)
  light: {
    id: 'theme-light-aurora',
    name: 'Aurora Modern',
    colors: {
      primary: '#5e41d0',
      onPrimary: '#ffffff',
      surface: '#fbf8ff',
      surfaceDim: '#d8d8f1',
      surfaceBright: '#fbf8ff',
      surfaceContainerLowest: '#ffffff',
      surfaceContainerLow: '#f4f2ff',
      surfaceContainer: '#edecff',
      surfaceContainerHigh: '#e6e6ff',
      surfaceContainerHighest: '#e0e0fa',
      onSurface: '#181a2c',
      onSurfaceVariant: '#484554',
      outline: '#797586',
      outlineVariant: '#c9c4d7',
      border: 'rgba(201, 196, 215, 0.6)',
      glass: 'rgba(255, 255, 255, 0.85)',
    },
  },
  // Aurora Midnight (Dark Theme)
  dark: {
    id: 'theme-dark-aurora',
    name: 'Aurora Midnight',
    colors: {
      primary: '#b794f4',
      onPrimary: '#1e0a38',
      surface: '#081425',
      surfaceDim: '#081425',
      surfaceBright: '#2f3a4c',
      surfaceContainerLowest: '#040e1f',
      surfaceContainerLow: '#111c2d',
      surfaceContainer: '#152031',
      surfaceContainerHigh: '#1f2a3c',
      surfaceContainerHighest: '#2a3548',
      onSurface: '#d8e3fb',
      onSurfaceVariant: '#ccc3d2',
      outline: '#958e9c',
      outlineVariant: '#4a4551',
      border: 'rgba(74, 69, 81, 0.45)',
      glass: 'rgba(21, 32, 49, 0.7)',
    },
  },
};
