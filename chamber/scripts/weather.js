const currentTemp = document.getElementById("current-temp");
const currentIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?appid=92ee7552adb4dec37560965f6191e3b0&units=imperial&lat=49.75&lon=6.64";

async function fetchApi() {
  try {
    const responce = await fetch(url);
    if (responce.ok) {
      const data = await responce.json();
      //   console.log(data.main.temp);
      //   console.log(data);
      displayResults(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let description = titleCase(data.weather[0].description);
  currentIcon.setAttribute("src", icon);
  currentIcon.setAttribute("alt", description);
  captionDesc.textContent = `${description}`;
}

fetchApi();
