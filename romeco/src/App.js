// App.js

import React from 'react';
import Home from './home';
import Navbar from './NavBar'; // Importamos el componente Navbar
import Gallery from './gallery'; // Importamos el componente Navbar
const App = () => {
  return (
    <div>
      <Navbar /> {/* Renderizamos el componente Navbar */}
      <div className="container" id="inicio">
        <Home />
        <Gallery />
        {/* Aquí puedes agregar el resto de tu contenido */}
      </div>
    </div>
  );
}
export default App;


