import React from 'react';

export const ImageComponent = ({ activePanelImage }) => {
  return (
    <img
      id="animatePanel"
      initial={{ height: '16rem', opacity: 0.5 }}
      src={activePanelImage}
    />
  );
};
