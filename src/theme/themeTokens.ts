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
  // Daylight Professional / Oatmeal Professional (DESIGN.md)
  light: {
    id: 'theme-light-oatmeal',
    name: 'Oatmeal Professional',
    colors: {
      primary: '#181919',
      onPrimary: '#ffffff',
      surface: '#fcf9f8',
      surfaceDim: '#dcd9d9',
      surfaceBright: '#fcf9f8',
      surfaceContainerLowest: '#ffffff',
      surfaceContainerLow: '#f6f3f2',
      surfaceContainer: '#f0eded',
      surfaceContainerHigh: '#eae7e7',
      surfaceContainerHighest: '#e5e2e1',
      onSurface: '#1c1b1b',
      onSurfaceVariant: '#444748',
      outline: '#747878',
      outlineVariant: '#c4c7c7',
      border: 'rgba(116, 120, 120, 0.25)',
      glass: 'rgba(255, 255, 255, 0.9)',
    },
  },
  // Nocturne Professional (Dark Theme)
  dark: {
    id: 'theme-dark-nocturne',
    name: 'Nocturne Professional',
    colors: {
      primary: '#7bd0ff',
      onPrimary: '#001e2c',
      surface: '#101415',
      surfaceDim: '#0b0f10',
      surfaceBright: '#191c1e',
      surfaceContainerLowest: '#0b0f10',
      surfaceContainerLow: '#191c1e',
      surfaceContainer: '#1d2022',
      surfaceContainerHigh: '#272a2c',
      surfaceContainerHighest: '#323537',
      onSurface: '#e2e2e6',
      onSurfaceVariant: '#c3c6cf',
      outline: '#909097',
      outlineVariant: '#45464d',
      border: 'rgba(69, 70, 77, 0.4)',
      glass: 'rgba(30, 41, 59, 0.4)',
    },
  },
};
