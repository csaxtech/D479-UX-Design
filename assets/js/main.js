// Grabs each feature from the corresponding module script.

import { initCarousel } from "./carousel.js";
import { initHeaderBackgroundTransition } from "./header.js";

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initHeaderBackgroundTransition();
});