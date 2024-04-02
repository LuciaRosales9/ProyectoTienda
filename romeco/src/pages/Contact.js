import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstra
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Contact.css'
export const InfoYAyuda = () => {

    return (
      <section>
        <h1>PREGUNTAS FRECUENTES</h1>
       <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ¿Cómo se gestionan los envíos?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              ¿Cómo tomar la medida de mi dedo? 
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              ¿Qué medios de pagos tenemos?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
    </section>

      


      /*
      <div className='DivImagen'>
        <h2>Información y Ayuda</h2>
        <p>Preguntas frecuentes:</p>
          <p>¿Tienen local físico?</p>
          <p>Sí, nos encontramos en la calle Entre Ríos 111</p>
          <p>¿Cómo me contacto?</p>
          <p>Número de telefono: 03534111111</p>
          <p>Redes sociales: @romeco</p>
          <p>Gmail: romecojewelry@gmail.com</p>
          <p>¿Se aceptan devoluciones?</p>
          <p>Sí, pero desde que se hizo la compra hay margen de espera de 30 días para su devolución.</p>
    
        <div><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, adipisci rerum! Voluptates vel, neque quae repellat, sit aliquam iste asperiores porro, eligendi nobis enim corrupti! Atque inventore minima odit eaque.</h1></div>
        <div >
            <img className='Imagen' src="../public/images/Cocineros.webp" alt="Descripción de la imagen"></img>
        </div>
      </div>
    */
    );
  
  };
  