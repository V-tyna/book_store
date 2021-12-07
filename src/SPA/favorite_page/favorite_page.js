import favoritePage from './favorite_page.html';
import {createPage} from '../../modules/routing.js';
import {removeFavOrBasketBookFromLS, renderFavOrBasketList, removeFavOrBasketBookFromPage} from '../../modules/favorites_basket_utils.js';
import {addLikesToFavoriteLink} from '../../modules/fav_button_listener.js';

function favBtnDeleteListener(divElem) {
    const root = document.getElementById('root');
    const favList = JSON.parse(localStorage.getItem('favoriteList'));
    root.addEventListener('click', (e) => {
        const bookTarget = e.target;
        const btnDel = e.target.classList.contains('fav-btn-delete');
        if(btnDel) {
            removeFavOrBasketBookFromLS(bookTarget, favList, 'favoriteList');
            removeFavOrBasketBookFromPage(divElem, 'favoriteList', addLikesToFavoriteLink);
        }
    });
}

export function favoritePageRoute() {
    const fillRootDiv = createPage(favoritePage);
    fillRootDiv.innerHTML = '';
    renderFavOrBasketList(fillRootDiv, 'favoriteList');
    favBtnDeleteListener(fillRootDiv);
    return fillRootDiv;
}

