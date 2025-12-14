import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {colors, typography, spacing, sizes} from '../styles/theme';
import {moderateScale} from '../utils/responsive';

interface PostHeaderProps {
  userName: string;
  userLocation: string;
  onMenuPress?: () => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  userName,
  userLocation,
  onMenuPress,
}) => {
  // Get initials from name for avatar
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(userName);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userLocation}>{userLocation}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={onMenuPress}
        activeOpacity={0.7}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={moderateScale(18)}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  } as ViewStyle,
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  } as ViewStyle,
  avatar: {
    width: sizes.avatar.sm,
    height: sizes.avatar.sm,
    borderRadius: sizes.avatar.sm / 2,
    backgroundColor: colors.storyInnerPink,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  avatarText: {
    fontFamily: typography.fontFamily.interMedium,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.textWhite,
  } as TextStyle,
  textContainer: {
    justifyContent: 'center',
    gap: moderateScale(4),
    flex: 1,
  } as ViewStyle,
  userName: {
    fontFamily: typography.fontFamily.interMedium,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.black,
    letterSpacing: typography.letterSpacing.tight,
  } as TextStyle,
  userLocation: {
    fontFamily: typography.fontFamily.interRegular,
    fontSize: typography.fontSize.xxs,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    letterSpacing: typography.letterSpacing.xxs,
  } as TextStyle,
  menuButton: {
    width: sizes.menuButton.size,
    height: sizes.menuButton.size,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});
