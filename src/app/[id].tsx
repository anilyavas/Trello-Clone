import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Task Details ' }} />
      <Text style={styles.text}>id: {id}</Text>
    </View>
  );
};

export default TaskDetails;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
