/**
 * Responsive Utilities
 *
 * Provides scaling utilities for responsive design across different device sizes.
 * Based on react-native-size-matters with custom base dimensions.
 *
 * Design Reference:
 * - Base Width: 375 (iPhone 8/SE size - common mobile baseline)
 * - Base Height: 667 (iPhone 8/SE size)
 *
 * Usage:
 * - scaleWidth: For horizontal spacing, widths, and horizontal margins
 * - scaleHeight: For vertical spacing, heights, and vertical margins
 * - scaleFont: For font sizes (uses moderateScale with factor 0.3 for balanced scaling)
 * - moderateScale: General-purpose scaling with customizable factor
 */

import {Dimensions, Platform} from 'react-native';
import {scale, verticalScale, moderateScale as ms} from 'react-native-size-matters';

// Get current device dimensions
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Design baseline dimensions (iPhone 8/SE)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

/**
 * Scales a value based on device width
 * Perfect for: horizontal spacing, widths, horizontal margins/padding
 *
 * @param size - The size to scale (based on design from 375px width device)
 * @returns Scaled size for current device width
 */
export const scaleWidth = (size: number): number => {
  return scale(size);
};

/**
 * Scales a value based on device height
 * Perfect for: vertical spacing, heights, vertical margins/padding
 *
 * @param size - The size to scale (based on design from 667px height device)
 * @returns Scaled size for current device height
 */
export const scaleHeight = (size: number): number => {
  return verticalScale(size);
};

/**
 * Scales font sizes with moderate factor for better readability
 * Uses a factor of 0.3 to prevent fonts from becoming too large on tablets
 *
 * @param size - The font size to scale
 * @param factor - Resize factor (default 0.3 for balanced scaling)
 * @returns Scaled font size
 */
export const scaleFont = (size: number, factor: number = 0.3): number => {
  return ms(size, factor);
};

/**
 * General-purpose moderate scaling
 * Scales less aggressively than linear scaling for better visual balance
 *
 * @param size - The size to scale
 * @param factor - Resize factor (0-1, default 0.5)
 * @returns Moderately scaled size
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return ms(size, factor);
};

/**
 * Returns the current screen width
 */
export const getScreenWidth = (): number => {
  return SCREEN_WIDTH;
};

/**
 * Returns the current screen height
 */
export const getScreenHeight = (): number => {
  return SCREEN_HEIGHT;
};

/**
 * Checks if the device is a tablet
 * Based on screen width and aspect ratio
 */
export const isTablet = (): boolean => {
  const aspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
  // Tablets typically have width > 600 and aspect ratio closer to 4:3 or 3:2
  return SCREEN_WIDTH >= 600 && aspectRatio < 1.6;
};

/**
 * Checks if the device is a small phone
 * Useful for applying special adjustments to very small devices
 */
export const isSmallDevice = (): boolean => {
  return SCREEN_WIDTH < 375;
};

/**
 * Platform-specific value selection
 * Returns iOS value on iOS, Android value on Android
 *
 * @param ios - Value to use on iOS
 * @param android - Value to use on Android
 * @returns Platform-specific value
 */
export const platformValue = <T,>(ios: T, android: T): T => {
  return Platform.select({ios, android}) as T;
};

/**
 * Responsive spacing based on device size
 * Returns different spacing values for different device categories
 *
 * @param small - Spacing for small devices (< 375px)
 * @param normal - Spacing for normal devices (375-600px)
 * @param large - Spacing for tablets (> 600px)
 */
export const responsiveSize = (
  small: number,
  normal: number,
  large: number,
): number => {
  if (isSmallDevice()) {
    return small;
  }
  if (isTablet()) {
    return large;
  }
  return normal;
};

/**
 * Device size categories for responsive design
 */
export const DEVICE_SIZES = {
  BASE_WIDTH,
  BASE_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_SMALL_DEVICE: isSmallDevice(),
  IS_TABLET: isTablet(),
} as const;
