import favoritePage from './favorite_page.html';
import {createPage} from '../../modules/routing.js';

function faveItemTemplate(book) {
    return `
            <img class="fav-temp-img" src="${book.picture}" alt="Book cover small picture">
            <div>${book.name}</div>
            <div>${book.authors}</div>
            <div>${book.price}</div>
    `;
}

function renderFavoriteList(divElem) {
    const favList = JSON.parse(localStorage.getItem('favoriteList'));
    for(const list of favList) {
        const item = document.createElement('div');
        item.classList.add('fav-list-container');
        item.innerHTML = faveItemTemplate(list);
        divElem.append(item);
    }
}

export function favoritePageRoute() {
    const fillRootDiv = createPage(favoritePage);
    fillRootDiv.innerHTML = '';
    renderFavoriteList(fillRootDiv);
    return fillRootDiv;
}

