import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useThemeProvider = () => {
    const context = useContext(ThemeContext);
    // Fejlhåndtering til hvis context ikke eksisterer.
    return context;
}

const ThemeProvider = ({ children }) => {

    const [test, setTest] = useState("Hest");
    const [isDarkMode, setIsDarkmode] = useState(true);

    const handleToggleDarkmode = () => {
        setIsDarkmode(prevValue => !prevValue);
    }

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.remove("light");
        }
        else {
            body.classList.add("light");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ test, isDarkMode, handleToggleDarkmode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;