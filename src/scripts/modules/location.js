const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
const location = async (location) => {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${accessToken}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Unalble to fetch the location data');
};

export default location;
