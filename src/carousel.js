export function createCarousel(slideCount, onSlideChange) {
    let currentSlide = 0;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateView();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateView();
    }
  
    function goToSlide(index) {
      currentSlide = index % slideCount;
      updateView();
    }
  
    function updateView() {
      if (onSlideChange) {
        onSlideChange(currentSlide);
      }
    }
  
    return { slideCount, nextSlide, prevSlide, goToSlide };
  }
  