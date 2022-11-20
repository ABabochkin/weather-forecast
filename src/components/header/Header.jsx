import React, { useEffect, useState } from 'react'
//import { Theme } from '../../context/ThemeContext';
//import { useTheme } from '../../hooks/useTheme';


import '../header/header.scss'


const Header = (props) => {
    const {getWeather = Function.prototype} = props

    const [location, setLocation] = useState('');
    
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark' );


    const changeTheme = () => {
        localStorage.setItem('theme', JSON.stringify('light'));
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme] )

    
    
    useEffect(() => {
        const root = document.querySelector(':root');
        root.style.setProperty('--body-background-default', `var(--body-background-${theme})`);
        root.style.setProperty('--components-background-default', `var(--components-background-${theme})`);
        root.style.setProperty('--card-background-default', `var(--card-background-${theme})`);
        root.style.setProperty('--card-shadow-default', `var(--card-shadow-${theme})`);
    
        if (theme === 'dark') {
            root.style.setProperty('--text-color-default', `var(--text-color-light)`);
        } else {
            root.style.setProperty('--text-color-default', `var(--text-color-dark)`);
        }
    }, [theme] ) 
        

    return (
        <header className='header' >
            <div className='wrapper' >
                <div className='left' >
                    <img width={65} height={65} src='./images/logo.png' alt='logo' />
                    <h3>WEATHER</h3>
                </div>
                <div className='right'>
                    <img width={35} height={35} src='./images/theme.svg' alt='logo'  onClick={changeTheme} />
                    <input 
                        className='input' 
                        type='text' 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <img className='search' width={20} height={20}  src='./images/search.svg' alt='search' onClick={() => getWeather(location) } />
                </div>
            </div>
        </header>
    )
}

export default Header