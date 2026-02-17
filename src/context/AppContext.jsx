import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => { // Fixed typo here
    const [darkMode, setdarkMode] = useState(() => {
        // Safe check for SSR or initial load
        return localStorage.getItem('darkMode') === "true";
    });

    useEffect(() => {
        // Sync state to localStorage
        localStorage.setItem("darkMode", darkMode);
        
        
    }, [darkMode]);

    return (
        <AppContext.Provider
            value={{
                darkMode,
                setdarkMode
            }}
        >
            {children} {/* Fixed typo here */}
        </AppContext.Provider>
    );
};

export default AppProvider;