const getWeatherData = (infoType, searchParams) => {
  const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: import.meta.env.VITE_API_KEY,
  });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
