const perPage = 50;
const defaultImagePath = 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';
const photo = async (keyword) => {
  keyword = keyword.toLowerCase();
  const response = await fetch(`https://api.pexels.com/v1/search?per_page=${perPage}&query=${keyword}%20sky`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.PEXELS_API_KEY,
    },
  });

  const data = await response.json();
  if (data.total_results > 0) {
    const i = Math.floor(Math.random() * (perPage - 1));
    return data.photos[i].src.landscape;
  }
  return defaultImagePath;

};

export default photo;
