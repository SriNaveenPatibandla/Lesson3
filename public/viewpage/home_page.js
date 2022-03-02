import { MENU, root } from "./elements.js"
import { ROUTE_PATHNAMES } from "../controller/route.js";
import * as Util from './util.js'
import { getProductList } from "../controller/firebase_controller.js";
import {DEV} from '../model/constants.js';

export function addEventListeners() {
    MENU.Home.addEventListener('click', async () => {
        history.pushState(null, null, ROUTE_PATHNAMES.HOME)
        const label = Util.disableButton(MENU.Home);
        await home_page();
        Util.enableButton(MENU.Home, label);
    });
}

export async function home_page() {
  let products;
  try {
      products =await getProductList();
  } catch (e) {
      if (DEV) console.log(e);
      Util.info('Failed to get the product List',JSON.stringify(e));
  }
  root.innerHTML='<h1>Home Page</h1>'
}