/**
 * Design System Theme
 * Centralized colors, typography, and spacing for consistent styling
 * All sizes are responsive and scale based on device dimensions
 */

import {
  scaleWidth,
  scaleHeight,
  scaleFont,
  moderateScale,
  platformValue,
} from '../utils/responsive';

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
    xs: scaleFont(10),
    xxs: scaleFont(12),
    sm: scaleFont(14),
    md: scaleFont(16),
    lg: scaleFont(18),
    xl: scaleFont(24),
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
  xs: moderateScale(2),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(26),
};

export const borderRadius = {
  sm: moderateScale(9),
  md: moderateScale(15),
  lg: moderateScale(24),
};

export const sizes = {
  icon: {
    sm: moderateScale(20),
    md: moderateScale(24),
    lg: moderateScale(48),
  },
  badge: {
    sm: moderateScale(18),
  },
  story: {
    outer: moderateScale(65),
    inner: moderateScale(59),
  },
  avatar: {
    sm: moderateScale(48),
  },
  // Post image uses percentage-based width, calculated in component with aspectRatio
  postImage: {
    // Width will be calculated as percentage in component (e.g., 90% of container)
    // These values serve as fallback or reference for aspectRatio calculation
    aspectRatio: 327 / 220, // ~1.486 (width/height ratio from original design)
    baseWidth: scaleWidth(327),
    baseHeight: scaleHeight(220),
  },
  menuButton: {
    size: moderateScale(32),
  },
};

/**
 * Platform-specific adjustments
 * Use these when components need different values on iOS vs Android
 */
export const platformAdjustments = {
  // iOS typically needs slightly more padding for touch targets
  touchTargetPadding: platformValue(
    moderateScale(12), // iOS
    moderateScale(8),  // Android
  ),
  // Font adjustments for platform differences
  fontLineHeight: {
    ios: 1.2,
    android: 1.3,
  },
};
