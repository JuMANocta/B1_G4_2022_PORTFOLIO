const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', () => {
    console.log("scrool up");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

const burger = document.querySelector('.burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
});