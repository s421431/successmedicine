document.addEventListener('DOMContentLoaded', function() {

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (optional)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Basic Champion Slider (Example - replace with your slider logic if you have one)
    const championsGrid = document.querySelector('.champions-grid-wrapper'); // Target the wrapper
    const prevBtn = document.getElementById('prevChampion');
    const nextBtn = document.getElementById('nextChampion');
    const cardWidth = 280 + 24; // Card width (280px) + gap (1.5rem approx 24px) - Adjust if needed

    if (championsGrid && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            championsGrid.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            championsGrid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }
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
    // Testimonial Slider - Placeholder
    // If you want a JS-powered testimonial slider (like automatic sliding),
    // you would need a library (like Swiper.js or Slick Carousel) or custom JS here.
    // The current CSS makes it a responsive grid, which might be enough.

    // --- Animation triggering on scroll (Optional but nice) ---
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-pop-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; // Trigger animation by making visible
                entry.target.style.transform = 'translateY(0) scale(1)'; // Reset transform
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        // Initially hide elements for observer
        el.style.opacity = '0';
        if (el.classList.contains('animate-fade-in')) {
             el.style.transform = 'translateY(20px)';
        }
         if (el.classList.contains('animate-pop-in')) {
             el.style.transform = 'scale(0.5)';
         }
        observer.observe(el);
    });


}); // End DOMContentLoaded
