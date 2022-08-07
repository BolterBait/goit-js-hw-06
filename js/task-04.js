let counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let count = 0;
console.log(decrementBtn);
console.log(counterValue);
counterValue.innerHTML = count;

decrementBtn.addEventListener("click", () => {
  count -= 1;
  counterValue.innerHTML = count;
});

incrementBtn.addEventListener("click", () => {
  count += 1;
  counterValue.innerHTML = count;
});
