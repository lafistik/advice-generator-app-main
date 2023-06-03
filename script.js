const adviceNum = document.querySelector(".num");
const adviceText = document.querySelector(".advice__text");
const generateAdvice = document.querySelector(".dice__container");
const card = document.querySelector(".card");

window.addEventListener("load", function () {
  getAdvice();
  card.style.opacity = "1";
});

generateAdvice.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceNum.textContent = data.slip.id;
      adviceText.textContent = `“${data.slip.advice}”`;
    });
}
