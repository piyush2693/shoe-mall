// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
//     });
// });
// <!-- ---------------------------nav bar-------------------------------- -->

document.addEventListener("DOMContentLoaded", function() {
  const openSignupPopup = document.getElementById("signup-btn");
  const signupPopup = document.getElementById("signup-popup");
  const closeSignupPopup = document.getElementById("close-signup-popup");

  const openLoginPopup = document.getElementById("open-login-popup");
  const loginPopup = document.getElementById("login-popup");
  const closeLoginPopup = document.getElementById("close-login-popup");

  const openSignupPopup2 = document.getElementById("open-signup-popup-2");

  openSignupPopup.addEventListener("click", function(e) {
      e.preventDefault();
      signupPopup.style.display = "flex";
  });

  closeSignupPopup.addEventListener("click", function() {
      signupPopup.style.display = "none";
  });

  openLoginPopup.addEventListener("click", function(e) {
      e.preventDefault();
      signupPopup.style.display = "none";
      loginPopup.style.display = "flex";
  });

  closeLoginPopup.addEventListener("click", function() {
      loginPopup.style.display = "none";
  });

  openSignupPopup2.addEventListener("click", function(e) {
      e.preventDefault();
      loginPopup.style.display = "none";
      signupPopup.style.display = "flex";
  });

  window.addEventListener("click", function(e) {
      if (e.target === signupPopup) {
          signupPopup.style.display = "none";
      } else if (e.target === loginPopup) {
          loginPopup.style.display = "none";
      }
  });
});

const closeSignupPopup = document.getElementById("close-signup-popup");

closeSignupPopup.addEventListener("click", function() {
    document.getElementById("signup-popup").style.display = "none";
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
});



  // <!-- ---------------------------nav bar-------------------------------- -->
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