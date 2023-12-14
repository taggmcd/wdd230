const pricingUrl = "https://taggmcd.github.io/wdd230/finial/data/rentals.json";
const tableElement = document.getElementById("rentalBody");

async function fetchPricing() {
  try {
    const responce = await fetch(pricingUrl);
    if (responce.ok) {
      const data = await responce.json();
      displayPricing(data.rentals);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayPricing(data) {
  data.forEach((rental) => {
    let row = document.createElement("tr");
    let type = document.createElement("td");
    let capacity = document.createElement("td");
    let resHalf = document.createElement("td");
    let resFull = document.createElement("td");
    let walkHalf = document.createElement("td");
    let walkFull = document.createElement("td");

    type.textContent = rental.type;
    capacity.textContent = rental.maxPersons;
    resHalf.textContent = rental.price.reservation.halfDay;
    resFull.textContent = rental.price.reservation.fullDay;
    walkHalf.textContent = rental.price.walkIn.halfDay;
    walkFull.textContent = rental.price.walkIn.fullDay;

    row.appendChild(type);
    row.appendChild(capacity);
    row.appendChild(resHalf);
    row.appendChild(resFull);
    row.appendChild(walkHalf);
    row.appendChild(walkFull);
    tableElement.appendChild(row);
  });
}

fetchPricing();
