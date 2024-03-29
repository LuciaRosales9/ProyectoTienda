// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyle}>
        <img src="https://th.bing.com/th/id/OIG3.u4bFsMWNwbmOomjAVSN_?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Imagen" style={imageStyle}/>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="#inicio" style={aStyle}>Inicio</a></li>
        <li style={liStyle}><a href="#" style={aStyle}>Acerca de</a></li>
        <li style={liStyle}><a href="#" style={aStyle}>Servicios</a></li>
        <li style={liStyle}><a href="#" style={aStyle}>Contacto</a></li>
      </ul>
    </nav>
  );
}

const imageStyle = {
    width: '3%',
    height: 'auto',
    borderRadius: '100%',
    margin: '0 20px'
  };

  
const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const liStyle = {
    margin: '0 10px',
  };

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};



const aStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: 'auto', // Mueve el texto hacia la derecha
  padding: '10px 20px', // Ajusta el espaciado horizontal según sea necesario
  textAlign: 'center',
};

export default Navbar;
