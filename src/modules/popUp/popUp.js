function popUpTemplate(eventType) {
    return `
    <div 
    style="background-color: ${eventType.backgroundColor};" 
    class="pop-up-text">Book was added to ${eventType.text}.
    </div>
    <div 
    style="border-color: ${eventType.backgroundColor} transparent transparent transparent;"
    class="after-pceudo"></div>
    `;
}

export function renderPopUp(eventType) {
    const bodyElem = document.querySelector('body');

    const popUp = document.createElement('div');
    popUp.classList.add('pop-up-container');
    popUp.innerHTML = popUpTemplate(eventType);
    setTimeout(() => {
        bodyElem.append(popUp);
    }, 300);
    setTimeout(()=> {
        popUp.remove();
    }, 3000);
}