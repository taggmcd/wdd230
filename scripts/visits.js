const visitsDisplay = document.querySelector("#numVisits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = `Visit count: ${numVisits}`;
} else {
  visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits", numVisits);
