import specificBookPage from './specific_book_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {buyBook} from '../../modules/buy_button_listener.js';
import {addBookToFavorite} from '../../modules/fav_button_listener.js';

let currentPath;
const id = window.location.pathname.slice(9, 14);

if(+id <= 8) {
    currentPath = `fiction/fantasy/${id}`;
}
if(+id > 8 && +id <= 17) {
    currentPath = `fiction/classic/${id}`;
}
if(+id > 17 && +id <= 24) {
    currentPath = `textbooks/programming/${id}`;
}
if(+id > 24 && +id <= 29) {
    currentPath = `fiction/horrors/${id}`;
}
if(+id > 29 && +id <= 32) {
    currentPath = `home&hobby/cookbooks/${id}`;
}
if(+id > 32 && +id <= 36) {
    currentPath = `childrenBooks/fairyTales/${id}`;
}
if(+id > 36 && +id <= 39) {
    currentPath = `comics/marvel/${id}`;
}
if(+id > 39 && +id <= 42) {
    currentPath = `comics/dc/${id}`;
}

async function bookData(path) {
    return await getFromDatabase(path);
}

function listenersFavAndBuyButtons(path) {
    const bookPage = document.getElementById('specific-book');
    bookPage.addEventListener('click', (e) => {
        const buyButton = e.target.closest('.btn-buy-area');
        const favButton = e.target.closest('.add-to-fav');
        console.log(buyButton);
        if(buyButton) {
            buyBook(path);
        }
        if(favButton) {
            addBookToFavorite(path);
        }
    });
}
export function specificBookPageRoute() {
    const fillRootDiv = createPage(specificBookPage);
    setTimeout(() => {
        const blockWithCard = new Book('#specific-book');
        blockWithCard.renderSpecificBookPage(bookData(currentPath));
        listenersFavAndBuyButtons(currentPath);
    }, 0);

    return fillRootDiv;
}