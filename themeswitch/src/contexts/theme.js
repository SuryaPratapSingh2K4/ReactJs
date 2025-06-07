import {useContext, createContext} from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    LightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}