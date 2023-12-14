const homeLink = document.getElementById("home-link");
const rentalsLink = document.getElementById("rentals-link");
const reservationLink = document.getElementById("reservation-link");
const contactLink = document.getElementById("contact-link");
const path = window.location.pathname;

if (path.includes("index")) homeLink.classList.add("active");
if (path.includes("rentals")) rentalsLink.classList.add("active");
if (path.includes("reservation")) reservationLink.classList.add("active");
if (path.includes("contact") || path.includes("thankyou"))
  contactLink.classList.add("active");

let date = new Date(document.lastModified);
let copyYear = date.getFullYear();
let modDate = date.toLocaleString();

document.querySelector("#year").innerHTML = copyYear;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${modDate}`;
