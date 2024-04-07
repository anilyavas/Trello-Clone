import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import RealmCustomProvider from '../providers/Realm';
import { FontAwesome } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
          <Stack
            screenOptions={{
              headerRight: () => (
                <FontAwesome name='user-circle-o' size={24} color='lightgrey' />
              ),
            }}
          />
        </RealmCustomProvider>
      </ThemeProvider>
      <StatusBar style='light' />
    </>
  );
};

export default RootLayout;
