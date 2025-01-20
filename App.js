import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './components/ThemeContext';
import Dashboard from './screens/Dashboard';
import Inventory from './screens/Inventory';
import Production from './screens/Production';
import MaintenanceLabor from './screens/MaintenanceLabor';
import Settings from './screens/Settings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Inventory') {
                iconName = focused ? 'cube' : 'cube-outline';
              } else if (route.name === 'Production') {
                iconName = focused ? 'construct' : 'construct-outline';
              } else if (route.name === 'Maintenance & Labor') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              display: 'flex',
            },
            tabBarLabelStyle: {
              fontFamily: 'Roboto',
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Inventory" component={Inventory} />
          <Tab.Screen name="Production" component={Production} />
          <Tab.Screen name="Maintenance & Labor" component={MaintenanceLabor} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

