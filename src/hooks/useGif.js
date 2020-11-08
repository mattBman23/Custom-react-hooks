import Axios from 'axios';
import { useEffect, useState } from 'react';

// get your own api key from giphy
const API_KEY = process.env.GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState('');

  const fetchGif = async (tag) => {
    const { data } = await Axios.get(tag ? `${url}&tag=${tag}` : url);

    const gifSrc = data.data.images.downsized_large.url;

    setGif(gifSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  return { gif, fetchGif };
};
