// Function to handle scroll reveal animations
export function initScrollReveal() {
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  
  // Run once to check for elements in view on page load
  revealOnScroll();

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
}

// Function to add animation classes to elements
export function addElementAnimations() {
  // Homepage hero section
  const homeTitle = document.querySelector('.homepage-title');
  const homeSubtitle = document.querySelector('.homepage-subtitle');
  const homeImage = document.querySelector('.homepage-image-wrapper');
  const homeSocials = document.querySelector('.homepage-socials');
  
  if (homeTitle) homeTitle.classList.add('slide-in-left');
  if (homeSubtitle) {
    homeSubtitle.classList.add('slide-in-left');
    homeSubtitle.classList.add('delay-200');
  }
  if (homeImage) homeImage.classList.add('slide-in-right');
  if (homeSocials) {
    homeSocials.classList.add('fade-in');
    homeSocials.classList.add('delay-400');
  }

  // Projects
  const projects = document.querySelectorAll('.project');
  if (projects.length) {
    projects.forEach((project, index) => {
      project.classList.add('reveal', 'reveal-up');
      // Add a small delay for each project
      project.style.transitionDelay = `${index * 100}ms`;
    });
  }

  // Articles
  // Removed animation for articles
  
  // Add floating effect to logo
  const logo = document.querySelector('.logo');
  if (logo) logo.classList.add('float');
}