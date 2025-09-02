const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav'); // upewniamy się że bierzemy nav z headera

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

// Toggle submenus on mobile
submenuParents.forEach((parent) => {
  parent.addEventListener('click', (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      parent.classList.toggle('open');
    }
  });
});
