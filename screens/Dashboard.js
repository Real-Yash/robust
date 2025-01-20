import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, lightTheme, darkTheme } from '../components/ThemeContext';
import { Card } from '../components/Card';
import { FAB } from '../components/FAB';

const Dashboard = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

  const metrics = [
    { title: 'Inventory Highlights', content: 'Stock Levels: Low (3 items)' },
    { title: 'Production Summary', content: '2 Tasks Delayed' },
    { title: 'Maintenance Tasks', content: 'Next Maintenance: 2 Days' },
    { title: 'Labor Overview', content: '12 Workers Present' },
  ];

  const recentActivities = [
    { id: '1', activity: 'Steel Rod added to inventory' },
    { id: '2', activity: 'Maintenance completed on Machine A' },
    { id: '3', activity: 'New production task created' },
  ];

  const renderMetricCard = ({ item }) => (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.content}</Text>
    </Card>
  );

  const renderActivityItem = ({ item }) => (
    <View style={styles.activityItem}>
      <Text style={styles.activityText}>{item.activity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={metrics}
        renderItem={renderMetricCard}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Key Metrics</Text>
        }
        ListFooterComponent={
          <>
            <Text style={styles.sectionTitle}>Recent Activities</Text>
            <FlatList
              data={recentActivities}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.generateReportButton}>
              <Text style={styles.generateReportText}>Generate Report</Text>
            </TouchableOpacity>
          </>
        }
      />
      <FAB onPress={() => console.log('FAB pressed')} />
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.text,
  },
  cardContent: {
    fontSize: 14,
    color: theme.text,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    color: theme.text,
  },
  activityItem: {
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  activityText: {
    fontSize: 14,
    color: theme.text,
  },
  generateReportButton: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  generateReportText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;

