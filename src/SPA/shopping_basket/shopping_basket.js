import shoppingBasket from './shopping_basket.html';
import {createPage} from '../../modules/routing.js';
import {removeFavOrBasketBookFromLS, renderFavOrBasketList, removeFavOrBasketBookFromPage} from '../../modules/favorites_basket_utils.js';
import {addQuantityItemsLink} from '../../modules/buy_button_listener.js';

function checkout(divElem) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    if (shoppingList.length >= 1) {
        const checkoutHTML = document.createElement('div');

        let total = 0;
        shoppingList.forEach(item => {
            const number = item.price.replace(',', '.');
            const sum = parseFloat(number.slice(0, -1));
            total += sum;
        });
        total = parseInt((total * 100).toString()) / 100;

        let itemOrItems;

        if (JSON.parse(localStorage.getItem('shoppingList')).length === 1){
            itemOrItems = 'book';
        } else {
            itemOrItems = 'books';
        }

        checkoutHTML.innerHTML = `
        <div id="checkout-container">
            <div id="total-price">Total price (${shoppingList.length} ${itemOrItems}): <span>${total}$</span></div>
            <button id="checkout-btn">Proceed to checkout</button>
        </div>
        `;
        divElem.append(checkoutHTML);
    }
}

function shoppingBtnDeleteListener(divElem) {
    const root = document.getElementById('root');
    const favList = JSON.parse(localStorage.getItem('shoppingList'));
    root.addEventListener('click', (e) => {
        const favBtnDel = e.target;
        removeFavOrBasketBookFromLS(favBtnDel, favList, 'shoppingList');
        removeFavOrBasketBookFromPage(divElem, 'shoppingList', addQuantityItemsLink);
        checkout(divElem);
    });
}

export function shoppingBasketRoute() {
    const fillRootDiv = createPage(shoppingBasket);
    renderFavOrBasketList(fillRootDiv, 'shoppingList');
    shoppingBtnDeleteListener(fillRootDiv);
    checkout(fillRootDiv);
    return fillRootDiv;
}