import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstra
import '../styles/Home.css'
import { Gallery } from '../components/gallery';
export const Home = () => {
    return (
      <section className='Section'>
      
        <img src="ROMECO.png" className="imagen-pequena" ></img>

        <section className='coleccion' ><h2>NEW COLLECTION</h2></section>
        <section className="container" >
          <Gallery/>
        </section>
        <section className='Medio'>
          <h1>.</h1>
        </section>

        <div><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, adipisci rerum! Voluptates vel, neque quae repellat, sit aliquam iste asperiores porro, eligendi nobis enim corrupti! Atque inventore minima odit eaque.</h1></div>
      
      </section>
    );
};
