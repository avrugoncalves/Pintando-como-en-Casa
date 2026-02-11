document.querySelectorAll(".carousel").forEach(carousel => {

  let index = 0;

  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".slide");
  const totalSlides = slides.length;

  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

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

  carousel.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  showSlide();
});
