import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';
import { useQuery, useRealm, useUser } from '@realm/react';
import { Task } from '../modals/Task';

const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const user = useUser();

  const [newTask, setNewTask] = useState('');

  const createTask = () => {
    realm.write(() => {
      realm.create(Task, { description: newTask, user_id: user.id });
    });

    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor='grey'
        placeholder='Add todo'
        style={styles.input}
      />
      <Button title='Add todo' onPress={createTask} />
    </View>
  );
};

export default TaskList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 15,
    borderRadius: 5,
    gap: 10,
    margin: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    color: 'white',
    padding: 10,
    backgroundColor: '#1d2125',
    borderRadius: 5,
  },
});
