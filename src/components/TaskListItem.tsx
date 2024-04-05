import { Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const TaskListItem = ({ task }) => {
  return (
    <Link href={`/${task.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign name='close' size={16} color='grey' />
      </Pressable>
    </Link>
  );
};

export default TaskListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d2125',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
