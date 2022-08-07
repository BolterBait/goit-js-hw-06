let counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
// counterValue = 0;
console.log(decrementBtn);
console.log(counterValue);

// const icnreaseCounterByClick = function onClick() {
//   counterValue += 1;
// };

decrementBtn.addEventListener("click", () => {
  counterValue += 1;
});

// incrementBtn.addEventListener("counterValue", icnreaseCounterByClick);
// console.log(counterValue);
