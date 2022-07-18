// Convert Unix Time Stamp to date
const getCurrentDate = (unixTimeStamp) => {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(unixTimeStamp * 1000);
  return `${monthsArray[date.getMonth()]}-${date.getDate()}`;
};

// Convert Kelvins Stamp to Degrees
const kelvinToDegrees = (kelvins) => Math.round(kelvins - 273.15);

export { getCurrentDate, kelvinToDegrees };
