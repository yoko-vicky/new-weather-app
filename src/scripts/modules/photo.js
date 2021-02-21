const photo = async (keyword) => {
  keyword = keyword.toLowerCase();
  const response = await fetch(`https://api.pexels.com/v1/search?per_page=1&query=${keyword}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.PEXELS_API_KEY,
    },
  });

  const data = await response.json();
  return data.photos[0];
};

export default photo;
