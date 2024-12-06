const modeToggle = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const logoImage = document.querySelector('header img');

// Function to update logo based on theme
function updateLogo(isDark) {
    logoImage.src = isDark ? 'assets/img/logo2.png' : 'assets/img/logo1.png';
}

// Set initial mode and logo based on localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.checked = true;
    updateLogo(true);
}

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const isDarkMode = body.classList.contains('dark-mode');
    updateLogo(isDarkMode);

    // Save the current theme in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
        // Update the scroll button logic
        const scrollTopButton = document.getElementById('scroll-top');

        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        };

        scrollTopButton.addEventListener('click', () => {
            scrollTopButton.style.animation = 'bounce 1s ease';
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    
            // Remove animation after it completes
            setTimeout(() => {
                scrollTopButton.style.animation = '';
            }, 1000);
        });

// Add to existing script.js
// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Reveal animations on scroll
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});
