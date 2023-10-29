const visitorElement = document.getElementById("visitor");
const today = Date.now();
const msToDays = 84600000;
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || today;
let daysSinceVisit = Math.floor((today - lastVisit) / msToDays);

if (!lastVisit) {
  visitorElement.textContent =
    "Welcome! Let us know if you have any questions.";
} else if (daysSinceVisit < 1) {
  visitorElement.textContent = "Back so soon! Awesome!";
} else {
  visitorElement.textContent = `You last visited ${daysSinceVisit} days ago.`;
}

console.log(daysSinceVisit);
localStorage.setItem("lastVisit", today);
