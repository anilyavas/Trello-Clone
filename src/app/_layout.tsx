import { Link, Stack } from 'expo-router';
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
                <Link href={'/login'}>
                  <FontAwesome
                    name='user-circle-o'
                    size={24}
                    color='lightgrey'
                  />
                </Link>
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
