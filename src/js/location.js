import controlSearch from "./control-search";
import controlNameSearch from "./control-name";

// Display the User weather location if Geolocation allowed
const authorizedGeolocation = async (position) => {
  const { latitude, longitude } = position.coords;
  await controlSearch(latitude, longitude, "");
  await controlNameSearch(latitude, longitude);
};

// If User refuses Geolocation, display Paris weather location as Default Weather
const deniedLocation = () => {
  controlSearch(48.8546, 2.333333, "Paris");
};

const getGeolocation = async () => {
  if (navigator.geolocation) {
    // Browser must support Geolocation
    navigator.geolocation.getCurrentPosition(
      authorizedGeolocation,
      deniedLocation,
    );
  } else if (!navigator.geolocation) {
    // If no Geolocation Support from the Browser
    await controlSearch(48.8546, 2.333333, "Paris");
    throw Error("Browser doesn't support Geolocation.");
  }
};

export default getGeolocation;
