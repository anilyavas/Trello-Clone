import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import RealmCustomProvider from '../providers/Realm';

const RootLayout = () => {
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
          <Stack />
        </RealmCustomProvider>
      </ThemeProvider>
      <StatusBar style='light' />
    </>
  );
};

export default RootLayout;
