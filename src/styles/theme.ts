/**
 * Design System Theme
 * Centralized colors, typography, and spacing for consistent styling
 */

export const colors = {
  // Primary
  primary: '#022150',

  // Backgrounds
  backgroundLight: '#F9FAFB',

  // Status
  error: '#FF0000',

  // Text
  textPrimary: '#022150',
  textWhite: '#FFFFFF',
};

export const typography = {
  fontFamily: {
    interSemiBold: 'Inter_18pt-SemiBold',
  },
  fontSize: {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  fontWeight: {
    regular: '400' as const,
    semiBold: '600' as const,
  },
  letterSpacing: {
    tight: 0.2,
    normal: 0.48,
  },
};

export const spacing = {
  xs: 2,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 26,
};

export const borderRadius = {
  sm: 9,
  md: 24,
};

export const sizes = {
  icon: {
    sm: 20,
    md: 25,
    lg: 48,
  },
  badge: {
    sm: 18,
  },
};
