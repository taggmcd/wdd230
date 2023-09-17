let date = new Date(document.lastModified);
let copyYear = date.getFullYear();

document.querySelector("#year").innerHTML = copyYear;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${date}`;
