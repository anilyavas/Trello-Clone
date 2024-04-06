import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useObject } from '@realm/react';
import { Task } from '../modals/Task';
import { BSON } from 'realm';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectId(id as string));

  if (!task) {
    return <Text>Not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Task Details' }} />
      <Text style={styles.text}>
        id: {id}
        {task.description}
      </Text>
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
