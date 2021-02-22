const renderWeather = (placeName, weatherData, tempUnit) => {
  document.getElementById('loading').classList.remove('play');
  const container = document.getElementById('result');
  // eslint-disable-next-line no-mixed-operators
  const faToCe = Math.round((weatherData.main.temp - 32) * 5 / 9);
  const unit = tempUnit === 'ce' ? '&#8451;' : '&#8457;';
  const temp = tempUnit === 'ce' ? faToCe : Math.round(weatherData.main.temp);
  const { humidity } = weatherData.main;
  const weather = weatherData.weather[0].main;
  const { description } = weatherData.weather[0];
  const { icon } = weatherData.weather[0];
  const iconImgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  container.innerHTML = `
  <div class="weather__place">${placeName}</div>
  <div class="weather__title">It's ${description}</div>
  <img src="${iconImgSrc}" alt="${weather}" class="weather__image">
  <p class="weather__text">It is currently <span>${temp}</span>${unit}. Humidity is <span>${humidity}</span>%.</p>`;
};

export default renderWeather;
