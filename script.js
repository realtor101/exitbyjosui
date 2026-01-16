// Convert vertical mouse scroll into horizontal scroll
const scrollContainer = document.querySelector('.horizontal-wrapper');

window.addEventListener('wheel', (e) => {
  if (scrollContainer) {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  }
}, { passive: false });
