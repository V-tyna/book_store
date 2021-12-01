import marvel from './marvel_page.html';
import {createPage} from '../../../modules/routing';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/specific_book.js';

const marvelDataPath = 'comics/marvel';

async function createArrayFromGetData() {
    const response = await getFromDatabase(marvelDataPath);
    const data = Object.values(response);
    return data;
}

export function marvelPageRoute() {
    const fillRootDiv = createPage(marvel);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(marvelDataPath);
    }, 0);
    return fillRootDiv;
}
