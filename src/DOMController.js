export function createDOMController(carousel, container, dotsContainer) {
    function initDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < carousel.slideCount; i += 1) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.addEventListener('click', () => carousel.goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }
  
    function updateView(slideIndex) {
      container.style.transform = `translateX(-${slideIndex * 100}%)`;
      Array.from(dotsContainer.children).forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
      });
    }
  
    initDots();
    carousel.onSlideChange = updateView;
  
    return { updateView };
  }
  