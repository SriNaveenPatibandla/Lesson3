import { MENU, root } from "./elements.js"

export function addEventListeners() {
    MENU.Home.addEventListener('click', async () => {
        await home_page();
    });
}

async function home_page() {
    root.innerHTML = '<h1>Home Page</h1>'
}