// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass', 'glass-edge', 'shadow-2xl', 'py-4');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('glass', 'glass-edge', 'shadow-2xl', 'py-4');
        navbar.classList.add('py-6');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, stop observing
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
const formMessage = document.getElementById('form-message');

// REPLACE THIS with your actual Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx3ECbrpLGMLIHJQr0_F8aoMOPHWhm-iTUN-eMV5vZr5bYtBxLXKYm9SKbf8gSQKiO3/exec';

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
            alert('Please configure your Google Script URL in js/main.js');
            return;
        }

        // UI Loading State
        submitBtn.disabled = true;
        if (btnText) btnText.textContent = 'Sending...';
        formMessage.classList.add('hidden');
        formMessage.classList.remove('bg-green-500/10', 'text-green-500', 'bg-red-500/10', 'text-red-500');

        const formData = new FormData(contactForm);

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            submitBtn.disabled = false;
            if (btnText) btnText.textContent = 'Send Message';
            
            formMessage.classList.remove('hidden');
            formMessage.classList.add('bg-green-500/10', 'text-green-500');
            formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
            
            contactForm.reset();
        })
        .catch(error => {
            submitBtn.disabled = false;
            if (btnText) btnText.textContent = 'Send Message';
            
            formMessage.classList.remove('hidden');
            formMessage.classList.add('bg-red-500/10', 'text-red-500');
            formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
            console.error('Error!', error.message);
        });
    });
}
