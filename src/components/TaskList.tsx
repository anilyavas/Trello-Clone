import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

const TaskList = () => {
  const [task, setTask] = useState([
    { description: 'First task' },
    { description: 'Second task' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={task}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
    </View>
  );
};

export default TaskList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
