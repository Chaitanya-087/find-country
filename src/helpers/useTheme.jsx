import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = (type) => {
        switch (type) {
            case "element": return theme === "light" ? 'var(--clr-lightmode-element)' : 'var(--clr-darkmode-element)';
            case "text": return theme === "light" ? 'var(--clr-lightmode-text)' : 'var(--clr-darkmode-text)';
            case "background": return theme === "light" ? 'var(--clr-lightmode-background)' : 'var(--clr-darkmode-background)';
            default: return;
        }
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const value = {
        theme,
        toggleTheme,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme }