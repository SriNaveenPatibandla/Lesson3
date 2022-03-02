import { MENU, root } from "./elements.js";
import { ROUTE_PATHNAMES } from "../controller/route.js";

export function addEventListeners() {
    MENU.Cart.addEventListener('click', async () => {
        history.pushState(null, null, ROUTE_PATHNAMES.CART);
     //   const label = Util.disableButton(MENU.Cart);
        await cart_page();
      //  Util.enableButton(MENU.Cart, label);
    });
}

export async function cart_page() {
    root.innerHTML = '<h1>Cart_page</h1>'
}