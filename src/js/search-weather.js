// Function Factory - SearchWeather
import fetchWeather from "../services/fetch-weather";

// Set the API response for current days and forecast days weather
const SearchWeather = (lat, long) => {
  async function getWeather() {
    try {
      const response = await fetchWeather(lat, long);
      this.responseAPI = await response;
      return this.responseAPI;
    } catch (error) {
      return error.message;
    }
  }
  return {
    getWeather,
  };
};

export default SearchWeather;
