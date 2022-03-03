import { MENU, root } from "./elements.js";
import { ROUTE_PATHNAMES } from "../controller/route.js";
import * as Util from './util.js'
import { ShoppingCart } from "../model/shopping_cart.js";
import { currentUser } from "../controller/firebase_auth.js";

export function addEventListeners() {
    MENU.Cart.addEventListener('click', async () => {
        history.pushState(null, null, ROUTE_PATHNAMES.CART);
     //   const label = Util.disableButton(MENU.Cart);
        await cart_page();
      //  Util.enableButton(MENU.Cart, label);
    });
}

export let cart;


export async function cart_page() {
    root.innerHTML = '<h1>Cart_page</h1>'
}

export function initShoppingCart(){
     cart=new ShoppingCart(currentUser.uid);
     MENU.CartItemCount.innerHTML=0;
}