// crearUsuario.js
import React from 'react';
import RegistroUsuario from '../components/usuario/registroUsuario';

export const CrearUsuario = () => {
  return (
    <div>
      <h1>Bienvenido a nuestra aplicación</h1>
      <p>Por favor, regístrate para comenzar:</p>
      <RegistroUsuario />
    </div>
  );
};
