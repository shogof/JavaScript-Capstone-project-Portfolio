let hamburgerMenu = document.getElementById("hamburger-menu");
let mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu").classList.add("hidden");
  });
});
