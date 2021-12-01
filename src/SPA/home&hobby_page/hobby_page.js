import hobbyPage from './hobby_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from '../../modules/specific_book.js';

const hobbyDataPath = 'home&hobby/cookbooks';

async function createArrayFromGetData() {
    const response = await getFromDatabase(hobbyDataPath);
    const data = Object.values(response);
    return data;
}

export function hobbyPageRoute() {
    const fillRootDiv = createPage(hobbyPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(hobbyDataPath);
    }, 0);
    return fillRootDiv;
}