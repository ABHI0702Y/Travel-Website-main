// Navbar toggle for mobile
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

if (menuBtn) {
   menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
   });

   // Close navbar on link click
   navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
         navbar.classList.remove('active');
      });
   });
}

// Close navbar on scroll
window.addEventListener('scroll', () => {
   if (navbar) navbar.classList.remove('active');
});

// Home slider swiper
const homeSlider = document.querySelector('.home-slider');
if (homeSlider) {
   new Swiper('.home-slider', {
      loop: true,
      autoplay: {
         delay: 4000,
         disableOnInteraction: false,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
}

// Reviews slider swiper
const reviewsSlider = document.querySelector('.reviews-slider');
if (reviewsSlider) {
   new Swiper('.reviews-slider', {
      loop: true,
      autoplay: {
         delay: 3500,
         disableOnInteraction: false,
      },
      spaceBetween: 30,
      breakpoints: {
         0:    { slidesPerView: 1 },
         768:  { slidesPerView: 2 },
         1024: { slidesPerView: 3 },
      },
   });
}

// Header shadow on scroll
window.addEventListener('scroll', () => {
   const header = document.querySelector('.header');
   if (header) {
      header.style.boxShadow = window.scrollY > 0
         ? '0 .5rem 1rem rgba(0,0,0,.3)'
         : 'none';
   }
});

// Booking form validation
const bookForm = document.querySelector('.book-form');
if (bookForm) {
   bookForm.addEventListener('submit', (e) => {
      const inputs = bookForm.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(input => {
         if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            valid = false;
         } else {
            input.style.borderColor = '';
         }
      });
      if (!valid) e.preventDefault();
   });
}
