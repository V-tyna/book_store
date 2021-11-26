import {bookCardTemplate} from '../modules/book_card_template.js';
import {specificBookTemplate} from '../modules/template_of_specific_book.js';

export class Book {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    async renderBookCards(books) {
        this.$el.innerHTML = '';
        const booksFromDB = await books;
        booksFromDB.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('cards-container');
            card.innerHTML = `${bookCardTemplate(book)}`;
            this.$el.append(card);
        });

    }
    async renderSpecificBookPage(book) {
        this.$el.innerHTML = '';
        const bookFromDB = await book;
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `${specificBookTemplate(bookFromDB)}`;
        this.$el.append(bookDiv);
    }
}