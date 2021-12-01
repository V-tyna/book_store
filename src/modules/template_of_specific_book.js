export function specificBookTemplate(book) {
    return `
        <div class="specific-book">
            <div class="add-to-fav-area">
                <img class="add-to-fav" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fthumbs-up.png?alt=media&token=52b963ac-9c2c-4a54-9688-df984f698aa3" alt="Add to favorite">
            </div>
            <div class="book-image">
                <img src="${book.picture}" alt="${book.bookName}">
            </div> 
            <div class="book-data" id="${book.id}">
                    <ul>
                        <li><span>Title: </span>"${book.bookName}",</li>
                        <li><span>Authors: </span>${book.authors},</li>
                        <li><span>Category: </span>${book.category},</li>
                        <li><span>Pages: </span>${book.pages},</li>
                        <li><span>Cover type: </span>${book.cover},</li>
                        <li><span>Language: </span>${book.language},</li>
                        <li><span>Price: </span>${book.price},</li>
                        <li><span>Description: </span>${book.description}</li>
                    </ul>
            </div>  
            <div class="btn-buy-area">
                <button class="btn-buy">
                    <div>Buy</div>
                    <img class="add-to-basket" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fshopping-cart.png?alt=media&token=b3202f0a-93d5-4c94-aadd-9c2bd425bde6" alt="Add to basket icon">
                </button>
            </div>
       </div>
    `;
}