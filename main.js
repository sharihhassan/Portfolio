// Selecting the menu toggle button and navigation menu
const menuToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Adding click event listener
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


// Here I am Writing Js for Carousal
document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < items.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = items.length - 1;
        }
        updateCarousel();
    });

    setInterval(() => {
        if (index < items.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    }, 3000);
});
