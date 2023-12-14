const banner = document.getElementById("banner");

const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const currentIcon = document.getElementById("weather-icon");
const currentDesc = document.getElementById("description");

const forecastElement = document.getElementById("forecast");
const forecastIcon = document.getElementById("for-weather-icon");
const forecastDesc = document.getElementById("for-description");

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?appid=92ee7552adb4dec37560965f6191e3b0&units=imperial&lat=20.46&lon=-86.92";
const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=92ee7552adb4dec37560965f6191e3b0&units=imperial&lat=20.46&lon=-86.92";

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
  // Weather banner
  const bannerContents = document.createElement("div");
  bannerContents.innerHTML = `Todays High Temperature: ${Math.round(
    data.main.temp_max
  )}&deg; F`;
  banner.appendChild(bannerContents);

  // Main weather goodness
  if (temp != null) {
    temp.innerHTML = `${Math.round(data.main.temp)}&deg; F`;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = titleCase(data.weather[0].description);
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    currentIcon.setAttribute("src", icon);
    currentIcon.setAttribute("alt", description);
    currentDesc.textContent = `${description}`;
  }
}

function displayForecast(data) {
  let date = new Date();

  date.setDate(date.getDate() + 1);
  date.setUTCHours(15);
  date.setMinutes(0);
  date.setSeconds(0);

  const forecast = data.filter(
    (day) => day.dt == Math.floor(date.getTime() / 1000)
  );

  const icon = `https://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`;
  let description = titleCase(forecast[0].weather[0].description);

  forecastElement.innerHTML = `${Math.round(forecast[0].main.temp_max)}&deg; F`;
  forecastIcon.setAttribute("src", icon);
  forecastIcon.setAttribute("alt", description);
  forecastDesc.textContent = `${description}`;
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
if (forecastElement != null) {
  fetchForecast();
}
