import React from 'react';

// Importar todas las imágenes automáticamente usando require.context
const importAllImages = (r) => {
  return r.keys().map(r);
};

const images = importAllImages(require.context('../assets/images', false, /ugly-\d+\.png$/));

const GallerySection = () => {
  return (
    <section style={galleryStyle}>
      <h2>The beautiful things are the simplest</h2>
      <p>In an era saturated with colors and flat lines, we return to the origins, to human imperfections and hand-made work.</p>
      <div style={imageGridStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageWrapperStyle}>
            <img src={image} alt={`Gallery item ${index + 1}`} style={galleryImageStyle} />
          </div>
        ))}
      </div>
    </section>
  );
};

const galleryStyle = {
  textAlign: 'center',
  padding: '50px 20px'
};

const imageGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginTop: '30px'
};

const imageWrapperStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const galleryImageStyle = {
  width: '100%',
  height: 'auto'
};

export default GallerySection;