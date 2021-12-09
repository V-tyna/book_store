import sciFi from './sci_fi_page.html';
import {createPage} from '../../../modules/routing';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/card_book_listeners.js';

const sciFiDataPath = 'fiction/fantasy';

async function createArrayFromGetData() {
    const response = await getFromDatabase(sciFiDataPath);
    const data = Object.values(response);
    return data;
}

export function sciFiPageRoute() {
    const fillRootDiv = createPage(sciFi);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(sciFiDataPath);
    }, 0);
    return fillRootDiv;
}
