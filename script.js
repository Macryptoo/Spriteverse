const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight / 1.3;
  const top = aboutSection.getBoundingClientRect().top;

  if (top < triggerPoint) {
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
  }
});
