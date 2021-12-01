import dc from './dc_page.html';
import {createPage} from '../../../modules/routing';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/specific_book.js';

const DCDataPath = 'comics/dc';

async function createArrayFromGetData() {
    const response = await getFromDatabase(DCDataPath);
    const data = Object.values(response);
    return data;
}

export function dcPageRoute() {
    const fillRootDiv = createPage(dc);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(DCDataPath);
    }, 0);
    return fillRootDiv;
}
