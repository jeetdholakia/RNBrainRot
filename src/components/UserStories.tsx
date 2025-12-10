import React from 'react';
import {FlatList, StyleSheet, ViewStyle} from 'react-native';
import {StoryItem} from './StoryItem';
import {userStoriesData, UserStory} from '../data/userStories';
import {spacing} from '../styles/theme';

export const UserStories: React.FC = () => {
  const renderStoryItem = ({item}: {item: UserStory}) => (
    <StoryItem name={item.name} />
  );

  return (
    <FlatList
      data={userStoriesData}
      renderItem={renderStoryItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  } as ViewStyle,
});
