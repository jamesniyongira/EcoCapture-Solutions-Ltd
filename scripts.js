// JavaScript to handle navigation, dropdowns, smooth scroll, and form validation

// 1. Mobile Menu Toggle
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
    document.addEventListener("DOMContentLoaded", function() {
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        const navMenu = document.querySelector("nav ul");

        hamburgerMenu.addEventListener("click", function() {
            navMenu.classList.toggle("show-menu");
        });
    });
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show-menu');
    });

// 2. Dropdown Functionality for Navigation
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

// 3. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. WhatsApp Button Click
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/250781392398', '_blank');
});

// 5. Form Validation for Contact Form
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Form submitted successfully!');
    contactForm.reset();
});

// 6. Form Validation for Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter .sign-in-form');
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = newsletterForm.querySelector('input[name="email"]').value;

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    alert('Subscription successful! Thank you for signing up.');
    newsletterForm.reset();
});

// 7. Testimonials Section Animation on Scroll
const testimonials = document.querySelector('.testimonials');

window.addEventListener('scroll', () => {
    const sectionPosition = testimonials.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        testimonials.classList.add('active');
    }
});


// 8. Scroll Back to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 9. Animate Elements on Scroll
const animatedItems = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
    animatedItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (itemPosition < screenPosition) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Call once to check visibility on page load
document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");

    hamburgerMenu.addEventListener("click", function() {
        navMenu.classList.toggle("show-menu");
    });

    // Dropdown Functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').classList.add('show');
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to Top Button Functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block"; // Show button
        } else {
            scrollToTopBtn.style.display = "none"; // Hide button
        }
    });

    // Smooth scroll to the top when button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll effect
        });
    });
});

