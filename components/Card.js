import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, lightTheme, darkTheme } from './ThemeContext';

export const Card = ({ children, style }) => {
    const { theme } = useTheme();
    const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
};

const getStyles = (theme) => StyleSheet.create({
    card: {
        backgroundColor: theme.card,
        borderRadius: 8,
        padding: 16,
        shadowColor: theme.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});

