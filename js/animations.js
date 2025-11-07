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


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".updates-images img");
  const prevBtn = document.querySelector(".arrow.left");
  const nextBtn = document.querySelector(".arrow.right");
  let index = 0;

  function showImage(newIndex) {
    images[index].classList.remove("active");
    index = (newIndex + images.length) % images.length;
    images[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => showImage(index + 1));
  prevBtn.addEventListener("click", () => showImage(index - 1));
});
