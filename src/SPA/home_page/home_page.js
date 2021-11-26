import homePage from './home_page.html';
import {createPage} from '../../modules/routing.js';
import {carousel, swipeSlide} from './components/carousel_home_page.js';

export function homePageRoute() {
    const fillRootDiv = createPage(homePage);
    carousel(fillRootDiv);
    swipeSlide(fillRootDiv);
    return fillRootDiv;
}

