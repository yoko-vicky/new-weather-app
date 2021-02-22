const appId = process.env.WEATHER_APP_ID;
const weather = async (latitude, longtitude) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&units=imperial&appid=${appId}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Unable to fetch the weather data');
};

export default weather;
