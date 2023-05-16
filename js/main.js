const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');
const form = document.getElementById('form');
const email = document.getElementById('email');

// navigation
navToggle.addEventListener('click', () => {
    primaryNavigation.hasAttribute('data-visible')
     ? navToggle.setAttribute('aria-expanded', false)
     : navToggle.setAttribute('aria-expanded', true)
    primaryNavigation.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});


const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
            dots: false, // dots enabled 1280px and up
            // arrows: true
        },
    },
});
