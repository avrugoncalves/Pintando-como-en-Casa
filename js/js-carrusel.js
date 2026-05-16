document.querySelectorAll(".carousel").forEach(function (carousel) {
    let index = 0;
    const track      = carousel.querySelector(".carousel-track");
    const slides     = carousel.querySelectorAll(".slide");
    const total      = slides.length;
    const prevBtn    = carousel.querySelector(".prev");
    const nextBtn    = carousel.querySelector(".next");
    const dotsWrap   = carousel.querySelector(".carousel-dots");

    // Crear dots si existe el contenedor
    const dots = [];
    if (dotsWrap) {
        for (let i = 0; i < total; i++) {
            const d = document.createElement("button");
            d.className = "dot" + (i === 0 ? " active" : "");
            d.setAttribute("aria-label", "Ir a slide " + (i + 1));
            d.addEventListener("click", () => goTo(i));
            dotsWrap.appendChild(d);
            dots.push(d);
        }
    }

    function goTo(n) {
        index = (n + total) % total;
        track.style.transform = "translateX(-" + (index * 100) + "%)";
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
        slides.forEach((s, i) => s.classList.toggle("active", i === index));
    }

    if (nextBtn) nextBtn.addEventListener("click", () => goTo(index + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => goTo(index - 1));

    // Teclado
    carousel.tabIndex = 0;
    carousel.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft")  goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
    });

    // Touch / swipe
    let tx = 0;
    carousel.addEventListener("touchstart", e => { tx = e.changedTouches[0].clientX; }, { passive: true });
    carousel.addEventListener("touchend",   e => {
        const diff = tx - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? index + 1 : index - 1);
    }, { passive: true });

    goTo(0);
});
