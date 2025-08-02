//Enabling Search button

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

//Header Animation

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
})

//Enabling Navbar Button

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

//Removing active menu and search on scroll

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}