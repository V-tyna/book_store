import textbooksPage from './textbooks_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../modules/specific_book.js';

const textbooksDataPath = 'textbooks/programming';

async function createArrayFromGetData() {
    const response = await getFromDatabase(textbooksDataPath);
    const data = Object.values(response);
    return data;
}

export function textbooksPageRoute() {
    const fillRootDiv = createPage(textbooksPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(textbooksDataPath);
    }, 0);
    return fillRootDiv;
}