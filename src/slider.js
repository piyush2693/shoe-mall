
function showSlide(sliderId, index) {
    const slidesContainer = document.querySelector(`#${sliderId} .slides`);
    const slides = slidesContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    return index; // Return the new index
}

function moveSlide(sliderId, step) {
    const slidesContainer = document.querySelector(`#${sliderId} .slides`);
    const currentIndex = parseInt(slidesContainer.dataset.currentIndex) || 0;
    const newIndex = showSlide(sliderId, currentIndex + step);
    slidesContainer.dataset.currentIndex = newIndex;
}

// Initialize sliders
document.querySelectorAll('.slider').forEach(slider => {
    const slidesContainer = slider.querySelector('.slides');
    slidesContainer.dataset.currentIndex = 0; // Initialize currentIndex for each slider
    showSlide(slider.id, 0);
});

// Optional: Automatically advance slides every few seconds
// setInterval(() => {
//     moveSlide('slider1', 1);
//     moveSlide('slider2', 1);
// }, 5000); 
// Change slides every 5 seconds
