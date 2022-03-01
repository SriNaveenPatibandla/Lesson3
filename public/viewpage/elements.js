export const MENU={
    signIn: document.getElementById('menu-signin'),
    Home:document.getElementById('menu-home'),
    purchases:document.getElementById('menu-purchases'),
    Signout:document.getElementById('menu-signout'),
    Cart: document.getElementById('menu-cart'),
    profile:document.getElementById('menu-profile')
}

export const formSignIn = document.getElementById('form-signin');

export const modalInfobox = {
    modal: new bootstrap.Modal(document.getElementById('modal-infobox'), { backdrop: 'static' }),
    title: document.getElementById('modal-infobox-title'),
    body: document.getElementById('modal-infobox-body'),
}

export const modalSignin = new bootstrap.Modal(document.getElementById('modal-signin'), { backdrop: 'static' });