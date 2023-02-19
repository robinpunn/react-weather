import { DateTime } from "luxon";

/*make call to api*/
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: import.meta.env.VITE_API_KEY,
  });

  return fetch(url).then((res) => res.json());
};

/*get information from current weather data api*/
const formatCurrentWeather = (data) => {
  /*general information*/
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    // dt,
    // sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  /*details, icon*/
  const { main: details, icon } = weather[0];
  // console.log("current weather data:", data);
  /*return variable names*/
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    // dt,
    // country,
    // sunrise,
    // sunset,
    speed,
    details,
    icon,
  };
};

const formatForecastWeather = (data) => {
  let { list } = data;
  let newList = [];

  for (let i = 1; i < list.length; i += 8) {
    newList.push(list[i]);
  }

  newList = newList.map((d) => {
    return {
      title: formatLocalTime(d.dt, "ccc"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });
  // console.log("forecast data:", newList);
  return { newList };
};

/*input information from api calls and return*/
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  // const { lat, lon } = formattedCurrentWeather;

  /*use forecast api*/
  const formattedForecastWeather = await getWeatherData(
    "forecast",
    searchParams
  ).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

/*format time with luxon*/
const formatLocalTime = (
  secs,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).toFormat(format);
// with timezone
// const formatLocalTime = (
//   secs,
//   zone,
//   format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconURLFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatLocalTime, iconURLFromCode };
