import location from './location';
import weather from './weather';
import renderWeather from './render';

const search = () => {
  document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('loading').classList.add('play');
    const inputQuery = e.target.elements.locName.value.toLowerCase().trim().replace(' ', '');
    const locData = await location(inputQuery);
    const weatherData = await weather(locData.features[0].center[1], locData.features[0].center[0]);
    renderWeather(locData.features[0].place_name, weatherData);
    document.querySelector('.weather').classList.add('open');
    e.target.elements.locName.value = '';
  });
};

export default search;
