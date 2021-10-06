const box = document.querySelector(".switch");
const checkbox = document.querySelector(".checkbox");
const content = document.getElementsByTagName("body")[0];
const cards = document.querySelectorAll(".mode");

console.log(box);

// const body = document.querySelector("body");

box.addEventListener("click", () => {
  checkbox.classList.toggle("active-mode");
  box.classList.toggle("active");
  content.classList.toggle("night");
  cards.forEach((card) => {
    card.classList.toggle("active1");
  });
});
