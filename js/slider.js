const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slider-track .slide'));
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

let currentIndex = 1;
const slideCount = slides.length;
const viewport = document.querySelector('.column-right');

function getSlideWidth() {
  return viewport.clientWidth;
}

function updateTrack(animate = true) {
  if (!animate) {
    track.style.transition = 'none';
  } else {
    track.style.transition = 'transform 0.5s ease-in-out';
  }
  track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex >= slideCount - 1) return;
  currentIndex++;
  updateTrack();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  updateTrack();
});

track.addEventListener('transitionend', () => {
  // jump to the first
  if (currentIndex === slideCount - 1) {
    currentIndex = 1;
    updateTrack(false);
  }
  // jump to the last
  if (currentIndex === 0) {
    currentIndex = slideCount - 2;
    updateTrack(false);
  }
});

window.addEventListener('resize', () => updateTrack(false));
updateTrack(false);
