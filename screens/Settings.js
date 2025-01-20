import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useTheme, lightTheme, darkTheme } from '../components/ThemeContext';

const Settings = () => {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(theme === 'light' ? lightTheme : darkTheme);

    return (
        <View style={styles.container}>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Switch
                    value={theme === 'dark'}
                    onValueChange={toggleTheme}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={theme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Notification Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.logoutButton]}>
                <Text style={styles.logoutButtonText}>Logout</Text>
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
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
    },
    settingLabel: {
        fontSize: 16,
        color: theme.text,
    },
    button: {
        backgroundColor: theme.card,
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: theme.text,
        fontSize: 16,
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        marginTop: 32,
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Settings;

