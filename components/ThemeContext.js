import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const deviceTheme = useColorScheme();
    const [theme, setTheme] = useState(deviceTheme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export const lightTheme = {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007AFF',
    secondary: '#5856D6',
    accent: '#FF9500',
    card: '#F2F2F7',
    border: '#C7C7CC',
};

export const darkTheme = {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    accent: '#FF9F0A',
    card: '#1C1C1E',
    border: '#38383A',
};

