export function createAutoPlay(carousel, interval = 5000) {
    let timer;
  
    function start() {
      stop(); // Clear any existing interval
      timer = setInterval(() => carousel.nextSlide(), interval);
    }
  
    function stop() {
      if (timer) {
        clearInterval(timer);
      }
    }
  
    function restart() {
      start();
    }
  
    start(); // Start autoplay when created
  
    return { start, stop, restart };
  }
  