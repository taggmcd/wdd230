var rootElement = document.querySelector(":root");
var cardElements = document.querySelectorAll(".card");
const modeElement = document.querySelector("#mode");
const discoverElement = document.querySelector("#discover");
var gridToggleElement = document.querySelector(".grid-list");

const homeLink = document.getElementById("home-link");
const discoverLink = document.getElementById("discover-link");
const directoryLink = document.getElementById("directory-link");
const joinLink = document.getElementById("join-link");
const path = window.location.pathname;

function darkMode() {
  rootElement.style.setProperty("--color-para-bg", "#222222");
  rootElement.style.setProperty("background-color", "#222222");
  if (discoverElement != null) {
    discoverElement.classList.toggle("dark-text");
  }
  if (gridToggleElement != null) {
    gridToggleElement.classList.toggle("dark-text");
  }
  cardElements.forEach(function (cardElement) {
    cardElement.style.setProperty("background-color", "#222222");
    cardElement.style.setProperty("color", "white");
  });
}

function lightMode() {
  rootElement.style.setProperty("--color-para-bg", "var(--accent2)");
  rootElement.style.setProperty("background-color", "white");
  if (discoverElement != null) {
    discoverElement.classList.toggle("dark-text");
  }
  if (gridToggleElement != null) {
    gridToggleElement.classList.toggle("dark-text");
  }
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

if (path.includes("index")) homeLink.classList.add("active-nav");
if (path.includes("discover")) discoverLink.classList.add("active-nav");
if (path.includes("directory")) directoryLink.classList.add("active-nav");
if (path.includes("join") || path.includes("thankyou"))
  joinLink.classList.add("active-nav");
