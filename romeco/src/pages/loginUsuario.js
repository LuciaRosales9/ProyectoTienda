import React from 'react';
import IniciarSesion from '../components/usuario/iniciarSesion';

export const LoginUsuario = () => {
    const {
        mail, setMail,
        contrasena, setContrasena,
        manejarEnvioFormulario
      } = IniciarSesion(); //hook


      return (
        <form onSubmit={manejarEnvioFormulario}>
            <input type="email" value={mail} onChange={e => setMail(e.target.value)} placeholder="Correo electrónico" />
          <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
          <button type="submit">Iniciar Sesión</button>
        </form>
      );

};