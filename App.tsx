/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { TitleComponent } from './src/components/TitleComponent';
import { UserStories } from './src/components/UserStories';

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

  const handleHeartPress = () => {
    console.log('Heart icon pressed!');
  };

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <TitleComponent
        title="Let's Explore"
        notificationCount={2}
        onHeartPress={handleHeartPress}
      />
      <UserStories />
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
