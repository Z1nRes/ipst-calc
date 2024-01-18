import mathCallback from './logic.js'
import { runThemeController } from './common/theme.js'

window.onload = () => {
    const buttons = [ ...document.querySelectorAll('[data-container="action-button"]') ]
    const callback = mathCallback()

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const operation = button.innerText.trim()
            callback(operation)
        })
    })

    runThemeController()
}

