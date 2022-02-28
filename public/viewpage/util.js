import * as Elements from './element.js';

export function info(title,body ,closeModal) {
    if (closeModal) closeModal.hide();
    Elements.modalInfobox.title.innerHTML=title;
    Elements.modalInfobox.body.innerHTML=body;
    Elements.modalInfobox.modal.show();
}

export function disableButton(button) {
    button.disabled = true;
    const originslLabel = button.innerHTML;
    button.innerHTML = "wait..."
    return originslLabel;
}

export function enableButton(button, label) {
    if (label) button.innerHTML = label;
    button.disabled = false;
}

// from Stackoverflow
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}