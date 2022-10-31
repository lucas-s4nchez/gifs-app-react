import fetch from "cross-fetch";

export const getGifs = async (searchValue) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=qK5imOVAHjqsxy644yEJlXQGOYiNk4Vv&q=${searchValue}&limit=20&offset=0&rating=g&lang=es`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    image: gif.images.downsized_medium.url,
  }));
  return gifs;
};
