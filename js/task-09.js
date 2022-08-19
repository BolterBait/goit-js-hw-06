function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
changeColorBtn.addEventListener("click", onBtnClick);
function onBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
  console.dir(colorSpan);
}
