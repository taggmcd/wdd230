const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];

const bannerElement = document.getElementById("banner");
const banner = document.createElement("div");
const closer = document.getElementById("banner-close");
banner.textContent =
  "Come join us at the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m";

if (day === "Monday" || day === "Tuesday" || day === "Wednesday") {
  bannerElement.appendChild(banner);
  bannerElement.classList.toggle("show");
}

closer.addEventListener("click", () => {
  bannerElement.classList.toggle("show");
});
