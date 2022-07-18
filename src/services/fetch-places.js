import axios from "axios";
import baseUrl from "../data";

/* AXIOS */

// FETCH PLACES
const fetchPlaces = async () => {
  const response = await axios.get(`${baseUrl}/places`);

  return response;
};

export default fetchPlaces;
