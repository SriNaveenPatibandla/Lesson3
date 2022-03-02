import { MENU, root } from "./elements.js"

export function addEventListeners() {
    MENU.Purchases.addEventListener('click', async () => {
        await purchases_page();
    });
}

async function purchases_page() {
    root.innerHTML = '<h1>purchases_page</h1>'
}