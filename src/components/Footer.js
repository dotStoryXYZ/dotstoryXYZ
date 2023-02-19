import React from 'react';

import coolCats from '../assets/cool-cats.svg';
import twitter from '../assets/twitter.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>Built By</p>
      </div>
      <div className="footer__social">
        <a href="https://www.coolcatsmap.xyz" target="_blank" rel="noreferrer">
          <img src={coolCats} alt="CoolCats Map" title="CoolCats Map by Nobu" />
        </a>
        <a
          href="https://twitter.com/StoriesByNobu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="dotStory by Nobu" title="dotStory by Nobu" />
        </a>
      </div>
    </footer>
  );
};
