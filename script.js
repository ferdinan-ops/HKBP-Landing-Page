const menu = document.querySelector(".menu");
const link = document.querySelector(".menu ul.link");
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  link.style.top = "70px";
});

menu.addEventListener("click", () => {
  link.classList.toggle("active");
});
