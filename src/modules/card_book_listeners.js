import {buyBook} from './buy_button_listener.js';
import {addBookToFavorite} from './fav_button_listener.js';
import {renderPopUp} from './popUp/popUp.js';

let pathID;

const favEvent = {
    text: 'The book has been added to Favorites.',
    backgroundColor: '#E98074'
};

const buyEvent = {
    text: 'The book has been added to the Shopping Card.',
    backgroundColor: '#AFD275'
};

export function listenerConcreteBook(path) {
    const page = document.querySelector('.SPA-page');
    page.addEventListener('click', (e) => {
        const specificCard = e.target.closest('.cards-container');
        const buyButton = e.target.closest('.btn-buy-area');
        const favButton = e.target.closest('.add-to-fav');
        const id = specificCard.children[1].id;

        pathID = `${path}/${id}`;
        if(buyButton) {
            buyBook(pathID);
            renderPopUp(buyEvent, 3000);
        }
        if(favButton) {
            addBookToFavorite(pathID);
            renderPopUp(favEvent, 3000);
        }
    });
}