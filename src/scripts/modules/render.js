const renderWeather = (placeName, weatherData) => {
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

export default renderWeather;
