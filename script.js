console.log("JS is connected")

document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        console.log("Element shown:", entry.target);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  });

  hiddenElements.forEach((el) => observer.observe(el));
});