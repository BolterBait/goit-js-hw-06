function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const markupContainer = document.querySelector("#boxes");
const createMarkupBtn = document.querySelector("[data-create]");
const destroyMarkupBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('[type="number"]');

createMarkupBtn.addEventListener("click", onCreateBtnClick);
destroyMarkupBtn.addEventListener("click", onDestroyBtnClick);
console.dir(markupContainer);

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    elements.push(div);
    size += 10;
  }
  markupContainer.append(...elements);
}

function onCreateBtnClick() {
  destroyBoxes();
  const inputValue = input.value;
  if (!(inputValue >= 1 && inputValue <= 100)) {
    input.value = "";
    alert("Введіть число від 1 до 100");
    return;
  }
  createBoxes(inputValue);
  input.value = "";
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function destroyBoxes() {
  markupContainer.innerHTML = "";
}
