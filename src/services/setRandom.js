const setRandom = () => {
  //create an array of 10 popular cities for accross the world
  const cities = [
    "London",
    "Sydney",
    "Paris",
    "Moscow",
    "Tokyo",
    "Berlin",
    "Toronto",
    "Rome",
    "Madrid",
    "Delhi",
  ];

  //random number between 0 and 9
  const random = Math.floor(Math.random() * 10);

  //random city
  const city = cities[random];

  return city;
};

export default setRandom;
