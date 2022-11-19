import { createContext } from "react";

    const Theme = {
    'LIGHT': 'light',
    'DARK': 'dark',
    }


    export const ThemeContext = createContext({
        theme: Theme.LIGHT,
        changeTheme: () => { }
    })
    


