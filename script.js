const slidesContainer = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function goToSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1; // Revenir à la dernière slide
    } else if (index >= totalSlides) {
        currentIndex = 0; // Revenir à la première slide
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
});

// Initialisation
goToSlide(0);