export function bookCardTemplate(book) {
    return `
        <div class="add-to-fav-area">
            <img class="add-to-fav" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fthumbs-up.png?alt=media&token=52b963ac-9c2c-4a54-9688-df984f698aa3" alt="Add to favorite">
        </div>
        <div class="book-image">
            <img src="${book.picture}" alt="${book.bookName}">
        </div> 
        <div class="book-data" id="${book.id}">
            <div class="name-author-price">
                <p>${book.bookName}</p>
                <p>${book.authors}</p>
                <p>${book.price}</p>
            </div>
        </div>  
        <div class="btn-buy-area">
            <button class="btn-buy">
                <div>Buy</div>
                <img class="add-to-basket" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fshopping-cart.png?alt=media&token=b3202f0a-93d5-4c94-aadd-9c2bd425bde6" alt="Add to basket icon">
            </button>
        </div>    
    `;
}