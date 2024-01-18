const openBtn = document.querySelector(".openBtn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", () => {
  menu.classList.add("activeMenu");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("activeMenu");
});
