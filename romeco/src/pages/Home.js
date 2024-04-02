import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstra
import './Home.css'
export const Home = () => {
  return (
    <section className='Section'>
    
      <img src="ROMECO.png" className="imagen-pequena" ></img>

      <section className='coleccion' ><h2>NEW COLLECTION</h2></section>
      <section className="container" >
        <img className="imagen" src='joyas_en_oro_y_plata_dorada.webp'></img>
        <img className="imagen" src='joyas_en_oro_y_plata_dorada.webp'></img>
        <img className="imagen" src='joyas_en_oro_y_plata_dorada.webp'></img>
        <img className="imagen" src='joyas_en_oro_y_plata_dorada.webp'></img>
      </section>

      <div><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, adipisci rerum! Voluptates vel, neque quae repellat, sit aliquam iste asperiores porro, eligendi nobis enim corrupti! Atque inventore minima odit eaque.</h1></div>
     
    </section>
  );
};
