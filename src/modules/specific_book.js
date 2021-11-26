import {getFromDatabase} from './get_data_from_database.js';

let pathID;

async function bookData(path) {
    const response = await getFromDatabase(path);
    return response;
}

export function listenerConcreteBook(divElem, path) {
    const root = document.getElementById('root');
    root.addEventListener('click', (e) => {
        const specificCard = e.target.closest('.cards-container');
        const id = specificCard.children[2].id;
        pathID = `${path}/${id}`;
        divElem.renderSpecificBookPage(bookData(pathID));
    });
}