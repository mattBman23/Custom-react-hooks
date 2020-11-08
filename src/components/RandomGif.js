import React from 'react';
import { useGif } from '../hooks/useGif';

export const RandomGif = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <br />
      <button onClick={fetchGif}>New</button>
    </div>
  );
};
