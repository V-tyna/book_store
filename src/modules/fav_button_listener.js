import {getFromDatabase} from './get_data_from_database.js';

let favoriteListArray;

export function addLikesToFavoriteLink() {
    const pLikes = document.querySelector('.likes');

    if (!localStorage.getItem('favoriteList')) {
        pLikes.innerText = 0;
    } else {
        pLikes.innerText = JSON.parse(localStorage.getItem('favoriteList')).length;
    }
}

export async function addBookToFavorite(path) {
    const response = await getFromDatabase(path);
    const book = {
        id: response.id,
        name: response.bookName,
        authors: response.authors,
        price: response.price,
        picture: response.picture
    };
    if(localStorage.getItem('favoriteList')) {
        favoriteListArray = JSON.parse(localStorage.getItem('favoriteList'));
    }
    else {
        favoriteListArray = [];
    }
    favoriteListArray.push(book);
    localStorage.setItem('favoriteList', JSON.stringify(favoriteListArray));
    addLikesToFavoriteLink();
    return response;
}

addLikesToFavoriteLink();