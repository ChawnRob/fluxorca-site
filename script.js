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
// COOKIE CONSENT
const banner = document.getElementById("cookie-banner");

if (!localStorage.getItem("cookieChoice")) {
  banner.style.display = "flex";
} else {
  banner.style.display = "none";
}

document.getElementById("accept-cookies").onclick = () => {
  localStorage.setItem("cookieChoice", "accepted");
  banner.style.display = "none";
};

document.getElementById("refuse-cookies").onclick = () => {
  localStorage.setItem("cookieChoice", "refused");
  banner.style.display = "none";
};
