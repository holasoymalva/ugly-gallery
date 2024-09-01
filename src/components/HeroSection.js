import React from 'react';
import ugly3 from '../assets/images/ugly-03.png';

const HeroSection = () => {
  return (
    <section style={heroStyle}>
      <div>
        <h1>Ugli illustration for your project</h1>
        <p>Take your project on a magical path and give your projects a rare and extravagant personality.</p>
        <div>
          <button style={buttonStylePrimary}>Gallery</button>
          <button style={buttonStyleSecondary}>Support</button>
        </div>
      </div>
      <img src={ugly3} alt="Illustration" style={imageStyle} />
    </section>
  );
};

const heroStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px'
};

const buttonStylePrimary = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  marginRight: '10px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px'
};

const buttonStyleSecondary = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px',
  border: '1px solid black',
  cursor: 'pointer',
  borderRadius: '5px'
};

const imageStyle = {
  maxWidth: '300px',
  height: 'auto'
};

export default HeroSection;