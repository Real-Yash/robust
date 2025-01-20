import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, lightTheme, darkTheme } from '../components/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const MaintenanceLabor = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

  const machines = [
    { id: '1', name: 'Machine A', status: 'Healthy', nextMaintenance: '2023-05-20' },
    { id: '2', name: 'Machine B', status: 'Needs Maintenance', nextMaintenance: '2023-05-15' },
    { id: '3', name: 'Machine C', status: 'Healthy', nextMaintenance: '2023-05-25' },
  ];

  const workers = [
    { id: '1', name: 'John Doe', attendance: 'Present', shift: 'Morning' },
    { id: '2', name: 'Jane Smith', attendance: 'Absent', shift: 'Afternoon' },
    { id: '3', name: 'Mike Johnson', attendance: 'Present', shift: 'Night' },
  ];

  const renderMachine = ({ item }) => (
    <View style={styles.machineItem}>
      <Ionicons name="cog" size={24} color={theme.text} />
      <View style={styles.machineInfo}>
        <Text style={styles.machineName}>{item.name}</Text>
        <Text style={[styles.machineStatus, { color: item.status === 'Healthy' ? 'green' : 'red' }]}>
          {item.status}
        </Text>
        <Text style={styles.machineNextMaintenance}>Next Maintenance: {item.nextMaintenance}</Text>
      </View>
    </View>
  );

  const renderWorker = ({ item }) => (
    <View style={styles.workerItem}>
      <Ionicons name="person" size={24} color={theme.text} />
      <View style={styles.workerInfo}>
        <Text style={styles.workerName}>{item.name}</Text>
        <Text style={[styles.workerAttendance, { color: item.attendance === 'Present' ? 'green' : 'red' }]}>
          {item.attendance}
        </Text>
        <Text style={styles.workerShift}>{item.shift} Shift</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Maintenance</Text>
      <FlatList
        data={machines}
        renderItem={renderMachine}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>Labor</Text>
      <FlatList
        data={workers}
        renderItem={renderWorker}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.markAttendanceButton}>
        <Text style={styles.markAttendanceText}>Mark Attendance</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: theme.text,
  },
  machineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  machineInfo: {
    marginLeft: 16,
  },
  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
  },
  machineStatus: {
    fontSize: 14,
  },
  machineNextMaintenance: {
    fontSize: 14,
    color: theme.text,
  },
  workerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  workerInfo: {
    marginLeft: 16,
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
  },
  workerAttendance: {
    fontSize: 14,
  },
  workerShift: {
    fontSize: 14,
    color: theme.text,
  },
  markAttendanceButton: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  markAttendanceText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MaintenanceLabor;

