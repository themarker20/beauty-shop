// Mega Menu Action
const otherLinks = document.querySelector(".toggle-menu");

const megaMenu = document.querySelector("nav ul");

otherLinks.addEventListener("click", () => {
  megaMenu.classList.toggle("show");
});
