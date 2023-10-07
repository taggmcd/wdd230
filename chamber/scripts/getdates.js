let date = new Date(document.lastModified);
let copyYear = date.getFullYear();
let modDate = date.toLocaleString();

document.querySelector("#year").innerHTML = copyYear;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${modDate}`;
