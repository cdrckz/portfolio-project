document.addEventListener("DOMContentLoaded", function() {
  // Get the hamburger button and nav-links
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Check if the elements exist before adding event listeners
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active'); 
    });
  } else {
    console.error("Couldn't find hamburger or nav-links elements.");
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Contact form submission
  document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your message :)");
    window.location.href = 'index.html'; 
  });
});
