import comicsPage from './comics_page.html';
import {createPage} from '../../modules/routing.js';
import {Book} from '../../classes/book.js';
import {getFromDatabase} from '../../modules/get_data_from_database.js';

const comicsDataPath = 'comics/marvel';
const DCDataPath = 'comics/dc';

async function createArrayFromGetData() {
    const response = await getFromDatabase(comicsDataPath);
    const data = Object.values(response);
    return data;
}

async function createDCArrayFromGetData() {
    const response = await getFromDatabase(DCDataPath);
    const data = Object.values(response);
    return data;
}

export function comicsPageRoute() {
    const fillRootDiv = createPage(comicsPage);
    setTimeout(() => {
        const blockWithCard = new Book('.SPA-page');
        const blockDC = new Book('.dc');
        blockWithCard.renderBookCards(createArrayFromGetData());
        blockDC.renderBookCards(createDCArrayFromGetData());
    }, 0);
    return fillRootDiv;
}
