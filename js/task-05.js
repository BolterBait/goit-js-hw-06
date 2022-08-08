const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (text) => {
  if (textInput.value === "") {
    return (textOutput.textContent = "Anonymous");
  }
  textOutput.textContent = text.currentTarget.value;
});
