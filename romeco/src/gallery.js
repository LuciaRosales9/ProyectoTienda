// Gallery.js

import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery" style={galleryStyle}>
      <img src="https://ar.isadoraonline.com/media/catalog/product/4/8/48648201_0_1_20240312121351.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985" alt="Imagen 1" style={imageStyle} />
      <img src="https://ar.isadoraonline.com/media/catalog/product/4/8/48457301_0_1_20231128000340.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985" alt="Imagen 2" style={imageStyle} />
      <img src="imagen3.jpg" alt="Imagen 3" style={imageStyle} />
      {/* Agrega más imágenes según sea necesario */}
    </div>
  );
}

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: '10px',
  padding: '20px',
};

const imageStyle = {
  width: '60%',
  height: 'auto',
  borderRadius: '5px',
};

export default Gallery;
