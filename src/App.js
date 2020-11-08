import './App.css';
import React from 'react';
import { RandomGif } from './components/RandomGif';
import { TaggedGif } from './components/TaggedGif';

export const App = () => {
  return (
    <div>
      <h1>Gifs using react hooks</h1>
      <div className="main-container">
        <RandomGif />
        <TaggedGif />
      </div>
    </div>
  );
};
