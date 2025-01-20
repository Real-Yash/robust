import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, lightTheme, darkTheme } from '../components/ThemeContext';

const Production = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

  const tasks = [
    { id: '1', name: 'Assemble Product A', deadline: '2023-05-15', status: 'In Progress', completion: 75 },
    { id: '2', name: 'Quality Check', deadline: '2023-05-10', status: 'Overdue', completion: 50 },
    { id: '3', name: 'Package Products', deadline: '2023-05-20', status: 'Not Started', completion: 0 },
  ];

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={[styles.taskDeadline, item.status === 'Overdue' && styles.overdueText]}>
        {item.status === 'Overdue' ? 'Overdue' : `Deadline: ${item.deadline}`}
      </Text>
      <Text style={styles.taskStatus}>Status: {item.status}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${item.completion}%` }]} />
      </View>
      <Text style={styles.progressText}>{item.completion}% Complete</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.createTaskButton}>
        <Text style={styles.createTaskText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 16,
  },
  taskItem: {
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.text,
  },
  taskDeadline: {
    fontSize: 14,
    marginBottom: 4,
    color: theme.text,
  },
  overdueText: {
    color: 'red',
  },
  taskStatus: {
    fontSize: 14,
    marginBottom: 8,
    color: theme.text,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: theme.border,
    borderRadius: 5,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.primary,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: theme.text,
  },
  createTaskButton: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  createTaskText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Production;

