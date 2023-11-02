const password = document.querySelector("#password");
const passowrdConfirmation = document.querySelector("#passwordConfirmation");
const message = document.querySelector("#formmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

passowrdConfirmation.addEventListener("focusout", comparePassword);

// This should be refactored.
function comparePassword() {
  console.log(password.value);
  if (password.value !== passowrdConfirmation.value) {
    message.textContent = "❗Passwords DO NOT MATCH!";
    message.style.display = "block";
    passowrdConfirmation.style.backgroundColor = "#fff0f3";
    passowrdConfirmation.value = "";
    password.value = "";
    passowrd.focus();
  } else {
    message.style.display = "none";
    passowrdConfirmation.style.backgroundColor = "#fff";
    passowrdConfirmation.style.color = "#000";
  }
}
