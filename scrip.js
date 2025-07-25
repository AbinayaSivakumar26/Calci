// Highlight current section in nav while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const moreAbout = document.getElementById('more-about');
  
  readMoreBtn.addEventListener('click', function() {
    if (moreAbout.style.display === 'none' || moreAbout.style.display === '') {
      moreAbout.style.display = 'block';
      readMoreBtn.textContent = 'Read Less';
    } else {
      moreAbout.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const stats = document.querySelectorAll('.stat-count');
  const statsSection = document.querySelector('.about-stats');
  let animated = false;

  function animateStats() {
    if (animated) return;
    
    stats.forEach(stat => {
      // Only animate if current value is 0
      if (stat.textContent === '0') {
        const target = +stat.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          stat.textContent = Math.floor(current);
        }, 16);
      }
    });
    
    animated = true;
  }



  
  // Intersection Observer for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});



document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  
  const confirmation = document.getElementById('confirmation');
  confirmation.innerText = `Thank you, ${name}! Your booking from ${checkin} to ${checkout} has been confirmed.`;
  confirmation.style.display = 'block';

  this.reset(); // Optional: Clear form
});

