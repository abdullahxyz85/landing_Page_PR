// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const navbar = document.getElementById('navbar');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('codesage-dark-mode', body.classList.contains('dark-mode'));
});

// Load dark mode preference
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('codesage-dark-mode') === 'true') {
    body.classList.add('dark-mode');
  }
});

// Sticky nav background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-in animation for all cards and sections
function animateOnScroll() {
  const animatedElements = document.querySelectorAll(
    '.feature-card, .tech-item, .use-case-card, .flow-step, .metric-card, .team-card'
  );
  const triggerBottom = window.innerHeight * 0.85;
  
  animatedElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    }
  });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Add hover effects for tech stack items
document.addEventListener('DOMContentLoaded', () => {
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-8px) scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add loading animation for page
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize page with fade-in
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
}); 