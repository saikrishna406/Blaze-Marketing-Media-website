// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update active navigation link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission (replace with actual form handler)
        setTimeout(() => {
            // Hide form and show success message
            contactForm.style.display = 'none';
            successMessage.classList.add('show');
            
            // Reset form after 3 seconds and show it again
            setTimeout(() => {
                contactForm.style.display = 'flex';
                contactForm.reset();
                successMessage.classList.remove('show');
            }, 3000);
        }, 500);
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections
    const animatedElements = document.querySelectorAll('.metric-card, .service-card, .testimonial-card, .about-content, .cta-content');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
    });

    // Update active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't prevent default for external links
            if (this.href && (this.href.includes('calendly') || this.href.includes('wa.me'))) {
                return;
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Mobile menu toggle (if needed for smaller screens)
    const nav = document.querySelector('.nav');
    let isMenuOpen = false;

    // Create mobile menu toggle for very small screens
    if (window.innerWidth <= 480) {
        const mobileToggle = document.createElement('button');
        mobileToggle.innerHTML = '☰';
        mobileToggle.classList.add('mobile-toggle');
        mobileToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary-green);
        `;
        
        const headerContent = document.querySelector('.header-content');
        headerContent.insertBefore(mobileToggle, nav);
        
        mobileToggle.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            nav.style.display = isMenuOpen ? 'flex' : 'none';
        });
    }

    // Add stagger animation to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Enhanced hover effects for interactive elements
    const interactiveCards = document.querySelectorAll('.metric-card, .service-card, .testimonial-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});