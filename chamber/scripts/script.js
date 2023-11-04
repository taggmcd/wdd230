var rootElement = document.querySelector(":root");
var cardElements = document.querySelectorAll(".card");
const modeElement = document.querySelector("#mode");

function darkMode() {
  rootElement.style.setProperty("--color-para-bg", "#222222");
  rootElement.style.setProperty("background-color", "#222222");
  cardElements.forEach(function (cardElement) {
    cardElement.style.setProperty("background-color", "#222222");
    cardElement.style.setProperty("color", "white");
  });
}

function lightMode() {
  rootElement.style.setProperty("--color-para-bg", "var(--accent2)");
  rootElement.style.setProperty("background-color", "white");
  cardElements.forEach(function (cardElement) {
    cardElement.style.setProperty("background-color", "white");
    cardElement.style.setProperty("color", "black");
  });
}
modeElement.addEventListener("click", () => {
  if (modeElement.textContent.includes("Dark Mode")) {
    darkMode();
    modeElement.textContent = "Light Mode";
  } else {
    lightMode();
    modeElement.textContent = "Dark Mode";
  }
});
