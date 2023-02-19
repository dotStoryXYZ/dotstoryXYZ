import React from 'react';
import dotStoryTitle from '../assets/dotStory-title.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <img src={dotStoryTitle} alt="dotStory" />
      <hr />
    </header>
  );
};
