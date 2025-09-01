const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Reset menu on desktop resize
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    burger.classList.remove('active');
    nav.classList.remove('active');
  }
});
