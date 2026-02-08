let index = 0;

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;   
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;   
  showSlide();
}


nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft")  prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});


showSlide();