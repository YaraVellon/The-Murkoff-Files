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