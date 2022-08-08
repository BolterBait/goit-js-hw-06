const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onClickSubject);

function onClickSubject() {
  if (Number(inputField.value.length) === +inputField.dataset.length) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
}

// const textInput = document.querySelector("#validation-input");

// const setLength = textInput.getAttribute("data-length");

// textInput.addEventListener("blur", (text) => {
//   if (text.currentTarget.value.length === Number(setLength)) {
//     textInput.className = "valid";
//   } else {
//     textInput.className = "invalid";
//   }
//   console.log(
//     text.currentTarget.value.length ===
//       Number(textInput.getAttribute("data-length"))
//   );
// });
