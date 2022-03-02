import { MENU, root } from "./elements.js";
import { ROUTE_PATHNAMES } from "../controller/route.js";


export function addEventListeners() {
    MENU.Profile.addEventListener('click', async () => {
        history.pushState(null, null, ROUTE_PATHNAMES.PROFILE)
        //const label = Util.disableButton(MENU.Profile);
        await Profile_page();
      //  Util.enableButton(MENU.Home, label);
    });
}

export async function Profile_page() {
    root.innerHTML = '<h1>Profile Page</h1>'
}