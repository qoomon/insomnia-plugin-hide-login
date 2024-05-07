const styleId = 'hide-login-plugin'
document.getElementById(styleId)?.remove()
document.head.insertAdjacentHTML(
    'beforeend',
    `<style id="${styleId}">
    #root > .app > div > .grid {
        grid-template-columns: 0; /* hide login header */
        grid-template-rows: 0 1fr 30px; /* hide organization navbar */
    }
    #root > .app > div > .grid .\\[grid-area\\:Statusbar\\] > div > div:last-child > button {
        display: none; /* hide footer organizations sidebar button */
    }
    #root > .app > div > .grid .\\[grid-area\\:Statusbar\\] > button {
      display: none; /* hide footer login button */
    }
    #sidebar > div > div:first-child > ol > li:first-child {
        display: none; /* hide sidebar login button */
    }
</style>`
)

