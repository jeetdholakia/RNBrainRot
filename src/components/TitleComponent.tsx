import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingVertical: 16,
  } as ViewStyle,
  title: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    color: '#022150',
    letterSpacing: 0.48,
  } as TextStyle,
  heartButton: {
    position: 'relative',
  } as ViewStyle,
  heartIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  heartIcon: {
    width: 25,
    height: 20,
  } as ViewStyle,
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  notificationText: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  } as TextStyle,
});
