import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useObject, useRealm } from '@realm/react';
import { Task } from '../modals/Task';
import { BSON } from 'realm';
import { useState } from 'react';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectId(id as string));
  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );
  const realm = useRealm();

  if (!task) {
    return <Text>Not found</Text>;
  }
  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Task Details' }} />
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        style={styles.text}
      />
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
