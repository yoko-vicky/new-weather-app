import location from './location';
import weather from './weather';
import renderWeather from './render';
import photo from './photo';

const renderError = () => {
  const errorContainer = document.getElementById('error-msg');
  errorContainer.textContent = 'Sorry... The city was not found.';
};

const displayBackgroundImage = async (keyword) => {
  const photoPath = await photo(keyword);
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${photoPath})`;
};

const search = () => {
  document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('loading').classList.add('play');
    const inputQuery = e.target.elements.locName.value.toLowerCase().trim().replace(' ', '');
    try {
      const locData = await location(inputQuery);
      // eslint-disable-next-line max-len
      const weatherData = await weather(locData.features[0].center[1], locData.features[0].center[0]);
      document.getElementById('error-msg').innerHTML = '';
      renderWeather(locData.features[0].place_name, weatherData, e.target.elements.tempUnit.value);
      document.querySelector('.weather').classList.add('open');
      displayBackgroundImage(weatherData.weather[0].main);
    } catch (error) {
      renderError();
      document.getElementById('loading').classList.remove('play');
      document.getElementById('result').innerHTML = '';
    }
    e.target.elements.locName.value = '';
  });
};

export default search;
