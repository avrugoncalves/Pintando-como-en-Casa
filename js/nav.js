(function () {
    "use strict";
    function initNav() {
        const nav        = document.querySelector("nav");
        const menu       = document.querySelector(".menu");
        const hamburger  = document.getElementById("hamburger");
        const desplegable = document.querySelector(".desplegable");
        if (!menu || !hamburger) return;

        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = menu.classList.toggle("open");
            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", isOpen);
        });

        if (desplegable) {
            desplegable.querySelector("a").addEventListener("click", function (e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    desplegable.classList.toggle("open");
                }
            });
        }

        document.addEventListener("click", function () {
            menu.classList.remove("open");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            if (desplegable) desplegable.classList.remove("open");
        });

        if (nav) nav.addEventListener("click", e => e.stopPropagation());
    }

    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", initNav)
        : initNav();
})();
