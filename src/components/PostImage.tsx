import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {colors, borderRadius, sizes} from '../styles/theme';

interface PostImageProps {
  imageUrl?: string;
}

export const PostImage: React.FC<PostImageProps> = ({imageUrl: _imageUrl}) => {
  // For now, we'll use a placeholder background
  // In a real app, this would use <Image source={{uri: imageUrl}} />
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    // Use percentage width for responsiveness across all device sizes
    width: '100%',
    // Maintain aspect ratio from original design (327:220 = ~1.486)
    aspectRatio: sizes.postImage.aspectRatio,
    backgroundColor: colors.postImageBackground,
    borderRadius: borderRadius.md,
    // Ensure proper rendering
    overflow: 'hidden',
  } as ViewStyle,
});
