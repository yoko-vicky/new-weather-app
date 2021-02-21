import '../scss/main.scss';
// import header from './mymodules/header';

const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
const appId = process.env.WEATHER_APP_ID;

const location = async (location) => {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${accessToken}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Unalble to fetch the location data');
};

const weather = async (latitude, longtitude) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${appId}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Unable to fetch the weather data');
};

const renderForecast = (placeName, weatherData) => {
  const container = document.getElementById('result');
  const kToC = 273.15;
  const temp = Math.round(weatherData.main.temp - kToC);
  const { humidity } = weatherData.main;
  const weather = weatherData.weather[0].main;
  const { description } = weatherData.weather[0];
  const { icon } = weatherData.weather[0];
  const iconImgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  container.innerHTML = `
  <div class="weather__place">${placeName}</div>
  <div class="weather__title">${weather}</div>
  <img src="${iconImgSrc}" alt="${weather}" class="weather__image">
  <div class="weather__desc">${description}</div>
  <p class="weather__text">It is currently <span>${temp}</span>&#8451;. Humidity is <span>${humidity}</span>%.</p>`;
};

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const keyword = await e.target.elements.locName.value.toLowerCase();
  const locData = await location(keyword);
  const weatherData = await weather(locData.features[0].center[1], locData.features[0].center[0]);
  renderForecast(locData.features[0].place_name, weatherData);
  document.querySelector('.weather').classList.add('open');
  e.target.elements.locName.value = '';
});
