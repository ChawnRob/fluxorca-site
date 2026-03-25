document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("figure");

  if (!target) {
    console.log("Aucun <figure> trouvé.");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(target);
});
