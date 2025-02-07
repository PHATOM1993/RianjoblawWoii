let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider img').length;

function slide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100; // คำนวณตำแหน่งการเลื่อน
    slides.style.transform = `translateX(${offset}%)`;
}

// เลื่อนรูปทุก 3 วินาที
setInterval(slide, 3000);
