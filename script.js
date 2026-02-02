// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mainNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
});

// Training Modal Functionality
const trainingModal = document.getElementById('trainingModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

// Auto Mechanics Department Details
document.getElementById('autoMechDetails').addEventListener('click', function(e) {
    e.preventDefault();
    modalTitle.textContent = 'Auto Mechanics Department - Course Details';
    modalContent.innerHTML = `
        <div class="department-details">
            <h3 style="color: var(--primary); margin-bottom: 20px;">Artisan & Craft Certificate Courses</h3>
            
            <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h4 style="color: var(--secondary); margin-bottom: 10px;">Program Overview</h4>
                <p>Our Auto Mechanics Department offers comprehensive training in all aspects of vehicle maintenance, repair, and fabrication. Students gain hands-on experience with modern automotive technology and equipment.</p>
            </div>
            
            <h4 style="color: var(--primary); margin-bottom: 15px;">Detailed Course Breakdown:</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div>
                    <h5 style="color: var(--secondary); margin-bottom: 10px;">Core Courses</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-wrench" style="color: var(--secondary); margin-right: 8px;"></i> Automotive Mechanics (6 months)</li>
                        <li><i class="fas fa-spray-can" style="color: var(--secondary); margin-right: 8px;"></i> Spray Painting & Panel Beating (4 months)</li>
                        <li><i class="fas fa-car" style="color: var(--secondary); margin-right: 8px;"></i> Vehicle Body Building (6 months)</li>
                        <li><i class="fas fa-fire" style="color: var(--secondary); margin-right: 8px;"></i> Gas Welding & Fabrication (3 months)</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: var(--secondary); margin-bottom: 10px;">Specialized Courses</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-cog" style="color: var(--secondary); margin-right: 8px;"></i> Lathe Works & Machining (4 months)</li>
                        <li><i class="fas fa-industry" style="color: var(--secondary); margin-right: 8px;"></i> Advanced Metal Works (5 months)</li>
                        <li><i class="fas fa-bolt" style="color: var(--secondary); margin-right: 8px;"></i> Auto Electrical Systems (4 months)</li>
                        <li><i class="fas fa-search" style="color: var(--secondary); margin-right: 8px;"></i> Diagnostics & Troubleshooting (3 months)</li>
                    </ul>
                </div>
            </div>
            
            <div style="background-color: var(--primary); color: white; padding: 20px; border-radius: 8px;">
                <h4 style="color: white; margin-bottom: 10px;">Career Opportunities</h4>
                <p>Graduates from our Auto Mechanics Department find employment as automotive technicians, spray painters, panel beaters, welding technicians, machinists, and automotive electrical specialists. Many also start their own auto repair businesses.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="#contact" class="cta-button" style="display: inline-block;">Apply for This Program</a>
            </div>
        </div>
    `;
    trainingModal.style.display = 'block';
});

// Building & Construction Department Details
document.getElementById('buildingDetails').addEventListener('click', function(e) {
    e.preventDefault();
    modalTitle.textContent = 'Building & Construction Department - Course Details';
    modalContent.innerHTML = `
        <div class="department-details">
            <h3 style="color: var(--primary); margin-bottom: 20px;">Artisan & Craft Certificate Courses</h3>
            
            <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h4 style="color: var(--secondary); margin-bottom: 10px;">Program Overview</h4>
                <p>Our Building & Construction Department provides comprehensive training in all trades related to construction, electrical systems, and interior finishing. Students learn both traditional techniques and modern sustainable practices.</p>
            </div>
            
            <h4 style="color: var(--primary); margin-bottom: 15px;">Detailed Course Breakdown:</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div>
                    <h5 style="color: var(--secondary); margin-bottom: 10px;">Electrical & Plumbing</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-bolt" style="color: var(--secondary); margin-right: 8px;"></i> Electrical Installation & Wiring (6 months)</li>
                        <li><i class="fas fa-sun" style="color: var(--secondary); margin-right: 8px;"></i> Solar Photovoltaics Systems (4 months)</li>
                        <li><i class="fas fa-faucet" style="color: var(--secondary); margin-right: 8px;"></i> Plumbing & Pipe Fitting (5 months)</li>
                    </ul>
                    
                    <h5 style="color: var(--secondary); margin-bottom: 10px; margin-top: 20px;">Finishing Trades</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-paint-roller" style="color: var(--secondary); margin-right: 8px;"></i> Painting & Decoration (3 months)</li>
                        <li><i class="fas fa-pen-fancy" style="color: var(--secondary); margin-right: 8px;"></i> Sign Writing (2 months)</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: var(--secondary); margin-bottom: 10px;">Construction Trades</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-hard-hat" style="color: var(--secondary); margin-right: 8px;"></i> Masonry & Brickwork (6 months)</li>
                        <li><i class="fas fa-th-large" style="color: var(--secondary); margin-right: 8px;"></i> Tile Fixing & Flooring (4 months)</li>
                        <li><i class="fas fa-wrench" style="color: var(--secondary); margin-right: 8px;"></i> Welding & Fabrications (5 months)</li>
                    </ul>
                    
                    <h5 style="color: var(--secondary); margin-bottom: 10px; margin-top: 20px;">Design & Business</h5>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><i class="fas fa-couch" style="color: var(--secondary); margin-right: 8px;"></i> Interior Design & Finishing (5 months)</li>
                        <li><i class="fas fa-business-time" style="color: var(--secondary); margin-right: 8px;"></i> Technical Entrepreneurship (3 months)</li>
                    </ul>
                </div>
            </div>
            
            <div style="background-color: var(--primary); color: white; padding: 20px; border-radius: 8px;">
                <h4 style="color: white; margin-bottom: 10px;">Career Opportunities</h4>
                <p>Graduates find employment as electricians, plumbers, masons, painters, tilers, welders, solar technicians, and interior designers. The entrepreneurship course prepares students to start their own construction-related businesses.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="#contact" class="cta-button" style="display: inline-block;">Apply for This Program</a>
            </div>
        </div>
    `;
    trainingModal.style.display = 'block';
});

// View All Courses
document.getElementById('viewAllCourses').addEventListener('click', function(e) {
    e.preventDefault();
    modalTitle.textContent = 'Silva Technical Training Institute - All Programs';
    modalContent.innerHTML = `
        <div class="all-programs">
            <h3 style="color: var(--primary); margin-bottom: 20px;">Complete Course Catalog</h3>
            
            <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h4 style="color: var(--secondary); margin-bottom: 10px;">Training Philosophy</h4>
                <p>At Silva Technical Training Institute, we believe in "learning by doing." All our programs include 70% practical workshop time and 30% classroom theory. Our certificates are recognized by the National Industrial Training Authority and other relevant bodies.</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div style="border-left: 4px solid var(--secondary); padding-left: 15px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px;">Auto Mechanics Department</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><strong>Automotive Mechanics</strong> - 6 months</li>
                        <li><strong>Spray Painting & Panel Beating</strong> - 4 months</li>
                        <li><strong>Vehicle Body Building</strong> - 6 months</li>
                        <li><strong>Gas Welding & Fabrication</strong> - 3 months</li>
                        <li><strong>Lathe Works & Machining</strong> - 4 months</li>
                        <li><strong>Advanced Metal Works</strong> - 5 months</li>
                        <li><strong>Auto Electrical Systems</strong> - 4 months</li>
                        <li><strong>Diagnostics & Troubleshooting</strong> - 3 months</li>
                    </ul>
                </div>
                
                <div style="border-left: 4px solid var(--accent); padding-left: 15px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px;">Building & Construction Department</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><strong>Electrical Installation</strong> - 6 months</li>
                        <li><strong>Solar Photovoltaics</strong> - 4 months</li>
                        <li><strong>Plumbing & Pipe Fitting</strong> - 5 months</li>
                        <li><strong>Painting & Decoration</strong> - 3 months</li>
                        <li><strong>Sign Writing</strong> - 2 months</li>
                        <li><strong>Masonry & Brickwork</strong> - 6 months</li>
                        <li><strong>Tile Fixing & Flooring</strong> - 4 months</li>
                        <li><strong>Welding & Fabrications</strong> - 5 months</li>
                        <li><strong>Interior Design</strong> - 5 months</li>
                        <li><strong>Technical Entrepreneurship</strong> - 3 months</li>
                    </ul>
                </div>
            </div>
            
            <div style="background-color: var(--secondary); color: white; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h4 style="color: white; margin-bottom: 10px;">Admission Requirements</h4>
                <ul style="list-style-type: none; padding-left: 0;">
                    <li><i class="fas fa-check-circle" style="margin-right: 10px;"></i> Minimum KCSE Grade D or equivalent</li>
                    <li><i class="fas fa-check-circle" style="margin-right: 10px;"></i> For Craft Certificate: KCSE Grade C- or Artisan Certificate</li>
                    <li><i class="fas fa-check-circle" style="margin-right: 10px;"></i> Medical certificate of fitness</li>
                    <li><i class="fas fa-check-circle" style="margin-right: 10px;"></i> 2 passport-sized photographs</li>
                    <li><i class="fas fa-check-circle" style="margin-right: 10px;"></i> National ID or birth certificate</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="#contact" class="cta-button" style="display: inline-block; margin-right: 15px;">Request Application</a>
                <button class="cta-button secondary" id="closeAndDownload" style="display: inline-block;">Download Full Brochure</button>
            </div>
        </div>
    `;
    trainingModal.style.display = 'block';
});

// Download Brochure
document.getElementById('downloadBrochure').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Training brochure download started. Thank you for your interest in SilvaTech Institute!");
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    trainingModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === trainingModal) {
        trainingModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && trainingModal.style.display === 'block') {
        trainingModal.style.display = 'none';
    }
});

// Note: Replace "https://www.samtech-example.com" with the actual SamTech website URL