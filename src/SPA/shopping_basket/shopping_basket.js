import shoppingBasket from './shopping_basket.html';
import {createPage} from '../../modules/routing.js';


export function shoppingBasketRoute() {
    const fillRootDiv = createPage(shoppingBasket);

    return fillRootDiv;
}