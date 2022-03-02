import { MENU, root } from "./elements.js"

export function addEventListeners() {
    MENU.Profile.addEventListener('click', async () => {
        await Profile_page();
    });
}

async function Profile_page() {
    root.innerHTML = '<h1>Profile Page</h1>'
}