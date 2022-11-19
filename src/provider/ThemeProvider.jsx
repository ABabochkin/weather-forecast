
import { useState } from "react";
import { changeCss } from "../changeCssVar/changeCss";
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../context/ThemeContext';
import { storage } from '../changeCssVar/storage';




export const ThemeProvider = ({ children, ...props }) => {

    const [theme, setTheme] = useState(storage.getItem('theme') || Theme.LIGHT);

    changeCss(theme);
    const changeTheme = (theme) => {
        storage.setItem('theme', theme)
        setTheme(theme);
        changeCss(theme);
    }

    return <ThemeContext.Provider value={{ theme, changeTheme }} {...props} >
        {children}
    </ThemeContext.Provider>
}