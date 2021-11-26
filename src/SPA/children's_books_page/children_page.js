import childrenPage from './children_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../modules/specific_book.js';

const childrenDataPath = 'childrenBooks/fairyTales';

async function createArrayFromGetData() {
    const response = await getFromDatabase(childrenDataPath);
    const data = Object.values(response);
    return data;
}

export function childrenPageRoute() {
    const fillRootDiv = createPage(childrenPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(blockWithCard, childrenDataPath);
    }, 0);
    return fillRootDiv;
}