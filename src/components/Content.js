import React from 'react';

export const Content = ({ image }) => {
  return (
    <div className="app__content">
      <div className="app__content__description">
        <h3>Come experience</h3>
        <p>The new way of Storytelling</p>
      </div>
      <button>Launch App</button>
      <img id="animatePanel" src={image} />
    </div>
  );
};
