

const hamburgerIcon = document.querySelector('.icon-hamburger');
const navBar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', e => {
   navBar.classList.toggle('show-navbar');
});