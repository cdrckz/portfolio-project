document.addEventListener("DOMContentLoaded", function() {
  // Get the hamburger button and nav-links
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Check if the elements exist before adding event listeners
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      // Log to verify button click
      console.log('Hamburger clicked!');
      
      navLinks.classList.toggle('active'); 
      
      // Log to check the nav-links' state after toggle
      if (navLinks.classList.contains('active')) {
        console.log('Menu is active'); //debugging
      } else {
        console.log('Menu is inactive');
      }
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

