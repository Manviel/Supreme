const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

const next = document.getElementById('next');
const prev = document.getElementById('prev');

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(timer);
  timer = setInterval(function() {
    plusSlides(1);
  }, 10000);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let timer = setInterval(function() {
  plusSlides(1);
}, 10000);

next.onclick = function() { plusSlides(1); }
prev.onclick = function() { plusSlides(-1); }