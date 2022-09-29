const lightTheme = {
    '--clr-text': 'hsl(200,15%,8%)',
    '--clr-background': 'hsl(0,0%,98%)',
    '--clr-element': 'hsl(0,0%,100%)',
}
const darkTheme = {
    '--clr-text': 'hsl(0,0%,100%)',
    '--clr-background': 'hsl(207,26%,17%)',
    '--clr-element': 'hsl(209,23%,22%)',
}
const switchTheme = (theme) => {
    const root = document.documentElement
    if (theme === 'light') {
        Object.keys(lightTheme).forEach(key => {
            root.style.setProperty(key, lightTheme[key])
        })
    } else {
        Object.keys(darkTheme).forEach(key => {
            root.style.setProperty(key, darkTheme[key])
        })
    }
}

export default switchTheme