import {getFromDatabase} from './get_data_from_database.js';

let shoppingListArray;

export function addQuantityItemsLink() {
    const itemsQuantity = document.querySelector('.quantity-items');

    if (!localStorage.getItem('shoppingList')) {
        itemsQuantity.innerText = 0;
    } else {
        const items = JSON.parse(localStorage.getItem('shoppingList')).length;
        itemsQuantity.innerText = items;
    }
}

export async function buyBook(path) {
    const response = await getFromDatabase(path);
    const book = {
        id: response.id,
        name: response.bookName,
        authors: response.authors,
        price: response.price,
        picture: response.picture
    };
    if(localStorage.getItem('shoppingList')) {
        shoppingListArray = JSON.parse(localStorage.getItem('shoppingList'));
    }
    else {
        shoppingListArray = [];
    }
    shoppingListArray.push(book);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingListArray));
    addQuantityItemsLink();
    return response;
}

addQuantityItemsLink();