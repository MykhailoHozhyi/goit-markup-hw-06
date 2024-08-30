const orderBtn = document.querySelector('.hero-button');
const backdropEl = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalCloseIcon = document.querySelector('.modal-close-icon');
const modalForm = document.querySelector('.modal-form');

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mob-menu');
const mobileMenuCloseBtn = document.querySelector('.mob-menu-close-btn');

const subscribeForm = document.querySelector('.footer-subscribe-form');

orderBtn.addEventListener('click', onOrderBtnClick);
backdropEl.addEventListener('click', onBackdropElClick);
modalForm.addEventListener('submit', onModalFormSubmit);

menuBtn.addEventListener('click', onMenuBtnClick);
mobileMenuCloseBtn.addEventListener('click', onMobileMenuCloseBtnClick);

subscribeForm.addEventListener('submit', onSubscribeFormSubmit);

function onOrderBtnClick() {
  backdropEl.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function onBackdropElClick(event) {
  if (
    event.target === event.currentTarget ||
    event.target === modalCloseBtn ||
    event.target === modalCloseIcon
  ) {
    backdropEl.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
}

function onModalFormSubmit(event) {
  event.preventDefault();

  modalForm.reset();
}

function onMenuBtnClick() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function onMobileMenuCloseBtnClick() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function onSubscribeFormSubmit(event) {
  event.preventDefault();

  subscribeForm.reset();
}
