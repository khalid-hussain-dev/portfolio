const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.querySelector('.modal-caption');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.architecture-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('data-image');
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        captionText.innerHTML = this.textContent.trim(); // Shows "Architecture" or similar
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for fade-in sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Mobile menu toggle (simple example)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // You can expand this to show/hide menu with CSS
});

// Optional: close mobile menu when link clicked (if needed)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Get all architecture links
document.querySelectorAll('.architecture-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('data-image');
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        captionText.innerHTML = this.textContent.trim(); // Shows "Architecture" or similar
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Optional: close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});

// Initialize EmailJS
emailjs.init("xVS6CmaeKL3jQk-bN");

document.getElementById("contact-form")
.addEventListener("submit", function(event) {

event.preventDefault();

emailjs.sendForm(
    "service_803xh8a",
    "template_d7m2rsh",
    this
)
.then(function() {
    alert("Message sent successfully!");
}, function(error) {
    alert("Failed to send message.");
    console.log(error);
});

});
