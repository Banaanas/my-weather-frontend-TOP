import SearchWeather from "./search-weather";
import {
  removeCurrentWeather,
  removeForecastDays,
  renderCurrentWeather,
  renderForecastDays,
  renderLoader,
} from "./view";
import elements from "./DOM-elements";
import errorIcon from "../images/error.svg";

const state = {}; // Object where the application state will be stored

// Control the Search Weather process
const controlSearch = async (
  latitude,
  longitude,
  locationName = "Your Location",
) => {
  const isLoaderPresent = await document.querySelector("#loader-container");
  if (!isLoaderPresent) {
    removeForecastDays();
    removeCurrentWeather();
    renderLoader();
  } // Render loader if there is not one yet
  // Create the weatherSearch object inside state object
  state.weatherSearch = SearchWeather(latitude, longitude);
  try {
    await state.weatherSearch.getWeather(); // OpenWeatherMap API Call

    const currentWeather = state.weatherSearch.responseAPI.data.current;
    const forecastWeather = state.weatherSearch.responseAPI.data.daily;
    renderCurrentWeather(currentWeather, forecastWeather, locationName);
    renderForecastDays(forecastWeather);
  } catch (error) {
    console.log(error);
    // Add an error text and an animation
    removeCurrentWeather();
    removeForecastDays();
    elements.currentWeatherContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <img id="error-icon" src="${errorIcon}" alt="Error Icon">
        <p>Something went wrong. Please, try again.</p>`,
    );
  }
};

export default controlSearch;
