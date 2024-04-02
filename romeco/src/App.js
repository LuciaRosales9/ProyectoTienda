//para boostrap:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Catalogo } from './pages/Catalogo';

import { Home } from './pages/Home';
import { About } from './pages/romeco';
import Footer from './components/Footer'
import { InfoYAyuda } from './pages/Contact';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <section>
        <Routes>
          <Route path="/coleccion" element={<Catalogo />} /> 
          <Route path="/romeco" element={<About />} />
          <Route path="/infoyayuda" element={<InfoYAyuda />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
              
      <Footer/>

    </Router>

  );
}

export default App;

