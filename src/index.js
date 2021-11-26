import './css/styles.css';
import './css/header_styles.css';
import './css/footer.css';
import './SPA/home_page/home_page_styles.css';
import './css/SPA_styles.css';
import './css/specific_book.css';
import './modules/routing.js';
import {initializeApp} from 'firebase/app';
import {getFromDatabase} from './modules/get_data_from_database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDIWpLf1jb6NCiktkGsPZJ2Z7a88RZ20kY",
    authDomain: "book-store-e9483.firebaseapp.com",
    projectId: "book-store-e9483",
    storageBucket: "book-store-e9483.appspot.com",
    messagingSenderId: "1026267846737",
    appId: "1:1026267846737:web:38fe5f2c761c9179084070"
};

initializeApp(firebaseConfig);