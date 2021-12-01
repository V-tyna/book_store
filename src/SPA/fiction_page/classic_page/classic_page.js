import classic from './classic_page.html';
import {createPage} from '../../../modules/routing';
import {Book} from '../../../classes/book.js';
import {getFromDatabase} from '../../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../../modules/specific_book.js';

const classicDataPath = 'fiction/classic';

async function createArrayFromGetData() {
    const response = await getFromDatabase(classicDataPath);
    const data = Object.values(response);
    return data;
}

export function classicPageRoute() {
    const fillRootDiv = createPage(classic);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(classicDataPath);
    }, 0);
    return fillRootDiv;
}