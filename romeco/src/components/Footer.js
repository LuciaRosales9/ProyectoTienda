import React from 'react';
import "../styles/Footer.css"
export const Footer = () => {
  return (
    
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}

        {/* Section: Social media */}
      <section className="containerFooter">
        {/* Facebook */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#3b5998' }}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        {/* Twitter */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#55acee' }}
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>

        {/* Google */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#dd4b39' }}
          href="mailto:romecojewelry@gmail.com"
          role="button"
        >
          <i className="fas fa-envelope"></i>
        </a>

        {/* Instagram */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#ac2bac' }}
          href="https://www.instagram.com/romecojewelry/"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>
        {/* Ubicación */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#FFA500' }} // Puedes cambiar el color aquí
          href="https://www.google.com/maps/place/Sofia+-+Relojes+y+joyas/@-32.4104341,-63.2422523,20.29z/data=!4m6!3m5!1s0x95cc42e76ecdecbf:0x84617190026d9c28!8m2!3d-32.4105663!4d-63.2421938!16s%2Fg%2F11b5zvw3st?entry=ttu" // Reemplaza "TU_DIRECCION" con la dirección deseada
          target="_blank" // Esto abrirá la URL en una nueva pestaña,
          rel="noopener noreferrer"       
          role="button"
        >
          <i className="fas fa-map-marker-alt"></i> {/* Ícono de Ubicación */}
        </a>

        
      </section>
        {/* Section: Social media */}
      {/* Grid container */}

      {/* Copyright */}
      <section className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', width:"100%" }}>
        © 2024 Copyright:
        <a className="text-body" href="http://localhost:3000/">Romeco</a>
      </section>
      {/* Copyright */}
    </footer>
  );
}