import React, {memo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {PostHeader} from './PostHeader';
import {PostImage} from './PostImage';
import {PostActions} from './PostActions';
import {spacing} from '../styles/theme';

interface PostCardProps {
  userName: string;
  userLocation: string;
  postImageUrl?: string;
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;
  onMenuPress?: () => void;
}

const PostCardComponent: React.FC<PostCardProps> = ({
  userName,
  userLocation,
  postImageUrl,
  likesCount,
  commentsCount,
  bookmarksCount,
  onMenuPress,
}) => {
  return (
    <View style={styles.container}>
      <PostHeader
        userName={userName}
        userLocation={userLocation}
        onMenuPress={onMenuPress}
      />
      <PostImage imageUrl={postImageUrl} />
      <PostActions
        likesCount={likesCount}
        commentsCount={commentsCount}
        bookmarksCount={bookmarksCount}
      />
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const PostCard = memo(PostCardComponent);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  } as ViewStyle,
});
