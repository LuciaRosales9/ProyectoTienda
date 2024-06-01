//para boostrap:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/App.css';
import React from 'react';

import { Catalogo } from './pages/Catalogo';
import { Home } from './pages/Home';
import { AboutUs } from './pages/romeco';
import { Footer } from './components/Footer'
import { InfoYAyuda } from './pages/InfoYAyuda';
import Header from './components/Header';
import { CrearUsuario} from './pages/crearUsuario';
import { LoginUsuario} from './pages/loginUsuario';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <section>
        <Routes>
          <Route path="/catalogo" element={<Catalogo />} /> 
          <Route path="/romeco" element={<AboutUs />} />
          <Route path="/infoyayuda" element={<InfoYAyuda />} />
          <Route path="/" element={<Home />} />
          <Route path="/CrearUsuario" element={<CrearUsuario />} />
          <Route path="/LoginUsuario" element={<LoginUsuario />} />
        </Routes>
      </section>
              
      <Footer/>

    </Router>

  );
}

export default App;

