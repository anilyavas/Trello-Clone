import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '@realm/react';

const AnonymousLogin = () => {
  const { logInWithAnonymous } = useAuth();
  const guestLogin = () => {
    logInWithAnonymous();
  };
  return null;
};

export default AnonymousLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
