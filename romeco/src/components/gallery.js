import '../styles/Gallery.css'
import React from 'react';

export const Gallery = () => {
  
  return (
    <section className="container">

      <hr className="mt-2 mb-5" />
      
      <section className="row text-center text-lg-start">
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/anillos/anillo1.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/anillos/anillo2.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/anillos/anillo3.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/collares/collar1.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/collares/collar2.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/collares/collar3.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" style={{width:'100%'}} src="/images/aros/arito1.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/aros/arito2.jpg" alt="" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#C3B6DD" }}>
          <a href="/categoria" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src="/images/aros/arito3.jpg" alt="" />
          </a>
        </div>
      </section>
    </section>
  );
  
};