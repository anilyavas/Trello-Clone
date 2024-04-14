import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import RealmCustomProvider from '../providers/Realm';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
          <Stack
            screenOptions={{
              headerRight: () => (
                <View style={{ gap: 10, flexDirection: 'row' }}>
                  <Link href={'/login'}>
                    <FontAwesome name='sign-in' size={24} color='lightgrey' />
                  </Link>
                  <Link href={'/profile'}>
                    <FontAwesome
                      name='user-circle-o'
                      size={24}
                      color='lightgrey'
                    />
                  </Link>
                </View>
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
