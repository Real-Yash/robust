import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, lightTheme, darkTheme } from './ThemeContext';

export const FAB = ({ onPress }) => {
    const { theme } = useTheme();
    const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

const getStyles = (theme) => StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: theme.primary,
        borderRadius: 28,
        elevation: 8,
        shadowColor: theme.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

