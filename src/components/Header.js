import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Ugly.gallery</div>
      <nav>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#support" style={linkStyle}>Support</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  alignItems: 'center'
};

const logoStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  fontFamily: 'Beth Ellen',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'black'
};

export default Header;