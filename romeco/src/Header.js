import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;