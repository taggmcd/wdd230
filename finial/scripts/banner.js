const bannerElement = document.getElementById("banner");
const closer = document.getElementById("banner-close");

closer.addEventListener("click", () => {
  bannerElement.classList.toggle("show");
});
