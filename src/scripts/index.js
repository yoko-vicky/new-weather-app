import '../scss/main.scss';
// import header from './mymodules/header';

const accessToken = 'pk.eyJ1IjoieW9jb29ubyIsImEiOiJjazhtYXVrcGgwbHNjM2VwaDFvdjZncmZnIn0.8qVE_QjxtBJmTEAhwkBbIg';
const appId = 'e59acf44e4a058aded4a5d6e10b4b052';

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

// const renderForecast = (placeName, weatherData) => {
//   const container = document.querySelector('.weather__container');

//   // container.appendChild()
// }

// const kToC = 273.15;
// const tempNow = Math.round(body.main.temp - kToC);
// const humidity = body.main.humidity;
// const weather = body.weather[0].main;
// const description = body.weather[0].description;
// const icon = body.weather[0].icon;
// const iconImgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
// callback(
//   undefined,
//   `
//   <div class="results__title">${description}</div>
//   <img src="${iconImgSrc}" class="results__icon">
//   <p>Today's weather is <span class="lowercase">${weather}</span>.</p>
//   <p>It is currently ${tempNow} degrees celsius.</p>
//   <p>Humidity is ${humidity}%.</p>
// `
// );


const locationData = async () => {
  try {
    const locData = await location('tokyo');
    const weatherData = await weather(locData.features[0].center[1], locData.features[0].center[0]);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
};
locationData();
