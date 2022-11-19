

export const changeCss = (theme) => {
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

} 