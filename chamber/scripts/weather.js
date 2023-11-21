const forecast = document.getElementById("forecast");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentIcon = document.getElementById("weather-icon");
const captionDesc = document.getElementById("figcaption");
const forcastElement = document.getElementById("forecast");
let windChillElement = document.getElementById("windchill");

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?appid=92ee7552adb4dec37560965f6191e3b0&units=imperial&lat=40.37&lon=-111.74";
const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=92ee7552adb4dec37560965f6191e3b0&units=imperial&lat=40.37&lon=-111.74";

async function fetchWeather() {
  try {
    const responce = await fetch(weatherUrl);
    if (responce.ok) {
      const data = await responce.json();
      displayWeather(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function calcWindchill(temperature, windSpeed) {
  if (temperature < 50 && windSpeed > 3) {
    let windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return `${Math.floor(windChill)}&deg; F`;
  } else {
    return "N/A";
  }
}

async function fetchForecast() {
  try {
    const responce = await fetch(forecastUrl);
    if (responce.ok) {
      const data = await responce.json();
      displayForecast(data.list);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg; F`;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let description = titleCase(data.weather[0].description);
  windSpeed = data.wind.speed;
  temperature = data.main.temp;
  windChillElement.innerHTML = calcWindchill(temperature, windSpeed);
  currentHumidity.textContent = data.main.humidity;
  currentIcon.setAttribute("src", icon);
  currentIcon.setAttribute("alt", description);
  captionDesc.textContent = `${description}`;
}

function displayForecast(data) {
  let date;
  let dayName;
  let forecast = [];
  let containerElement;
  let dayElement;
  let iconElement;
  let tempElement;
  let descriptionElement;

  for (let i = 4; i < 25; i += 8) {
    date = new Date(data[i].dt * 1000).toDateString().split(" ");
    // parts = date.toDateString().split(" ");
    dayName = date[0];

    containerElement = document.createElement("div");
    dayElement = document.createElement("h4");
    iconElement = document.createElement("img");
    tempElement = document.createElement("span");
    descriptionElement = document.createElement("span");

    dayElement.textContent = dayName;
    iconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${data[i].weather[0].icon}.png`
    );
    iconElement.setAttribute("alt", titleCase(data[i].weather[0].description));
    tempElement.innerHTML = `<br>${Math.round(data[i].main.temp)}&deg; F <br>`;
    descriptionElement.textContent = titleCase(data[i].weather[0].description);

    containerElement.appendChild(dayElement);
    containerElement.appendChild(iconElement);
    containerElement.appendChild(tempElement);
    containerElement.appendChild(descriptionElement);

    forcastElement.appendChild(containerElement);
  }
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

fetchWeather();
fetchForecast();
