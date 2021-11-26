import img1 from './carousel_images/photo-1563210426-e5902fa57376.jpg';
import img2 from './carousel_images/photo-1517414204284-fb7e98b2e255.jpg';
import img3 from './carousel_images/photo-1519682337058-a94d519337bc.jpg';

const imagesUrlArr = [
    img1,
    img2,
    img3
];

const slidersText = {
    0: {h3: 'Classic sale', p: 'Get 10% discount on Classic.'},
    1: {h3: 'NEW! Sci-fi', p: 'New books in Sci-fi section.'},
    2: {h3: 'Home & Hobby', p: 'Updated section.'}
};

let i = 0;

export function carousel(rootDiv) {

    const slide = rootDiv.querySelector('.slide-block');
    const btnNext = rootDiv.querySelector('.btn-next');
    const btnPrev = rootDiv.querySelector('.btn-prev');
    const sliderText = rootDiv.querySelector('.slider-text');

    slide.style.backgroundImage = `url("${imagesUrlArr[i]}")`;
    sliderText.innerHTML = `
         <h3>${slidersText[i].h3}</h3>
         <p>${slidersText[i].p}</p>
        `;

    btnNext.addEventListener('click', () => {
        i++;
        if(i >= imagesUrlArr.length){
            i = 0;
        }
        slide.style.backgroundImage = `url("${imagesUrlArr[i]}")`;
        sliderText.innerHTML = `
             <h3>${slidersText[i].h3}</h3>
             <p>${slidersText[i].p}</p>
            `;
    });

    btnPrev.addEventListener('click', () => {
        i--;
        if(i < 0){
            i = imagesUrlArr.length - 1;
        }
        slide.style.backgroundImage = `url("${imagesUrlArr[i]}")`;
        sliderText.innerHTML = `
             <h3>${slidersText[i].h3}</h3>
             <p>${slidersText[i].p}</p>
            `;
    });
}

export function swipeSlide(rootDiv) {
    const slide = rootDiv.querySelector('.slide-block');
    const sliderText = rootDiv.querySelector('.slider-text');


    setInterval(() => {
        i++;
        if(i >= imagesUrlArr.length){
            i = 0;
        }
        slide.style.backgroundImage = `url("${imagesUrlArr[i]}")`;
        sliderText.innerHTML = `
             <h3>${slidersText[i].h3}</h3>
             <p>${slidersText[i].p}</p>
            `;
    }, 5000);
}