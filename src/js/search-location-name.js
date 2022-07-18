import fetchLocation from "../services/fetch-location";

/* - When City Search is used, we use the input's name as city's name
   - So this controlNameSearch Function is only called after the
     Geolocation Process (if accepted). It uses the Google Map reverse
     Geocoding API to get the city name from the latitude and longitude
     of the User's Browser. */

const SearchLocationName = (lat, long) => {
  async function getName() {
    try {
      const response = fetchLocation(lat, long);
      this.responseAPI = await response;
      return this.responseAPI;
    } catch (error) {
      const problemAPI = Error("Problem with Reverse Geocoding API.");
      // eslint-disable-next-line no-console
      console.log(problemAPI);
      return Error;
    }
  }

  return {
    getName,
  };
};

export default SearchLocationName;
