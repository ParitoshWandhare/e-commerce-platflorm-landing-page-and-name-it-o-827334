// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Cart Functionality
let cartCount = 0;
const cartIcon = document.querySelector('.cart-icon');

document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        cartCount++;
        cartIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H21L20 14H7L6 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="9" cy="20" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="18" cy="20" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="cart-count">${cartCount}</span>
        `;
        
        // Add visual feedback
        this.textContent = 'Added!';
        this.style.backgroundColor = 'var(--accent-color)';
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 1000);
        
        // Show notification
        showNotification(`${productName} added to cart!`);
    });
});

// Add cart count styling
const cartIconContainer = document.querySelector('.cart-icon');
const style = document.createElement('style');
style.textContent = `
    .cart-icon {
        position: relative;
    }
    .cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: var(--secondary-color);
        color: var(--white-color);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--accent-color);
        color: var(--white-color);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1000;
        transform: translateX(150%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.name.value;
        const email = this.email.value;
        const message = this.message.value;
        
        if (!name || !email || !message) {
            showNotification('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!');
        this.reset();
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--white-color)';
        navbar.style.backdropFilter = 'none';
    }
});