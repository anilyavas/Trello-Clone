import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TaskBoard from './src/components/TaskBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
