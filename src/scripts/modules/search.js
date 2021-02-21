import location from './location';
import weather from './weather';
import renderWeather from './render';

const search = () => {
  document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const keyword = await e.target.elements.locName.value.toLowerCase();
    const locData = await location(keyword);
    const weatherData = await weather(locData.features[0].center[1], locData.features[0].center[0]);
    renderWeather(locData.features[0].place_name, weatherData);
    document.querySelector('.weather').classList.add('open');
    e.target.elements.locName.value = '';
  });
};

export default search;
