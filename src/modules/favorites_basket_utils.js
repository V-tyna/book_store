function favOrBasketItemTemplate(book) {
    return `
            <img class="fav-temp-img" src="${book.picture}" alt="Book cover small picture">
            <div class="fav-book-name">${book.name}</div>
            <div class="fav-book-authors">${book.authors}</div>
            <div>${book.price}</div>
            <button id="${book.id}" class="fav-btn-delete">Delete</button>
    `;
}

export function renderFavOrBasketList(divElem, listName) {
    const favList = JSON.parse(localStorage.getItem(listName));
    divElem.innerHTML = '';
    for(const list of favList) {
        const item = document.createElement('div');
        item.classList.add('fav-basket-list-container');
        item.innerHTML = favOrBasketItemTemplate(list);
        divElem.append(item);
    }
}

export function removeFavOrBasketBookFromLS(btn, keyLS, listName) {
    keyLS.forEach((item, i)=> {
        if(btn.id === item.id) {
            keyLS.splice(i, 1);
            localStorage.setItem(listName, JSON.stringify(keyLS));
        }
    });
}

export function removeFavOrBasketBookFromPage(divElem, listName, func) {
    func();
    renderFavOrBasketList(divElem, listName);
}
