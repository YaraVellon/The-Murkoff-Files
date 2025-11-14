document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".characters, .maps");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 }); // se activa cuando el 40% es visible

  animatedSections.forEach(section => observer.observe(section));
});



document.querySelectorAll(".Rigs details").forEach((detail) => {
  const content = detail.querySelector(".content");

  detail.addEventListener("toggle", () => {
    if (detail.open) {
      // Abrir con animación
      const startHeight = 0;
      const endHeight = content.scrollHeight;
      content.animate(
        [
          { maxHeight: startHeight + "px", opacity: 0 },
          { maxHeight: endHeight + "px", opacity: 1 }
        ],
        { duration: 400, easing: "ease-out", fill: "forwards" }
      );
    } else {
      // Cerrar con animación
      const startHeight = content.scrollHeight;
      const endHeight = 0;
      content.animate(
        [
          { maxHeight: startHeight + "px", opacity: 1 },
          { maxHeight: endHeight + "px", opacity: 0 }
        ],
        { duration: 350, easing: "ease-in", fill: "forwards" }
      );
    }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

dropdowns.forEach(drop => {
  drop.addEventListener('click', e => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      drop.classList.toggle('active');
    }
  });
});

// Selecciona todos los elementos con clase .reveal y .reveal-title
const revealElements = document.querySelectorAll('.reveal, .reveal-title');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // activa animación
      observer.unobserve(entry.target);     // deja de observar
    }
  });
}, {
  threshold: 0.1 // se activa cuando el 10% del elemento es visible
});

// Aplica observer a cada elemento
revealElements.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-title, .reveal-hero');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});