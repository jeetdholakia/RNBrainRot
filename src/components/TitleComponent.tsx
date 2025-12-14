import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {spacing, sizes, colors} from '../styles/theme';
import {layouts, containers, badges, text} from '../styles/common';
import {moderateScale} from '../utils/responsive';

interface TitleComponentProps {
  title?: string;
  notificationCount?: number;
  onEnvelopePress?: () => void;
}

export const TitleComponent: React.FC<TitleComponentProps> = ({
  title = "Let's Explore",
  notificationCount = 2,
  onEnvelopePress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.envelopeButton}
        onPress={onEnvelopePress}
        activeOpacity={0.7}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
        <View style={styles.envelopeIconContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={moderateScale(20)}
            color={colors.storyBorderPink}
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
  envelopeButton: {
    position: 'relative',
  } as ViewStyle,
  envelopeIconContainer: containers.circularButton(sizes.icon.lg),
  notificationBadge: badges.notificationBadge,
  notificationText: badges.notificationText,
});
