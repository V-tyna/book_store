import comicsPage from './comics_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';
import {listenerConcreteBook} from "../../modules/specific_book";

const comicsDataPath = 'comics/marvel';

async function createArrayFromGetData() {
    const response = await getFromDatabase(comicsDataPath);
    const data = Object.values(response);
    return data;
}

export function comicsPageRoute() {
    const fillRootDiv = createPage(comicsPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        const blockDC = new Book('.dc');
        blockWithCard.renderBookCards(createArrayFromGetData());
        listenerConcreteBook(comicsDataPath);
    }, 0);
    return fillRootDiv;
}
