import axios from "axios";
import baseUrl from "../data";

/* AXIOS */

// FETCH LOCATION
const fetchLocation = async (lat, long) => {
  const response = await axios.get(
    `${baseUrl}/location?lat=${lat}&long=${long}`,
  );

  return response;
};

export default fetchLocation;
