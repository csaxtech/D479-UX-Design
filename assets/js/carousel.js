// Script for carousel functionality. Takes a carousel object with
// a carousel container, track, cards, and left/right buttons.
// Carousel displays 3 cards and will auto-rotate every 3 seconds. 
// Buttons pause rotation and will shift the track by one position,
// then resume auto-rotate.

export function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselTrack = carousel.querySelector('.carousel-track');
  const carouselCards = carouselTrack.querySelectorAll('.carousel-card');
  const carouselBtnLeft = carousel.querySelector('.carousel-btn.left');
  const carouselBtnRight = carousel.querySelector('.carousel-btn.right');
  const carouselCardsVisible = 3;

  let currentCarouselPos = 0;
  let carouselAutoInterval;

  function getFullCardWidth() {
    const card = carouselCards[0];
    const style = getComputedStyle(card);
    return card.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  }

  function slideTo(index) {
    const cardWidth = getFullCardWidth();
    const maxIndex = carouselCards.length - (carouselCardsVisible);
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    const slideDistance = index * cardWidth;
    carouselTrack.style.transform = `translateX(-${slideDistance}px)`;
    currentCarouselPos = index;
  }

  function startAutoCycle() {
    carouselAutoInterval = setInterval(() => {
      slideTo(currentCarouselPos + 1);
    }, 2000)
  }

  function stopAutoCycle() {
    clearInterval(carouselAutoInterval);
  }

  carouselBtnLeft.addEventListener('click', () => {
    stopAutoCycle();
    slideTo(currentCarouselPos - 1);
    startAutoCycle();
  });

  carouselBtnRight.addEventListener('click', () => {
    stopAutoCycle();
    slideTo(currentCarouselPos + 1);
    startAutoCycle();
  });

  for (let i = 0; i < carouselCards.length; i++) {
    carouselCards[i].addEventListener('mouseover', () => {
      stopAutoCycle();
    });

    carouselCards[i].addEventListener('mouseout', () => {
      startAutoCycle();
    });
  }

  startAutoCycle();
}