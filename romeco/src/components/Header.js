import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS
import { Link } from 'react-router-dom';


function Header() {
  return (
    
    <header>
      <nav>
        <ul className='romeco'>
          <a href="/romeco" className='a'>ROMECO</a>
        </ul>
        <ul className='demas'>
          <li><Link to="/coleccion" className='a'>COLECCIÓN</Link></li>
          <li><Link to="/" className='a'>HOME</Link></li>
          <li><Link to="/infoyayuda" className='a'>INFO Y AYUDA</Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;