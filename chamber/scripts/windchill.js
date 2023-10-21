let temperature = document.getElementById("temperature").textContent;
let windSpeed = 5;
let windChillElement = document.getElementById("windchill");

function calcWindchill(temperature, windSpeed) {
  if (temperature < 50 && windSpeed > 3) {
    let windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.floor(windChill);
  } else {
    return "N/A";
  }
}
windChillElement.textContent = calcWindchill(temperature, windSpeed);
