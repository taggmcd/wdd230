const curDate = new Date();
const startElement = document.getElementById("start");
const endElement = document.getElementById("end");
const pricingUrl = "https://taggmcd.github.io/wdd230/finial/data/rentals.json";
const selectElement = document.getElementById("type");

let minDate = `${curDate.getFullYear()}-${
  curDate.getMonth() + 1
}-${curDate.getDate()}`;

startElement.setAttribute("min", minDate);
endElement.setAttribute("min", minDate);

async function fetchRentals() {
  try {
    const responce = await fetch(pricingUrl);
    if (responce.ok) {
      const data = await responce.json();
      displayRentals(data.rentals);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayRentals(data) {
  data.forEach((rental) => {
    let option = document.createElement("option");
    option.setAttribute("value", rental.type);
    option.textContent = rental.type;

    selectElement.appendChild(option);
  });
}

fetchRentals();
