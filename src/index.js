import './styles.css';
import MenuController from './menuController';
import { createCarousel } from './carousel';
import { createDOMController } from './DOMController';
import { createAutoPlay } from './AutoPlay';

document.addEventListener('DOMContentLoaded', () => {
  MenuController();

  const slides = document.querySelectorAll('.slide');
  const slideContainer = document.querySelector('.carousel-slides');
  const dotsContainer = document.getElementById('carousel-dots');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');


  const carousel = createCarousel(slides.length, (slideIndex) => {
    domController.updateView(slideIndex);
  });
 
  const domController = createDOMController(carousel, slideContainer, dotsContainer);
  const autoPlay = createAutoPlay(carousel, 5000);

  // Set up manual navigation listeners
  nextButton.addEventListener('click', () => {
    autoPlay.restart();
    carousel.nextSlide();
  });

  prevButton.addEventListener('click', () => {
    autoPlay.restart();
    carousel.prevSlide();
  });
  
});