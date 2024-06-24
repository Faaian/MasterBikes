// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name && email && message) {
                alert('Mensaje enviado con éxito');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const moreInfoButton = card.querySelector('.btn-more-info');
        moreInfoButton.addEventListener('click', function () {
            const moreInfo = card.querySelector('.more-info');
            if (moreInfo) {
                moreInfo.classList.toggle('d-none');
            }
        });
    });

    const featuredProductsCarousel = document.querySelector('#featuredProductsCarousel');
    if (featuredProductsCarousel) {
        new bootstrap.Carousel(featuredProductsCarousel, {
            interval: 5000
        });
    }
});
