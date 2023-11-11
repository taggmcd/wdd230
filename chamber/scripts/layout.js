const gridbutton = document.querySelector("#member-grid");
const listbutton = document.querySelector("#member-list");
// const toggleButton = document.getElementById("grid");
const display = document.getElementById("members");

// gridButton.addEventListener("click", () => {
//   display.classList.toggle("member-grid");
//   display.classList.toggle("member-list");
// });

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  listbutton.classList.remove("selected");
  display.classList.add("member-grid");
  display.classList.remove("member-list");
  gridbutton.classList.add("selected");
});

listbutton.addEventListener("click", showList);

function showList() {
  gridbutton.classList.remove("selected");
  display.classList.add("member-list");
  display.classList.remove("member-grid");
  listbutton.classList.add("selected");
}
