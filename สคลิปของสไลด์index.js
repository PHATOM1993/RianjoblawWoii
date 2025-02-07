let slideIndex = 0;

function showSlide() {
  let slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[slideIndex].style.display = 'block';

  // Move to the next slide
  slideIndex++;
}

// Initialize the first slide and set the interval to change slide every 3 seconds (3000ms)
setInterval(showSlide, 3000);

// Call function initially to show the first slide
showSlide();
