export function initHeaderBackgroundTransition() {
  const header = document.querySelector('.site-header');
  const headerColor = getComputedStyle(header).backgroundColor;
  const fadeThreshold = 200;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    let opacity = (scrollPos / fadeThreshold);
    if (opacity > 1) opacity = 1;

    header.style.backgroundColor = `rgba(46, 22, 4, ${opacity})`;
  });
}