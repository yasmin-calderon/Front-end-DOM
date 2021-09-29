const button = document.querySelector('.button__btn');
const card = document.querySelector('.button__card');

button.addEventListener('click', function () {
    card.classList.toggle('escondido');
});