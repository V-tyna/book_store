import dc from './dc_page.html';
import {createPage} from '../../../modules/routing.js';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/card_book_listeners.js';

const dcDataPath = 'comics/dc';

async function createArrayFromGetData() {
    const response = await getFromDatabase(dcDataPath);
    const data = Object.values(response);
    return data;
}

export function dcPageRoute() {
    const fillRootDiv = createPage(dc);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(dcDataPath);
    }, 0);
    return fillRootDiv;
}
