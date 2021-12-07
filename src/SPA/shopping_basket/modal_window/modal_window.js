function modalWindowTemplate(totalSumFunc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Check order</span>
                        <button class="btn-close">&times;</button>
                    </div>
                    <div class="modal-body">Order summary: ${totalSumFunc} $</div>
                    <form class="user-order-data">
                        <label for="user-name">Full name:</label>
                        <input id="user-name" type="text">
                        <label for="user-address">Delivery address:</label>
                        <input id="user-address" type="text">
                    </form>
                    <div class="modal-footer">
                        <button class="btn-ok">Ok</button>
                        <button class="btn-cancel">Cancel</button> 
                    </div> 
                </div>
            </div>
      `;
    document.body.appendChild(modal);
    return modal;
}

let listenerModalBtns;
export function waitModalButtons(modal) {
    listenerModalBtns = setTimeout(() => {
        const xBtn = document.querySelector('.btn-close');
        const okBtn = document.querySelector('.btn-ok');
        const cancelBtn = document.querySelector('.btn-cancel');

        xBtn.addEventListener('click', () => {
            modal.close();
            modal.destroy();
        });

        okBtn.addEventListener('click', () => {
            modal.close();
            modal.destroy();
        });

        cancelBtn.addEventListener('click', () => {
            modal.close();
            modal.destroy();
        });

    }, 0);
}

export function modalWindowsCreation(options) {
    const ANIMATION_SPEED = 200;
    const $modal = modalWindowTemplate(options);
    let closing = false;

    return {
        open() {
            !closing && $modal.classList.add('open');

        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED);

        },
        destroy() {
            $modal.remove();
            clearTimeout(listenerModalBtns);
        },
    };
}
