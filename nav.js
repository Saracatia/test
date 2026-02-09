// Mobile menu (hamburger)
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });

  // Luk menu når der klikkes på et link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
    });
  });
}