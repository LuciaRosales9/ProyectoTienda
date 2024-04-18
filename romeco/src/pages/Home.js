import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstra
import '../styles/Home.css'
import { Gallery } from '../components/gallery';
import { Carousel } from '../components/Carousel'

export const Home = () => {
    return (
      <section className='Section'>
      <Carousel/>
        <section className='coleccion' ><h2>NEW COLLECTION</h2></section>
        <section className="container" >
          <Gallery/>
        </section>
      </section>

    );
};
