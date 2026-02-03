// ============================================
// SERVICES PAGE JAVASCRIPT
// Image Slider Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all service galleries
    initServiceGalleries();
    
    // Initialize mobile menu if it exists
    initMobileMenu();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Add active state to current service in navigation
    highlightCurrentService();
});

// ============================================
// SERVICE GALLERIES
// ============================================

function initServiceGalleries() {
    const galleries = document.querySelectorAll('.service-gallery');
    
    galleries.forEach(gallery => {
        const slider = gallery.querySelector('.gallery-slider');
        const slides = gallery.querySelectorAll('.gallery-slide');
        const dots = gallery.querySelectorAll('.gallery-dots .dot');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Initialize slider
        updateSlider();
        
        // Previous button event
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }
        
        // Next button event
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            });
        }
        
        // Dot navigation events
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto-rotate slides (optional)
        let autoSlideInterval;
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 5000); // Change slide every 5 seconds
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Pause auto-slide on hover
        gallery.addEventListener('mouseenter', stopAutoSlide);
        gallery.addEventListener('mouseleave', startAutoSlide);
        
        // Start auto-slide
        startAutoSlide();
        
        // Update slider function
        function updateSlider() {
            // Update slider position
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update active slide
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Touch swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe left - next slide
                currentSlide = (currentSlide + 1) % totalSlides;
            } else if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe right - previous slide
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            }
            
            updateSlider();
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!gallery.matches(':hover')) return;
            
            if (e.key === 'ArrowLeft') {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            } else if (e.key === 'ArrowRight') {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }
        });
    });
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.startsWith('http')) return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// HIGHLIGHT CURRENT SERVICE
// ============================================

function highlightCurrentService() {
    const serviceSections = document.querySelectorAll('.service-section');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    // Update navigation links
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        } else if (link.getAttribute('href').startsWith('#')) {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.5,
            rootMargin: '-80px 0px -80% 0px' // Adjust based on header height
        }
    );
    
    // Observe each service section
    serviceSections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// IMAGE LAZY LOADING (Optional Enhancement)
// ============================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.gallery-slide img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// PRELOAD IMAGES FOR SMOOTH TRANSITIONS
// ============================================

function preloadGalleryImages() {
    const galleries = document.querySelectorAll('.service-gallery');
    
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        images.forEach(img => {
            const image = new Image();
            image.src = img.src;
        });
    });
}

// Initialize additional features when window loads
window.addEventListener('load', function() {
    // Preload images for smoother transitions
    preloadGalleryImages();
    
    // Initialize lazy loading
    initLazyLoading();
});

// ============================================
// RESIZE HANDLER
// ============================================

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Reinitialize galleries on resize
        initServiceGalleries();
    }, 250);
});
