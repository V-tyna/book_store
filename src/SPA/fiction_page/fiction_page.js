import fictionPage from './fiction_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../modules/specific_book.js';

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
        listenerConcreteBook(blockWithCard, fictionDataPath);
    }, 0);
    return fillRootDiv;
}

