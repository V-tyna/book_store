import {homePageRoute} from '../SPA/home_page/home_page.js';
import {fictionPageRoute} from '../SPA/fiction_page/fiction_page.js';
import {sciFiPageRoute} from '../SPA/fiction_page/sci_fi_page/sci_fi_page.js';
import {horrorPageRoute} from '../SPA/fiction_page/horror_page/horror_page.js';
import {classicPageRoute} from '../SPA/fiction_page/classic_page/classic_page.js';
import {textbooksPageRoute} from '../SPA/textbooks_page/textbooks.js';
import {hobbyPageRoute} from '../SPA/home&hobby_page/hobby_page.js';
import {childrenPageRoute} from '../SPA/children\'s_books_page/children_page.js';
import {comicsPageRoute} from '../SPA/comics_page/comics_page.js';
import {marvelPageRoute} from '../SPA/comics_page/marvel_page/marvel_page.js';
import {dcPageRoute} from '../SPA/comics_page/dc_page/dc_page.js';
import {favoritePageRoute} from '../SPA/favorite_page/favorite_page.js';
import {shoppingBasketRoute} from '../SPA/shopping_basket/shopping_basket.js';
import {specificBookPageRoute} from '../SPA/specific_book_page/specific_book_page.js';

const pages = {
    '/home': homePageRoute,
    '/fiction': fictionPageRoute,
    '/scifi': sciFiPageRoute,
    '/horror': horrorPageRoute,
    '/classic': classicPageRoute,
    '/textbooks': textbooksPageRoute,
    '/hobby': hobbyPageRoute,
    '/children': childrenPageRoute,
    '/comics': comicsPageRoute,
    '/marvel': marvelPageRoute,
    '/dc': dcPageRoute,
    '/favorite': favoritePageRoute,
    '/basket': shoppingBasketRoute,
    '/product': specificBookPageRoute
};

const rootContainer = document.getElementById('root');

let currentRoute = '';

function redirect(route) {
    if(route === '/') {
        route = '/home';
    }
    if (route.startsWith('/product:')){
        route = '/product';
    }
    return route;
}

export function changeRoute(route) {
    rootContainer.innerHTML = '';
    const pageToMove = pages[route];
    rootContainer.append(pageToMove());
}

export function createPage(currentPage) {
    const divElem = document.createElement('div');
    divElem.id = 'page';
    divElem.innerHTML = currentPage;

    return divElem;
}

function router(route) {
    currentRoute = redirect(route);
    changeRoute(currentRoute);
}

router(window.location.pathname);