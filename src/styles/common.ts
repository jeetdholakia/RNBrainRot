import {ViewStyle, TextStyle} from 'react-native';
import {colors, typography, spacing, borderRadius, sizes} from './theme';

/**
 * Common reusable style patterns
 */

export const layouts = {
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
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
};
