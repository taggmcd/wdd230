const forecast = document.getElementById("forecast");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentIcon = document.getElementById("weather-icon");
const captionDesc = document.getElementById("figcaption");
let windChillElement = document.getElementById("windchill");
let windSpeed = 0;

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
    return `${Math.floor(windChill)}&deg;F`;
  } else {
    return "N/A";
  }
}

async function fetchForecast() {
  try {
    const responce = await fetch(forecastUrl);
    if (responce.ok) {
      const data = await responce.json();
      console.log(data.list);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
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
