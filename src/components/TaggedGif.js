import React, { useState } from 'react';
import { useGif } from '../hooks/useGif';

export const TaggedGif = () => {
  const [tag, setTag] = useState('owl');
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <input onChange={(e) => setTag(e.target.value)} />
      <br />
      <button onClick={() => fetchGif(tag)}>New</button>
    </div>
  );
};
