// Ensure DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Menu Toggle Fix
    const menuToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Carousel Script
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const items = document.querySelectorAll(".carousel-item");
    
    let index = 0;

    function updateCarousel() {
        if (carouselContainer) {
            const offset = -index * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }
    }

    if (prevButton && nextButton && carouselContainer && items.length > 0) {
        nextButton.addEventListener("click", function () {
            index = (index + 1) % items.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", function () {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        });

        setInterval(() => {
            index = (index + 1) % items.length;
            updateCarousel();
        }, 3000);

        window.addEventListener("resize", updateCarousel);
    }
});
