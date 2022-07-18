import axios from "axios";
import baseUrl from "../data";

/* AXIOS */

// GET WEATHER
const fetchWeather = async (lat, long) => {
  const response = await axios.get(
    `${baseUrl}/weather?lat=${lat}&long=${long}`,
  );
  return response;
};

export default fetchWeather;
