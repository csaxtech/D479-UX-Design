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
    const maxIndex = carouselCards.length - (carouselCardsVisible - 1);
    index = index % maxIndex; // Use Modulo to calculate when to loop back.
    const slideDistance = index * cardWidth;
    carouselTrack.style.transform = `translateX(-${slideDistance}px)`;
    currentCarouselPos = index;
  }

  function startAutoCycle() {
    carouselAutoInterval = setInterval(() => {
      slideTo(currentCarouselPos + 1);
    }, 3000)
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

  startAutoCycle();
}