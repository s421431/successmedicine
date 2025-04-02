window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.champion-card, .faculty-card, .feature-card, .course-card, .testimonial-card, .section-title').forEach(element => {
    observer.observe(element);
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

showTestimonial(0);
setInterval(nextTestimonial, 5000);

const championsGrid = document.querySelector('.champions-grid');
let isScrolling = false;
let startX;
let scrollLeft;

championsGrid.addEventListener('mousedown', (e) => {
    isScrolling = true;
    startX = e.pageX - championsGrid.offsetLeft;
    scrollLeft = championsGrid.scrollLeft;
});

championsGrid.addEventListener('mouseleave', () => {
    isScrolling = false;
});

championsGrid.addEventListener('mouseup', () => {
    isScrolling = false;
});

championsGrid.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - championsGrid.offsetLeft;
    const walk = (x - startX) * 2;
    championsGrid.scrollLeft = scrollLeft - walk;
});

const prevChampion = document.getElementById('prevChampion');
const nextChampion = document.getElementById('nextChampion');

prevChampion.addEventListener('click', () => {
    championsGrid.scrollBy({ left: -300, behavior: 'smooth' });
});

nextChampion.addEventListener('click', () => {
    championsGrid.scrollBy({ left: 300, behavior: 'smooth' });
});
