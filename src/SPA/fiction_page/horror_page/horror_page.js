import horror from './horror_page.html';
import {createPage} from '../../../modules/routing';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/specific_book.js';

const horrorDataPath = 'fiction/horrors';

async function createArrayFromGetData() {
    const response = await getFromDatabase(horrorDataPath);
    const data = Object.values(response);
    return data;
}

export function horrorPageRoute() {
    const fillRootDiv = createPage(horror);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(blockWithCard, horrorDataPath);
    }, 0);
    return fillRootDiv;
}