// crearUsuario.js
import React from 'react';
import RegistroUsuario from '../components/usuario/registroUsuario';

export const CrearUsuario = () => {
  const {
    nombre, setNombre,
    contrasena, setContrasena,
    mail, setMail,
    telefono, setTelefono,
    fechaNacimiento, setFechaNacimiento,
    handleRegistroSubmit
  } = RegistroUsuario(); //hook

    //formulario
  return (
    <form onSubmit={handleRegistroSubmit}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>


      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
      <input type="email" value={mail} onChange={e => setMail(e.target.value)} placeholder="Correo electrónico" />
      <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono" />
      <input type="date" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} placeholder="Fecha de nacimiento" />
      <button type="submit">Registrarse</button>
    </form>
  );
};