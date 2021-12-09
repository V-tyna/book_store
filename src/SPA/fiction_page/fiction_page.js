import fictionPage from './fiction_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../modules/card_book_listeners.js';
import {listenerBuyButton} from '../../modules/buy_button_listener.js';

const fictionDataPath = 'fiction/fantasy';

async function createArrayFromGetData() {
    const response = await getFromDatabase(fictionDataPath);
    const data = Object.values(response);
    return data;
}

export function fictionPageRoute() {
    const fillRootDiv = createPage(fictionPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(fictionDataPath);
    }, 0);
    return fillRootDiv;
}

