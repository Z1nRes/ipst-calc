const runThemeController = () => {
    const button = document.querySelector('[data-container="button-theme-change"]')
    const isDarkTheme = localStorage.getItem('theme') === 'dark' && window.matchMedia('(prefers-color-scheme: dark)').matches

    button.addEventListener('click', () => {
        const isDarkTheme = localStorage.getItem('theme') === 'dark' && window.matchMedia('(prefers-color-scheme: dark)').matches

        if (isDarkTheme) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            button.querySelector('i').className = `fa fa-moon-o`
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            button.querySelector('i').className = `fa fa-sun-o`
        }
    })

    if (isDarkTheme) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    button.querySelector('i').className = `fa ${isDarkTheme ? 'fa-sun-o' : 'fa-moon-o'}`
}

export { runThemeController }