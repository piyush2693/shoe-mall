document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

<<<<<<< HEAD
// ------------------------------------------------signup pop-up---------------------------------------------------------------
// JavaScript to handle popup display
// JavaScript to handle popup display
document.querySelector('.signup-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('popup-overlay').style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup-overlay').style.display = 'none';
});

// Close popup if user clicks outside the popup card
document.getElementById('popup-overlay').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});
// ----------------------------------------------------------------------------------------------------------
=======
  var swiper = new Swiper(".mySwipe", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swipe-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
>>>>>>> 834f7db8c95ca419dce2a1bfa262b4414f907769
