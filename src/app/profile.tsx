import { useUser, useAuth } from '@realm/react';
import { View, Text, Button } from 'react-native';

export default function Profile() {
  const user = useUser();
  const { logOut } = useAuth();
  return (
    <View>
      <Text style={{ color: 'white' }}>{user.id}</Text>
      <Button onPress={() => logOut()} title='Sign out' />
    </View>
  );
}
