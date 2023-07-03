const burger = document.querySelector('.menu');
const menuInner = document.querySelector('.menu__inner');
const closeModal = document.querySelector('.closeModal');

function toggleMenu() {
  menuInner.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
closeModal.addEventListener('click', toggleMenu);