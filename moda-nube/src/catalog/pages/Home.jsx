import { useState, useEffect } from 'react';
import './Home.css';
import collection from '../../assets/images/colletion.png'
import casual from '../../assets/images/casual.png';
import accesorios from '../../assets/images/accesorios.jpg';
import sueter from '../../assets/images/sueter.jpg';
import mujer from '../../assets/images/mujer.jpg';

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = [casual, mujer, accesorios, sueter];

  useEffect(() => {
    // Cambiar automáticamente la imagen cada 5 segundos
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(timer); // Limpiar el temporizador al desmontar el componente
  }, [galleryImages.length]);

  return (
    <div className="home-container padding-sm">
      <h1 className="catalogue-title">CATÁLOGO</h1>
      <div className="images-container container-fluid">
        <img className="casual-image img-fluid" src={galleryImages[currentImageIndex]} alt="Imagen" />
      </div>
      <div className="content-container blur-effect">
        <div className='blurry-background'></div>
        <h1 className="home-title">¡Bienvenido a nuestro Catálogo virtual!</h1>
        <h5 className="home-paragraph">
          Sumérgete en la Ola Coreana y luce como toda una estrella del K-Pop<br/>que presenta las últimas tendencias en moda, como tops, pantalones harén y más.<br/>Nuestras marcas de moda coreana para mujer están inspiradas en un sinfín de estilos<br/> que van desde el clásico, de diseñador, street fashion y tradicional hanbok para crear<br/> prendas versátiles con diseños elegantes, femeninos, urbanos o deportivos.<br/>ModaNube es el lugar idóneo para comprar moda coreana online si lo que estás<br/>buscando es un look casual o de diva. ¡Aquí podrás encontrar prendas únicas que <br/> permiten crear los mejores outfits coreanos que recrean el glamour de tus estrellas!
          ¡Gracias<br/> por entrar a nuestra tienda virtual! Descubre aquí las alternativas que tenemos para ti.
        </h5>
      </div>
      <div className="colection-container">
        <img className="colection-image" src={collection} alt="Colección" />
      </div>
      <div className="footer-space"></div>
    </div>
  );
};


