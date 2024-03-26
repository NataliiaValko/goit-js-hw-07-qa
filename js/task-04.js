function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");

buttonCreateRef.addEventListener("click", handleCreate);
buttonDestroyRef.addEventListener("click", handleDestroy);

function handleCreate(event) {
  const amount = Number(inputRef.value);
  if (amount < 1 || amount > 100) return;
  createBoxes(amount);
}

function createBoxes(amount) {
  let markup = "";
  for (let index = 0; index < amount; index++) {
    const elementMarkup = `<div style="background-color: ${getRandomHexColor()}; width:${
      30 + index * 10
    }px; height: ${30 + index * 10}px "></div>`;
    markup += elementMarkup;
  }
  boxesRef.innerHTML = markup;
}

function handleDestroy(event) {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}
