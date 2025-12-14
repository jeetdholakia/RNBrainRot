import {ViewStyle, TextStyle} from 'react-native';
import {colors, typography, spacing, borderRadius, sizes} from './theme';

/**
 * Common reusable style patterns
 * All patterns use responsive values from theme
 */

export const layouts = {
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  flexColumn: {
    flexDirection: 'column',
  } as ViewStyle,
};

export const containers = {
  circularButton: (size: number = sizes.icon.lg) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle),

  // Responsive container with percentage-based width
  responsiveContainer: (widthPercentage: number = 100) => ({
    width: `${widthPercentage}%`,
    alignSelf: 'center',
  } as ViewStyle),
};

export const badges = {
  notificationBadge: {
    position: 'absolute',
    top: -spacing.xs,
    right: -spacing.xs,
    width: sizes.badge.sm,
    height: sizes.badge.sm,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.error,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  notificationText: {
    fontFamily: typography.fontFamily.interSemiBold,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textWhite,
    letterSpacing: typography.letterSpacing.tight,
  } as TextStyle,
};

export const text = {
  heading: {
    fontFamily: typography.fontFamily.interSemiBold,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textPrimary,
    letterSpacing: typography.letterSpacing.normal,
  } as TextStyle,

  body: {
    fontFamily: typography.fontFamily.interRegular,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    color: colors.textPrimary,
  } as TextStyle,

  caption: {
    fontFamily: typography.fontFamily.interRegular,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
  } as TextStyle,
};
