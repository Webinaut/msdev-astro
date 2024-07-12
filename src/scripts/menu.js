console.log("menu.js loaded");
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("expanded");
  document.querySelector(".hamburger").classList.toggle("expanded");
});

// Set active class on nav when the page is active
const nav = document.querySelector(".main-nav");
const navLinks = nav.querySelectorAll("a");
console.log("🚀 ~ navLinks:", navLinks);
const currentURL = window.location.href;
console.log("🚀 ~ currentURL:", currentURL);
navLinks.forEach((link) => {
  console.log("🚀 ~ link.href:", link.href);
  if (link.href === currentURL) {
    link.classList.add("active");
    link
      .closest("aside")
      .parentElement.querySelector(".drop-icon")
      .classList.add("active");
  }
});
