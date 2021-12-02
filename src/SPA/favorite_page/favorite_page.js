import favoritePage from './favorite_page.html';
import {createPage} from '../../modules/routing.js';
import {addLikesToFavoriteLink} from '../../modules/fav_button_listener.js';

function faveItemTemplate(book) {
    return `
            <img class="fav-temp-img" src="${book.picture}" alt="Book cover small picture">
            <div class="fav-book-name">${book.name}</div>
            <div class="fav-book-authors">${book.authors}</div>
            <div>${book.price}</div>
            <button id="${book.id}" class="fav-btn-delete">Delete</button>
    `;
}

function renderFavoriteList(divElem) {
    const favList = JSON.parse(localStorage.getItem('favoriteList'));
    divElem.innerHTML = '';
    for(const list of favList) {
        const item = document.createElement('div');
        item.classList.add('fav-list-container');
        item.innerHTML = faveItemTemplate(list);
        divElem.append(item);
    }
}

function removeFavBookFromLS(btn, keyLS) {
    keyLS.forEach((item, i)=> {
        if(btn.id === item.id) {
            keyLS.splice(i, 1);
            localStorage.setItem('favoriteList', JSON.stringify(keyLS));
        }
    });
}

function removeFavBookFromPage(divElem) {
    addLikesToFavoriteLink();
    renderFavoriteList(divElem);
}

function favBtnDeleteListener(divElem) {
    const root = document.getElementById('root');
    const favList = JSON.parse(localStorage.getItem('favoriteList'));
    root.addEventListener('click', (e) => {
        const favBtnDel = e.target;
        removeFavBookFromLS(favBtnDel, favList);
        removeFavBookFromPage(divElem);
    });
}

export function favoritePageRoute() {
    const fillRootDiv = createPage(favoritePage);
    fillRootDiv.innerHTML = '';
    renderFavoriteList(fillRootDiv);
    favBtnDeleteListener(fillRootDiv);
    return fillRootDiv;
}

