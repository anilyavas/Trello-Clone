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

const TaskList = () => {
  const [task, setTask] = useState([
    { description: 'First task', id: '123' },
    { description: 'Second task', id: '67' },
  ]);
  const [input, setInput] = useState('');

  const createTask = () => {
    setTask([...task, { description: input }]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={task}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
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
