import location from './location';
import weather from './weather';
import renderWeather from './render';
import photo from './photo';

const renderError = (error) => {
  const errorContainer = document.getElementById('error-msg');
  errorContainer.textContent = error;
};

const displayBackgroundImage = async (keyword) => {
  const data = await photo(keyword);
  // const body = document.querySelector('body');
  console.log(data);
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
      renderWeather(locData.features[0].place_name, weatherData);
      document.querySelector('.weather').classList.add('open');
      displayBackgroundImage(weatherData.weather[0].main);
    } catch (error) {
      renderError(error);
    }
    e.target.elements.locName.value = '';
  });
};

export default search;
