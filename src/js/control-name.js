/* - Control the Name Search process
   - When City Search is used, we use the input's name as city's name
   - So this controlNameSearch Function is only called after the
     Geolocation Process (if accepted). It uses the Google Map reverse
     Geocoding API to get the city name from the latitude and longitude
     of the User's Browser. */

import SearchLocationName from "./search-location-name";

const state = {}; // Object where the application state will be stored
const controlNameSearch = async (latitude, longitude) => {
  // eslint-disable-next-line max-len
  state.locationNameSearch = SearchLocationName(latitude, longitude); // Google Reverse Geocoding API Call
  try {
    await state.locationNameSearch.getName();
    const resultsArray = await state.locationNameSearch.responseAPI.data
      .results;
    let locationName;
    // eslint-disable-next-line no-restricted-syntax
    for (const element of resultsArray) {
      if (element.types.includes("locality")) {
        locationName = element.address_components[0].short_name; // Get the User's Browser city name
        break;
      }
    }
    const locationNameDOM = document.querySelector("#current-location");
    locationNameDOM.textContent = await locationName;
    return locationName;
  } catch (error) {
    // Add an error text and an animation
    const locationNameDOM = document.querySelector("#current-location");
    if (locationNameDOM) {
      locationNameDOM.textContent = "Your Location";
    }
    return error;
  }
};

export default controlNameSearch;
