let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-dots');
const dots = document.querySelectorAll('.carousel-dot');

let windowWidth = window.innerWidth > 607 ? true : false;

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth > 607 ? true : false;
});

if (windowWidth) {
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function updateDots(index) {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    updateDots(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    updateDots(slideIndex);
  }

 

  // Initial setup
  showSlide(slideIndex);
  updateDots(slideIndex);
}
