/**
 * Design System Theme
 * Centralized colors, typography, and spacing for consistent styling
 */

export const colors = {
  // Primary
  primary: '#022150',
  black: '#000000',

  // Backgrounds
  backgroundLight: '#F9FAFB',
  postImageBackground: '#D9D9D9',

  // Status
  error: '#FF0000',

  // Text
  textPrimary: '#022150',
  textSecondary: '#79869F',
  textWhite: '#FFFFFF',

  // Story colors
  storyBorderPink: '#E91E63',
  storyInnerPink: '#F06292',

  // Post colors
  iconGray: '#79869F',
};

export const typography = {
  fontFamily: {
    inter: 'Inter',
    interRegular: 'Inter-Regular',
    interMedium: 'Inter-Medium',
    interSemiBold: 'Inter_18pt-SemiBold',
  },
  fontSize: {
    xs: 10,
    xxs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
  },
  letterSpacing: {
    xxs: 0.12,
    xs: 0.14,
    tight: 0.16,
    normal: 0.28,
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
  md: 15,
  lg: 24,
};

export const sizes = {
  icon: {
    sm: 20,
    md: 24,
    lg: 48,
  },
  badge: {
    sm: 18,
  },
  story: {
    outer: 65,
    inner: 59,
  },
  avatar: {
    sm: 48,
  },
  postImage: {
    width: 327,
    height: 220,
  },
  menuButton: {
    size: 32,
  },
};
