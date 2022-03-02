import { MENU, root } from "./elements.js"

export function addEventListeners() {
    MENU.Cart.addEventListener('click', async () => {
        await cart_page();
    });
}

async function cart_page() {
    root.innerHTML = '<h1>Cart_page</h1>'
}