import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {spacing, sizes} from '../styles/theme';
import {layouts, containers, badges, text} from '../styles/common';

interface TitleComponentProps {
  title?: string;
  notificationCount?: number;
  onHeartPress?: () => void;
}

export const TitleComponent: React.FC<TitleComponentProps> = ({
  title = "Let's Explore",
  notificationCount = 2,
  onHeartPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.heartButton}
        onPress={onHeartPress}
        activeOpacity={0.7}>
        <View style={styles.heartIconContainer}>
          <Image
            source={require('../assets/heart-icon.png')}
            style={styles.heartIcon}
            resizeMode="contain"
          />
        </View>
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layouts.rowBetween,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  } as ViewStyle,
  title: text.heading,
  heartButton: {
    position: 'relative',
  } as ViewStyle,
  heartIconContainer: containers.circularButton(sizes.icon.lg),
  heartIcon: {
    width: sizes.icon.md,
    height: sizes.icon.sm,
  } as ViewStyle,
  notificationBadge: badges.notificationBadge,
  notificationText: badges.notificationText,
});
