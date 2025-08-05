// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for your inquiry! We'll contact you shortly.");
  this.reset();
});
