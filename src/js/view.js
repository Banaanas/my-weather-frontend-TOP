import elements from "./DOM-elements";
import { getCurrentDate, kelvinToDegrees } from "./conversionCalculs";
import iconLoading from "../images/loader.svg";

// Remove the Current Day Weather from the DOM
const removeCurrentWeather = () => {
  // Must be declared here, because it's a dynamic DIV
  const weatherLocation = document.querySelector("#current-location");
  if (weatherLocation) {
    weatherLocation.remove();
  }
  elements.currentWeatherContainer.innerHTML = "";
};

// Remove the 5 Forecast Days Weather from the DOM
const removeForecastDays = () => {
  elements.forecastWeather.innerHTML = "";
};

// Render the current day weather
const renderCurrentWeather = (
  currentWeather,
  forecastWeather,
  locationName,
) => {
  removeCurrentWeather();
  elements.main.insertAdjacentHTML(
    "beforebegin",
    `
<div id="current-location">${locationName}</div>`,
  );
  elements.currentWeatherContainer.insertAdjacentHTML(
    "afterbegin",
    `
        <div id="date-and-minmax-container">
            <div id="minmax-temperatures">
                <span id="maximum">${kelvinToDegrees(
                  forecastWeather[0].temp.max,
                )}°C</span> / <span id="minimum">${kelvinToDegrees(
      forecastWeather[0].temp.min,
    )}°C</span>
            </div>
            <div id="current-date">${getCurrentDate(currentWeather.dt)}</div>
        </div>
        <div id="image-container">
            <div id="current-day-image"><i class="wi wi-owm-${
              currentWeather.weather[0].id
            }"></i></div>
        </div>
        <div id="current-details">
            <div id="current-temperature">${kelvinToDegrees(
              currentWeather.temp,
            )}°C</div>
            <div id="current-description">${
              currentWeather.weather[0].description
            }</div>
        </div>
  `,
  );
};

// Render the 5 forecast days weather
const renderForecastDays = (forecastDays) => {
  removeForecastDays();
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  forecastDays.forEach((item, index) => {
    if (index === 0 || index > 5) return;
    const date = new Date(item.dt * 1000);
    const forecastDay = daysArray[date.getDay()];
    const forecastDate = date.getDate();
    const tempForecastDay = item.temp.day;
    const imageForecastDay = item.weather[0].id;
    elements.forecastWeather.insertAdjacentHTML(
      "beforeend",
      `<div class="forecast-days">
           <div class="forecast-date">${forecastDay} ${forecastDate}</div>
           <div class="forecast-icon"><i class="wi forecast-days-icon wi-owm-${imageForecastDay}"></i></div>
           <div class="forecast-temperature">${kelvinToDegrees(
             tempForecastDay,
           )}°C</div></div>`,
    );
  });
};

// Set the loading icon before weather gets displayed
const renderLoader = () => {
  const loader = `
    <div id="loader-container">
        <img src="${iconLoading}">
    </div>
    `;
  elements.currentWeatherContainer.insertAdjacentHTML("afterbegin", loader);
};

// Remove the loading icon when weather gets displayed
const clearLoader = () => {
  const loader = document.querySelector("#loader-container");
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};

export {
  renderCurrentWeather,
  renderForecastDays,
  removeCurrentWeather,
  removeForecastDays,
  renderLoader,
  clearLoader,
};
