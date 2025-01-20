import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useTheme, lightTheme, darkTheme } from '../components/ThemeContext';
import { FAB } from '../components/FAB';

const Inventory = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);
  const [searchQuery, setSearchQuery] = useState('');

  const inventoryItems = [
    { id: '1', name: 'Steel Rod', category: 'Raw Material', stockLevel: 50, reorderLevel: 20 },
    { id: '2', name: 'Screws', category: 'Hardware', stockLevel: 1000, reorderLevel: 500 },
    { id: '3', name: 'Paint', category: 'Finishing', stockLevel: 25, reorderLevel: 10 },
  ];

  const filteredItems = inventoryItems.filter(
    item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderInventoryItem = ({ item }) => (
    <View style={styles.inventoryItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      <Text style={styles.itemStock}>Stock: {item.stockLevel}</Text>
      <Text style={styles.itemReorder}>Reorder: {item.reorderLevel}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search inventory..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredItems}
        renderItem={renderInventoryItem}
        keyExtractor={item => item.id}
      />
      <FAB onPress={() => console.log('Add New Inventory')} />
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 16,
  },
  searchBar: {
    backgroundColor: theme.card,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    color: theme.text,
  },
  inventoryItem: {
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
    flex: 2,
  },
  itemCategory: {
    fontSize: 14,
    color: theme.text,
    flex: 1,
  },
  itemStock: {
    fontSize: 14,
    color: theme.text,
    flex: 1,
  },
  itemReorder: {
    fontSize: 14,
    color: theme.text,
    flex: 1,
  },
  editButton: {
    backgroundColor: theme.primary,
    padding: 8,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Inventory;

