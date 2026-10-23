// Experiment 10: portfolio interactivity.

// Mobile navigation toggle.
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Contact form success message.
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactMessage.textContent = 'Thanks! Your message has been received.';
  contactForm.reset();
});
