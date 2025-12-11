import React, {useState, useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, ViewStyle} from 'react-native';
import {StoryItem} from './StoryItem';
import {userStoriesData, UserStory} from '../data/userStories';
import {spacing} from '../styles/theme';

const ITEMS_PER_PAGE = 6;

export const UserStories: React.FC = () => {
  const [displayedStories, setDisplayedStories] = useState<UserStory[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadInitialStories = useCallback(() => {
    const initialStories = userStoriesData.slice(0, ITEMS_PER_PAGE);
    setDisplayedStories(initialStories);
    setCurrentPage(1);
    setHasMore(initialStories.length < userStoriesData.length);
  }, []);

  // Initial load
  useEffect(() => {
    loadInitialStories();
  }, [loadInitialStories]);

  const loadMoreStories = useCallback(() => {
    if (!hasMore) {
      return;
    }

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newStories = userStoriesData.slice(startIndex, endIndex);

    if (newStories.length > 0) {
      setDisplayedStories(prevStories => [...prevStories, ...newStories]);
      setCurrentPage(prevPage => prevPage + 1);
      setHasMore(endIndex < userStoriesData.length);
    } else {
      setHasMore(false);
    }
  }, [currentPage, hasMore]);

  const renderStoryItem = useCallback(
    ({item}: {item: UserStory}) => <StoryItem name={item.name} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: UserStory) => item.id.toString(),
    [],
  );

  return (
    <FlatList
      data={displayedStories}
      renderItem={renderStoryItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      onEndReached={loadMoreStories}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  } as ViewStyle,
});
