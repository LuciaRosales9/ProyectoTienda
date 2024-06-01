import React, { useState } from 'react';

function RegistroUsuario() {
  


  // Definimos los estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mail, setMail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  // Función para manejar el envío del formulario
  const handleRegistroSubmit = (event) => {
    event.preventDefault(); // Previene la acción por defecto del formulario

    // Creamos un objeto con los datos del usuario
    const datosUsuario = {
      nombre: nombre,
      contrasena: contrasena,
      mail: mail,
      telefono: telefono,
      fechaNacimiento: fechaNacimiento
    };

    // Enviamos una solicitud POST al backend con los datos del usuario
    fetch('http://127.0.0.1:8000/api/crear_usuario/', {
      method: 'POST', // Método de la solicitud
      headers: {
        'Content-Type': 'application/json' // Tipo de contenido de la solicitud
      },
      body: JSON.stringify(datosUsuario) // Convertimos el objeto a formato JSON
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema al crear el usuario.'); // Manejamos errores de la solicitud
        }
        return response.json(); // Parseamos la respuesta JSON
      })
      .then(data => {
        console.log('Usuario creado:', data); // Imprimimos los datos del usuario creado en la consola
        // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error('Error al crear usuario:', error); // Manejamos errores
        // Aquí podrías mostrar un mensaje de error al usuario
      });
  };

  return {
    nombre, setNombre,
    contrasena, setContrasena,
    mail, setMail,
    telefono, setTelefono,
    fechaNacimiento, setFechaNacimiento,
    handleRegistroSubmit
  };

}

export default RegistroUsuario;
