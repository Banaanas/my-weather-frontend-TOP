// baseUrl for API Calls

let baseUrl;

// PRODUCTION / DEVELOPMENT MODES
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://my-weather.cyrilo.app/api";
} else {
  baseUrl = "http://localhost:3004/api";
}

export default baseUrl;
