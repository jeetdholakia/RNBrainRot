/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {TitleComponent} from './src/components/TitleComponent';
import {UserStories} from './src/components/UserStories';
import {PostCard} from './src/components/PostCard';
import {userPostsData, UserPost} from './src/data/userPosts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  const handleEnvelopePress = useCallback(() => {
    console.log('Envelope icon pressed!');
  }, []);

  const handleMenuPress = useCallback((postId: number) => {
    console.log('Menu pressed for post:', postId);
  }, []);

  // Render header component with Title and User Stories
  const renderHeader = useCallback(() => {
    return (
      <>
        <TitleComponent
          title="Let's Explore"
          notificationCount={2}
          onEnvelopePress={handleEnvelopePress}
        />
        <UserStories />
      </>
    );
  }, [handleEnvelopePress]);

  // Render each post item
  const renderPostItem: ListRenderItem<UserPost> = useCallback(
    ({item}) => (
      <PostCard
        userName={item.userName}
        userLocation={item.userLocation}
        postImageUrl={item.postImageUrl}
        likesCount={item.likesCount}
        commentsCount={item.commentsCount}
        bookmarksCount={item.bookmarksCount}
        onMenuPress={() => handleMenuPress(item.id)}
      />
    ),
    [handleMenuPress],
  );

  // Key extractor for FlatList
  const keyExtractor = useCallback((item: UserPost) => item.id.toString(), []);

  return (
    <View style={[styles.container, {paddingTop: safeAreaInsets.top}]}>
      <FlatList
        data={userPostsData}
        renderItem={renderPostItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
