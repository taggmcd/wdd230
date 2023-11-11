const gridbutton = document.querySelector("#member-grid");
const listbutton = document.querySelector("#member-list");
const toggleButton = document.getElementById("theme");
const display = document.getElementById("members");

toggleButton.addEventListener("click", () => {
  display.classList.toggle("member-grid");
  display.classList.toggle("member-list");
});

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
//   // example using arrow function
//   display.classList.toggle("member-grid");
//   display.classList.toggle("member-list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//   display.classList.add("member-list");
//   display.classList.remove("member-grid");
// }
