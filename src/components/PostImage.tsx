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
    width: sizes.postImage.width,
    height: sizes.postImage.height,
    backgroundColor: colors.postImageBackground,
    borderRadius: borderRadius.md,
  } as ViewStyle,
});
