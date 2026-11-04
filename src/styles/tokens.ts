/**
 * Sistema Centralizado de Design Tokens Oficial — Renovera Energias Renováveis
 * Direção Estética: Editorial Engineering / Energy Infrastructure / Premium Corporate Identity
 * Geometria e Proporções 100% idênticas ao design system de referência.
 */

export const DESIGN_TOKENS = {
  colors: {
    // Paleta Oficial Corporativa Renovera
    greenDeep: '#022417',       // Substitui o navyDeep (#071827)
    greenPrimary: '#033118',    // Substitui o blueTech (#102B42)
    greenMedium: '#0A4B2D',
    greenActive: '#0D5B43',
    greenSuccess: '#137A4E',
    gold: '#FED15D',            // Substitui o gold (#D3A15C)
    goldLight: '#FFE59A',       // Substitui o goldLight (#E8C186)
    goldDark: '#D6A900',
    iceSurface: '#E8F0EC',      // Substitui o iceBlue (#DCE7ED)
    offWhite: '#F8F8F5',        // Substitui o offWhite (#F4F6F3)
    graphite: '#17221F',        // Substitui o graphite (#263C3B)
    white: '#FFFFFF',
    overlayDark: 'rgba(2, 36, 23, 0.88)',
    border: '#DFE7E3',
  },
  typography: {
    families: {
      heading: "'Sofia Sans Condensed', sans-serif",
      script: "'Kalam', sans-serif",
      body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  breakpoints: {
    mobileCompact: 375,
    mobile: 390,
    mobileMax: 479,
    tabletPortrait: 768,
    tabletMax: 991,
    tabletLandscape: 1024,
    notebook: 1280,
    desktop: 1440,
    desktopWide: 1920,
  },
} as const;
