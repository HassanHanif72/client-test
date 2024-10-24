// Counter
let count = 1;
const interval = setInterval(() => {
    count = count >= 3 ? 1 : count + 1;
    document.getElementById('counter').innerText = count;
}, 1000);
// end 

// slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function (event) {
    event.preventDefault();
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});
// end

// slider
let currentSlide1 = 0;
const slides1 = document.querySelectorAll('.slide');
const totalSlides1 = slides1.length;

document.querySelector('.nextmobile').addEventListener('click', function (event) {
    event.preventDefault();
    slides1[currentSlide1].classList.remove('active');
    currentSlide1 = (currentSlide1 + 1) % totalSlides1;
    slides1[currentSlide1].classList.add('active');
});
// end