import shoppingBasket from './shopping_basket.html';
import {createPage} from '../../modules/routing.js';
import {removeFavOrBasketBookFromLS, renderFavOrBasketList, removeFavOrBasketBookFromPage} from '../../modules/favorites_basket_utils.js';
import {addQuantityItemsLink} from '../../modules/buy_button_listener.js';
import {modalWindowsCreation, waitModalButtons} from './modal_window/modal_window.js';

let total = 0;

function checkout(divElem) {
    total = 0;
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

    if (!shoppingList) return;

    if (shoppingList.length >= 1) {
        const checkoutHTML = document.createElement('div');


        shoppingList.forEach(item => {
            const number = item.price.replace(',', '.');
            const sum = parseFloat(number.slice(0, -1));
            total += sum;
        });
        total = Number(total.toFixed(2));

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

function checkoutListener() {
    const root = document.getElementById('root');
    root.addEventListener('click', (e) => {
        if(e.target.id === 'checkout-btn'){
            const modalCheckout = modalWindowsCreation(total);
            modalCheckout.open();
            waitModalButtons(modalCheckout);
        }
    });
}

function shoppingBtnDeleteListener(divElem) {
    const root = document.getElementById('root');
    const favList = JSON.parse(localStorage.getItem('shoppingList'));
    root.addEventListener('click', (e) => {
        const bookTarget = e.target;
        const btnDel = e.target.classList.contains('fav-btn-delete');
        if(btnDel){
            removeFavOrBasketBookFromLS(bookTarget, favList, 'shoppingList');
            removeFavOrBasketBookFromPage(divElem, 'shoppingList', addQuantityItemsLink);
            checkout(divElem);
        }
    });
}

export function shoppingBasketRoute() {
    const fillRootDiv = createPage(shoppingBasket);
    renderFavOrBasketList(fillRootDiv, 'shoppingList');
    shoppingBtnDeleteListener(fillRootDiv);
    checkout(fillRootDiv);
    checkoutListener(fillRootDiv);
    return fillRootDiv;
}