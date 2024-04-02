// Novedades.js

import React from 'react';

const Novedades = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/));

  return (
    <div className="novedades-container">
      <h1>Novedades</h1>
      <div className="novedades-gallery">
        {images.map((image, index) => (
          <img key={index} src={image.default} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Novedades;
