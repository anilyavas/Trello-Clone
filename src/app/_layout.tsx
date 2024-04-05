import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

const RootLayout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{}} />
      <StatusBar style='light' />
    </ThemeProvider>
  );
};

export default RootLayout;
