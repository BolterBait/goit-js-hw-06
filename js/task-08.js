const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onLoginFormSubmit);
function onLoginFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }

  console.log({ email: email.value, password: password.value });

  event.target.reset();
}
