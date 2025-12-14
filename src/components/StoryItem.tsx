import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors, typography, spacing, sizes} from '../styles/theme';
import {scaleFont, moderateScale} from '../utils/responsive';

interface StoryItemProps {
  name: string;
  imageUrl?: string;
}

export const StoryItem: React.FC<StoryItemProps> = ({name, imageUrl: _imageUrl}) => {
  // Get initials from name (first two letters)
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <View style={styles.container}>
      {/* Gradient border effect using nested circles */}
      <View style={styles.gradientBorder}>
        <View style={styles.whiteSpacing}>
          <View style={styles.innerCircle}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.md,
  } as ViewStyle,
  gradientBorder: {
    width: sizes.story.outer,
    height: sizes.story.outer,
    borderRadius: sizes.story.outer / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.storyBorderPink,
  } as ViewStyle,
  whiteSpacing: {
    // Responsive spacing (4px scaled)
    width: sizes.story.outer - moderateScale(4),
    height: sizes.story.outer - moderateScale(4),
    borderRadius: (sizes.story.outer - moderateScale(4)) / 2,
    backgroundColor: colors.textWhite,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  innerCircle: {
    width: sizes.story.inner,
    height: sizes.story.inner,
    borderRadius: sizes.story.inner / 2,
    backgroundColor: colors.storyInnerPink,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  initials: {
    fontFamily: typography.fontFamily.interSemiBold,
    fontSize: scaleFont(20),
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textWhite,
    letterSpacing: 0.4,
  } as TextStyle,
  name: {
    fontFamily: typography.fontFamily.interSemiBold,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textPrimary,
    letterSpacing: 0.14,
    marginTop: spacing.sm,
    textAlign: 'center',
  } as TextStyle,
});
