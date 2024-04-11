import '../styles/InfoYAyuda.css'
import React, { useState } from 'react'; //para que el estado showImage funcione
export const InfoYAyuda = () => {

  //para mostrar imagen de talles cuando se abre el primer acordion
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <section>
      <section className='TitlesInfoYAyuda' ><h2>PREGUNTAS FRECUENTES</h2></section>


    <section class="accordion" id="accordionExample">
  
    <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={toggleImage} /* Este es el evento onClick de React que asigna la función toggleImage para que se ejecute cuando se haga clic en el botón. Cuando el botón se haga clic, la función toggleImage cambiará el estado de showImage, lo que afectará si la imagen se muestra o no. */>
        ¿Cómo saber la medida de mi dedo para pedir mis anillos ?
      </button>
    </h2>
    <section id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
      Sólo necesitaremos una cinta métrica y nuestro dedo. 
      Coge la cinta métrica y mide la circunferencia de tu 
      dedo donde llevarás el anillo. Si no tienes cinta métrica, 
      puedes hacerlo con una cuerda y luego anotarlo en un folio y 
      medirlo con una regla y te daría los cm exactos.
      <br></br>Cuando ya tenemos clara la medida, vamos a nuestra guía de 
      tallas que os enseñamos aqui abajo y comprueba la equivalencia de 
      la medida con el número de talla.
      <br></br>
  
      </section>
    </section>
  </section>
  <section className="imagen-container" style={{ display: showImage ? 'block' : 'none' }}>
    <img src="img_tablaTalles.png" className="imagenTalles" alt="Tabla de tallas de anillos" />
  </section>
    
  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      ¿Qué formas de pago puedo aprovechar para realizar mi compra?
      </button>
    </h2>
    <section id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
        Disponemos de los siguientes medios de pago:
        //INSERTAR FOTOS
      </section>
    </section>
  </section>

  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ¿Dónde puedo recibir mi pedido?
      </button>
    </h2>
    <section id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
      Realizamos envíos a todo el país.
      </section>
    </section>
  </section>

  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      ¿Cuánto tarda en llegar el pedido?
      </button>
    </h2>
    <section id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
      El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra entre 
      3 y 7 días hábiles luego de acreditado el pago.
      </section>
    </section>
  </section>

  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      ¿Cuál es el plazo para realizar un cambio?
      </button>
    </h2>
    <section id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
      Puedes solicitar un cambio hasta 15 días luego de realizada la compra.
      </section>
    </section>
  </section>

  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      ¿Qué debo hacer si el producto no llega en buen estado?
      </button>
    </h2>
    <section id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
      Ponte en contacto con nosotros mediante nuestro correo romecojewelry@gmail.com y te enviaremos uno nuevo.
      </section>
    </section>
  </section>

  <section class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      ¿Cómo recibiré mi joya?
      </button>
    </h2>
    <section id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <section class="accordion-body">
        Todas nuestras joyas se entregan en estuches de joyería a 
        medida para cada tipo. Si tu joya tiene diamantes de más de 0.03 ct 
        también recibirás nuestro certificado oficial de diamantes. 
        Esta tarjeta garantiza que estos diamantes cumplen el Proceso Kimberley, 
        así como el número de diamantes, la talla, el quilataje, el color y la 
        pureza de los mismos. Para los anillos de la colección ROMECO, fabricados bajo pedido, 
      cada alianza se entrega con su propio certificado.</section>
    </section>
  </section>

  </section>
    
  <section className='TitlesInfoYAyuda' ><h2>¿CÓMO COMPRAR?</h2></section>


  <section id="carouselExampleCaptions" className="carousel">
  <section class="carousel-indicators">

    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </section>
  <section class="carousel-inner">
    <section class="carousel-item active">
      <img src="img_tablaTalles.png" class="d-block w-100" alt="..."></img>
      <section class="carousel-caption d-none d-md-block">
        <h5>Primer paso</h5>
        <p>Vé a la sección "Catálogo" y Selecciona todos las joyas que deseas agregar a tu compra (agregar al carrito de compras)</p>
      </section>
    </section>

    <section class="carousel-item">
      <img src="img_tablaTalles.png" class="d-block w-100" alt="..."></img>
      <section class="carousel-caption d-none d-md-block">
        <h5>Segundo paso</h5>
        <p>Ir al carrito de compras, una vez que alcances el monto mínimo, vas a poder seleccionar la opción COMPRAR.</p>
      </section>
    </section>

    <section class="carousel-item">
      <img src="img_tablaTalles.png" class="d-block w-100" alt="..."></img>
      <section class="carousel-caption d-none d-md-block">
        <h5>Tercer paso</h5>
        <p>Indicar metodo de pago, método de envío y dirección de envío (lo mas exacta posible).</p>
      </section>
    </section>

    <section class="carousel-item">
      <img src="img_tablaTalles.png" class="d-block w-100" alt="..."></img>
      <section class="carousel-caption d-none d-md-block">
        <h5>Cuarto paso</h5>
        <p>Indicar metodo de pago, método de envío y dirección de envío (lo mas exacta posible).</p>
      </section>
    </section>
  </section>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</section>
  </section>

  );
  
};
  