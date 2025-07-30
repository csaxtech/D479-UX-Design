// Header with background fade-in as user scrolls - to match the video
// background. This grabs and preserves the color from CSS.

export function initHeaderBackgroundTransition() {
  const dynamicHeader = document.querySelector('.site-header.dynamic-bg');
  const headerColor = getComputedStyle(dynamicHeader).backgroundColor;
  const headerColorValues = headerColor.match(/\d+/g);
  const fadeThreshold = 200;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    let opacity = (scrollPos / fadeThreshold);
    if (opacity > 1) opacity = 1;

    dynamicHeader.style.backgroundColor = `rgba(${headerColorValues[0]}, ${headerColorValues[1]}, ${headerColorValues[2]}, ${opacity})`;
  });
}