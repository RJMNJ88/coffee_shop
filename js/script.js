let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login');
let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
}

menuBtn.onclick = () => {
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}