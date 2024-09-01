// HAMBURGER MOBILE MENU

const hamMenu = document.querySelector(".ham-menu");

const nav = document.querySelector(".nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  nav.classList.toggle("active");
});
