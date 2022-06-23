const modal = document.querySelector(".Modal");
const modalBtn = document.querySelector(".Modal-btn");
const modalPopup = document.querySelector(".Modal-popup");
const times = document.querySelector(".times");
const nav = document.querySelector(".Nav");
const navBtn = document.querySelector(".Nav-button");
const navList = document.querySelector(".Nav-list");

modalBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  modalBtn.classList.add("close-btn");
  modalPopup.classList.add("popup-show");
});

times.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  modalBtn.classList.remove("close-btn");
  modalPopup.classList.remove("popup-show");
});
modalPopup.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  modalBtn.classList.remove("close-btn");
  modalPopup.classList.remove("popup-show");
});

navBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  navList.classList.toggle("show-nav-list");
});