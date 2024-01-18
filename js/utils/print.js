const print = (message) => {
    const container = document.querySelector('[data-container="result"]')
    if (!container) return alert('Container for result not defined')
    container.innerHTML = message
}

export { print }