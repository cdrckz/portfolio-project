document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault(); 

  alert("Thank you for your message :)");
  window.location.href ='index.html'; 
}); 