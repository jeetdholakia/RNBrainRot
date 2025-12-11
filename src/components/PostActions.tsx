import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import {colors, typography, spacing, sizes} from '../styles/theme';

interface PostActionsProps {
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;
}

export const PostActions: React.FC<PostActionsProps> = ({
  likesCount,
  commentsCount,
  bookmarksCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionItem}>
        <FontAwesomeIcon
          icon={faHeart}
          size={sizes.icon.md}
          color={colors.iconGray}
        />
        <Text style={styles.actionText}>{likesCount}</Text>
      </View>

      <View style={styles.actionItem}>
        <FontAwesomeIcon
          icon={faComment}
          size={sizes.icon.md}
          color={colors.iconGray}
        />
        <Text style={styles.actionText}>{commentsCount}</Text>
      </View>

      <View style={styles.actionItem}>
        <FontAwesomeIcon
          icon={faBookmark}
          size={sizes.icon.md}
          color={colors.iconGray}
        />
        <Text style={styles.actionText}>{bookmarksCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  } as ViewStyle,
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  } as ViewStyle,
  actionText: {
    fontFamily: typography.fontFamily.interMedium,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    letterSpacing: typography.letterSpacing.normal,
    marginLeft: spacing.xs,
  } as TextStyle,
});
