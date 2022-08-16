const fontSize = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSize.addEventListener("input", onClickHandler);
function onClickHandler(e) {
  spanEl.style.fontSize = `${e.currentTarget.value}px`;
}
