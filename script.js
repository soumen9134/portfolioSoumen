// Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Photo upload functionality
        const photoUpload = document.getElementById('photo-upload');
        const profilePhoto = document.getElementById('profile-photo');
        
        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    profilePhoto.src = event.target.result;
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // Scroll animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animation
        const animatedElements = [
            document.getElementById('about-text'),
            document.getElementById('portfolio-title'),
            document.getElementById('contact-title'),
            ...document.querySelectorAll('.skill'),
            ...document.querySelectorAll('.portfolio-item'),
            ...document.querySelectorAll('.form-group')
        ];
        
        animatedElements.forEach(el => {
            if (el) observer.observe(el);
        });
        
        // Observe portfolio grid items with delay
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            observer.observe(item);
        });
        
        // Form submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Initialize animations on page load for elements in viewport
        document.addEventListener('DOMContentLoaded', () => {
            // Trigger initial check for elements already in viewport
            animatedElements.forEach(el => {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        el.classList.add('animated');
                    }
                }
            });
        });