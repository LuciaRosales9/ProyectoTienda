import React, { useState } from 'react';

function IniciarSesion() {
  
    // Definimos los estados para los campos del formulario
    const [mail, setMail] = useState('');
    const [contrasena, setContrasena] = useState('');
  
    // Función para manejar el envío del formulario
    const manejarEnvioFormulario = (event) => {
      event.preventDefault(); // Previene la acción por defecto del formulario
  
      // Creamos un objeto con los datos del usuario
      const datosLogin = {
        mail: mail,
        contrasena: contrasena,
      };
  
      // Enviamos una solicitud POST al backend con los datos del usuario
      fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST', // Método de la solicitud
        headers: {
          'Content-Type': 'application/json' // Tipo de contenido de la solicitud
        },
        body: JSON.stringify(datosLogin) // Convertimos el objeto a formato JSON
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Hubo un problema al iniciar sesión.'); // Manejamos errores de la solicitud
          }
          return response.json(); // Parseamos la respuesta JSON
        })
        .then(data => {
          console.log('Sesión iniciada:', data); // Imprimimos los datos del usuario creado en la consola
          // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
          window.location.href = '/'; // Cambia '/dashboard' por la ruta de la página a la que quieres redirigir
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error); // Manejamos errores
          // Aquí podrías mostrar un mensaje de error al usuario
        });
    };
  
    return {
        mail, setMail,
      contrasena, setContrasena,
      manejarEnvioFormulario
    };
  
  }
  
  export default IniciarSesion;