// Services Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // HERO SLIDER FUNCTIONALITY
    // ============================================
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const autoplayBtn = document.getElementById('toggleAutoplay');
    const autoplayIcon = document.getElementById('autoplayIcon');
    
    let currentSlide = 0;
    let autoplayInterval;
    let isAutoplay = true;
    const slideDuration = 5000; // 5 seconds per slide
    
    // Initialize slider
    function initSlider() {
        updateSlider();
        startAutoplay();
        
        // Add click handlers for dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToSlide(slideIndex);
                resetAutoplay();
            });
        });
        
        // Previous button
        prevBtn.addEventListener('click', function() {
            goToPrevSlide();
            resetAutoplay();
        });
        
        // Next button
        nextBtn.addEventListener('click', function() {
            goToNextSlide();
            resetAutoplay();
        });
        
        // Autoplay toggle
        autoplayBtn.addEventListener('click', toggleAutoplay);
        
        // Pause autoplay on hover
        const heroSlider = document.querySelector('.hero-slider');
        heroSlider.addEventListener('mouseenter', pauseAutoplay);
        heroSlider.addEventListener('mouseleave', function() {
            if (isAutoplay) {
                startAutoplay();
            }
        });
    }
    
    // Go to specific slide
    function goToSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
        updateSlider();
    }
    
    // Go to next slide
    function goToNextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Go to previous slide
    function goToPrevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Update slider display
    function updateSlider() {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Autoplay functions
    function startAutoplay() {
        if (!autoplayInterval) {
            autoplayInterval = setInterval(goToNextSlide, slideDuration);
            autoplayIcon.classList.remove('fa-play');
            autoplayIcon.classList.add('fa-pause');
        }
    }
    
    function pauseAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
            autoplayIcon.classList.remove('fa-pause');
            autoplayIcon.classList.add('fa-play');
        }
    }
    
    function toggleAutoplay() {
        if (autoplayInterval) {
            pauseAutoplay();
            isAutoplay = false;
        } else {
            startAutoplay();
            isAutoplay = true;
        }
    }
    
    function resetAutoplay() {
        if (isAutoplay) {
            pauseAutoplay();
            startAutoplay();
        }
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process if it's an internal link on this page
            if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                const headerOffset = 100;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                const mainNav = document.getElementById('mainNav');
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // ============================================
    // SERVICE CARDS ANIMATION
    // ============================================
    
    // Intersection Observer for service cards animation
    const serviceCards = document.querySelectorAll('.service-detail-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize cards with animation styles
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // ============================================
    // MOBILE MENU TOGGLE (Same as main page)
    // ============================================
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // ============================================
    // INITIALIZE EVERYTHING
    // ============================================
    
    initSlider();
    
    // Logo hover effect
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        logoImg.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    }
});