

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    // document.getElementById('root').innerHTML = isDarkMode ? 'Dark' : 'Light'
})


document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    // document.getElementById('root').innerHTML = 'System'
})