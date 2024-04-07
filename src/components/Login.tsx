import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '@realm/react';

const Login = () => {
  const { logInWithAnonymous } = useAuth();
  const guestLogin = () => {
    logInWithAnonymous();
  };
  return (
    <View style={styles.container}>
      <Text onPress={guestLogin}>Continue as a guest</Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
