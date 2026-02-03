// Service Gallery Functionality
const serviceGalleryModal = document.getElementById('serviceGalleryModal');
const closeGalleryModal = document.getElementById('closeGalleryModal');
const galleryTitle = document.getElementById('galleryTitle');
const galleryContent = document.getElementById('galleryContent');

// Gallery data for each service
const galleryData = {
    'metal-work': {
        title: 'Metal Work Gallery',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Custom Metal Fabrication',
                description: 'Precision cutting and shaping of metal components'
            },
            {
                url: 'https://images.unsplash.com/photo-1572017932224-8f2dcb8c1c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Structural Steel Work',
                description: 'Heavy-duty structural steel fabrication'
            },
            {
                url: 'https://images.unsplash.com/photo-1581094794297-1a7d7b5d7c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Metal Art & Design',
                description: 'Artistic metalwork for decorative purposes'
            },
            {
                url: 'https://images.unsplash.com/photo-1581094794796-8b6b6b6b6b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Industrial Metal Solutions',
                description: 'Custom industrial metal components'
            }
        ]
    },
    'plumbing': {
        title: 'Plumbing Services Gallery',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Residential Plumbing',
                description: 'Complete home plumbing solutions'
            },
            {
                url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Commercial Plumbing',
                description: 'Large-scale commercial plumbing systems'
            },
            {
                url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Pipe Installation',
                description: 'Professional pipe installation services'
            },
            {
                url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Emergency Repairs',
                description: '24/7 emergency plumbing services'
            }
        ]
    },
    'mechanics': {
        title: 'Mechanical Services Gallery',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Automotive Repair',
                description: 'Complete vehicle maintenance and repair'
            },
            {
                url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Industrial Machinery',
                description: 'Industrial equipment maintenance'
            },
            {
                url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Engine Diagnostics',
                description: 'Advanced engine diagnostic services'
            },
            {
                url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'System Optimization',
                description: 'Mechanical system performance optimization'
            }
        ]
    },
    'civil-works': {
        title: 'Civil Works Gallery',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Construction Projects',
                description: 'Building construction and development'
            },
            {
                url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Road Works',
                description: 'Road construction and maintenance'
            },
            {
                url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Structural Engineering',
                description: 'Structural design and analysis'
            },
            {
                url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                caption: 'Infrastructure Development',
                description: 'Public infrastructure projects'
            }
        ]
    }
};

// Open service gallery
document.querySelectorAll('.view-gallery').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceCard = this.closest('.service-card');
        const serviceType = serviceCard.getAttribute('data-service');
        
        if (galleryData[serviceType]) {
            openServiceGallery(serviceType);
        }
    });
});

// Open service gallery from service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only trigger if not clicking on the view gallery link
        if (!e.target.closest('.view-gallery')) {
            const serviceType = this.getAttribute('data-service');
            if (galleryData[serviceType]) {
                openServiceGallery(serviceType);
            }
        }
    });
});

function openServiceGallery(serviceType) {
    const service = galleryData[serviceType];
    galleryTitle.textContent = service.title;
    
    galleryContent.innerHTML = `
        <div class="gallery-intro">
            <p>Browse our portfolio of ${service.title.toLowerCase()} projects. Click on images to view larger versions.</p>
        </div>
        <div class="gallery-grid">
            ${service.images.map((image, index) => `
                <div class="gallery-item">
                    <div class="gallery-image">
                        <img src="${image.url}" alt="${image.caption}" loading="lazy">
                    </div>
                    <div class="gallery-caption">
                        <h4>${image.caption}</h4>
                        <p>${image.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <a href="#contact" class="cta-button">Request This Service</a>
        </div>
    `;
    
    serviceGalleryModal.style.display = 'block';
}

// Close gallery modal
closeGalleryModal.addEventListener('click', function() {
    serviceGalleryModal.style.display = 'none';
});

// Close gallery modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === serviceGalleryModal) {
        serviceGalleryModal.style.display = 'none';
    }
});

// Apply Now functionality - redirect to PHP application form
document.querySelectorAll('a[href="apply.php"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // You can add any pre-redirect logic here
        console.log('Redirecting to application form...');
        // The actual redirect will happen via the href attribute
    });
});

// Update all Technosam links
document.querySelectorAll('a[href*="samtech-example.com"]').forEach(link => {
    const oldHref = link.getAttribute('href');
    const newHref = oldHref.replace('samtech-example.com', 'technosamservices.com');
    link.setAttribute('href', newHref);
});

// Logo image hover effect
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
